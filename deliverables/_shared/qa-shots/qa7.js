const {chromium}=require('playwright');
const URL='file:///home/user/tamsin-work/deliverables/06-tobe-journey-animation.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function settle(p,max=8000){const t=Date.now();while(Date.now()-t<max){if(await p.$eval('#stage',s=>s.classList.contains('is-settled')))return true;await sleep(100);}return false;}
(async()=>{
  const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:1000}});
  const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push('C:'+m.text());});
  await p.goto(URL,{waitUntil:'load'});await sleep(300);
  await p.evaluate(()=>document.querySelectorAll('#scene-rail button')[4].click());
  await settle(p);await sleep(200);
  const html=await p.$eval('#phone-mount',e=>e.innerHTML);
  console.log('=== m5 phone-mount innerHTML ===');
  console.log(html.slice(0,2500));
  console.log('\n=== beats in stage ===');
  const beatInfo=await p.$eval('#stage',s=>{
    const n=s.querySelectorAll('.mock [data-beat]');
    return Array.from(n).map(x=>({beat:x.getAttribute('data-beat'),cls:x.className,tag:x.tagName,txt:(x.textContent||'').trim().slice(0,40),inPhone:!!x.closest('#phone-mount')}));
  });
  beatInfo.forEach(b=>console.log(JSON.stringify(b)));
  console.log('errors:',JSON.stringify(errs));
  await b.close();
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
