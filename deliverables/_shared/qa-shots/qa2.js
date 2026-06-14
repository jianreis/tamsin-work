const {chromium}=require('playwright');
const SHOTS='/home/user/tamsin-work/deliverables/_shared/qa-shots/';
const URL='file:///home/user/tamsin-work/deliverables/06-tobe-journey-animation.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const out=[];function log(...a){const s=a.join(' ');out.push(s);console.log(s);}
async function settle(p,max=12000){const t=Date.now();while(Date.now()-t<max){if(await p.$eval('#stage',s=>s.classList.contains('is-settled')))return true;await sleep(120);}return false;}
async function rmOn(p){ // force reduce-motion via toggle for fast settle when navigating
  const pressed=await p.$eval('#rm-toggle',b=>b.getAttribute('aria-pressed')==='true');
  if(!pressed) await p.click('#rm-toggle');
}
async function goScene(p,n){await p.keyboard.press(String(n));await settle(p);await sleep(120);}

(async()=>{
  const errors=[];
  const browser=await chromium.launch();
  const page=await browser.newPage({viewport:{width:1280,height:1000}});
  page.on('console',m=>{if(m.type()==='error')errors.push('CONSOLE:'+m.text());});
  page.on('pageerror',e=>errors.push('PAGEERROR:'+e.message));
  await page.goto(URL,{waitUntil:'load'});await sleep(300);

  // ===== CHECK 3 detailed: mockup content per scene (use reduce-motion for speed) =====
  log('=== CHECK 3 detail: mockup content ===');
  await rmOn(page);
  const expects={
    1:['repeat','reply'], 2:['nomvula','funding'], 3:['r'/*cost figure*/],
    4:['pharmac'], 5:['rowa'], 6:['out for','track','arriv'], 7:['dose'], 8:[], 9:['renew']
  };
  for(let n=1;n<=9;n++){
    await goScene(page,n);
    const txt=(await page.$eval('#phone-mount',el=>el.textContent)).toLowerCase();
    const checks={
      1:{whatsapp:/repeat|refill|reply|quick/.test(txt), quickReplies:(await page.$$eval('#phone-mount .quick',e=>e.length))},
      2:{members:(await page.$$eval('#phone-mount .member',e=>e.length)), funding:/funding|covered|cash|chronic|pmb|adher/.test(txt), pills:(await page.$$eval('#phone-mount svg',e=>e.length))},
      3:{costFig:/r\s?\d|\d+\s?%|co-?pay|covered|cost/.test(txt)},
      4:{pharmName:/[a-z]{3,}/.test(txt)&&/pharmac|checked|valid|approv/.test(txt), steps:(await page.$$eval('#phone-mount .step, #phone-mount [class*=step]',e=>e.length))},
      5:{rowa:/rowa|pick|dispens|pack|check/.test(txt), steps:(await page.$$eval('#phone-mount .step, #phone-mount [class*=step]',e=>e.length))},
      6:{delivery:/out for|track|arriv|deliver|driver|collect|courier/.test(txt)},
      7:{dosepack:/dose|morning|noon|night|sachet|pack/.test(txt), grid:(await page.$$eval('#phone-mount svg',e=>e.length))},
      8:{curveball:/lost|stock|after.?hours|travel|emergenc|fallback|switch|alt/.test(txt) || txt.length>40},
      9:{renewal:/renew|expir|token|loop|repeat|tap/.test(txt)}
    };
    log(`m${n}:`, JSON.stringify(checks[n]), 'len='+txt.length);
  }

  // ===== CHECK 4: Explore panels =====
  log('\n=== CHECK 4: Explore ===');
  // turn reduce-motion off to be realistic? explore works regardless. Keep on for speed.
  for(const n of [1,2,5]){
    await goScene(page,n);
    await page.click('#explore-toggle');await sleep(200);
    const expanded=await page.$eval('#explore-toggle',b=>b.getAttribute('aria-expanded'));
    const mountVisible=await page.$eval('#explore-mount',m=>!m.hidden);
    const emTxt=await page.$eval('#explore-mount',m=>m.textContent);
    const hasCite=/src-[a-z0-9-]+/i.test(emTxt);
    const hasQuote=/[""].+[""]|"[^"]{8,}"/.test(emTxt);
    const panels=await page.$$eval('#explore-mount [aria-expanded], #explore-mount details, #explore-mount .exp-panel, #explore-mount button',e=>e.length);
    log(`m${n}: toggle aria-expanded=${expanded} mountVisible=${mountVisible} cite=${hasCite} quote=${hasQuote} subEls=${panels} len=${emTxt.length}`);
    if(n===5){
      await page.screenshot({path:SHOTS+'explore-open.png',fullPage:true});
    }
  }
  // Check tech chips / ROWA / reform marker anywhere across scenes' explore
  await goScene(page,5);
  await page.click('#explore-toggle');await sleep(150);
  // expand all sub-panels in explore-mount
  const subBtns=await page.$$('#explore-mount button[aria-expanded]');
  for(const b of subBtns){ await b.click().catch(()=>{}); }
  await sleep(200);
  const full=await page.$eval('#explore-mount',m=>m.textContent);
  log('m5 explore: ROWA present='+/rowa/i.test(full), 'reform-emoji(🔮)='+/🔮/.test(full));
  // scan all scenes for reform marker + rowa in capabilities
  let foundRowa=false, foundReform=false;
  for(let n=1;n<=9;n++){
    await goScene(page,n);
    await page.click('#explore-toggle').catch(()=>{});await sleep(80);
    const sb=await page.$$('#explore-mount button[aria-expanded]');
    for(const b of sb){await b.click().catch(()=>{});}
    await sleep(80);
    const t=await page.$eval('#explore-mount',m=>m.textContent);
    if(/rowa/i.test(t))foundRowa=true;
    if(/🔮/.test(t))foundReform=true;
  }
  log('Across all scenes: ROWA in explore='+foundRowa+' reform 🔮 marker='+foundReform);

  log('\nerrors so far:', errors.length, JSON.stringify(errors.slice(0,5)));
  await browser.close();
  require('fs').writeFileSync(SHOTS+'qa2-out.txt',out.join('\n'));
  console.log('DONE qa2');
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
