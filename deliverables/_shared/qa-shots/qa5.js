const {chromium}=require('playwright');
const SHOTS='/home/user/tamsin-work/deliverables/_shared/qa-shots/';
const URL='file:///home/user/tamsin-work/deliverables/06-tobe-journey-animation.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const out=[];function log(...a){const s=a.join(' ');out.push(s);console.log(s);}
async function beats(p){return await p.$eval('#stage',s=>{const n=s.querySelectorAll('.mock [data-beat]');let r=0;n.forEach(x=>{if(x.classList.contains('reveal')||x.classList.contains('is-shown'))r++;});return{t:n.length,r};});}

(async()=>{
  const errors=[];
  const browser=await chromium.launch();

  // ===== CHECK 8: reduce-motion toggle =====
  log('=== CHECK 8a: reduce-motion toggle ===');
  let page=await browser.newPage({viewport:{width:1280,height:1000}});
  page.on('console',m=>{if(m.type()==='error')errors.push('CONSOLE:'+m.text());});
  page.on('pageerror',e=>errors.push('PAGEERROR:'+e.message));
  await page.goto(URL,{waitUntil:'load'});await sleep(300);
  // turn reduce-motion ON
  await page.click('#rm-toggle');
  const rmAria=await page.$eval('#rm-toggle',b=>b.getAttribute('aria-pressed'));
  log('rm-toggle aria-pressed='+rmAria);
  // navigate scenes; each should be instantly fully settled w/o wait
  let allInstant=true;
  for(let n=1;n<=9;n++){
    await page.evaluate(i=>document.querySelectorAll('#scene-rail button')[i].click(),n-1);
    await sleep(60); // minimal — should already be settled
    const st=await page.$eval('#stage',s=>s.classList.contains('is-settled'));
    const b=await beats(page);
    const ok=st && b.r===b.t && b.t>0;
    if(!ok)allInstant=false;
    log(`m${n}: settled=${st} beats=${b.r}/${b.t} instantOK=${ok}`);
  }
  log('reduce-motion all-instant='+allInstant+' errors='+errors.length);
  await page.evaluate(i=>document.querySelectorAll('#scene-rail button')[i].click(),1); // m2
  await sleep(100);
  await page.screenshot({path:SHOTS+'reduce-motion.png',fullPage:true});
  await page.close();

  // ===== CHECK 8b: prefers-reduced-motion emulation at context =====
  log('\n=== CHECK 8b: prefers-reduced-motion:reduce at load ===');
  errors.length=0;
  const ctx=await browser.newContext({viewport:{width:1280,height:1000},reducedMotion:'reduce'});
  let page2=await ctx.newPage();
  page2.on('console',m=>{if(m.type()==='error')errors.push('CONSOLE:'+m.text());});
  page2.on('pageerror',e=>errors.push('PAGEERROR:'+e.message));
  await page2.goto(URL,{waitUntil:'load'});
  await sleep(150); // should be settled instantly without waiting through beats
  const st0=await page2.$eval('#stage',s=>s.classList.contains('is-settled'));
  const b0=await beats(page2);
  const rmBtn=await page2.$eval('#rm-toggle',b=>b.getAttribute('aria-pressed'));
  log('on load w/ prefers-reduced-motion: settled='+st0+' beats='+b0.r+'/'+b0.t+' rm-toggle aria='+rmBtn+' errors='+errors.length);
  await ctx.close();

  // ===== CHECK 10: Responsive =====
  log('\n=== CHECK 10: Responsive ===');
  for(const vp of [{w:700,h:900},{w:375,h:800}]){
    errors.length=0;
    const c=await browser.newContext({viewport:{width:vp.w,height:vp.h}});
    const pg=await c.newPage();
    pg.on('console',m=>{if(m.type()==='error')errors.push('CONSOLE:'+m.text());});
    pg.on('pageerror',e=>errors.push('PAGEERROR:'+e.message));
    await pg.goto(URL,{waitUntil:'load'});await sleep(500);
    const dims=await pg.evaluate(()=>({sw:document.documentElement.scrollWidth, iw:window.innerWidth, cw:document.documentElement.clientWidth}));
    const overflow=dims.sw - dims.iw;
    const stageVisible=await pg.$eval('#stage',e=>e.getBoundingClientRect().width>0);
    const phoneVisible=await pg.$eval('#phone-mount',e=>e.children.length>0);
    await pg.click('#explore-toggle').catch(()=>{});await sleep(150);
    const exploreVisible=await pg.$eval('#explore-mount',m=>!m.hidden);
    log(`${vp.w}x${vp.h}: scrollW=${dims.sw} innerW=${dims.iw} overflow=${overflow}px (tol<=2) stage=${stageVisible} phone=${phoneVisible} explore=${exploreVisible} err=${errors.length}`);
    await pg.screenshot({path:SHOTS+`responsive-${vp.w}.png`,fullPage:false});
    await c.close();
  }

  await browser.close();
  require('fs').writeFileSync(SHOTS+'qa5-out.txt',out.join('\n'));
  console.log('DONE qa5');
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
