const {chromium}=require('playwright');
const URL='file:///home/user/tamsin-work/deliverables/06-tobe-journey-animation.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function settle(p,max=8000){const t=Date.now();while(Date.now()-t<max){if(await p.$eval('#stage',s=>s.classList.contains('is-settled')))return true;await sleep(100);}return false;}
(async()=>{
  const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:1000}});
  p.on('console',m=>console.log('['+m.type()+'] '+m.text()));
  p.on('pageerror',e=>console.log('PAGEERROR '+e.message));
  await p.goto(URL,{waitUntil:'load'});await sleep(300);
  // check each scene's phone for the fallback string
  console.log('=== fallback-string scan per scene (insured) ===');
  for(let n=1;n<=9;n++){
    await p.evaluate(i=>document.querySelectorAll('#scene-rail button')[i].click(),n-1);
    await settle(p);await sleep(120);
    const fallback=await p.$eval('#phone-mount',e=>e.textContent.includes('could not be rendered'));
    console.log('m'+n+' insured fallback='+fallback);
  }
  // cash economy scan
  await p.click('#econ-seg button[data-econ="cash"]');await sleep(200);
  console.log('=== cash economy scan ===');
  for(let n=1;n<=9;n++){
    await p.evaluate(i=>document.querySelectorAll('#scene-rail button')[i].click(),n-1);
    await settle(p);await sleep(120);
    const fallback=await p.$eval('#phone-mount',e=>e.textContent.includes('could not be rendered'));
    console.log('m'+n+' cash fallback='+fallback);
  }
  await b.close();
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
