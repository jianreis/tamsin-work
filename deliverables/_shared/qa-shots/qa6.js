const {chromium}=require('playwright');
const URL='file:///home/user/tamsin-work/deliverables/06-tobe-journey-animation.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function settle(p,max=8000){const t=Date.now();while(Date.now()-t<max){if(await p.$eval('#stage',s=>s.classList.contains('is-settled')))return true;await sleep(100);}return false;}
(async()=>{
  const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:1000}});
  p.on('pageerror',e=>console.log('PAGEERROR',e.message));
  await p.goto(URL,{waitUntil:'load'});await sleep(300);
  // m5 via rail click, full motion, wait to settle
  await p.evaluate(()=>document.querySelectorAll('#scene-rail button')[4].click());
  await settle(p);await sleep(200);
  const txt=await p.$eval('#phone-mount',e=>e.textContent);
  const steps=await p.$$eval('#phone-mount .rowa-step',e=>e.map(x=>x.textContent.trim()));
  const status=await p.$$eval('#phone-mount .rowa-status',e=>e.map(x=>x.textContent.trim()));
  console.log('m5 phone len='+txt.length);
  console.log('m5 rowa-steps:',JSON.stringify(steps));
  console.log('m5 rowa-status:',JSON.stringify(status));
  console.log('m5 has ROWA text:', /rowa/i.test(txt));
  await b.close();
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
