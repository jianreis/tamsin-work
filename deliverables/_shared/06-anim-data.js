/* =============================================================================
   DELIVERABLE #06 — DATA MODEL for the interactive click-through journey ANIMATION
   ----------------------------------------------------------------------------
   Single top-level statement: `const ANIM = { ... };`
   Owned by the DATA/CONTENT agent. No rendering, no DOM, no CSS here.
   Conforms to 06-animation-BRIEF.md §4 (DATA schema) and §3 (MOCKUP PAYLOAD
   CONTRACT). Substance lifted faithfully (condensed for motion) from
   deliverables/05-tobe-future-state-journey.html's DATA + household.

   meta/pillars/economies/household are reused from #05. `household` is copied
   VERBATIM (it powers the cabinet hero — do not alter members/medicines).
   Every cite / personaRef is an EXACT slug already used in #05 and resolves to
   a real vault .md file. No invented slugs.
   ============================================================================= */

const ANIM = {

  meta:{
    title:"Script Re-imagined — the journey, in motion",
    subtitle:"The same future-state household repeat as #05, re-expressed as a cinematic, interactive click-through animation: watch each of nine moments build, then pause to explore the story, today's quoted pain, and the capabilities behind the line. Toggle the economy to see the same journey for an insured (Nomvula) and a cash/uninsured (Sipho) household.",
    state:"to-be",
    variant:"aspirational",
    updated:"2026-06-14",
    useCase:"The household medicine manager — the self-running repeat (a patient who is also a caregiver: own chronic meds + an elderly parent's chronic meds + a child's acute curveball, across one account)."
  },

  philosophy:{ pyramid:["Trust","Convenience","Speed"], line:"Predictability beats speed — confidence comes from clarity and fallback, not from automation alone." },

  // Canonical pillars — verbatim ids/names/oneLiners from #05 / deliverables/_shared/pillars.md.
  pillars:[
    {id:"S1", type:"strategic", name:"Serve both economies on one spine", oneLiner:"Insured (~16%) and cash (~84%) are different journeys sharing one spine; the cash majority is never a degraded afterthought."},
    {id:"S2", type:"strategic", name:"Pharmacy as the health front door", oneLiner:"Scripting is the entry to an ongoing care relationship, not a one-off transaction; the store+clinic estate is a strategic asset."},
    {id:"S3", type:"strategic", name:"Compete on service, not price", oneLiner:"SEP + capped dispensing fee fix the price; the durable differentiator is the experience around the drug."},
    {id:"S4", type:"strategic", name:"Chronic-medicine flywheel = retention engine", oneLiner:"Proactive managed chronic repeats are the recurring relationship that compounds loyalty and adherence."},
    {id:"S5", type:"strategic", name:"Pharmacist at top-of-licence; automate the toil", oneLiner:"Automation/central-fill/telepharmacy absorb mechanics so pharmacists do the clinical, trust-building work."},
    {id:"U1", type:"ux", name:"Channel ladder: WhatsApp-first & data-frugal", oneLiner:"WhatsApp/USSD/SMS first, app as enhancement; low-data, async, resumable, idempotent by default."},
    {id:"U2", type:"ux", name:"Never leave them guessing", oneLiner:"Honest real-time status at every step; the silent wait and unexplained rejection are the primary pains."},
    {id:"U3", type:"ux", name:"Make money legible, early, always", oneLiner:"Price + cover + co-pay shown before the till; cash/EFT/wallet supported; never a cost shock."},
    {id:"U4", type:"ux", name:"Design for graceful failure", oneLiner:"Plain-language recovery, never a dead end, always a route to a pharmacist."},
    {id:"U5", type:"ux", name:"Dignity, privacy & language by default", oneLiner:"Stigma-aware, discreet, multilingual, POPIA-grade consent; caregivers/proxies are first-class users."},
    {id:"U6", type:"ux", name:"Reduce the journey, don't just digitise it", oneLiner:"Eliminate steps and re-keying; one profile across channels; measure friction removed, not features shipped."},
    {id:"U7", type:"ux", name:"Adherence-as-design", oneLiner:"Effectiveness is lost after dispensing; design the schedule/label and refill loop as a behaviour-change surface."}
  ],

  economies:[
    {
      id:"insured", label:"Insured — Nomvula", personaRef:"design-kit/personas/insured-chronic-multimorbid",
      persona:{
        name:"Nomvula",
        eyebrow:"Patient · household manager",
        bio:"54 · Midrand · HR manager · Discovery member, HTN + type-2 diabetes on the CDL · app-capable, time-pressured · also manages her mother Gogo's chronic meds and her 7-year-old's acute needs from one account."
      }
    },
    {
      id:"cash", label:"Cash / uninsured — Sipho", personaRef:"design-kit/personas/low-data-whatsapp-first-peri-urban",
      persona:{
        name:"Sipho",
        eyebrow:"Patient · household manager",
        bio:"45 · peri-urban Durban · informal income · hypertensive on a cheap Android, intermittent signal, no street address · also collects for his elderly mother (chronic, CCMDD) and a young child's acute needs — cash, at the margin, near home."
      }
    }
  ],

  /* ---------------------------------------------------------------------------
     HOUSEHOLD — copied VERBATIM from #05. Powers the cabinet hero (m2). Keyed by
     economy → members[] → medicines[]. ILLUSTRATIVE data, consistent with the
     personas (no citations: example regimens, not sourced facts). "shape" drives
     the inline-SVG pill icon (tablet|caplet|capsule|bottle); tone/tone2 colours.
  --------------------------------------------------------------------------- */
  household:{
    insured:{
      frame:"Three people, one account. Nomvula's chronic meds, Gogo's chronic repeat and Lethabo's short acute course — every dose, every status and every rand of cover, in one calm place. Discovery is applied automatically; any co-pay is shown here, never at the till.",
      asOf:"Cycle ready · next collection in 4 days",
      members:[
        {
          role:"Me", name:"Nomvula", you:true,
          sub:"54 · HR manager · HTN + type-2 diabetes on the CDL",
          avatar:"adult-f",
          medicines:[
            {name:"Amlodipine", strength:"5 mg", shape:"tablet", tone:"#f0a23b", tone2:"#d9821b",
             forText:"Lowers blood pressure (calcium-channel blocker)",
             dose:"1 in the morning", supply:"30 days left", status:"ok",
             fund:{kind:"covered", text:"Covered · R0", sub:"Discovery · CDL"}},
            {name:"Hydrochlorothiazide", strength:"12.5 mg", shape:"tablet", tone:"#e9e2d2", tone2:"#c9bfa6",
             forText:"Water tablet — helps control blood pressure",
             dose:"1 in the morning", supply:"30 days left", status:"ok",
             fund:{kind:"covered", text:"Covered · R0", sub:"Discovery · CDL"}},
            {name:"Metformin", strength:"850 mg", shape:"caplet", tone:"#ffffff", tone2:"#d4dbd6",
             forText:"Controls blood sugar in type-2 diabetes",
             dose:"1 morning · 1 night", supply:"6 days left", status:"due",
             fund:{kind:"covered", text:"Covered · R0", sub:"Discovery · CDL"}},
            {name:"Atorvastatin", strength:"20 mg", shape:"tablet", tone:"#d96b8a", tone2:"#b84a6b",
             forText:"Lowers cholesterol to protect heart & vessels",
             dose:"1 at night", supply:"12 days left", status:"way",
             fund:{kind:"copay", text:"Co-pay R42", sub:"non-formulary brand"},
             note:"A fully-funded generic is one tap away — switch to pay R0."}
          ]
        },
        {
          role:"Gogo (mother)", name:"Gogo", proxy:true,
          sub:"79 · lives with the family · elderly chronic regimen",
          avatar:"elder-f",
          medicines:[
            {name:"Enalapril", strength:"10 mg", shape:"tablet", tone:"#7fb3e0", tone2:"#4f8fc4",
             forText:"Blood-pressure tablet (ACE inhibitor)",
             dose:"1 in the morning", supply:"18 days left", status:"ok",
             fund:{kind:"covered", text:"Covered · R0", sub:"Discovery · CDL"}},
            {name:"Warfarin", strength:"5 mg", shape:"tablet", tone:"#8e6fc4", tone2:"#6c4aa0",
             forText:"Thins the blood to prevent clots",
             dose:"1 at night · INR-monitored", supply:"On the way", status:"way",
             fund:{kind:"covered", text:"Covered · R0", sub:"Discovery · CDL"},
             note:"High-alert: dose set by the latest INR; pharmacist reviews each repeat."}
          ]
        },
        {
          role:"Child", name:"Lethabo", proxy:true,
          sub:"7 · short acute course (chest infection)",
          avatar:"child",
          medicines:[
            {name:"Amoxicillin suspension", strength:"250 mg/5 mL", shape:"bottle", tone:"#f2c84b", tone2:"#e0a91f",
             forText:"Antibiotic for a chest infection — finish the full course",
             dose:"5 mL three times a day · 7 days", supply:"Acute · 7-day course", status:"ok",
             fund:{kind:"copay", text:"Co-pay R28", sub:"acute · paid from savings"},
             note:"Checked against Gogo's & Nomvula's meds in the house — safe to use."}
          ]
        }
      ]
    },
    cash:{
      frame:"One WhatsApp number, the whole family. Sipho's BP tablets, his mother's free public repeat and his child's acute antibiotic — each with a clear Rand price up front, collected near home. The cash price is shown before he travels; nothing is a black box at the till.",
      asOf:"Ready for collection near home · PIN sent by SMS",
      members:[
        {
          role:"Me", name:"Sipho", you:true,
          sub:"45 · peri-urban Durban · hypertensive · pays cash",
          avatar:"adult-m",
          medicines:[
            {name:"Amlodipine", strength:"5 mg", shape:"tablet", tone:"#f0a23b", tone2:"#d9821b",
             forText:"Lowers blood pressure (calcium-channel blocker)",
             dose:"1 in the morning", supply:"28 days left", status:"ok",
             fund:{kind:"cash", text:"R91", sub:"tablets R57 + fee R34"},
             note:"Generic option shown up front: R61 instead of R91."},
            {name:"Hydrochlorothiazide", strength:"12.5 mg", shape:"tablet", tone:"#e9e2d2", tone2:"#c9bfa6",
             forText:"Water tablet — helps control blood pressure",
             dose:"1 in the morning", supply:"9 days left", status:"due",
             fund:{kind:"cash", text:"R74", sub:"tablets R40 + fee R34"}}
          ]
        },
        {
          role:"Gogo (mother)", name:"Mama", proxy:true,
          sub:"71 · public-sector chronic · CCMDD",
          avatar:"elder-f",
          medicines:[
            {name:"Enalapril", strength:"10 mg", shape:"tablet", tone:"#7fb3e0", tone2:"#4f8fc4",
             forText:"Blood-pressure tablet (ACE inhibitor)",
             dose:"1 in the morning", supply:"On the way", status:"way",
             fund:{kind:"free", text:"CCMDD · R0", sub:"free public supply"},
             note:"Free public repeat, bridged onto the same near-home locker rail."},
            {name:"Hydrochlorothiazide", strength:"12.5 mg", shape:"tablet", tone:"#e9e2d2", tone2:"#c9bfa6",
             forText:"Water tablet for blood pressure",
             dose:"1 in the morning", supply:"On the way", status:"way",
             fund:{kind:"free", text:"CCMDD · R0", sub:"free public supply"}}
          ]
        },
        {
          role:"Child", name:"Little one", proxy:true,
          sub:"6 · short acute course (chest infection)",
          avatar:"child",
          medicines:[
            {name:"Amoxicillin suspension", strength:"250 mg/5 mL", shape:"bottle", tone:"#f2c84b", tone2:"#e0a91f",
             forText:"Antibiotic for a chest infection — finish the full course",
             dose:"5 mL three times a day · 7 days", supply:"Acute · 7-day course", status:"ok",
             fund:{kind:"cash", text:"R64", sub:"medicine R30 + fee R34"},
             note:"Priced & checked by a pharmacist before he travels."}
          ]
        }
      ]
    }
  },

  /* ---------------------------------------------------------------------------
     SCENES — one per moment m1–m9, in order. Each carries a mockup type (brief
     §2), pillars, flags, and byEconomy.insured + byEconomy.cash. Each economy
     fills narration, story, emotion, trustStage, frontstage/backstage/support/
     partners/regulatory/tech, pains, opportunities, metrics, asIsBaseline, and a
     `mock` payload to the EXACT shape in brief §3 for that mockup type.
     Trust arc: calm | trigger | acceleration | agitation | defection→loyalty.
  --------------------------------------------------------------------------- */
  scenes:[

    /* 1 — predict & one-tap refill — whatsappNudge ------------------------- */
    {
      id:"m1", n:1, title:"My repeat is due — and I barely have to think about it",
      spineStage:"REFILL/RENEW → SUBMIT", mockup:"whatsappNudge",
      pillars:["S4","U6","U7","U2"], flags:["momentOfTruth"],
      byEconomy:{
        insured:{
          narration:"A week before run-out, a single tap keeps the whole household supplied.",
          story:"A WhatsApp message lands a week before run-out: “Hi Nomvula — your BP & diabetes meds and Gogo's repeat are due. Same as last month?” One tap and it's handled. She didn't have to remember — the system did, for the whole household.",
          emotion:5, trustStage:"calm",
          mock:{ contact:"Dis-Chem Pharmacy", verified:true,
            messages:[
              {from:"them", text:"Hi Nomvula \u{1F44B} Your BP & diabetes meds and Gogo's repeat are due in 7 days.", time:"08:12"},
              {from:"them", text:"Same as last month? ✅ Yes  ✏️ Change  ⏰ Snooze", time:"08:12", quick:["✅ Yes","✏️ Change","⏰ Snooze"]},
              {from:"me", text:"✅ Yes", time:"08:13"},
              {from:"them", text:"Done — preparing the household repeat. We'll show cover & cost next.", time:"08:13"}
            ],
            typingBeforeIndex:3,
            footnote:"Falls back to USSD on zero data" },
          frontstage:["WhatsApp thread (channel-agnostic base, app for power features)","'Ready to send the same as last month?' confirm card"],
          backstage:["Refill-prediction from dispensing history + days-supply pre-assembles each member's cycle","BRIX auto-dispense creates the eligible repeats without human keying","Workflow manager prioritises the order into the virtual queue"],
          support:["Adherence / refill-prediction engine","Dispensary record (one household profile)","WhatsApp Business channel"],
          partners:["Medical scheme (chronic benefit)"],
          regulatory:["Proactive-contact + consented nudges are POPIA-governed; opt-out respected — wiki/sa-regulatory/e-prescription-telehealth-popia"],
          tech:[
            {name:"BRIX auto-dispense", what:"eligible repeats auto-created & dispensed without manual keying", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"Refill prediction", what:"predicts run-out from days-supply and pre-assembles the cycle", cite:"wiki/digital-transformation/adherence-tech-and-digital-therapeutics", reform:false},
            {name:"Workflow manager", what:"single virtual queue prioritises & routes the order", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false}
          ],
          pains:[{text:"Chronic re-order through the app/WhatsApp loops or dead-ends — the dominant complaint cluster", quote:"I have been pulling at my hair trying to order my medication via the App or even using the WhatsApp service.", cite:"wiki/dischem/pharmacy-complaints-pain-points"}],
          opportunities:[
            {text:"Make the repeat truly managed, not opt-in — proactive nudge + one-tap confirm replaces the cold re-order", pillars:["S4","U6"], cite:"wiki/concepts/chronic-medicine-flywheel"},
            {text:"Consolidate every household member's due meds into one confirmable order", pillars:["S4","U7"], cite:"design-kit/personas/caregiver-proxy-collector"}
          ],
          metrics:["% cycles auto-initiated","Time-to-confirm","Opt-out rate (kept low & honoured)"],
          asIsBaseline:"Today the repeat is opt-in: she must remember, re-open a flow that loops back to the previous menu, and re-confirm each member separately — and it breaks hard at the ~6-month script expiry."
        },
        cash:{
          narration:"No app, no data — one reply keeps the family's chronic supply ahead of run-out.",
          story:"An SMS / WhatsApp line he can read on any phone: “Sawubona Sipho — your BP tablets and your mother's repeat are due. Reply 1 to prepare for collection near home.” No app, no data-heavy download — just a reply.",
          emotion:4, trustStage:"calm",
          mock:{ contact:"Dis-Chem · SMS/WhatsApp", verified:true,
            messages:[
              {from:"them", text:"Sawubona Sipho. Amaphilisi akho e-BP nawakamama wakho asele azosphela.", time:"07:40"},
              {from:"them", text:"Phendula u-1 ukulungiselela ukulanda eduze kwakho. (Reply 1 to prepare for collection near home)", time:"07:40", quick:["1 — Yebo","2 — Shintsha","3 — Emva kwesikhathi"]},
              {from:"me", text:"1", time:"07:41"},
              {from:"them", text:"Kulungile. Silungiselela ukulanda eduze. Intengo izoboniswa ngaphambi kokuba uhambe.", time:"07:41"}
            ],
            typingBeforeIndex:3,
            footnote:"Falls back to USSD on zero data — resumable if signal drops" },
          frontstage:["WhatsApp / SMS / USSD prompt (data-frugal, resumable)","Plain-language, in-language confirm"],
          backstage:["Refill prediction + BRIX auto-dispense for eligible cash repeats","His mother's CCMDD chronic line bridged onto the same near-home rail (\u{1F52E})","Idempotent, resume-after-reconnect so a dropped signal loses nothing"],
          support:["SMS / USSD gateway","Refill-prediction engine","Offline-tolerant queue"],
          partners:["Public clinic / CCMDD network","Pelebox / locker network"],
          regulatory:["Consented, opt-out-able nudges; POPIA consent in-language — wiki/sa-regulatory/e-prescription-telehealth-popia"],
          tech:[
            {name:"BRIX auto-dispense", what:"prepares eligible cash repeats ahead of run-out", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"CCMDD→retail bridge", what:"a stable public-sector chronic repeat served on near-home retail rails", cite:"wiki/medical-schemes/courier-chronic-pharmacy-models", reform:true}
          ],
          pains:[{text:"App / WhatsApp re-order is unusable on low data and dead-ends with no human path", quote:"Dis-Chem App is dysfunctional.", cite:"wiki/dischem/pharmacy-complaints-pain-points"}],
          opportunities:[
            {text:"Data-frugal, resumable, no-app refill as the default — the cash majority's repeat just works", pillars:["U1","S1"], cite:"wiki/consumer-context/digital-access-and-whatsapp"},
            {text:"Bridge the family's free CCMDD chronic supply onto the same near-home collection rail", pillars:["S1","S4"], cite:"design-kit/personas/public-sector-bridging-to-retail"}
          ],
          metrics:["Low-data prompt completion","Silent-lapse (missed collection) rate","Reach into the uninsured majority"],
          asIsBaseline:"Today there is no proactive prompt he can use; the app is data-heavy and dead-ends, so he reverts to a half-day clinic queue and his mother's supply depends on remembering."
        }
      }
    },

    /* 2 — household / multi-member + proxy — cabinet (HERO) ---------------- */
    {
      id:"m2", n:2, title:"I handle Mum's and my little one's meds in the same place",
      spineStage:"SUBMIT (multi-member / proxy)", mockup:"cabinet",
      pillars:["S4","U5","U6","U1"], flags:[],
      byEconomy:{
        insured:{
          narration:"One household view: three people, every dose and every rand of cover, in one calm place.",
          story:"Nomvula opens one household view: herself, Gogo (her mother) and Lethabo (her son), each with their own meds, cycles and cover — but one place to act. She added Gogo's medication to her repeat order once; she never has to re-prove she's allowed to manage it.",
          emotion:5, trustStage:"calm",
          mock:{ useHousehold:true },
          frontstage:["Household switcher (one account, linked members)","'Add a dependent' with consent capture"],
          backstage:["AI captures, standardises & routes any new script into a dispensing-ready format (no re-key)","One household profile carries members, consents and cycles across channels","Proxy authority recorded once with a POPIA-grade audit trail"],
          support:["AI capture/route service","Unified household profile (EMPI)","Consent & audit store"],
          partners:["Prescriber (for new scripts)","Medical scheme"],
          regulatory:["POPIA-compliant proxy/caregiver consent; pharmacist still validates each member's script — wiki/sa-regulatory/prescription-requirements-repeats"],
          tech:[
            {name:"AI capture / standardise / route", what:"reads an unstructured script, extracts & standardises it, routes for human handling only when needed", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"One household profile", what:"linked dependents, consents and cycles across WhatsApp / app / counter", cite:"wiki/concepts/identity-and-consent", reform:false},
            {name:"POPIA proxy consent", what:"recorded delegated authority so a caregiver acts without re-proving each time", cite:"wiki/concepts/identity-and-consent", reform:false}
          ],
          pains:[{text:"Re-keying despite the info being on the system; family / multi-profile admin handled awkwardly at the counter", quote:"Type essays even though your information is on the system.", cite:"wiki/dischem/dischem-social-sentiment-trust-journey"}],
          opportunities:[
            {text:"A first-class proxy / multi-profile model — one caregiver account holding linked dependents with lawful authority", pillars:["U5","U6"], cite:"design-kit/personas/caregiver-proxy-collector"},
            {text:"Carry context across channels so nobody re-types what the system already holds", pillars:["U6","U1"], cite:"wiki/concepts/identity-and-consent"}
          ],
          metrics:["Re-keying events per order (target ≈ 0)","Dependents managed per account","Proxy-authority re-proof rate"],
          asIsBaseline:"Today the flow assumes one person = one patient; managing Gogo and the child means carrying their IDs, re-explaining authority at the counter, and re-typing details already on the system."
        },
        cash:{
          narration:"One WhatsApp number, the whole family — managed in his language, no app, no re-registration.",
          story:"From one WhatsApp number, Sipho manages his own BP tablets, his mother's chronic repeat and his child's acute script. He forwards a script photo for the child; the system links it to the right household member and asks, in isiZulu, who he's collecting for — no app, no re-registration.",
          emotion:4, trustStage:"trigger",
          mock:{ useHousehold:true },
          frontstage:["One WhatsApp thread for the household","In-language 'who is this for?' prompt"],
          backstage:["AI capture reads the photo/USSD input and standardises it; PBQ human fallback if it can't","Household profile links members without forcing per-person logins","Discreet, recorded proxy consent for an elderly parent's collection"],
          support:["AI capture/route service","SMS / USSD gateway","Consent & audit store"],
          partners:["Public clinic / CCMDD","Pelebox / locker network"],
          regulatory:["POPIA proxy consent in-language; pharmacist validation retained per script — wiki/sa-regulatory/prescription-requirements-repeats"],
          tech:[
            {name:"AI capture + PBQ fallback", what:"AI standardises the input; a human (PBQ) catches anything it can't, never a dead end", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"Household profile (no per-person login)", what:"linked members managed from one number", cite:"wiki/concepts/identity-and-consent", reform:false}
          ],
          pains:[{text:"Caregivers carry the whole family's admin and re-prove authority at the counter each time", quote:"Let me manage all of them in one place, and don't make me prove every single time that I'm allowed to collect Mama's medicine.", cite:"design-kit/personas/caregiver-proxy-collector"}],
          opportunities:[
            {text:"Forward-the-script, carer-friendly submission on any phone — no app, no PIN gate", pillars:["U1","U5"], cite:"design-kit/personas/low-data-whatsapp-first-peri-urban"},
            {text:"One household view across cash and CCMDD wallets, echoing how the family already pools care", pillars:["S1","U5"], cite:"wiki/consumer-context/two-economy-affordability"}
          ],
          metrics:["Carer-forward submissions","Members per household number","Authority re-proof rate"],
          asIsBaseline:"Today he re-explains at the counter who he is collecting for, and there is no single low-data place to hold his, his mother's and his child's medicine together."
        }
      }
    },

    /* 3 — cost & cover before commit — costCover --------------------------- */
    {
      id:"m3", n:3, title:"I know the cost and the cover before I commit",
      spineStage:"FUND/CLAIM + PAY (pre-adjudication)", mockup:"costCover",
      pillars:["S3","U3","U2","S1"], flags:["momentOfTruth"],
      byEconomy:{
        insured:{
          narration:"Seconds after confirming: R0 to pay, in full — and the one co-pay comes with a fix.",
          story:"Within seconds of confirming, plain language: “All in stock. Discovery covers Nomvula's and Gogo's meds in full — R0 to pay. One line has a R42 co-pay — here's why, and a fully-funded generic if you'd rather.” She knows the out-of-pocket before she commits, for the whole household.",
          emotion:5, trustStage:"calm",
          mock:{ heading:"Cover & cost — before you commit",
            items:[
              {name:"Nomvula · BP + diabetes meds", line:"Discovery · CDL", amount:"R0"},
              {name:"Gogo · chronic repeat", line:"Discovery · CDL", amount:"R0"},
              {name:"Atorvastatin 20 mg (brand)", line:"non-formulary co-pay", amount:"R42"}
            ],
            total:{label:"You pay today", amount:"R42"},
            verdict:{tone:"warn", text:"R42 co-pay on one line — here's the fix"},
            explain:"Three lines are fully funded. Only the brand statin carries a co-pay (non-formulary).",
            alt:{text:"Switch to the funded generic atorvastatin", saving:"R42 → R0"},
            cash:false },
          frontstage:["Per-member funding panel (funded / co-pay / why)","Generic-swap prompt with R-saving shown"],
          backstage:["Real-time pre-adjudication (a 'can-I-claim?' dry run) against PMB/CDL + formulary + MMAP + DSP before commit","Any co-pay or non-DSP issue surfaced WITH the fix, never as a dead-end rejection","Claim settles silently inside the flow"],
          support:["Real-time claims switching","Scheme adjudication engine","Price engine (SEP + dispensing fee)"],
          partners:["Medical scheme","Claims switching house"],
          regulatory:["PMB / CDL funding honoured; SEP shown transparently — wiki/medical-schemes/pmb-cdl-chronic"],
          tech:[
            {name:"Real-time claim switching", what:"pre-adjudicates funded-vs-co-pay before commit", cite:"wiki/medical-schemes/realtime-claims-switching", reform:false},
            {name:"SEP + fee price engine", what:"shows the regulated price components transparently", cite:"wiki/sa-regulatory/sep-dispensing-fee", reform:false}
          ],
          pains:[{text:"Co-payment discovered at the till; a chronic delivery once returned over a disputed co-pay nobody resolved", quote:"All he needed to do was contact Dis-Chem and verify the co-payment.", cite:"wiki/dischem/pharmacy-complaints-pain-points"}],
          opportunities:[
            {text:"Pre-adjudicate and show funded-vs-co-pay before commit — the till-side cost shock is designed out", pillars:["U3","U2"], cite:"wiki/medical-schemes/realtime-claims-switching"},
            {text:"Surface the fix (generic / DSP node) with any co-pay, so an exception opens a path not a dead end", pillars:["U4","S3"], cite:"wiki/medical-schemes/dsp-formularies-copayments"}
          ],
          metrics:["Co-pay-surprise rate (target ≈ 0)","Pre-adjudication accuracy","% generic-swap offered"],
          asIsBaseline:"Today the co-pay appears at the till; a rejection (off-formulary, chronic not registered) surfaces in a queue with no clear next step — and members get steered to a courier to dodge it."
        },
        cash:{
          narration:"An itemised cash price in his language, before he travels — no black box at the till.",
          story:"Before he travels, Sipho sees an itemised cash price in isiZulu: “Tablets R57 + dispensing fee R34 = R91. A generic is R61. Your mother's repeat: R0 on CCMDD.” He can pick the cheaper generic or save toward it — and the cash path looks first-class, not an error state.",
          emotion:4, trustStage:"calm",
          mock:{ heading:"Intengo — your price, before you travel",
            items:[
              {name:"Amlodipine 5 mg — tablets", line:"SEP medicine price", amount:"R57"},
              {name:"Dispensing fee (regulated)", line:"capped professional fee", amount:"R34"},
              {name:"Mama's repeat — CCMDD", line:"free public supply", amount:"R0"}
            ],
            total:{label:"You pay (Amlodipine)", amount:"R91"},
            verdict:{tone:"good", text:"All priced up front — no surprise at the counter"},
            explain:"SEP + a capped dispensing fee fix the price by law; we show every component. Mama's CCMDD line is free.",
            alt:{text:"Choose the generic instead", saving:"R91 → R61"},
            cash:true },
          frontstage:["In-language itemised price breakdown","Generic / pack-size options + save-toward"],
          backstage:["Price engine = SEP + regulated dispensing fee, shown transparently (no discounting — it's regulated)","Save-toward construct echoing stokvel logic; pay at collection","CCMDD eligibility surfaced so free cover is applied, not missed"],
          support:["Price engine (SEP + fee)","Wallet / payments","CCMDD eligibility service"],
          partners:["Payment provider","Public clinic / CCMDD"],
          regulatory:["SEP + capped dispensing fee fix the price — compete on service, show price transparently — wiki/sa-regulatory/sep-dispensing-fee"],
          tech:[
            {name:"SEP + fee price engine", what:"quotes an itemised, defensible cash price before he travels", cite:"wiki/concepts/price-transparency", reform:false},
            {name:"Save-toward wallet", what:"accrues small increments for a lumpy bill on irregular income", cite:"wiki/consumer-context/two-economy-affordability", reform:false}
          ],
          pains:[{text:"Scheduled-medicine pricing feels arbitrary and the cash path is a black box until the till", quote:"I am horrified that the pricing of scheduled medication differs so dramatically from one Dis-Chem pharmacy to another.", cite:"wiki/dischem/pharmacy-complaints-pain-points"}],
          opportunities:[
            {text:"Price transparency at commit (SEP makes this natural) — the cash patient never faces a shock", pillars:["U3","S3"], cite:"wiki/concepts/price-transparency"},
            {text:"Save-toward / pay-at-collection for irregular income — affordability designed for, not assumed away", pillars:["U3","S1"], cite:"wiki/consumer-context/two-economy-affordability"}
          ],
          metrics:["% shown full price before commit","Save-toward adoption","CCMDD eligibility surfaced"],
          asIsBaseline:"Today the price collapses to a number at the till; the regulated dispensing fee bites hardest on cheap medicines, and the trip + queue are themselves a cost on an irregular income."
        }
      }
    },

    /* 4 — named pharmacist has my back — pharmacist ------------------------ */
    {
      id:"m4", n:4, title:"A named pharmacist has my back",
      spineStage:"VALIDATE / CLINICAL-CHECK", mockup:"pharmacist",
      pillars:["S5","U4","U2","U5"], flags:["momentOfTruth","reform"],
      byEconomy:{
        insured:{
          narration:"AI assembles the safety checks across the household; a named human signs them off.",
          story:"A clear note: “Checked by Naledi M., your pharmacist.” The interaction & allergy screen ran across Nomvula's, Gogo's and the child's records together; nothing clashed. The safety work is visible, and a human signed it off — not a black box.",
          emotion:5, trustStage:"calm",
          mock:{ name:"Naledi M.", title:"Your pharmacist", reg:"SAPC-registered",
            statusSteps:[
              {label:"Household order received", state:"done"},
              {label:"AI drafts the whole-regimen checks", state:"done"},
              {label:"Pharmacist reviewing", state:"active"},
              {label:"Checked by Naledi ✓", state:"todo"}
            ],
            checks:["Whole-regimen interaction & allergy screen across all 3 members","Gogo's warfarin dose vs latest INR (high-alert)","Lethabo's antibiotic vs the household's other meds","Scheduling, duplicate-therapy & repeats-remaining"],
            chatPrompt:"Ask Naledi a question",
            aiNote:"AI flags interactions and drafts the checks; a registered pharmacist decides \u{1F52E}" },
          frontstage:["Named-pharmacist confirmation","Proactive query only when truly needed"],
          backstage:["AI clinical co-pilot DRAFTS legality/scheduling, interaction, allergy, duplicate-therapy and repeats-remaining checks across the whole household","The registered pharmacist confirms or overrides — automation bias designed against","Virtual Manager oversees SLA so no check stalls silently"],
          support:["AI clinical decision support (assistive)","FHIR medication history","Virtual Manager (SLA oversight)"],
          partners:["Prescriber (for clarifications)","Medical scheme"],
          regulatory:["NON-NEGOTIABLE: a registered pharmacist's clinical sign-off is retained — AI assembles, the human authorises — wiki/sa-regulatory/pharmacy-act-sapc-gpp"],
          tech:[
            {name:"AI clinical co-pilot", what:"drafts the safety checks across all household members; pharmacist signs off", cite:"wiki/digital-transformation/ai-in-pharmacy", reform:true},
            {name:"Virtual Manager", what:"human supervises the virtual queue so SLAs are met and nothing stalls", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"Pharmacist single sign-off", what:"the final clinical gate stays human (GPP)", cite:"wiki/sa-regulatory/pharmacy-act-sapc-gpp", reform:false}
          ],
          pains:[{text:"Renewal/clinical help where the frontline doesn't know what to do, and rudeness erode safety trust", quote:"I've been trying to renew my prescription and the nurse doesn't know what to do.", cite:"wiki/dischem/pharmacy-complaints-pain-points"}],
          opportunities:[
            {text:"AI co-pilot turns minutes of toil into a seconds-long pharmacist sign-off — pharmacist at top-of-licence", pillars:["S5","U6"], cite:"wiki/digital-transformation/ai-in-pharmacy"},
            {text:"Make safety visible (named check, double-check) — visible double-checking reduces fear", pillars:["U2","S5"], cite:"wiki/dischem/dischem-social-sentiment-trust-journey"}
          ],
          metrics:["Time-to-validate (target seconds)","Pharmacist override rate (kept visible)","% checks named to a pharmacist"],
          asIsBaseline:"Today she waits with no visibility while checks run; an unregistered chronic condition or an interaction risk can surface only at the counter, and renewal help is hit-and-miss."
        },
        cash:{
          narration:"A remote-supervised pharmacist verifies it for a node near home — clinical safety without the trek.",
          story:"In isiZulu: “Checked & priced by a pharmacist. Your child's antibiotic is safe with your mother's BP meds in the house.” A remote-supervised pharmacist verified it for a node near home — so Sipho gets clinical safety without a half-day trip.",
          emotion:4, trustStage:"trigger",
          mock:{ name:"Thabo K.", title:"Pharmacist (remote-supervised node)", reg:"SAPC-registered",
            statusSteps:[
              {label:"Order received at near-home node", state:"done"},
              {label:"AI drafts checks + generic options + price", state:"done"},
              {label:"Pharmacist verifying (video link)", state:"active"},
              {label:"Checked & priced ✓", state:"todo"}
            ],
            checks:["Lethabo's antibiotic vs Mama's BP meds in the house","Legality & scheduling check","Generic options + itemised cash price","High-risk meds routed to direct counselling"],
            chatPrompt:"Speak to the pharmacist (video / voice)",
            aiNote:"AI drafts the checks; a remote pharmacist confirms — judgement never automated away \u{1F52E}" },
          frontstage:["In-language pharmacist confirmation","Channel-choice route to a human"],
          backstage:["AI co-pilot drafts legality/interaction/duplicate checks + generic options + itemised price","Remote-supervised pharmacist verification serves a near-home node without a resident pharmacist","High-risk meds routed to direct counselling"],
          support:["AI clinical decision support (assistive)","Telepharmacy link","Virtual Manager (SLA oversight)"],
          partners:["Telepharmacy hub","Public clinic / CCMDD"],
          regulatory:["NON-NEGOTIABLE: pharmacist sign-off retained even for a remote/near-home node — wiki/sa-regulatory/pharmacy-act-sapc-gpp"],
          tech:[
            {name:"Remote-supervised validation", what:"extends a pharmacist's reach to near-home nodes the cash majority can use", cite:"wiki/digital-transformation/telepharmacy-and-omnichannel", reform:true},
            {name:"AI clinical co-pilot", what:"drafts the checks; pharmacist confirms — judgement never automated away", cite:"wiki/digital-transformation/ai-in-pharmacy", reform:true}
          ],
          pains:[{text:"Distrust and an under-equipped frontline; perceived organisational inability to care", quote:"Rudeness of pharmacy manager and pharmacist.", cite:"wiki/dischem/pharmacy-complaints-pain-points"}],
          opportunities:[
            {text:"Remote-supervised validation brings a pharmacist's reach to near-home nodes for the cash majority", pillars:["S5","S1"], cite:"wiki/digital-transformation/telepharmacy-and-omnichannel"},
            {text:"Manufacture 'local-pharmacy feel' — a named, continuous pharmacist relationship at chain scale", pillars:["S2","U5"], cite:"wiki/dischem/dischem-social-sentiment-trust-journey"}
          ],
          metrics:["% quoted & checked before commit","Remote-verified nodes per pharmacist","Routed-to-human rate for high-risk"],
          asIsBaseline:"Today he waits at the counter with no certainty; near-home nodes can't serve him without a resident pharmacist, and a brusque interaction reads as the organisation not caring."
        }
      }
    },

    /* 5 — picked, checked, packed (ROWA hero) — dispenseRowa --------------- */
    {
      id:"m5", n:5, title:"It's picked, checked and packed — and I can watch it happen",
      spineStage:"DISPENSE", mockup:"dispenseRowa",
      pillars:["S5","U2","U7","U4"], flags:["momentOfTruth"],
      byEconomy:{
        insured:{
          narration:"Picked by ROWA, scan-verified against each script, packed by date and time — and she can watch it.",
          story:"On her phone she watches the status move: Picking → Checked → Packed. The household's meds are picked by the ROWA robot, scan-verified against each script, and packed into one adherence pack organised by date and time — Gogo's mornings, Nomvula's twice-daily, the child's short course. Nothing is missing, and she can see it.",
          emotion:5, trustStage:"calm",
          mock:{ steps:[
              {label:"BRIX queues the eligible household repeat", icon:"\u{1F5C2}️"},
              {label:"ROWA robot picks each pack", icon:"\u{1F916}"},
              {label:"Independent scan-verify against each script ✓", icon:"✅"},
              {label:"Sealed into one dated, by-time dose-pack", icon:"\u{1F4E6}"}
            ],
            robot:true, scanVerify:true, packPhoto:true,
            statusLine:"You can watch each step — picked → checked → packed" },
          frontstage:["Live status (picked/checked/packed)","'What's in this pack' itemised handover view"],
          backstage:["ROWA automated picker dispenses eligible stock; meds shoot to the checking bench, labels print at point","Deep-learning vision verification flags look-alike / wrong-product before handover","Pharmacist single sign-off remains the gate; assistant packs into a date/time adherence pack","Dashboard E2E workflow manager tracks every member's order"],
          support:["ROWA automated picker","Scan / vision verification","Dashboard (E2E workflow manager)","Adherence-packaging line"],
          partners:["Central-fill / VC","Adherence-packaging service"],
          regulatory:["NON-NEGOTIABLE: pharmacist final check + GPP counselling mandatory; design against verification bypass — wiki/sa-regulatory/pharmacy-act-sapc-gpp"],
          tech:[
            {name:"ROWA automated picker ⭐", what:"robotic pick of eligible stock; non-ROWA items prepared by hand — the S5 automate-the-toil proof-point", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"Scan / vision verification", what:"flags look-alike / wrong-product before handover", cite:"wiki/digital-transformation/pharmacy-automation-and-robotics", reform:false},
            {name:"Adherence dose-pack", what:"consolidates the household's meds by date & time", cite:"wiki/dispensing-practice/adherence-packaging", reform:false},
            {name:"Dashboard (E2E)", what:"tracks each member's order across the whole spine", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false}
          ],
          pains:[{text:"Items omitted from the pack, discovered only after leaving — a safety and adherence break", quote:"On opening the packet a few days later, I discovered my blood pressure tablets were missing.", cite:"wiki/dischem/pharmacy-complaints-pain-points"}],
          opportunities:[
            {text:"ROWA + vision QA delivers high-accuracy at volume while freeing pharmacists for clinical work", pillars:["S5","U4"], cite:"wiki/digital-transformation/pharmacy-automation-and-robotics"},
            {text:"Consolidate the household's scripts into one adherence-packaged parcel + one collection event", pillars:["S4","U7"], cite:"wiki/dispensing-practice/adherence-packaging"}
          ],
          metrics:["First-time-right %","Dispensing-error rate (target ≈ 0)","ROWA pick throughput"],
          asIsBaseline:"Today chronic meds are pre-packed at the nearest store and a pharmacist checks each script, but a wrong/short pack (a missing BP item) can slip through and is only caught days later at home."
        },
        cash:{
          narration:"Same ROWA pick, same scan-check, same pharmacist sign-off — no second-class lane for cash.",
          story:"A simple status line he can read on any phone: “Ready soon.” His and his mother's chronic tablets are ROWA-picked and scan-checked the same way as anyone's — same accuracy, same care — then packed for collection near home. No second-class lane for the cash household.",
          emotion:4, trustStage:"trigger",
          mock:{ steps:[
              {label:"Order queued on the same spine", icon:"\u{1F5C2}️"},
              {label:"ROWA robot picks — identical accuracy", icon:"\u{1F916}"},
              {label:"Scan-verify ✓ (same standard)", icon:"✅"},
              {label:"Packed for near-home collection", icon:"\u{1F4E6}"}
            ],
            robot:true, scanVerify:true, packPhoto:false,
            statusLine:"Low-data status: Ready soon → Ready now" },
          frontstage:["Low-data status messages","Neutral, discreet parcel"],
          backstage:["Same ROWA pick + vision verification + pharmacist sign-off as the insured lane","Order staged in secure storage marked ready for near-home collection","Dashboard tracks the cash order on the same spine"],
          support:["ROWA automated picker","Scan / vision verification","Dashboard (E2E workflow manager)","Order storage"],
          partners:["Central-fill / VC","Pelebox / locker network"],
          regulatory:["NON-NEGOTIABLE: pharmacist final check + counselling mandatory regardless of funding route — wiki/sa-regulatory/pharmacy-act-sapc-gpp"],
          tech:[
            {name:"ROWA automated picker ⭐", what:"same robotic accuracy for the cash household — no degraded lane", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"Scan / vision verification", what:"accuracy check before handover, identical standard", cite:"wiki/digital-transformation/pharmacy-automation-and-robotics", reform:false},
            {name:"Order storage → retrieval", what:"staged ready for near-home collection", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false}
          ],
          pains:[{text:"Dispensing accuracy is read as a life-threatening failure of professional duty, not a retail slip", quote:"Incorrect or missing medication is framed as potentially life-threatening and a failure of professional duty.", cite:"wiki/dischem/dischem-social-sentiment-trust-journey"}],
          opportunities:[
            {text:"Identical ROWA accuracy and pharmacist check for the cash household — first-class, not afterthought", pillars:["S1","S5"], cite:"wiki/digital-transformation/pharmacy-automation-and-robotics"},
            {text:"Make safety visible with a simple ready/checked status even on low data", pillars:["U2","U4"], cite:"wiki/concepts/graceful-failure"}
          ],
          metrics:["First-time-right % (parity insured vs cash)","Dispensing-error rate","Low-data status delivery"],
          asIsBaseline:"Today the cash household's accuracy depends on the same manual checks under load; a wrong or short dispense is felt as a profound safety failure, and there is little visible reassurance."
        }
      }
    },

    /* 6 — arrives when they said — deliveryTrack --------------------------- */
    {
      id:"m6", n:6, title:"It arrives when they said — and I'm never left guessing",
      spineStage:"COLLECT / DELIVER", mockup:"deliveryTrack",
      pillars:["S1","U2","U4","U6"], flags:["momentOfTruth"],
      byEconomy:{
        insured:{
          narration:"A realistic window, truthful tracking to actual handover, and a QR proof-of-delivery.",
          story:"“Delivering this afternoon — we'll confirm before the driver leaves.” A realistic window, not a too-precise promise. She can pause, adjust or switch to a locker. At handover she scans a QR; proof-of-delivery closes the loop. One parcel, the whole household, no guessing.",
          emotion:4, trustStage:"calm",
          mock:{ mode:"home",
            steps:[
              {label:"Packed & sealed", state:"done"},
              {label:"Out for delivery", state:"done"},
              {label:"Arriving — 12 min", state:"active"},
              {label:"Delivered ✓ (QR proof-of-delivery)", state:"todo"}
            ],
            driver:{name:"PICCUP driver · Sibusiso", eta:"12 min"},
            pod:"Signed by Nomvula",
            altModes:["Locker (PUDO)","Click & collect"],
            realisticWindow:"Thu 08:00–12:00 — a window you can plan around" },
          frontstage:["Realistic delivery window + control points","QR handover / proof-of-delivery"],
          backstage:["Automated retrieval (arm/conveyor) brings the parcel to the counter; QR self-identify","VC consolidates the household order into a route → PICCUP driver → proof-of-delivery","Closed-loop tracking confirms actual handover, not just dispatch"],
          support:["Automated retrieval","VC consolidation","PICCUP (driver + POD)","Dashboard tracking"],
          partners:["VC consolidation hub","PICCUP / last-mile carrier"],
          regulatory:["Courier of scheduled medicines must meet licensing + cold-chain rules — wiki/sa-regulatory/courier-online-pharmacy-rules"],
          tech:[
            {name:"VC consolidation → PICCUP + POD", what:"groups the household order into a route; driver delivers with proof-of-delivery", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"Automated retrieval", what:"arm/conveyor brings the parcel to the counter", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"QR handover", what:"customer self-identifies / confirms collection", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false},
            {name:"Pelebox / pickup-point collect-near-home", what:"collect at a Pelebox smart locker or partner pickup point with an SMS/WhatsApp one-time PIN — no app, sub-minute, private; locker dispensing of scheduled meds without a pharmacist present is the part that needs reform", cite:"wiki/consumer-context/last-mile-addressing-logistics", reform:true}
          ],
          pains:[{text:"'Processed and out for delivery' then nothing arrives — the worst failure because the system promised", quote:"I received a notification that it has been processed on my medical aid and was out for delivery. I did not receive it.", cite:"wiki/dischem/pharmacy-complaints-pain-points"}],
          opportunities:[
            {text:"Realistic windows + confirm/pause/adjust control points beat too-precise promises", pillars:["U2","U4"], cite:"wiki/dischem/store-of-the-future-customer-voice"},
            {text:"Closed-loop tracking to actual handover (QR + POD) kills the 'dispatched but never arrived' failure", pillars:["U2","U6"], cite:"wiki/concepts/graceful-failure"}
          ],
          metrics:["Promise-kept rate","'Dispatched-not-delivered' rate (target ≈ 0)","Reschedule / pause usage"],
          asIsBaseline:"Today an order can be marked processed and 'out for delivery' and then simply not arrive, with no closed-loop confirmation and an unreachable dispensary when she tries to chase it."
        },
        cash:{
          narration:"In the locker near home, a one-time PIN by SMS — no address, private, under a minute.",
          story:"“Your parcel is in the locker near home — PIN 4821.” The Pelebox pattern he already trusts: SMS/WhatsApp + a one-time PIN, collect near home in under a minute, private and discreet. His mother's repeat lands the same way. No address needed, no delivery man who can't find his place.",
          emotion:4, trustStage:"calm",
          mock:{ mode:"locker",
            steps:[
              {label:"Packed & staged", state:"done"},
              {label:"Loaded into the near-home locker", state:"done"},
              {label:"PIN 4821 sent by SMS / WhatsApp", state:"active"},
              {label:"Collected ✓ (PIN redeemed)", state:"todo"}
            ],
            pod:"PIN redeemed — collection confirmed",
            altModes:["Pelebox smart locker","Staffed-counter fallback"],
            realisticWindow:"Ready now — collect any time today, no address needed" },
          frontstage:["SMS/WhatsApp + one-time PIN collection","Discreet, neutral parcel; staffed-counter fallback"],
          backstage:["Order storage → automated retrieval / locker load near home","VC consolidation routes near-home collection; reroute to another point if a locker fails","Closed-loop confirmation when the PIN is redeemed"],
          support:["Pelebox / locker network","VC consolidation","Order storage","Dashboard tracking"],
          partners:["Pelebox / locker operator","CCMDD network","PICCUP (where delivery is feasible)"],
          regulatory:["Locker collection of scheduled medicines + cold chain must satisfy licensing/oversight — wiki/sa-regulatory/courier-online-pharmacy-rules"],
          tech:[
            {name:"Pelebox-style locker + PIN", what:"SMS/WhatsApp one-time PIN, near-home, sub-minute, no address", cite:"wiki/consumer-context/last-mile-addressing-logistics", reform:false},
            {name:"Locker dispensing of scheduled meds", what:"needs oversight clarity for S2+ release into a locker", cite:"wiki/sa-regulatory/courier-online-pharmacy-rules", reform:true},
            {name:"VC consolidation + reroute", what:"routes near-home collection; reroutes if a locker is full/down", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false}
          ],
          pains:[{text:"Unreachable dispensary and distrust of narrow windows; defection to a local pharmacy for relationship care", quote:"Called 4 different dispensaries, nobody is picking up.", cite:"wiki/dischem/dischem-social-sentiment-trust-journey"}],
          opportunities:[
            {text:"Adopt the proven Pelebox pattern — near-home, private, no-address collection as the default", pillars:["U1","U6"], cite:"design-kit/personas/public-sector-bridging-to-retail"},
            {text:"Reliable near-home collection with a staffed fallback is the antidote to defection", pillars:["S1","U4"], cite:"wiki/consumer-context/last-mile-addressing-logistics"}
          ],
          metrics:["Near-home collection rate","Sub-minute collection time","Locker-fail reroute success"],
          asIsBaseline:"Today home delivery assumes a findable address he doesn't have, deliveries fail in informal areas, and when something goes wrong the dispensary line goes unanswered."
        }
      }
    },

    /* 7 — taking it right is easy — adherencePack -------------------------- */
    {
      id:"m7", n:7, title:"Taking it right is the easy part",
      spineStage:"ADHERE", mockup:"adherencePack",
      pillars:["S2","U7","U5","U1"], flags:[],
      byEconomy:{
        insured:{
          narration:"A dose-pack by date and time, with consented reminders tied to routine — never harassment.",
          story:"The adherence pack is labelled by date and time, with hybrid digital + printed instructions she can re-check later. Gentle reminders are tied to routine, not random; she set Gogo's to mornings. Everything is consented and opt-out-able — help that supports, never harasses.",
          emotion:5, trustStage:"calm",
          mock:{ days:[
              {label:"MON", slots:[
                {time:"AM", pills:["#f0a23b","#e9e2d2","#ffffff","#7fb3e0"]},
                {time:"PM", pills:["#ffffff","#d96b8a","#8e6fc4"]}
              ]},
              {label:"TUE", slots:[
                {time:"AM", pills:["#f0a23b","#e9e2d2","#ffffff","#7fb3e0"]},
                {time:"PM", pills:["#ffffff","#d96b8a","#8e6fc4"]}
              ]},
              {label:"WED", slots:[
                {time:"AM", pills:["#f0a23b","#e9e2d2","#ffffff","#7fb3e0"]},
                {time:"PM", pills:["#ffffff","#d96b8a","#8e6fc4"]}
              ]}
            ],
            reminder:"Gentle nudge tied to your routine — opt out any time",
            print:true,
            forMember:"Gogo · INR-set warfarin packed separately" },
          frontstage:["Adherence pack + re-checkable hybrid instructions","Per-member, opt-out-able reminders"],
          backstage:["Schedule designed as a behaviour-change surface, not a reminder bolt-on","Consented nudges tied to routine; opt-out honoured (no harassment)","Pharmacist counselling available by channel choice"],
          support:["Adherence engine","Hybrid label/print service","Counselling channel"],
          partners:["Adherence-packaging service"],
          regulatory:["GPP counselling at handover; POPIA consent governs reminder contact — wiki/sa-regulatory/pharmacy-act-sapc-gpp"],
          tech:[
            {name:"Adherence dose-pack + hybrid instructions", what:"date/time pack plus digital & printed dosage info, re-checkable", cite:"wiki/dispensing-practice/adherence-packaging", reform:false},
            {name:"Consented, opt-out-able nudges", what:"reminders tied to routine; agency respected, never harassment", cite:"wiki/digital-transformation/adherence-tech-and-digital-therapeutics", reform:false}
          ],
          pains:[{text:"Communication overload after a customer tried to opt out flips support into perceived harassment", quote:"Persistent calls/SMS/WhatsApp, especially after the customer tried to opt out, flips support into perceived harassment.", cite:"wiki/dischem/dischem-social-sentiment-trust-journey"}],
          opportunities:[
            {text:"Design the schedule/label and refill loop as a behaviour-change surface, not a reminder bolt-on", pillars:["U7","S2"], cite:"wiki/concepts/medication-adherence"},
            {text:"Hybrid digital + print instructions customers actively want, re-checkable later", pillars:["U7","U5"], cite:"wiki/dischem/store-of-the-future-customer-voice"}
          ],
          metrics:["Adherence (PDC/MPR) uplift","Opt-out respect rate (target 100%)","Refill continuity"],
          asIsBaseline:"Today adherence depends on the customer; reminders can be rigid and un-opt-out-able, tipping into harassment, while instructions are paper-only and easy to lose."
        },
        cash:{
          narration:"Short in-language reminders tied to payday, plus a printed label that survives load-shedding.",
          story:"Sipho gets a short isiZulu voice/text dosing reminder tied to payday and routine, and a printed label he can keep. His mother's pack is organised so she can't mix up her tablets. Reminders stop the moment he asks — help on his terms, in his language.",
          emotion:4, trustStage:"calm",
          mock:{ days:[
              {label:"MON", slots:[
                {time:"AM", pills:["#f0a23b","#e9e2d2"]},
                {time:"PM", pills:["#f0a23b"]}
              ]},
              {label:"TUE", slots:[
                {time:"AM", pills:["#f0a23b","#e9e2d2"]},
                {time:"PM", pills:["#f0a23b"]}
              ]},
              {label:"WED", slots:[
                {time:"AM", pills:["#f0a23b","#e9e2d2"]},
                {time:"PM", pills:["#f0a23b"]}
              ]}
            ],
            reminder:"Isikhumbuzo ngolimi lwakho, kuhambisana nosuku lweholo — yeka noma nini (in-language, payday-timed, opt out any time)",
            print:true,
            forMember:"Mama · pre-packed so the elderly regimen isn't mixed up" },
          frontstage:["In-language voice/text reminders","Printed-label backup (load-shedding-proof)"],
          backstage:["Reminders tied to payday/routine, data-frugal, opt-out honoured","Organised dosing for an elderly parent's regimen","Counselling by voice/WhatsApp on request"],
          support:["Adherence engine (SMS/voice)","Print service","Counselling channel"],
          partners:["CCMDD adherence support"],
          regulatory:["Counselling + in-language consent; opt-out honoured under POPIA — wiki/sa-regulatory/pharmacy-act-sapc-gpp"],
          tech:[
            {name:"Hybrid print + voice/SMS reminders", what:"in-language, payday-timed, with a printed backup", cite:"wiki/dispensing-practice/adherence-packaging", reform:false},
            {name:"Organised dosing for a parent", what:"pre-packed doses so an elderly regimen isn't mixed up", cite:"wiki/digital-transformation/adherence-tech-and-digital-therapeutics", reform:false}
          ],
          pains:[{text:"Digital-only instructions worry customers; print must remain as safety/backup", quote:"Digital-only instructions worry customers (access, signal); print must remain as safety/backup.", cite:"wiki/dischem/store-of-the-future-customer-voice"}],
          opportunities:[
            {text:"Reminders tied to payday and routine, in-language and opt-out-able — adherence that fits his life", pillars:["U7","U1"], cite:"wiki/digital-transformation/adherence-tech-and-digital-therapeutics"},
            {text:"Hybrid print + voice keeps instructions usable on low data and signal", pillars:["U5","U7"], cite:"wiki/dischem/store-of-the-future-customer-voice"}
          ],
          metrics:["Silent-lapse rate","Reminder opt-out respect","Parent-regimen mix-up rate"],
          asIsBaseline:"Today there is little adherence support tuned for him; reminders, when they exist, ignore data/signal realities and routine, and instructions are paper-only with no in-language voice option."
        }
      }
    },

    /* 8 — curveball / graceful failure + after-hours acute — curveball ----- */
    {
      id:"m8", n:8, title:"When life throws a curveball, the system bends — it doesn't break",
      spineStage:"GRACEFUL-FAILURE (parallel) + AFTER-HOURS ACUTE", mockup:"curveball",
      pillars:["S2","U4","U5","U2"], flags:["momentOfTruth","reform"],
      byEconomy:{
        insured:{
          narration:"Stock-out, claim reject, sick child at 9pm — every exception opens a fix, never a dead end.",
          story:"Sunday night, the 7-year-old spikes a fever. Nomvula opens the same WhatsApp thread; an after-hours pharmacist teleconsult is the front door. A script is issued, checked against the child's record and the household's other meds, and routed to a 24-hour node — no shuttling, no dead ends. Earlier that week a stock-out auto-offered a funded generic in two taps. The system bent; it didn't break.",
          emotion:4, trustStage:"agitation→loyalty",
          mock:{ scenarios:[
              {problem:"Stock-out", problemIcon:"\u{1F534}", problemText:"Your statin is out of stock at the fulfilment node.", recovery:"Funded generic, pharmacist-approved", recoveryText:"Two taps to swap to a funded generic — R0, checked, no wasted trip.", pillar:["U4","S3"]},
              {problem:"Claim rejected", problemIcon:"\u{1F534}", problemText:"Scheme rejected one line (chronic not registered).", recovery:"Plain-language reason + 2-tap fix", recoveryText:"We explain why and offer the lawful alternative — not a dead-end rejection.", pillar:["U2","U4"]},
              {problem:"After-hours: child spikes a fever", problemIcon:"\u{1F321}️", problemText:"Sunday 9pm — Lethabo has a fever.", recovery:"After-hours pharmacist teleconsult front door", recoveryText:"Script issued, checked against the household's meds, routed to a 24-hour node — no ER shuttle.", pillar:["S2","U2"]}
            ],
            line:"Confidence comes from clarity and fallback, not automation alone." },
          frontstage:["After-hours pharmacist/teleconsult front door","Plain-language failure + 2-tap recovery"],
          backstage:["Out-of-stock auto-offers a funded generic; claim reject explained with the lawful alternative","New acute script reconciled against the household's chronic regimen (interaction/duplication check)","Failed delivery reroutes to a locker; the case keeps one owner, never a silent dead end"],
          support:["Telepharmacy / after-hours node","AI co-pilot (interaction check)","Virtual Manager (owns the exception)"],
          partners:["After-hours / 24-hour pharmacy node","Medical scheme"],
          regulatory:["After-hours live pharmacist authorisation + e-script transmission are not yet 24/7 in SA — wiki/dispensing-practice/after-hours-emergency-acute-access"],
          tech:[
            {name:"After-hours teleconsult front door", what:"a pharmacist/clinician entry point for the acute curveball", cite:"wiki/dispensing-practice/after-hours-emergency-acute-access", reform:true},
            {name:"Auto-offer funded generic", what:"a stock-out opens a 2-tap fix, not a dead end", cite:"wiki/concepts/graceful-failure", reform:false},
            {name:"Plain-language reject + fix", what:"a claim reject is explained with the lawful alternative", cite:"wiki/medical-schemes/realtime-claims-switching", reform:false},
            {name:"Acute↔chronic reconciliation", what:"checks the new acute script against the household's regimen", cite:"wiki/dispensing-practice/clinical-checks-and-mtm", reform:false}
          ],
          pains:[{text:"A trust-breaking failure with no recovery path drives defection to a local pharmacy, even at a premium", quote:"Move scripts to Clicks or local independents, willing to pay significantly more (R460) for relationship care.", cite:"wiki/dischem/dischem-social-sentiment-trust-journey"}],
          opportunities:[
            {text:"Judge the service on recovery — every exception opens a 2-tap, human-reachable path", pillars:["U4","S2"], cite:"wiki/concepts/graceful-failure"},
            {text:"An after-hours acute episode becomes a convergence point into the household's care relationship", pillars:["S2","U2"], cite:"wiki/dispensing-practice/after-hours-emergency-acute-access"}
          ],
          metrics:["Exception self-recovery rate","After-hours acute resolution time","Defection avoided"],
          asIsBaseline:"Today a stock-out, claim reject or failed delivery is often a silent dead end with an unreachable dispensary; an after-hours acute episode for the child means an ER trip and a shuttling, anxious experience."
        },
        cash:{
          narration:"Same Sunday-night fever, but cash — a WhatsApp pharmacist, a clear price, a held place.",
          story:"The same Sunday-night fever, but cash. Sipho reaches an after-hours pharmacist over WhatsApp; the antibiotic price is clear, checked against his mother's meds in the house, and ready for a near-home locker by morning. When his own BP tablets were out earlier, the system offered a cheaper generic and held his place — never a wasted trip, never a closed door.",
          emotion:3, trustStage:"agitation→loyalty",
          mock:{ scenarios:[
              {problem:"Stock-out", problemIcon:"\u{1F534}", problemText:"Your BP tablets are out at this node.", recovery:"Cheaper generic + place held", recoveryText:"A cheaper generic is offered and your place is held — never a wasted trip.", pillar:["U4","S1"]},
              {problem:"Signal drops mid-flow", problemIcon:"\u{1F4F6}", problemText:"Your connection dropped during the order.", recovery:"Resume-after-reconnect", recoveryText:"Nothing is lost — pick up exactly where you left off when signal returns.", pillar:["U1","U4"]},
              {problem:"After-hours: child spikes a fever", problemIcon:"\u{1F321}️", problemText:"Sunday 9pm — the little one has a fever.", recovery:"After-hours WhatsApp pharmacist", recoveryText:"Low-data consult, clear cash price, checked against Mama's meds, ready at a near-home locker by morning.", pillar:["S2","U3"]}
            ],
            line:"Always a human-reachable, low-data fallback — never a dead end for the cash household." },
          frontstage:["After-hours WhatsApp pharmacist front door","Clear cash price + plain-language fix"],
          backstage:["Out-of-stock offers a cheaper generic and holds his place; nothing is a wasted trip","Acute script reconciled against the household's regimen; routed to a near-home node","Resume-after-reconnect so a dropped signal never loses the case"],
          support:["Telepharmacy / after-hours node","Offline-tolerant queue","Virtual Manager (owns the exception)"],
          partners:["After-hours / 24-hour node","Public clinic (acute fallback)"],
          regulatory:["After-hours live authorisation + locker release of an acute script need oversight clarity — wiki/dispensing-practice/after-hours-emergency-acute-access"],
          tech:[
            {name:"After-hours WhatsApp pharmacist", what:"a low-data acute front door for the cash household", cite:"wiki/dispensing-practice/after-hours-emergency-acute-access", reform:true},
            {name:"Auto-offer cheaper generic", what:"a stock-out becomes an affordable choice, not a wasted trip", cite:"wiki/concepts/graceful-failure", reform:false},
            {name:"Resume-after-reconnect", what:"a dropped signal never loses the case", cite:"wiki/consumer-context/digital-access-and-whatsapp", reform:false}
          ],
          pains:[{text:"A digital breakdown with no alternative path becomes a hard blocker and reads as abandonment", quote:"Digital breakdowns become hard blockers when no alternative path exists.", cite:"wiki/dischem/dischem-social-sentiment-trust-journey"}],
          opportunities:[
            {text:"Always a human-reachable, low-data fallback — never a dead end for the cash household", pillars:["U4","S1"], cite:"wiki/concepts/graceful-failure"},
            {text:"After-hours acute access without an ER trip, at a clear cash price", pillars:["S2","U3"], cite:"wiki/dispensing-practice/after-hours-emergency-acute-access"}
          ],
          metrics:["Exception self-recovery rate","Wasted-trip rate (target ≈ 0)","After-hours acute resolution"],
          asIsBaseline:"Today an after-hours acute need means the public ER or a closed pharmacy; a stock-out or a data dropout is a wasted trip back to the clinic queue, with no held place and no human he can reach."
        }
      }
    },

    /* 9 — renew without a trek — renewal (closes the flywheel → m1) ------- */
    {
      id:"m9", n:9, title:"Renewing is a tap, not a trek",
      spineStage:"REFILL/RENEW (script expiry)", mockup:"renewal",
      pillars:["S4","S2","U6","U4"], flags:[],
      byEconomy:{
        insured:{
          narration:"A 2-minute teleconsult renews it; the e-script token drops back into the loop, and the repeat runs on.",
          story:"Before a script expires, the same thread offers: “Gogo's repeat needs a renewal — book a 2-minute teleconsult?” A pharmacist/clinician renews it, an e-script token flows straight back into the loop, and the repeat keeps running. No silent drop-off, no separate trek for a piece of paper.",
          emotion:5, trustStage:"calm",
          mock:{ messages:[
              {from:"them", text:"Heads up — Gogo's repeat is on its last script. A quick check-in to renew?", time:"09:05"},
              {from:"them", text:"Book a 2-minute teleconsult? ✅ Yes, renew", time:"09:05"},
              {from:"me", text:"✅ Yes, renew", time:"09:06"},
              {from:"them", text:"Renewed by the clinician ✓ New e-script token issued — the repeat continues automatically.", time:"09:11"}
            ],
            teleconsult:{provider:"Kena", lowData:true},
            token:{label:"New e-script token issued", reform:true},
            loopBackTo:"m1",
            loopNote:"…and the self-running repeat begins again." },
          frontstage:["Pre-expiry renewal prompt","In-WhatsApp / app teleconsult"],
          backstage:["Teleconsult → e-script token re-enters the refill loop without a fresh manual submit","Workflow manager re-queues the renewed repeat automatically","Continuity preserved across the household's members"],
          support:["Teleconsult service","E-script token rail","Refill engine"],
          partners:["Prescriber / clinician","Medical scheme"],
          regulatory:["Telehealth-originated renewal scripts permitted; an AES gives a true paperless script — wiki/sa-regulatory/e-prescription-telehealth-popia"],
          tech:[
            {name:"Teleconsult → e-script token", what:"renewal flows back into the loop without a clinic trek", cite:"wiki/concepts/e-prescription-token", reform:true},
            {name:"Workflow manager re-queue", what:"the renewed repeat re-enters the virtual queue automatically", cite:"wiki/digital-transformation/dischem-scripting-tech-roadmap", reform:false}
          ],
          pains:[{text:"A hard break at script expiry causes silent drop-off; renewal help is unreliable", quote:"I've been trying to renew my prescription and the nurse doesn't know what to do.", cite:"wiki/dischem/pharmacy-complaints-pain-points"}],
          opportunities:[
            {text:"Orchestrate the renewal gap — prompt and renew before expiry instead of letting it lapse", pillars:["S4","U6"], cite:"design-kit/personas/insured-chronic-multimorbid"},
            {text:"Teleconsult→e-script→fulfilment as one unbroken loop inside the ecosystem", pillars:["S2","U6"], cite:"wiki/concepts/e-prescription-token"}
          ],
          metrics:["Renewal-before-expiry rate","Silent drop-off rate (target ≈ 0)","Teleconsult→fulfilment completion"],
          asIsBaseline:"Today the script breaks hard at ~6-month expiry; she must chase a new script through a clinic where 'the nurse doesn't know what to do', and the repeat silently lapses in the gap."
        },
        cash:{
          narration:"A low-data WhatsApp consult renews it; the token re-enters the near-home loop. Supply never breaks.",
          story:"Before his (or his mother's) script lapses, a low-data prompt: “Time to renew — reply 1 for a quick WhatsApp consult.” A short, in-language teleconsult renews it; the token re-enters the near-home collection loop. The family's chronic supply doesn't fall through the expiry gap.",
          emotion:4, trustStage:"calm",
          mock:{ messages:[
              {from:"them", text:"Isikhathi sokuvuselela — your script is about to lapse.", time:"08:20"},
              {from:"them", text:"Reply 1 for a quick WhatsApp consult to renew.", time:"08:20"},
              {from:"me", text:"1", time:"08:21"},
              {from:"them", text:"Kuvuselelwe ✓ New e-script token issued — near-home collection continues.", time:"08:27"}
            ],
            teleconsult:{provider:"Kena", lowData:true},
            token:{label:"New e-script token issued", reform:true},
            loopBackTo:"m1",
            loopNote:"…and the family's near-home repeat begins again." },
          frontstage:["Low-data pre-expiry prompt","In-language WhatsApp/USSD teleconsult"],
          backstage:["Teleconsult → e-script token re-enters the loop without a clinic queue","Bridges to CCMDD renewal where that's his route","Resumable on low signal"],
          support:["Teleconsult service (low-data)","E-script token rail","Refill engine"],
          partners:["Clinician / public clinic","CCMDD network"],
          regulatory:["Telehealth renewal permitted; in-language POPIA consent; AES for paperless — wiki/sa-regulatory/e-prescription-telehealth-popia"],
          tech:[
            {name:"Low-data teleconsult → token", what:"renews without a clinic trek, on any phone", cite:"wiki/concepts/e-prescription-token", reform:true},
            {name:"CCMDD renewal bridge", what:"renews a public-route chronic script onto the near-home rail", cite:"wiki/medical-schemes/courier-chronic-pharmacy-models", reform:true}
          ],
          pains:[{text:"The silent lapse — a missed renewal because of distance, data or a broken reminder, not a clinical decision", quote:"His risk is the silent lapse — a missed collection because of distance, data, or a broken reminder.", cite:"design-kit/personas/low-data-whatsapp-first-peri-urban"}],
          opportunities:[
            {text:"Close the expiry gap for the cash household with a low-data teleconsult renewal", pillars:["S4","U6"], cite:"wiki/concepts/e-prescription-token"},
            {text:"Bridge public CCMDD renewal onto the same near-home rail so supply never breaks", pillars:["S1","S2"], cite:"design-kit/personas/public-sector-bridging-to-retail"}
          ],
          metrics:["Renewal-before-expiry rate","Silent-lapse rate (target ≈ 0)","Low-data teleconsult completion"],
          asIsBaseline:"Today the script lapses silently at expiry; renewing means another clinic queue or a wasted trip, and a missed renewal quietly breaks the family's chronic supply."
        }
      }
    }

  ]
};
