const {chromium}=require('playwright');
const SHOTS='/home/user/tamsin-work/deliverables/_shared/qa-shots/';
const URL='file:///home/user/tamsin-work/deliverables/06-tobe-journey-animation.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const out=[];
function log(...a){const s=a.join(' ');out.push(s);console.log(s);}

async function settleWait(p, maxMs=12000){
  const start=Date.now();
  while(Date.now()-start<maxMs){
    const done=await p.$eval('#stage', s=>s.classList.contains('is-settled'));
    if(done) return true;
    await sleep(150);
  }
  return false;
}
async function beatStats(p){
  return await p.$eval('#stage', s=>{
    const nodes=s.querySelectorAll('.mock [data-beat]');
    let revealed=0;
    nodes.forEach(n=>{ if(n.classList.contains('reveal')||n.classList.contains('is-shown')) revealed++; });
    return {total:nodes.length, revealed};
  });
}

(async()=>{
  const errors=[];
  const browser=await chromium.launch();
  const page=await browser.newPage({viewport:{width:1280,height:1000}});
  page.on('console',m=>{ if(m.type()==='error') errors.push('CONSOLE:'+m.text()); });
  page.on('pageerror',e=>errors.push('PAGEERROR:'+e.message));

  // ===== CHECK 1: Load =====
  await page.goto(URL,{waitUntil:'load'});
  await sleep(400);
  const title=await page.title();
  const hasStage=await page.$('#stage')!==null;
  const railCount=await page.$$eval('#scene-rail button', b=>b.length);
  log('=== CHECK 1: LOAD ===');
  log('title:', JSON.stringify(title));
  log('#stage exists:', hasStage);
  log('rail button count:', railCount, '(expect 9)');
  log('load-phase errors:', errors.length, JSON.stringify(errors));

  // ===== CHECK 2 & 3: per-scene build->settle + mockup =====
  log('\n=== CHECK 2+3: per-scene settle/beats/mockup ===');
  const mockupExpect={
    1:['Quick replies','quick'], 2:['member','Funding'], 3:['cost'],
    4:['pharmacist'], 5:['dispense'], 6:['delivery'],
    7:['dose'], 8:['curveball'], 9:['renew']
  };
  const sceneResults=[];
  for(let n=1;n<=9;n++){
    errors.length=0; // reset to attribute per-scene
    // navigate via keyboard digit to force fresh build
    await page.keyboard.press(String(n));
    await sleep(300);
    // capture a mid-build frame for scene 3 only
    const beforeSettle=await beatStats(page);
    const midProgressing = beforeSettle.revealed < beforeSettle.total; // typically still building
    if(n===3){ await page.screenshot({path:SHOTS+'midbuild.png',fullPage:true}); }
    const settled=await settleWait(page);
    const stats=await beatStats(page);
    const exploreAff=await page.$eval('#explore-toggle', el=>!!el && getComputedStyle(el).display!=='none');
    const phoneNonEmpty=await page.$eval('#phone-mount', el=>el.children.length>0 && el.textContent.trim().length>0);
    const phoneText=await page.$eval('#phone-mount', el=>el.textContent.toLowerCase());
    const frontTxt=await page.$eval('#frontstage-lane', el=>el.textContent.toLowerCase());
    const sceneId=await page.$eval('#scene-rail [aria-current="true"]', el=>el.getAttribute('data-scene')||el.textContent).catch(()=>'?');
    const phoneSvgs=await page.$$eval('#phone-mount svg', s=>s.length);
    const res={n, settled, total:stats.total, revealed:stats.revealed, fullyRevealed:stats.revealed===stats.total&&stats.total>0,
      exploreAff, phoneNonEmpty, midProgressing, phoneSvgs, frontHasFrontstage:frontTxt.includes('frontstage'), frontHasBackstage:frontTxt.includes('backstage'),
      errs:errors.slice()};
    sceneResults.push(res);
    log(`m${n}: settled=${settled} beats=${stats.revealed}/${stats.total} explore=${exploreAff} phone=${phoneNonEmpty} svgs=${phoneSvgs} front(fs=${res.frontHasFrontstage},bs=${res.frontHasBackstage}) midBuild=${midProgressing} err=${errors.length}`);
    // screenshot settled
    await page.screenshot({path:SHOTS+`scene-m${n}-settled.png`,fullPage:true});
  }

  await browser.close();
  require('fs').writeFileSync(SHOTS+'qa1-out.txt', out.join('\n'));
  console.log('\nDONE qa1');
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
