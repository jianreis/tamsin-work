const {chromium}=require('playwright');
const SHOTS='/home/user/tamsin-work/deliverables/_shared/qa-shots/';
const URL='file:///home/user/tamsin-work/deliverables/06-tobe-journey-animation.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const out=[];function log(...a){const s=a.join(' ');out.push(s);console.log(s);}
async function settle(p,max=12000){const t=Date.now();while(Date.now()-t<max){if(await p.$eval('#stage',s=>s.classList.contains('is-settled')))return true;await sleep(120);}return false;}
async function sceneCountTxt(p){return (await p.$eval('#scene-count',e=>e.textContent)).replace(/\s+/g,' ').trim();}
async function activeRail(p){return await p.$eval('#scene-rail [aria-current="true"]',e=>e.textContent).catch(()=>'none');}
async function beats(p){return await p.$eval('#stage',s=>{const n=s.querySelectorAll('.mock [data-beat]');let r=0;n.forEach(x=>{if(x.classList.contains('reveal')||x.classList.contains('is-shown'))r++;});return{t:n.length,r};});}

(async()=>{
  const errors=[];
  const browser=await chromium.launch();
  const page=await browser.newPage({viewport:{width:1280,height:1000}});
  page.on('console',m=>{if(m.type()==='error')errors.push('CONSOLE:'+m.text());});
  page.on('pageerror',e=>errors.push('PAGEERROR:'+e.message));
  await page.goto(URL,{waitUntil:'load'});await sleep(400);

  // ===== CHECK 5: Transport =====
  log('=== CHECK 5: Transport ===');
  await settle(page); // scene1 settles
  let sc=await sceneCountTxt(page); log('initial scene-count:', JSON.stringify(sc), 'rail:', await activeRail(page));
  // Next
  await page.click('#btn-next'); await sleep(200);
  log('after Next: scene-count='+JSON.stringify(await sceneCountTxt(page))+' rail='+await activeRail(page));
  // Prev
  await page.click('#btn-prev'); await sleep(200);
  log('after Prev: scene-count='+JSON.stringify(await sceneCountTxt(page))+' rail='+await activeRail(page));
  // rail click jump to scene 7 (index 6)
  await page.$$eval('#scene-rail button',(b)=>{b[6].click();}); await sleep(300);
  log('after rail click[7]: scene-count='+JSON.stringify(await sceneCountTxt(page))+' rail='+await activeRail(page));
  // Play/Pause: jump to scene1 fresh, replay then pause mid-build
  await page.$$eval('#scene-rail button',(b)=>{b[0].click();}); await sleep(150);
  // it's building now; capture revealed count, pause, ensure frozen
  await sleep(300);
  const b1=await beats(page);
  await page.click('#btn-play'); // should pause (playing)
  await sleep(700);
  const b2=await beats(page);
  const playBtnTxt=await page.$eval('#btn-play',e=>e.textContent);
  log('Pause test: beats at pause='+b1.r+'/'+b1.t+' after 700ms still='+b2.r+'/'+b2.t+' frozen='+(b1.r===b2.r)+' playBtn='+JSON.stringify(playBtnTxt));
  // resume
  await page.click('#btn-play'); await settle(page);
  const b3=await beats(page); log('after resume settle: '+b3.r+'/'+b3.t);
  // Replay clears reveals then rebuilds
  await page.click('#btn-replay'); await sleep(150);
  const b4=await beats(page); log('right after Replay click: '+b4.r+'/'+b4.t+' (expect low/0)');
  await settle(page); const b5=await beats(page); log('after replay settle: '+b5.r+'/'+b5.t);

  // Autoplay auto-advance
  log('\n--- Autoplay ---');
  await page.$$eval('#scene-rail button',(b)=>{b[0].click();}); await settle(page);
  const idxBefore=await sceneCountTxt(page);
  await page.click('#autoplay-toggle');
  const apTxt=await page.$eval('#autoplay-toggle',e=>e.textContent);
  const apAria=await page.$eval('#autoplay-toggle',e=>e.getAttribute('aria-pressed'));
  log('autoplay btn='+JSON.stringify(apTxt)+' aria='+apAria);
  // wait for auto-advance (AUTO_WAIT). poll scene-count change up to 8s
  let advanced=false;const t0=Date.now();
  while(Date.now()-t0<9000){const c=await sceneCountTxt(page);if(c!==idxBefore){advanced=true;break;}await sleep(200);}
  log('autoplay advanced from '+JSON.stringify(idxBefore)+' -> '+JSON.stringify(await sceneCountTxt(page))+' advanced='+advanced);
  await page.click('#autoplay-toggle'); // off

  // ===== CHECK 6: Keyboard =====
  log('\n=== CHECK 6: Keyboard ===');
  await page.click('body');
  await page.keyboard.press('5'); await settle(page);
  log('press 5: scene-count='+JSON.stringify(await sceneCountTxt(page)));
  await page.keyboard.press('ArrowRight'); await sleep(200);
  log('ArrowRight: '+JSON.stringify(await sceneCountTxt(page)));
  await page.keyboard.press('ArrowLeft'); await sleep(200);
  log('ArrowLeft: '+JSON.stringify(await sceneCountTxt(page)));
  await page.keyboard.press('9'); await settle(page);
  log('press 9: '+JSON.stringify(await sceneCountTxt(page)));
  await page.keyboard.press('1'); await sleep(200);
  log('press 1: '+JSON.stringify(await sceneCountTxt(page)));
  // Space pause: it's building scene1
  await sleep(300);const sb1=await beats(page);
  await page.keyboard.press(' ');await sleep(600);const sb2=await beats(page);
  log('Space pause: '+sb1.r+' -> '+sb2.r+' frozen='+(sb1.r===sb2.r));
  await page.keyboard.press(' ');await settle(page); // resume
  // R replay
  await page.keyboard.press('r');await sleep(150);const rb=await beats(page);
  log('R replay: right after='+rb.r+'/'+rb.t+' (expect low)');
  await settle(page);

  log('\nCHECK 5/6 errors:', errors.length, JSON.stringify(errors.slice(0,5)));
  await browser.close();
  require('fs').writeFileSync(SHOTS+'qa3-out.txt',out.join('\n'));
  console.log('DONE qa3');
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
