const {chromium}=require('playwright');
const SHOTS='/home/user/tamsin-work/deliverables/_shared/qa-shots/';
const URL='file:///home/user/tamsin-work/deliverables/06-tobe-journey-animation.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const out=[];function log(...a){const s=a.join(' ');out.push(s);console.log(s);}
async function settle(p,max=8000){const t=Date.now();while(Date.now()-t<max){if(await p.$eval('#stage',s=>s.classList.contains('is-settled')))return true;await sleep(100);}return false;}
async function rmOn(p){const pr=await p.$eval('#rm-toggle',b=>b.getAttribute('aria-pressed')==='true');if(!pr)await p.click('#rm-toggle');}
async function goScene(p,n){await p.evaluate(i=>document.querySelectorAll('#scene-rail button')[i].click(),n-1);await settle(p);await sleep(80);}
async function openExplore(p){const ex=await p.$eval('#explore-toggle',b=>b.getAttribute('aria-expanded')==='true');if(!ex)await p.click('#explore-toggle');await sleep(120);}
async function expandAll(p){const bs=await p.$$('#explore-mount .exp-head[aria-expanded="false"]');for(const b of bs){await b.click().catch(()=>{});}await sleep(120);}

(async()=>{
  const errors=[];
  const browser=await chromium.launch();
  const page=await browser.newPage({viewport:{width:1280,height:1000}});
  page.on('console',m=>{if(m.type()==='error')errors.push('CONSOLE:'+m.text());});
  page.on('pageerror',e=>errors.push('PAGEERROR:'+e.message));
  await page.goto(URL,{waitUntil:'load'});await sleep(300);
  await rmOn(page);

  // ===== CHECK 4: Explore (corrected) =====
  log('=== CHECK 4: Explore ===');
  for(const n of [1,2,5]){
    errors.length=0;
    await goScene(page,n);
    await openExplore(page);
    const expanded=await page.$eval('#explore-toggle',b=>b.getAttribute('aria-expanded'));
    const visible=await page.$eval('#explore-mount',m=>!m.hidden);
    // Today panel open by default -> quote + cite visible
    const quoteCount=await page.$$eval('#explore-mount .pain-card blockquote',e=>e.length);
    const citeCount=await page.$$eval('#explore-mount .cite',e=>e.length);
    const panelCount=await page.$$eval('#explore-mount .exp-panel',e=>e.length);
    await expandAll(page);
    const techChips=await page.$$eval('#explore-mount .techchip',e=>e.length);
    const reformChips=await page.$$eval('#explore-mount .techchip.reform',e=>e.length);
    const t=await page.$eval('#explore-mount',m=>m.textContent);
    log(`m${n}: expanded=${expanded} visible=${visible} panels=${panelCount} blockquotes=${quoteCount} cites=${citeCount} techchips=${techChips} reformChips=${reformChips} hasWikiCite=${/wiki\//.test(t)} err=${errors.length} ${errors.slice(0,2).join('|')}`);
  }
  // ROWA + reform across all scenes (insured)
  let rowa=false,reform=false;
  for(let n=1;n<=9;n++){
    await goScene(page,n);await openExplore(page);await expandAll(page);
    const t=await page.$eval('#explore-mount',m=>m.textContent);
    if(/rowa/i.test(t))rowa=true;
    if(/🔮/.test(t))reform=true;
  }
  log('Across scenes(insured): ROWA in explore='+rowa+' reform 🔮='+reform);

  // ===== CHECK 7: Dual economy =====
  log('\n=== CHECK 7: Dual economy ===');
  await goScene(page,2);
  const personaIns=await page.$eval('#persona-chip',e=>e.textContent.trim());
  const memIns=await page.$$eval('#phone-mount .member .mem-name',e=>e.map(x=>x.textContent.trim()));
  await page.screenshot({path:SHOTS+'m2-cabinet-insured.png',fullPage:true});
  // toggle to cash
  errors.length=0;
  await page.click('#econ-seg button[data-econ="cash"]');await sleep(300);await settle(page);
  const personaCash=await page.$eval('#persona-chip',e=>e.textContent.trim());
  const memCash=await page.$$eval('#phone-mount .member .mem-name',e=>e.map(x=>x.textContent.trim()));
  await page.screenshot({path:SHOTS+'m2-cabinet-cash.png',fullPage:true});
  log('persona insured='+JSON.stringify(personaIns)+' cash='+JSON.stringify(personaCash));
  log('members insured='+JSON.stringify(memIns));
  log('members cash='+JSON.stringify(memCash));
  log('econ toggle errors='+errors.length+' '+errors.slice(0,3).join('|'));
  // toggle back
  await page.click('#econ-seg button[data-econ="insured"]');await sleep(200);await settle(page);
  const memBack=await page.$$eval('#phone-mount .member .mem-name',e=>e.map(x=>x.textContent.trim()));
  log('members back-to-insured='+JSON.stringify(memBack)+' restored='+(JSON.stringify(memBack)===JSON.stringify(memIns)));

  // ===== CHECK 9: m9 loop =====
  log('\n=== CHECK 9: m9 loop ===');
  await goScene(page,9);
  const m9txt=(await page.$eval('#phone-mount',e=>e.textContent)).toLowerCase();
  const stageTxt=(await page.$eval('#stage',e=>e.textContent)).toLowerCase();
  // look for a loop-back affordance: button/link referencing start/m1/loop
  const loopBtns=await page.$$eval('#stage button, #stage [role="button"], #stage a',els=>els.map(e=>({t:e.textContent.trim().toLowerCase(),id:e.id})).filter(o=>/loop|start|begin|m1|again|back to|moment 1|scene 1/.test(o.t)));
  log('m9 phone mentions loop/renew/token='+/loop|renew|token/.test(m9txt)+' loopAffordances='+JSON.stringify(loopBtns));
  // press 1 to return to m1
  await page.click('body');await page.keyboard.press('1');await settle(page);
  log('after key 1 from m9: scene-count='+JSON.stringify((await page.$eval('#scene-count',e=>e.textContent)).replace(/\s+/g,' ').trim()));

  // ===== CHECK 8: m8 curveball scenarios =====
  log('\n=== CHECK 8: m8 curveball ===');
  await goScene(page,8);
  const m8txt=(await page.$eval('#phone-mount',e=>e.textContent));
  log('m8 phone text snippet: '+JSON.stringify(m8txt.slice(0,200)));

  log('\nTotal residual errors this run (last scene):'+errors.length);
  await browser.close();
  require('fs').writeFileSync(SHOTS+'qa4-out.txt',out.join('\n'));
  console.log('DONE qa4');
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
