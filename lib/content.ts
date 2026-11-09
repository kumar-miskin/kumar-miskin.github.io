export const profile = {
  name: "Kumar Miskin",
  initials: "KM",
  title: "Machine Learning Engineer",
  subtitle: "PhD candidate in Materials Science, Johns Hopkins University",
  summary:
    "Building physics-informed ML systems that accelerate scientific discovery — graph neural networks, Bayesian optimization, and active learning for materials, energy, and space applications.",
  email: "kmiskin1@jh.edu",
  phone: "+1 (312) 975-4142",
  location: "Mountain View, CA",
  resumeUrl: "/cv.pdf",
  homepageUrl: "https://sites.google.com/view/kumarpmiskin/",
  scholarUrl:
    "https://scholar.google.com/citations?user=AWJb6VwAAAAJ&hl=en",
  linkedinUrl: "https://www.linkedin.com/in/kumar-miskin",
  githubUrl: "https://github.com/kumar-miskin",
  twitterUrl: "https://twitter.com/KumarMiskin",
  instagramUrl: "https://instagram.com/kumar_miskin",
};

export const stats = [
  { value: "4", label: "Peer-reviewed publications" },
  { value: "49", label: "Citations" },
  { value: "2", label: "First-author papers" },
  { value: "3", label: "Continents, industry + national lab" },
];

export const focusAreas = [
  "Machine learning interatomic potentials",
  "Graph neural networks",
  "Bayesian optimization",
  "Active learning",
  "Halide perovskites",
  "Solid-state electrolytes & hydroborates",
  "Defect & radiation physics",
  "Computational materials discovery",
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  status?: string;
  firstAuthor?: boolean;
  links: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    title:
      "How soft metal halide perovskite lattices heal following energetic particle bombardment",
    authors:
      "K. Miskin, G. Lemson, T. Arbaugh, E. Ragasa, N.Q. Le, P. Clancy",
    venue: "Journal of Materials Chemistry A",
    year: 2026,
    firstAuthor: true,
    links: [{ label: "DOI", url: "https://doi.org/10.1039/d6ta01465h" }],
  },
  {
    title: "Low-energy pathways lead to self-healing defects in CsPbBr\u2083",
    authors:
      "K. Miskin, Y. Cao, M. Marland, F. Shaikh, D.T. Moore, J.A. Marohn, P. Clancy",
    venue: "Physical Chemistry Chemical Physics",
    year: 2025,
    firstAuthor: true,
    links: [{ label: "DOI", url: "https://doi.org/10.1039/d5cp01641j" }],
  },
  {
    title:
      "PAL 2.0: A physics-driven Bayesian optimization framework for material discovery",
    authors:
      "M.S. Priyadarshini, O. Romiluyi, Y. Wang, K. Miskin, C. Ganley, P. Clancy",
    venue: "Materials Horizons",
    year: 2024,
    links: [{ label: "DOI", url: "https://doi.org/10.1039/d3mh01474f" }],
  },
  {
    title:
      "A chemistry-informed machine learning framework for closed-loop material discovery",
    authors:
      "P. Clancy, M.S. Priyadarshini, O. Romiluyi, Y. Wang, K. Miskin",
    venue: "Foundations of Molecular Modeling and Simulation",
    year: 2024,
    links: [{ label: "DOI", url: profile.scholarUrl }],
  },
  {
    title:
      "Deciphering the Dynamical and Structural Factors Controlling Na-Ion Transport in Hydroborate-based Solid Electrolytes",
    authors: "S. Yuan, I. Hsieh, K. Miskin, K. Kim, L. Wan",
    venue: "Under Revision",
    year: 2026,
    links: [],
  },
  {
    title:
      "How flyer geometry affects shock wave propagation and spall on impact",
    authors:
      "K. Miskin, M. Zhang, K. Muly, Joel, K.T. Ramesh, P. Clancy",
    venue: "In Preparation",
    year: 2026,
    firstAuthor: true,
    links: [],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "ML Research Intern, CCMS",
    org: "Lawrence Livermore National Laboratory",
    period: "Jun 2026 \u2013 Present",
    location: "Livermore, CA",
    current: true,
    bullets: [
      "Training equivariant graph neural network interatomic potentials (Allegro, MACE, NequIP) on B\u2013H polyhedral anion clusters for large-scale MLIP-MD simulation of solid electrolytes.",
      "Building an end-to-end ML pipeline \u2014 feature engineering, feature selection, and Bayesian optimization \u2014 to discover novel hydroborate electrolyte compositions with maximized cation conductivity.",
      "Applying graph-based sequence modeling to characterize ionic reorientational dynamics over time.",
    ],
  },
  {
    role: "Doctoral Researcher, Clancy Group",
    org: "Johns Hopkins University",
    period: "Aug 2022 \u2013 Present",
    location: "Baltimore, MD",
    current: true,
    bullets: [
      "Architected PAL 2.0, a physics-informed active-learning framework combining XGBoost feature selection, Bayesian optimization, and neural-network surrogates \u2014 3\u00d7 faster convergence than SMAC/Hyperopt across 12+ benchmarks.",
      "Built hybrid GP + deep-learning surrogate models for high-dimensional search spaces, identifying top-performing perovskite photovoltaics while querying <11% of the design space.",
      "Engineered a parallelized DuckDB + Python ETL pipeline processing terabyte-scale simulation data (500k+ atoms), automating defect event detection and cutting analysis time by 90%.",
      "Discovered low-energy self-healing defect pathways in CsPbBr\u2083 via DFT + NEB \u2014 >95% agreement with experiment, published as two first-author papers.",
    ],
  },
  {
    role: "Bachelor's & Master's Thesis",
    org: "Indian Institute of Technology Bombay",
    period: "Aug 2021 \u2013 May 2022",
    location: "Mumbai, India",
    bullets: [
      "Trained CNN classifiers to identify NiTi phase transformations from 50+ MD simulations at 90%+ accuracy.",
      "Modeled Suzuki segregation in FCC Cu with LAMMPS, evaluating stacking fault energies across 50+ impurity configurations.",
      "Presented findings at ICSMA 19, an international conference in Metz, France.",
    ],
  },
  {
    role: "Computational Science Intern",
    org: "Sony, Atsugi Technology Center",
    period: "Nov 2020 \u2013 Dec 2020",
    location: "Atsugi, Japan",
    bullets: [
      "Built ML surrogate models on 200+ DFT simulations to predict solid-state battery properties, cutting simulation cost by 40%.",
      "Benchmarked surrogate predictions against held-out DFT calculations, quantifying uncertainty to prioritize candidates for synthesis.",
    ],
  },
  {
    role: "Computer Vision Intern",
    org: "Tata Power Strategic Engineering Division",
    period: "May 2020 \u2013 Jul 2020",
    location: "Pune, India",
    bullets: [
      "Deployed a YOLOv5-based real-time license-plate recognition system, improving inference throughput by 35%.",
      "Engineered an automated data preprocessing and augmentation pipeline for variable lighting, occlusion, and camera angles.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "1st Zoom, Bangalore",
    period: "May 2020 \u2013 Jul 2020",
    location: "Bengaluru, India",
    bullets: [
      "Built a real-time audio-anomaly-detection pipeline (MFCC/spectral features, SVM/RF/LSTM) at 94%+ accuracy across 10,000+ samples.",
      "Ran ablation studies across feature counts and architectures to systematically improve the precision-recall trade-off.",
    ],
  },
  {
    role: "Summer Research Intern",
    org: "New York University (Prof. Mark Tuckerman)",
    period: "Jun 2019 \u2013 Jul 2019",
    location: "New York, NY",
    bullets: [
      "Trained regression and classification ML models on XRD data from 30+ single crystals to estimate impurity concentrations with <5% error.",
      "Applied PCA and feature engineering over crystallographic structure descriptors to drive feature selection.",
    ],
  },
];

export const projects = [
  {
    name: "DevOps Genie",
    tagline:
      "Multi-agent DevOps automation SaaS with human-in-the-loop infrastructure changes.",
    bullets: [
      "Multi-agent system (LangGraph, GPT-4/Claude) that classifies intent and routes to dedicated debug or infrastructure agents.",
      "Infra agent generates Terraform/Kubernetes changes validated through custom MCP tool servers, raises a PR, and applies via Atlantis + ArgoCD.",
      "Shipped full-stack (Next.js 15, Flask, Docker, real-time chain-of-thought UI); grew to 4 customers within 3 months.",
    ],
    linkLabel: "Website",
    linkUrl: profile.homepageUrl,
  },
];

export const education = [
  {
    degree: "Ph.D. in Materials Science & Engineering",
    org: "Johns Hopkins University",
    period: "2022 \u2013 Dec 2026 (expected)",
    detail: "M.S. 2024 \u00b7 Advisor: Prof. Paulette Clancy \u00b7 Dissertation: physics-informed ML for scientific discovery",
  },
  {
    degree: "B.Tech Metallurgical Engineering & Materials Science + M.Tech Data Science",
    org: "Indian Institute of Technology Bombay",
    period: "2017 \u2013 2022",
    detail: "Ranked 1st in Interdisciplinary Dual Degree Program",
  },
];

export const awards = [
  { year: "2025", title: "Kai Pan & Li Wang Graduate Fellowship", org: "Johns Hopkins University" },
  { year: "2024\u201325", title: "Donald S. Rodbell Memorial Graduate Fellowship", org: "Johns Hopkins University" },
  { year: "2024", title: "Robert B. Pond Sr. Graduate Fellowship", org: "Johns Hopkins University" },
  { year: "2023", title: "Edwin D. & Rachel Lowthian Endowed Fellowship", org: "Johns Hopkins University" },
  { year: "2022", title: "Ranked 1st, Interdisciplinary Dual Degree Program", org: "IIT Bombay" },
  { year: "2017", title: "KVPY Fellow", org: "Dept. of Science & Technology, Govt. of India" },
  { year: "2015", title: "National Talent Search Scholarship (NTSE)", org: "NCERT, Govt. of India" },
];

export const service = [
  "Teaching Assistant, 3 graduate courses (Molecular Simulations, Phase Transformations, Computational Modeling) \u2014 JHU",
  "Research Mentor \u2014 supervised 4+ undergraduate and 1 graduate researcher",
  "Lab Manager, Clancy Research Group \u2014 coordinated weekly meetings for a team of 10+",
  "International Student Representative, Materials Graduate Society, JHU",
  "Mentor, IIT Bombay SMP & DAMP programs \u2014 guided 22 students",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const pageLinks = [{ label: "Building", href: "/building" }];

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width?: number;
      height?: number;
    }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "statgrid"; stats: { value: string; label: string }[] };

export type Article = {
  slug: string;
  title: string;
  date: string;
  description: string;
  readingTime: string;
  tags: string[];
  links: { label: string; url: string }[];
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
  "slug": "macro-receipts-issue-7",
  "title": "Bitcoin lost 1.9%. The Nasdaq 100 lost 4.9%. The election rally lasted one day.",
  "description": "Week ending Nov 6: the midterm rally, Thursday's AI-regulation selloff, October's jobs report, and $1.28 billion out of US spot bitcoin funds.",
  "date": "November 9, 2026",
  "readingTime": "8 min read",
  "tags": [
    "Macro Receipts",
    "Bitcoin",
    "ETFs",
    "Data"
  ],
  "body": [
    {
      "type": "paragraph",
      "text": "Welcome back. Three charts, then the midterms, Thursday's AI selloff, the jobs report and Tesla, then the pushback. Every number is recomputed from the daily data, and the sources are at the bottom."
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-7-chart-1.png",
      "alt": "Four panels of daily closes from Oct 30 to Nov 6, 2026: bitcoin down 1.9%, Nasdaq 100 down 4.9%, S&P 500 down 2.7%, MSTR in bitcoin per share up 0.7%.",
      "caption": "Daily closes on the six US market sessions, Fri Oct 30 to Fri Nov 6, each panel in its own units. Bitcoin is the UTC daily close; stocks are the 4pm ET close. MSTR is priced in bitcoin: the 4pm ET MSTR close divided by the same date's bitcoin UTC close. Source: Yahoo Finance, retrieved Nov 8, 2026.",
      "width": 1635,
      "height": 1065
    },
    {
      "type": "paragraph",
      "text": "The Nasdaq 100 lost 4.9% on the week, the S&P 500 lost 2.7% and bitcoin lost 1.9%. The weekly closes hide the path. Through Wednesday the S&P 500 was up 1.4% and bitcoin up 4.2%, while the Nasdaq 100 was roughly flat. Then one session did the damage: on Thursday the Nasdaq 100 fell 6.4%, the S&P 500 fell 4.4% and bitcoin fell about 5.5% UTC close to UTC close. Friday steadied, with the Nasdaq 100 up 1.4% and bitcoin down 0.3%. One timestamp note before any timing read: stock closes are 4pm ET and bitcoin closes are UTC midnight, so the daily points are not the same clock moment. MSTR fell 1.2% in dollars on the week. Priced in bitcoin it rose 0.7%, so this week the stock kept pace with bitcoin."
    },
    {
      "type": "heading",
      "text": "Bitcoin vs the Mag 7, in dollars"
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-7-chart-2.png",
      "alt": "Gross dollars traded per US equity session by week: bitcoin-linked trading averaged $37.7 billion and the Magnificent 7 averaged $134.2 billion in the week of Nov 2, 2026.",
      "caption": "Average dollars traded per US equity session, by week, in billions. Sessions are NYSE trading days only, so bitcoin weekends and holidays are left out of both sides. Bitcoin-linked = BTC spot + ten US spot bitcoin funds (including IBIT) + MSTR. Gross trading, not net flows. Source: Yahoo Finance daily history, retrieved Nov 8, 2026.",
      "width": 1760,
      "height": 928
    },
    {
      "type": "paragraph",
      "text": "Gross BTC-linked trading averaged $37.7 billion per session this week, barely up from $37.2 billion the week before. The Mag 7 averaged $134.2 billion, up from $123.6 billion and the heaviest week in this series, which reaches back to late June. NVIDIA alone traded $55.6 billion on Thursday. For scale, the Mag 7 traded about 3.6 times the entire bitcoin-linked complex per session, up from 3.3 times the week before."
    },
    {
      "type": "heading",
      "text": "The worst outflow week since June"
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-7-chart-3.png",
      "alt": "Net daily US spot bitcoin fund flows, Nov 2-6, 2026, in millions: -398.6, -116.0, +74.6, -430.2, and -411.9.",
      "caption": "Net daily flows into US spot bitcoin funds, in $ millions. Source: Farside Investors, retrieved Nov 8, 2026.",
      "width": 1440,
      "height": 768
    },
    {
      "type": "paragraph",
      "text": "US spot bitcoin funds lost $1.28 billion over five sessions, their largest weekly outflow since the week ending June 26, per SosoValue's data as cited by The Crypto Times; the daily Farside table sums to the same $1.28 billion. Only Wednesday, the rally day, was positive at +$74.6 million. Monday took out $398.6 million, Thursday $430.2 million and Friday $411.9 million. BlackRock's IBIT accounted for $1.21 billion of the week's exits and was net negative all five days, including a $405.3 million withdrawal Monday that The Crypto Times called its largest single-day outflow; Fidelity's fund was net positive on the week."
    },
    {
      "type": "heading",
      "text": "Tuesday's sweep, Wednesday's relief"
    },
    {
      "type": "paragraph",
      "text": "Tuesday's midterm elections gave Democrats majorities in both houses of Congress, per the AP. Wednesday everything rallied: the S&P 500 rose 1.6%, the Dow gained about 1,500 points in what Yahoo Finance called its best day of 2026, bitcoin rose 4.0% on the UTC day, MSTR rose 5.1% and Amazon rose 6.1%. The framing across AP, CNBC and Axios was relief: the result was clear, President Trump accepted the Democratic sweep, and stocks historically do fine after midterms. The dollar slid and bond yields fell, per the Guardian."
    },
    {
      "type": "heading",
      "text": "Thursday: the AI-regulation selloff"
    },
    {
      "type": "paragraph",
      "text": "Thursday priced the other read of the same election: that the new Congress could regulate AI and slow the data-center buildout, as Reuters and MarketWatch reported it. Chip stocks led the drop. Qualcomm fell more than 9% a day after beating earnings estimates and guiding current-quarter revenue above consensus, per CNBC; NVIDIA fell 9.3%. The Nasdaq Composite sank 5.5%, its worst day since April 2025, and closed in correction territory, per Reuters. CNBC put the Mag 7's one-day market value loss at $1 trillion. All eleven S&P 500 sectors fell, with tech hit hardest, per MarketWatch. Bitcoin fell about 5.5% on the UTC day, alongside the AI trade rather than apart from it."
    },
    {
      "type": "heading",
      "text": "Tesla's political premium, repriced"
    },
    {
      "type": "paragraph",
      "text": "Tesla fell 3.3% on Wednesday even as the market rallied, then 10.8% on Thursday; the week cost it 10.4%. Reuters tied the slide to the midterm results clouding Tesla's data-center and merger outlook, and CNBC put the combined post-midterm market value loss across Tesla and SpaceX at more than $420 billion. Benzinga's week in review also noted the end of Cybertruck production. NVIDIA lost 8.8% on the week; Amazon gained 7.9% and was the only Mag 7 name up meaningfully."
    },
    {
      "type": "heading",
      "text": "Friday's hot jobs report"
    },
    {
      "type": "paragraph",
      "text": "Friday morning brought the October jobs report: 165,000 jobs added, about 100,000 more than economists expected, with unemployment slipping to 4.1% and wages stronger than forecast, per CNBC and Reuters. MarketWatch framed it as pressure on the Fed, which split 10-2 the previous week with two officials already dissenting for a hike. Stocks steadied anyway: the Nasdaq 100 rose 1.4% on Friday and Tesla bounced 4.2%. Bitcoin ended the UTC day down 0.3%."
    },
    {
      "type": "heading",
      "text": "The pushback"
    },
    {
      "type": "list",
      "items": [
        "\"Bitcoin is decoupling from tech stocks.\" This week bitcoin fell 1.9% while the Nasdaq 100 fell 4.9%. Last week it fell 2.4 times as much as the Nasdaq 100. Both weeks moved on the same political and macro news as equities. The direction is shared; only the multiplier changes.",
        "\"The ETF bid is one-way money.\" Two weeks ago the funds took in money four days straight. This week four of five sessions were outflows, $1.28 billion in total, the worst week since June per SosoValue's data, and IBIT was net negative all five days. The bid is a bid, until it is not.",
        "\"The midterms were good for markets.\" Wednesday's rally and Thursday's crash were both readings of the same election result, twenty-four hours apart. Netted together, the S&P 500 lost 2.8% across the two sessions. As a bull story, the election lasted one day.",
        "\"MSTR wins when bitcoin wins.\" Last week Strategy posted a record $19.1 billion quarterly profit and the stock fell 6.1% in bitcoin terms. This week brought no company news at all and it rose 0.7% in bitcoin terms. The premium moves on its own schedule, not the news cycle."
      ]
    },
    {
      "type": "heading",
      "text": "Next week"
    },
    {
      "type": "list",
      "items": [
        "Tuesday, Nov 10: the October CPI report at 8:30am ET, the first inflation read since the Fed's hawkish split and Friday's strong jobs report.",
        "Tuesday, Nov 17: NVIDIA reports after the close, the first AI bellwether earnings since Thursday's regulation scare."
      ]
    },
    {
      "type": "paragraph",
      "text": "Bitcoin traded near $75,000 on Sunday evening, below $76,000 all weekend. Reuters reported late Sunday that crypto was sliding to two-month lows, and fresh pressure from Binance's European closures is adding to the mood, per Investing.com. A fifth straight weekly loss is on the table."
    },
    {
      "type": "paragraph",
      "text": "Price and volume data: Yahoo Finance daily history, retrieved Nov 8, 2026. Credited, not republished. Macro Receipts is written by Instinct for Kumar."
    }
  ],
  "links": [
    {
      "label": "Originally published on Macro Receipts (Substack)",
      "url": "https://miskinkp.substack.com/p/bitcoin-lost-19-the-nasdaq-100-lost"
    },
    {
      "label": "AP on the midterm sweep and Wednesday's rally",
      "url": "https://apnews.com/article/stock-markets-ai-earnings-oil-4d12764c0b3ce38ffde3077712811182"
    },
    {
      "label": "CNBC on Wednesday's rally and Trump accepting the result",
      "url": "https://www.cnbc.com/2026/11/04/stock-market-rally-trump-midterms.html"
    },
    {
      "label": "Axios, five takeaways for investors from the blue wave",
      "url": "https://www.axios.com/2026/11/04/midterm-elections-stocks-investors"
    },
    {
      "label": "Yahoo Finance live coverage, Dow's best day of 2026",
      "url": "https://finance.yahoo.com/markets/live/stock-market-today-dow-rallies-1500-points-sp-500-nasdaq-midterm-elections-democrats-sweep-201207340.html"
    },
    {
      "label": "The Guardian on the dollar and yields after the midterms",
      "url": "https://www.theguardian.com/business/2026/nov/04/us-dollar-slides-democrats-midterm-election-win-growth-fears"
    },
    {
      "label": "CNBC on Qualcomm's earnings and Thursday's chip selloff",
      "url": "https://www.cnbc.com/2026/11/05/qualcomm-earnings-chip-stocks-election.html"
    },
    {
      "label": "CNBC on Qualcomm's Q4 numbers and guidance",
      "url": "https://www.cnbc.com/2026/11/04/qualcomm-qcom-earnings-report-q4-2026.html"
    },
    {
      "label": "Reuters on the Nasdaq's worst day in 19 months and the correction",
      "url": "https://www.investing.com/news/stock-market-news/sp-500-futures-steady-after-midterms-rally-nasdaq-lags-on-chip-weakness-5003237"
    },
    {
      "label": "CNBC on the Mag 7's $1 trillion Thursday",
      "url": "https://www.cnbc.com/2026/11/05/stock-market-selloff-ai-fears.html"
    },
    {
      "label": "MarketWatch on Thursday's close, all eleven sectors red",
      "url": "https://www.marketwatch.com/livecoverage/stock-market-today-dow-s-p-500-nasdaq-democrat-sweep-midterm-elections-rally/card/u-s-stocks-end-sharply-lower-as-nasdaq-enters-correction-xVitICpiEnyNJay19Rrk"
    },
    {
      "label": "CNBC on Tesla and SpaceX losing $420 billion after the midterms",
      "url": "https://www.cnbc.com/2026/11/05/tesla-spacex-stocks-fall-after-2026-midterms.html"
    },
    {
      "label": "Reuters on Tesla and SpaceX after the midterms",
      "url": "https://www.investing.com/news/stock-market-news/spacex-tesla-extend-losses-as-midterm-results-cloud-data-center-merger-outlook-5005412"
    },
    {
      "label": "Benzinga's week in Tesla",
      "url": "https://www.benzinga.com/markets/tech/26/11/63020098/this-week-in-tsla-elon-musk-loses-big-in-midterms-cybertruck-ends-production-and-more"
    },
    {
      "label": "CNBC on the October jobs report",
      "url": "https://www.cnbc.com/2026/11/06/jobs-report-october-2026.html"
    },
    {
      "label": "Reuters on the jobs report, 100,000 more jobs than expected",
      "url": "https://finance.yahoo.com/news/four-things-note-fridays-us-192147108.html"
    },
    {
      "label": "MarketWatch jobs-day live coverage, pressure on the Fed",
      "url": "https://www.marketwatch.com/livecoverage/october-jobs-report-today-live-updates"
    },
    {
      "label": "Farside Investors, bitcoin fund daily flows",
      "url": "https://farside.co.uk/btc/"
    },
    {
      "label": "The Crypto Times on the $1.28 billion week and the June comparison",
      "url": "https://www.cryptotimes.io/2026/11/07/bitcoin-etfs-record-1-28b-in-weekly-outflows-ethereum-loses-365m/"
    },
    {
      "label": "crypto.news on the combined bitcoin and ether ETF outflows",
      "url": "https://crypto.news/bitcoin-ether-etfs-weekly-outflows-blackrock-november/"
    },
    {
      "label": "CryptoWatchDesk's Friday ETF desk",
      "url": "https://cryptowatchdesk.com/news/etf-desk-nov-6-bitcoin-etfs-412-million-outflow-ibit-403-million-week-1-28-billion"
    },
    {
      "label": "Investing.com on bitcoin below $76,000 and Binance's EU closures",
      "url": "https://www.investing.com/news/cryptocurrency-news/bitcoin-holds-below-76k-as-binance-eu-closures-add-to-crypto-market-pressure-5010133"
    },
    {
      "label": "Reuters on crypto sliding to two-month lows late Sunday",
      "url": "https://www.investing.com/news/forex-news/cryptocurrencies-slide-to-twomonth-lows-after-us-midterms-5010335"
    },
    {
      "label": "BLS, CPI release schedule",
      "url": "https://www.bls.gov/schedule/news_release/cpi.htm"
    },
    {
      "label": "NVIDIA IR, third-quarter call announcement",
      "url": "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Sets-Conference-Call-for-Third-Quarter-Financial-Results/default.aspx"
    }
  ]
},
  {
  "slug": "macro-receipts-issue-6",
  "title": "Bitcoin lost 4.8%. The S&P lost 0.6%. The selling came Thursday and Friday.",
  "description": "Week ending Oct 30: Binance's reported $6.3 billion hack, the Fed's hawkish split, Alphabet's earnings selloff, and $643 million out of the bitcoin ETFs on Friday.",
  "date": "November 2, 2026",
  "readingTime": "8 min read",
  "tags": [
    "Macro Receipts",
    "Bitcoin",
    "ETFs",
    "Data"
  ],
  "body": [
    {
      "type": "paragraph",
      "text": "Welcome back. Three charts, then the Binance hack, the Fed, Alphabet, Amazon and MSTR, then the pushback. Every number is recomputed from the daily data, and the sources are at the bottom."
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-6-chart-1.png",
      "alt": "Four panels of daily closes on the six US market sessions, Fri Oct 23 to Fri Oct 30, 2026: bitcoin in dollars down 4.8% on the week, Nasdaq 100 down 2.0%, S&P 500 down 0.6%, and MSTR priced in bitcoin per share down 6.1%.",
      "caption": "Daily closes on the six US market sessions, Fri Oct 23 to Fri Oct 30, each panel in its own units. Bitcoin is the UTC daily close; stocks are the 4pm ET close. MSTR is priced in bitcoin: the 4pm ET MSTR close divided by the same date's bitcoin UTC close. Source: Yahoo Finance, retrieved Nov 1, 2026.",
      "width": 1760,
      "height": 1152
    },
    {
      "type": "paragraph",
      "text": "The S&P 500 lost 0.6% on the week, the Nasdaq 100 lost 2.0% and bitcoin lost 4.8%. The weekly closes hide the timing. Through Wednesday the Nasdaq 100 was up 3.0% and the S&P 500 up 1.6%; bitcoin dipped Monday and recovered by midweek. Then two sessions did the damage: the Nasdaq 100 fell 4.8% from Wednesday's close to Friday's, and bitcoin fell 5.0% from Wednesday's UTC close. One timestamp note before any timing read: stock closes are 4pm ET and bitcoin closes are UTC midnight, so the daily points are not the same clock moment. MSTR fell 10.6% in dollars on the week. Priced in bitcoin it still fell 6.1%, so the stock's drop was more than bitcoin's own."
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-6-chart-2.png",
      "alt": "Average dollars traded per US equity session by week in billions, bitcoin-linked trading (spot, ten spot bitcoin funds and MSTR) versus the Magnificent 7, weeks ending June 29 to Oct 26, 2026. Bitcoin-linked averaged $37.2 billion per session; the Mag 7 averaged $123.6 billion.",
      "caption": "Average dollars traded per US equity session, by week, in billions. Sessions are NYSE trading days only, so bitcoin weekends and holidays are left out of both sides. Bitcoin-linked = BTC spot + ten US spot bitcoin funds (including IBIT) + MSTR. Gross trading, not net flows. Source: Yahoo Finance daily history, retrieved Nov 1, 2026.",
      "width": 1760,
      "height": 928
    },
    {
      "type": "paragraph",
      "text": "Gross BTC-linked trading averaged $37.2 billion per session this week, up 14% from $32.6 billion the week before. The Mag 7 averaged $123.6 billion, up 36% from $91.2 billion and the heaviest week since late July. Alphabet alone traded $39.7 billion on Thursday, about twice its Wednesday volume. This was an equity market event first: bitcoin volumes rose, but nothing like what hit the AI names. For scale, the Mag 7 traded about 3.3 times the entire bitcoin-linked complex per session, up from 2.8 times the week before."
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-6-chart-3.png",
      "alt": "Net daily flows into US spot bitcoin funds in millions of dollars, Mon Oct 26 to Fri Oct 30, 2026: four positive days totaling $440.8 million, then a $643.2 million outflow on Friday.",
      "caption": "Net daily flows into US spot bitcoin funds, in $ millions. Source: Farside Investors, retrieved Nov 1, 2026.",
      "width": 1440,
      "height": 768
    },
    {
      "type": "paragraph",
      "text": "US spot bitcoin funds took in $440.8 million Monday through Thursday, four straight positive days. Friday took out $643.2 million in one session and turned the whole week negative at -$202.4 million. CryptoWatchDesk, reading the same Farside data, called Friday the largest single-day outflow since June 25 and put October as a whole $515.9 million in the red; The Block tied Friday's exit directly to the Binance hack disclosure the day before. BlackRock's IBIT alone lost $233.7 million on Friday, equal to about 5% of the $5.2 billion that traded in IBIT that day."
    },
    {
      "type": "heading",
      "text": "The other Thursday story: Binance's reported $6.3 billion hack."
    },
    {
      "type": "paragraph",
      "text": "While Thursday's PCE and GDP numbers landed, Binance said that about $6.3 billion of digital assets had been impacted by a security breach, per the BBC, and on Friday it confirmed hackers stole more than $6 billion, per the AP, in what the industry is calling the largest crypto theft on record. Wired reports that tracing firms suspect the North Korea-linked TraderTraitor group and that the theft itself took about 20 minutes. Binance froze assets after the breach; when withdrawals reopened over the weekend, customers pulled a net $3.64 billion, per The Block. Bitcoin fell 4.3% on Thursday, the disclosure day, and 0.7% on Friday."
    },
    {
      "type": "heading",
      "text": "The Fed held. Two officials wanted a hike."
    },
    {
      "type": "paragraph",
      "text": "Wednesday the FOMC held the funds rate at 3.75% to 4%, as widely expected. The vote was 10 to 2, and the dissents were the surprise: Governor Lisa Cook and Cleveland Fed president Beth Hammack both preferred to raise by a quarter point, per the statement. Chairman Warsh said politics played no role in the decision, with the midterm elections the following week."
    },
    {
      "type": "paragraph",
      "text": "The next morning the BEA released September PCE: headline prices up 0.5% on the month and 3.6% on the year, accelerating from 3.4% in August, with core up 3.1% on the year. The same morning, the advance estimate put third-quarter GDP growth at 3.4%, up from 2.2% in the second quarter. Inflation accelerating while growth runs hot is the combination that pushes rate hikes back onto the table; Yahoo Finance's read of the press conference was that a December hike now looks far more likely."
    },
    {
      "type": "heading",
      "text": "Alphabet's earnings selloff."
    },
    {
      "type": "paragraph",
      "text": "Alphabet reported Wednesday night: search advertising up 12% to $63.35 billion, below expectations, and negative free cash flow of $9.07 billion, far worse than the $2.7 billion analysts expected, while keeping full-year capital spending guidance at $195 to $205 billion. The stock fell 12.6% on Thursday. CNBC called it Alphabet's worst day ever, past the 11.63% record set in March 2020, erasing roughly $500 billion of market value. Microsoft reported the same night: capital spending of $45.2 billion, up 30% on the year but below the $50.67 billion analysts expected, and free cash flow down 27% to a still-positive $18.63 billion. Microsoft fell 0.2% on Thursday."
    },
    {
      "type": "heading",
      "text": "Amazon beat on the cloud and missed on the rest."
    },
    {
      "type": "paragraph",
      "text": "Thursday after the close: AWS revenue up 39% to $45.98 billion, above the $45.29 billion consensus, and Jassy said AWS growth should top 40% next year. But earnings per share of $1.89 missed the $1.96 estimate, total revenue of $201.94 billion missed by a hair, fourth-quarter guidance midpoint came in below expectations, and advertising missed. Amazon held its 2026 capital spending forecast at $220 billion and said it will spend meaningfully more in 2027. The stock fell 4.3% on Thursday with the rest of tech, then another 1.4% on Friday after its own report."
    },
    {
      "type": "heading",
      "text": "MSTR's record quarter, marked down."
    },
    {
      "type": "paragraph",
      "text": "Strategy reported Thursday: third-quarter operating income of $20.91 billion, the largest in its history and almost entirely the accounting gain on its bitcoin; net income attributable to common stockholders of $19.12 billion, or $44.75 a diluted share; holdings of 848,517 bitcoin. Michael Saylor called this \"the beginning of the next bitcoin bull market.\" The stock fell 7.8% the next day and 10.6% on the week."
    },
    {
      "type": "heading",
      "text": "The pushback."
    },
    {
      "type": "list",
      "items": [
        "\"Bitcoin is a haven from hawkish central banks.\" This week cannot settle that argument either way: bitcoin's 4.8% drop came the same week Binance disclosed a breach that the BBC and the AP called the largest crypto theft on record, so macro damage and crypto-specific damage are tangled together. What the data do say: bitcoin fell 2.4 times the Nasdaq 100's drop and 8 times the S&P 500's, and $643 million left the funds on Friday alone.",
        "\"The ETF bid is one-way money.\" Friday erased four inflow days in one session, and the week finished $202.4 million negative. The bid is a bid, until it is not.",
        "\"MSTR wins when bitcoin wins.\" MSTR posted a record $19.1 billion quarterly profit and still fell 10.6% on the week, 6.1% even measured in bitcoin. The premium to bitcoin contracted on good news.",
        "\"The market hates AI spending.\" Compare Thursday's two reporters. Alphabet fell 12.6% on negative free cash flow; Microsoft fell 0.2% with spending below estimates and cash flow positive. One way to read it: the market is not punishing the buildout, it is punishing the version that burns cash. That is an interpretation, not a measurement."
      ]
    },
    {
      "type": "heading",
      "text": "Next week."
    },
    {
      "type": "list",
      "items": [
        "Tuesday: the US midterm elections. Also the JOLTS job-openings report for September at 10am ET.",
        "Friday: the October jobs report at 8:30am ET, the first clean read on hiring since the Fed's hawkish split."
      ]
    },
    {
      "type": "paragraph",
      "text": "Bitcoin traded near $78,500 on Monday morning in Asia, its third straight day of gains, after dipping to about $77,600 late Sunday, per CoinDesk. Binance has reopened withdrawals."
    }
  ],
  "links": [
    {
      "label": "FOMC statement, October 28 (10-2 hold at 3.75-4%, Cook and Hammack dissenting for a hike)",
      "url": "https://www.federalreserve.gov/newsevents/pressreleases/monetary20261028a.htm"
    },
    {
      "label": "Yahoo Finance Fed live coverage (widely expected, December hike odds, Warsh on politics)",
      "url": "https://finance.yahoo.com/economy/policy/live/fed-meeting-live-updates-interest-rates-held-steady-in-split-vote-warsh-says-politics-played-no-role-ahead-of-midterm-elections-191946928.html"
    },
    {
      "label": "BEA, Personal Income and Outlays, September 2026 (PCE +0.5% m/m, +3.6% y/y, core +3.1%)",
      "url": "https://www.bea.gov/news/2026/personal-income-and-outlays-september-2026"
    },
    {
      "label": "BEA, GDP advance estimate, Q3 2026 (+3.4%)",
      "url": "https://www.bea.gov/news/2026/gdp-advance-estimate-3rd-quarter-2026"
    },
    {
      "label": "CNBC on Alphabet's worst day ever and Microsoft's quarter",
      "url": "https://www.cnbc.com/2026/10/29/alphabet-google-microsoft-msft-shares-today-earnings.html"
    },
    {
      "label": "CNBC on Amazon's Q3",
      "url": "https://www.cnbc.com/2026/10/29/amazon-amzn-q3-earnings-report-2026.html"
    },
    {
      "label": "Strategy Q3 2026 results press release",
      "url": "https://www.strategy.com/press/strategy-announces-third-quarter-2026-financial-results_10-29-2026"
    },
    {
      "label": "Farside Investors, bitcoin fund daily flows",
      "url": "https://farside.co.uk/btc/"
    },
    {
      "label": "CryptoWatchDesk on Friday's outflow and October's total",
      "url": "https://cryptowatchdesk.com/news/etf-desk-oct-30-bitcoin-etfs-643-million-outflow-october-ends-negative-ether-outflow-156-million"
    },
    {
      "label": "BBC on the Binance disclosure",
      "url": "https://www.bbc.com/news/articles/cwg7xp8kx4v5o"
    },
    {
      "label": "AP on the confirmed theft amount",
      "url": "https://apnews.com/article/binance-cryptocurrency-security-hack-north-korea-550e9b876550f71f07098494fe735beb"
    },
    {
      "label": "Wired on the 20-minute theft and TraderTraitor attribution",
      "url": "https://www.wired.com/story/the-dollar63-billion-binance-hack-was-pulled-off-in-just-20-minutes/"
    },
    {
      "label": "The Block on the ETF outflow and weekend withdrawals",
      "url": "https://www.theblock.co/news/markets/2026-11-01-spot-bitcoin-etfs-largest-four-months-following-binance-hack-432270"
    },
    {
      "label": "CoinDesk on Monday's price",
      "url": "https://www.coindesk.com/markets/2026/11/02/bitcoin-claws-back-toward-usd79-000-as-markets-shake-off-crypto-s-biggest-hack"
    },
    {
      "label": "AP on Friday's close",
      "url": "https://apnews.com/article/wall-street-stocks-dow-nasdaq-a01d3551e794fed1a0c317c20bc3f0a2"
    },
    {
      "label": "BLS, Employment Situation release schedule (Oct report Fri Nov 6, 8:30am ET)",
      "url": "https://www.bls.gov/schedule/news_release/empsit.htm"
    },
    {
      "label": "BLS, November release schedule (JOLTS Tue Nov 3, 10am ET)",
      "url": "https://www.bls.gov/schedule/2026/11_sched_list.htm"
    }
  ]
},
{
  "slug": "macro-receipts-issue-5",
  "title": "Bitcoin lost 0.5%. The Nasdaq lost 0.8%. That hides the whole week.",
  "date": "October 26, 2026",
  "description": "Week ending Oct 23: Meta and Tesla earnings, the AI trade's split, and what the full week of bitcoin ETF flows actually says.",
  "readingTime": "8 min read",
  "tags": [
    "Macro Receipts",
    "Bitcoin",
    "ETF flows",
    "Data"
  ],
  "links": [
    {
      "label": "Yahoo Finance daily price and volume history (retrieved October 25, 2026)",
      "url": "https://finance.yahoo.com/"
    },
    {
      "label": "CNBC, Oct 21: Tesla Q3 2026 earnings",
      "url": "https://www.cnbc.com/2026/10/21/tesla-tsla-q3-2026-earnings-report.html"
    },
    {
      "label": "CNBC, Oct 22: Meta Q3 earnings and negative free cash flow",
      "url": "https://www.cnbc.com/2026/10/22/meta-stock-q3-earnings-free-cash-flow.html"
    },
    {
      "label": "CNBC, Oct 23: Next week brings major risks for the stock market",
      "url": "https://www.cnbc.com/2026/10/23/next-week-brings-major-risks-for-the-stock-market-just-as-the-ai-trade-keeps-faltering.html"
    },
    {
      "label": "Reuters via Investing.com: Nasdaq futures drop as AI worries resurface, oil climbs",
      "url": "https://www.investing.com/news/stock-market-news/nasdaq-futures-drop-over-1-as-ai-worries-resurface-oil-climbs-4965180"
    },
    {
      "label": "CoinDesk, Oct 22: Bitcoin ETFs attract $1.08 billion in 3 days",
      "url": "https://www.coindesk.com/markets/2026/10/22/bitcoin-etfs-attract-usd1-08-billion-in-3-days-but-it-may-not-be-enough-for-a-steep-rally"
    },
    {
      "label": "CoinDesk, Oct 24: Crypto under weekend pressure, bitcoin slides below $80,000",
      "url": "https://www.coindesk.com/markets/2026/10/24/crypto-under-weekend-pressure-bitcoin-slides-below-usd80-000-on-u-s-middle-east-evacuations"
    },
    {
      "label": "CryptoBriefing, Oct 23: Spot bitcoin ETFs shed $635 million on October 22",
      "url": "https://cryptobriefing.com/spot-bitcoin-etfs-635-million-outflows-october-22/"
    },
    {
      "label": "TFTC: October 2026 bitcoin ETF flow table",
      "url": "https://www.tftc.io/bitcoin-etf-flows/october-2026"
    },
    {
      "label": "TIKR, Oct 17: Strategy stock fell nearly 10% after MSCI's index decision",
      "url": "https://www.tikr.com/blog/strategy-stock-fell-nearly-10-in-a-day-after-mscis-index-decision-heres-what-has-to-happen-before-november-11"
    },
    {
      "label": "news.bitcoin.com, Oct 26: full-week ETF flow tally",
      "url": "https://news.bitcoin.com/bitcoin-etf/blackrock-drives-305m-bitcoin-etf-comeback-with-676m-inflow/"
    },
    {
      "label": "FXStreet/Farside, Oct 26: Bitcoin ETFs break 2-week outflow streak",
      "url": "https://www.fxstreet.com/cryptocurrencies/news/bitcoin-etfs-break-2-week-outflow-streak-with-301m-comeback-202610261141"
    }
  ],
  "body": [
    {
      "type": "paragraph",
      "text": "Welcome back. Three charts, then what Meta and Tesla did, then the pushback. Every number is recomputed from the daily data, and the sources are at the bottom."
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-5-chart-1.png",
      "alt": "Four panels of daily closes on the six US market sessions, Fri Oct 16 to Fri Oct 23, 2026: bitcoin in dollars down 0.5% on the week, Nasdaq 100 down 0.8%, S&P 500 down 0.5%, and MSTR priced in bitcoin per share up 7.3%.",
      "caption": "Daily closes on the six US market sessions, Fri Oct 16 to Fri Oct 23, each panel in its own units. Bitcoin is the UTC daily close; stocks are the 4pm ET close. MSTR is also priced in bitcoin: the 4pm ET MSTR close divided by the same date's bitcoin UTC close. Source: Yahoo Finance, retrieved Oct 25, 2026.",
      "width": 1760,
      "height": 1184
    },
    {
      "type": "paragraph",
      "text": "The Nasdaq 100 lost 0.8% on the week, the S&P 500 lost 0.5% and bitcoin lost 0.5%. The closes say nothing happened. The path says otherwise: by Wednesday the Nasdaq 100 was up 2.2%, bitcoin was up 3.1% and MSTR was up 12.2%. Thursday erased most of it. MSTR still finished up 6.7%, a week after it fell 9.6% in a day on MSCI's new index rules."
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-5-chart-2.png",
      "alt": "Average dollars traded per US equity session by week in billions, bitcoin-linked trading (spot, ten spot bitcoin funds and MSTR) versus the Magnificent 7, recent weeks to Oct 23, 2026. Bitcoin-linked averaged $32.6 billion, 35.8% of the Mag 7.",
      "caption": "Average dollars traded per US equity session, by week, in billions. Sessions are NYSE trading days only, so bitcoin weekends and holidays are left out of both sides. Bitcoin-linked = BTC spot + ten US spot bitcoin funds (including IBIT) + MSTR. Gross trading, not net flows. Source: Yahoo Finance daily history, retrieved Oct 25, 2026.",
      "width": 1440,
      "height": 768
    },
    {
      "type": "paragraph",
      "text": "Bitcoin-linked trading averaged $32.6 billion per session this week: $27.8 billion in spot, $2.69 billion in MSTR and $2.15 billion across the ten funds. The Mag 7 averaged $91.2 billion, down 2.0% from last week."
    },
    {
      "type": "paragraph",
      "text": "That makes bitcoin-linked trading 35.8% of the Mag 7, down from 39.6% last week and below the 13-week average of 39.9%. It was also 11.4% under last week, 15.8% under its own 12-week average and 28% under the $45.1 billion 200-session average. This was the quietest week for bitcoin-linked trading since early September. The busiest session was Thursday, the down day, at $38.9 billion."
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-5-chart-3.png",
      "alt": "Scatter of daily bitcoin versus Nasdaq 100 percent moves over the last 250 US sessions to Oct 23, 2026, with this week's five sessions marked; daily correlation 0.44.",
      "caption": "One dot per US session, last 250 sessions to Oct 23, 2026. Dark dots are this week. Bitcoin is the UTC close, which lands 4 hours after the Nasdaq close. Source: Yahoo Finance.",
      "width": 1200,
      "height": 800
    },
    {
      "type": "paragraph",
      "text": "Over the last 250 sessions the daily correlation between bitcoin and the Nasdaq 100 is 0.44, and bitcoin has moved about 0.97% for each 1% in the Nasdaq 100. This week's five dots sit inside the usual cloud, including Thursday: Nasdaq 100 down 2.9%, bitcoin down 3.2%. Over overlapping five-session windows the fitted line has a slope of 0.83 and a drift term of -0.7 points. For this week's 0.8% Nasdaq 100 drop it predicts about 1.3% down for bitcoin. Bitcoin fell 0.5%. Slightly better than the pattern, nothing like a decoupling. Across the 250 sessions, the Nasdaq 100 fell 2% or more on 12 days and bitcoin fell on 11 of them, 3.0% on average."
    },
    {
      "type": "heading",
      "text": "The pushback: \"institutions are dumping bitcoin\""
    },
    {
      "type": "paragraph",
      "text": "Thursday's headline was that US spot bitcoin ETFs shed $635 million, the biggest one-day outflow of October. Some reads stopped there. The same data set says something softer:"
    },
    {
      "type": "list",
      "items": [
        "The three days before that brought in $1.08 billion (CoinDesk). Wednesday alone added about $528 million, with $235 million into IBIT and $212.7 million into Fidelity's fund.",
        "Thursday's $635 million took out about $254 million from IBIT. On those numbers the week through Thursday still nets out positive, at roughly +$445 million.",
        "Against $100 to $109 billion held across the funds, one $635 million day is about 0.6% of assets (CryptoBriefing). Friday brought another $138 million of outflows, and October as a whole is now moderately negative: about $314 million of net outflows through Friday (Farside Investors data).",
        "The price held the $81,000 area through Friday's close. On Saturday bitcoin slid under $80,000, its weakest level in over a month, as news broke of US evacuations across the Middle East; CoinDesk reported the slide alongside that news, citing WSJ reporting on the evacuations. Sunday evening bitcoin was around $79,900 on Yahoo."
      ]
    },
    {
      "type": "paragraph",
      "text": "The full week, Monday through Friday, still netted positive: about +$305 million across the five sessions, because the first three days brought in more than the last two took out (news.bitcoin.com's daily tally; Farside-based counts put the week at $301 million)."
    },
    {
      "type": "heading",
      "text": "What Meta and Tesla did"
    },
    {
      "type": "paragraph",
      "text": "Both reported Wednesday after the close, and the market took the two reports in opposite directions on the week."
    },
    {
      "type": "paragraph",
      "text": "Meta beat on revenue: $64.6 billion, up 26% on the year, against $63.4 billion expected. The problem was the cost of the AI build-out: free cash flow went negative at -$2.12 billion, the first negative quarter in more than a decade, and the company raised the floor of its full-year capex guidance to $135 billion from $130 billion. It also announced a new class of nonvoting shares to help finance the spending. The stock fell 7.0% Thursday and 9.4% on the week, and the cost of insuring Meta's debt hit a record (CNBC)."
    },
    {
      "type": "paragraph",
      "text": "Tesla beat modestly: 48 cents a share against 43 cents expected, revenue of $28.05 billion against $27.9 billion expected. Underneath, automotive revenue fell 3%, net income fell 29% to $787 million, capex more than doubled to $3.73 billion and free cash flow fell 62% to $1.53 billion. The stock dropped 3.1% Thursday with everything else, but finished the week up 4.9% (CNBC)."
    },
    {
      "type": "paragraph",
      "text": "One way to read the week: AI spending with no cash flow behind it got punished, and AI spending with some got tolerated. That is one week and one interpretation, not a rule. CNBC's own read was that Meta's results unnerved investors worried about the sustainability of AI spending plans. Alphabet and Microsoft report Wednesday, Amazon Thursday, and those three test whether the split holds. Alphabet fell 6.0% this week going into its report."
    },
    {
      "type": "heading",
      "text": "The week ahead"
    },
    {
      "type": "list",
      "items": [
        "Wednesday 2pm ET: the Fed's decision, wrapping its Oct 27-28 meeting. A hold at 3.75% to 4.00% is widely expected, with Chair Kevin Warsh taking the press conference. Inflation has been moving away from the Fed's 2% target, but a weak September jobs report and patient signals from Fed officials have curbed expectations of a hike (CNBC). September PCE inflation follows Thursday morning; core is expected at 3.1% on the year, up from 3.0%.",
        "Earnings: 163 S&P 500 companies report, including Alphabet and Microsoft on Wednesday and Amazon on Thursday (CNBC).",
        "Strategy's investor materials set its next tests for October 28 and 29, after MSCI's rule change put its index membership in question. The final MSCI list lands November 11 (TIKR).",
        "Oil is the wild card. Brent settled at $116.72 Friday, up 6.2% on the week, after Houthi strikes on Saudi targets sent crude to a five-month high (Reuters). On Saturday the US began evacuating personnel across the Middle East (WSJ reporting, cited by CoinDesk).",
        "Gold futures fell 4.1% on the week to $4,008 and dipped under $4,000 intraday Friday, touching $3,989.10. The 10-year yield ended at 4.99%, down 11bp on the week, with a 19bp drop on Thursday."
      ]
    }
  ]
},
{
  "slug": "macro-receipts-issue-4",
  "title": "Tech fell 5.5%. Bitcoin fell 1.3%. That is not decoupling.",
  "date": "October 19, 2026",
  "description": "Week ending Oct 16: the CPI aftermath, bitcoin vs the Mag 7 in dollars, and a fix to Issue 3.",
  "readingTime": "8 min read",
  "tags": [
    "Macro Receipts",
    "Bitcoin",
    "CPI",
    "Data"
  ],
  "links": [
    {
      "label": "Yahoo Finance daily price and volume history (retrieved October 18, 2026)",
      "url": "https://finance.yahoo.com/"
    },
    {
      "label": "CNBC, Oct 14: Consumer prices rose 3.7% annually in September as gas prices skyrocket",
      "url": "https://www.cnbc.com/2026/10/14/cpi-inflation-report-september-2026.html"
    },
    {
      "label": "CNBC, Oct 16: U.S. Treasury yields waver as traders wrap up volatile week",
      "url": "https://www.cnbc.com/2026/10/16/us-treasury-yields-investors-hot-inflation-data-.html"
    },
    {
      "label": "CNBC, Oct 16: U.S. crude oil tops $100 as Iran escalates Hormuz attacks",
      "url": "https://www.cnbc.com/2026/10/16/oil-price-today-iran-strait-hormuz-ukraine-russia.html"
    },
    {
      "label": "NBC News, Oct 16: Tech stocks erase $1 trillion of wealth as oil surges to $110",
      "url": "https://www.nbcnews.com/business/energy/oil-prices-hormuz-iran-ukraine-rcna603919"
    },
    {
      "label": "Investing.com, Oct 16: Nasdaq notches worst week since late June with a 4.5% slide",
      "url": "https://www.investing.com/news/stock-market-news/nasdaq-futures-edge-lower-as-ai-spending-fed-rate-concerns-weigh-4952930"
    },
    {
      "label": "Yahoo Finance, Oct 16: Strategy stock falls 10% as Michael Saylor's bitcoin giant faces index-level threat",
      "url": "https://finance.yahoo.com/markets/crypto/article/strategy-stock-falls-10-as-michael-saylors-bitcoin-giant-faces-index-level-threat-193944684.html"
    },
    {
      "label": "Decrypt: Bitcoin ETFs shed nearly $1 billion in two weeks",
      "url": "https://decrypt.co/381246/bitcoin-etfs-shed-nearly-1-billion-two-weeks-uptober-red"
    },
    {
      "label": "CNBC, Oct 13: Bank earnings October 2026: Live updates",
      "url": "https://www.cnbc.com/2026/10/13/bank-earnings-live-updates.html"
    },
    {
      "label": "AP, Oct 13: JPMorgan, Citi, Goldman and Wells Fargo earnings",
      "url": "https://apnews.com/article/jpmorgan-citi-goldman-wells-banks-earnings-bonds-f3e3daf4ebed0e99a744aa7bac5e86ee"
    },
    {
      "label": "AP, Oct 16: Fed chair Warsh pledges price stability but avoids hints about rates",
      "url": "https://apnews.com/article/us-economy-warsh-fed-ai-imf-4c80750c113a82a464a46f58a4fdab43"
    },
    {
      "label": "CNBC, Oct 18: Meta, Tesla earnings preview: Week of Oct. 19",
      "url": "https://www.cnbc.com/2026/10/18/meta-tesla-netflix-earnings-preview.html"
    },
    {
      "label": "Investopedia: What to expect in markets this week",
      "url": "https://www.investopedia.com/what-to-expect-in-markets-this-week-meta-tesla-report-airlines-streaming-giants-results-also-due-earnings-12173877"
    }
  ],
  "body": [
    {
      "type": "paragraph",
      "text": "Welcome back. Three charts this week, then what CPI did, which is what I promised last Monday. Every number is recomputed from the daily data, and the sources are at the bottom."
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-4-chart-1.png",
      "alt": "Indexed lines from the Fri Oct 9 close = 100 across the week ending Oct 16, 2026. Gold futures ends down 0.8%, bitcoin down 1.3%, the S&P 500 down 1.9%, the Nasdaq 100 down 5.5%, and MSTR down 11.3%. Annotations mark Wednesday's hotter-than-forecast CPI and Friday's MSCI index rule news.",
      "caption": "Fri Oct 9 close = 100. US session dates. Bitcoin is the UTC daily close. Source: Yahoo Finance, retrieved Oct 18, 2026.",
      "width": 1460,
      "height": 880
    },
    {
      "type": "paragraph",
      "text": "The Nasdaq 100 lost 5.5% on the week and the S&P 500 lost 1.9%. Bitcoin fell 1.3%. MSTR, the company that holds a pile of it, fell 11.3%, including 9.6% on Friday alone."
    },
    {
      "type": "heading",
      "text": "Bitcoin vs the Mag 7, in dollars"
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-4-chart-2.png",
      "alt": "Stacked bars of weekly average dollars traded per US session in bitcoin spot, spot bitcoin funds and MSTR, with the Magnificent 7 as a line, April to October 2026. Bitcoin-linked trading is $36.8 billion per session this week against $93.0 billion for the Mag 7. A lower panel shows bitcoin-linked trading at 40% of the Mag 7.",
      "caption": "Average dollars traded per US equity session, by week, in billions. Sessions are NYSE trading days only, so bitcoin weekends and holidays are left out of both sides. Bitcoin-linked = BTC spot + ten US spot bitcoin funds (including IBIT) + MSTR. Gross trading, not net flows. Source: Yahoo Finance daily history, retrieved Oct 18, 2026.",
      "width": 1460,
      "height": 1200
    },
    {
      "type": "paragraph",
      "text": "Bitcoin-linked trading averaged $36.8 billion per session this week: $31.9 billion in spot, $2.92 billion in MSTR, and $1.97 billion across the funds, of which IBIT was $1.63 billion. The Mag 7 averaged $93.0 billion, up 8.1% from last week."
    },
    {
      "type": "paragraph",
      "text": "That makes bitcoin-linked trading 39.6% of the Mag 7, down from 44.5% last week and about even with the 13-week average of 39.1%. The bars say the same thing without the ratio. Bitcoin-linked trading was 3.8% below last week and 3.7% below its own 12-week average, and $36.8 billion is about 20% under the $46.1 billion 200-session average I used in Issue 2. The funds were the quiet part, 20% below their 12-week average. MSTR was 2.2% above its. The busiest session was Thursday, at $47.6 billion."
    },
    {
      "type": "heading",
      "text": "The pushback: \"bitcoin decoupled from tech\""
    },
    {
      "type": "paragraph",
      "text": "I saw this line a few times after Friday. Bitcoin fell 1.3% while the Nasdaq 100 fell 5.5%, so the story goes that bitcoin has cut the cord. The data does not say that."
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-4-chart-3.png",
      "alt": "Scatter plot of 250 US sessions. The horizontal axis is the Nasdaq 100 daily move in percent, the vertical axis is bitcoin's move over the same sessions. A dashed line shows bitcoin moving about 0.98% for each 1% in the Nasdaq 100. This week's dark dots cluster near zero on both axes, labeled 10-12 through 10-16.",
      "caption": "One dot per US session, last 250 sessions to Oct 16, 2026. Dark dots are this week. Bitcoin is the UTC close, which lands 4 hours after the Nasdaq close. Source: Yahoo Finance.",
      "width": 1460,
      "height": 980
    },
    {
      "type": "list",
      "items": [
        "Over the last 250 sessions, the daily correlation between bitcoin and the Nasdaq 100 is 0.44. Bitcoin has moved about 0.98% for each 1% in the Nasdaq 100.",
        "Over overlapping five-session windows the fitted line has a slope of 0.85 and a drift term of -0.8 points, because bitcoin has been trending down over this stretch. For a 5.5% Nasdaq 100 drop it predicts about 5.4% down for bitcoin. Drop the drift term and it is still about 4.7%. Bitcoin fell 1.3%. So it did hold up better than usual.",
        "But it fell on both big Nasdaq days this week: 1.8% on Wednesday (Nasdaq 100 down 2.0%) and 0.8% on Friday (down 2.5%). Across the 250 sessions, the Nasdaq 100 fell 2% or more on 11 days, and bitcoin fell on 10 of them, 3.0% on average.",
        "In earlier five-session windows where the Nasdaq 100 fell 4% or more, bitcoin averaged about 8.9% down (12 windows, which overlap). Only one, the week of Jul 17 at 0.4% down, held up better than this week."
      ]
    },
    {
      "type": "paragraph",
      "text": "So: a smaller drop, same direction. One limit of this data: bitcoin's daily close is 4 hours after the stock close, so the two moves do not cover identical hours. Sunday evening bitcoin was around $82,400 on Yahoo, which is a bounce, but it is one week."
    },
    {
      "type": "heading",
      "text": "What CPI did"
    },
    {
      "type": "paragraph",
      "text": "Wednesday's September CPI came in hot. Headline was +0.6% on the month and 3.7% on the year, against 0.6% and 3.6% expected. Core was +0.3% and 2.6%, against 0.2% and 2.5% (CNBC). Gasoline rose 9.1% on the month and was about half of the headline gain. The Fed raised 25bp in September, to 3.75%-4%, and its next meeting is Oct 27 and 28."
    },
    {
      "type": "paragraph",
      "text": "Wednesday's moves, against Tuesday's closes: Nasdaq 100 down 2.0%, S&P 500 down 1.1%, gold down 1.7%, MSTR down 5.9%, bitcoin down 1.8%. The 10-year yield jumped when the number hit, then closed at 5.19%, 3bp lower on the day."
    },
    {
      "type": "paragraph",
      "text": "Thursday's PPI was worse: +6.3% on the year against 5.5% expected (CNBC). Fed Chair Warsh would not signal on rates: \"I don't prejudge meetings,\" he said Thursday (CNBC, AP)."
    },
    {
      "type": "heading",
      "text": "Scorecard"
    },
    {
      "type": "table",
      "head": [
        "",
        "Last",
        "Change"
      ],
      "rows": [
        [
          "Gold futures",
          "$4,181",
          "Week -0.8%, year to date -3.7%. 21.4% below the Jan 29 high of $5,318."
        ],
        [
          "10-year Treasury yield",
          "5.10%",
          "Week -15bp, year to date +93bp."
        ],
        [
          "Dollar index",
          "101.84",
          "Week -0.4%, year to date +3.6%."
        ],
        [
          "S&P 500",
          "7,659",
          "Week -1.9%, year to date +11.9%. 2.0% below the Oct 6 high."
        ],
        [
          "Nasdaq 100",
          "29,188",
          "Week -5.5%, year to date +15.6%. 6.5% below the Oct 6 high."
        ],
        [
          "Russell 2000",
          "2,721",
          "Week -3.1%, year to date +9.7%."
        ],
        [
          "Bitcoin",
          "$81,501",
          "Week -1.3% to the Friday close, year to date -6.9%. Sunday evening (PT) it was about $82,400."
        ],
        [
          "WTI crude",
          "$101.41",
          "Week +10.4%, year to date +76.6%. Brent closed at $109.86."
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "*Friday Oct 16 closes. Week is versus the Oct 9 close, year to date versus the Dec 31 close. Yields in basis points (bp). Bitcoin is the UTC daily close, as on the charts. Source: Yahoo Finance daily data.*"
    },
    {
      "type": "heading",
      "text": "Bonds and the Fed"
    },
    {
      "type": "paragraph",
      "text": "The 10-year closed at 5.10%, 15bp below last Friday's 5.24%, even with the hot CPI and PPI. For the year it is still up 93bp. The Fed meets Oct 27 and 28."
    },
    {
      "type": "heading",
      "text": "Gold"
    },
    {
      "type": "paragraph",
      "text": "Gold futures closed at $4,181, down 0.8% on the week and 21.4% below its January high. It fell 1.7% on CPI day, which is the opposite of the safe-haven story. This year it has traded against yields, and a hot print that points to higher rates hurts it."
    },
    {
      "type": "heading",
      "text": "Bitcoin"
    },
    {
      "type": "paragraph",
      "text": "Bitcoin closed Friday at $81,501 (UTC), down 1.3% on the week, 6.9% below where the year started, and down 2.5% for October. It briefly slipped under $80,000 on Thursday (Decrypt). Saturday closed at $81,382."
    },
    {
      "type": "paragraph",
      "text": "A correction to Issue 3: I wrote that bitcoin was 28.4% below \"last October's close high of $115,271\". That number is the Oct 13, 2025 close, the highest close in the 52-week window I used, not the record. The record close in Yahoo's full BTC-USD history (back to 2014) is $124,753 on Oct 6, 2025. On Issue 3's own date, the Oct 9 close of $82,546 was 33.8% below it. Today's $81,501 is 34.7% below. Sorry for the mistake."
    },
    {
      "type": "paragraph",
      "text": "US spot bitcoin ETFs lost $228.6 million this week, after $681.1 million the week before (SoSoValue via Decrypt). Wednesday was the worst day, at $261.4 million out. That is about $615 million out for October so far, in a month people call Uptober. Trackers differ slightly on flows, so treat the exact figures as approximate."
    },
    {
      "type": "paragraph",
      "text": "On MSTR: it closed at $136.83, down 11.3% on the week. Friday it dropped 9.6% on $4.35 billion traded, against a $2.56 billion Monday-to-Thursday average. The trigger was a Yahoo Finance report that MSCI's new rules could remove \"non-operating\" companies like Strategy from its indexes. The final list comes Nov 11, effective after the close on Nov 30. Fundstrat's Sean Farrell estimates around $2 billion of selling across MSCI-linked products, and thinks the market can absorb it (one analyst's estimate, see Notes). IBIT closed at $46.15, down 0.9%."
    },
    {
      "type": "heading",
      "text": "US tech"
    },
    {
      "type": "paragraph",
      "text": "The Nasdaq 100 fell 5.5% to 29,188. The Nasdaq composite fell 4.5%, its worst week since late June (Investing.com). Tech stocks lost more than $1 trillion on Friday alone, and the Philadelphia semiconductor index fell for an eighth straight day, the longest streak since 2008 (NBC). Memory chips led it down after a report of a Chinese advance in memory: Micron down 14.6%, Samsung 17.8% and SK Hynix 24.3% on the week (Investing.com, single source)."
    },
    {
      "type": "paragraph",
      "text": "Nvidia fell 6.6% to $214.13, Tesla 7.3% to $354.72, Amazon 4.7%, Alphabet 3.1%, Meta 1.3% to $709.33 and Microsoft 1.1% to $529.05. Apple rose 2.0% to $343.46."
    },
    {
      "type": "paragraph",
      "text": "Oil did not help. Brent closed at $109.86, its highest close since May 19, and WTI rose 10.4% on the week. Nine or more ships have been attacked near Hormuz since last Sunday, and Hormuz exports run at about 70% of prewar levels (Kpler via CNBC). JPMorgan reported Q3 EPS of $5.57, a miss against analyst estimates of $5.90 (CNBC, LSEG) to $5.93 (AP)."
    },
    {
      "type": "heading",
      "text": "This week"
    },
    {
      "type": "list",
      "items": [
        "Tue, Oct 20: GM earnings.",
        "Wed, Oct 21: Meta and Tesla earnings.",
        "About 70 S&P 500 companies report this week. Alphabet, Microsoft and Amazon report the following week, and Apple on Nov 2."
      ]
    },
    {
      "type": "paragraph",
      "text": "With Meta and Tesla both down on the week going into earnings, the Mag 7 line on Chart 2 should get interesting. I will check the dollars again next Monday."
    },
    {
      "type": "heading",
      "text": "The close"
    },
    {
      "type": "paragraph",
      "text": "That is issue four. If a number is wrong, reply and tell me. I read every reply and fix mistakes in the open, like the one above. Next Monday: what the Meta and Tesla reports did to all of this."
    },
    {
      "type": "paragraph",
      "text": "Kumar"
    },
    {
      "type": "heading",
      "text": "Sources and method"
    },
    {
      "type": "list",
      "items": [
        "Prices and volumes: Yahoo Finance daily history for BTC-USD, MSTR, IBIT, FBTC, ARKB, BITB, GBTC, BTCO, HODL, BRRR, EZBC, BTCW, NVDA, MSFT, AAPL, GOOGL, AMZN, META and TSLA, plus index, gold, oil, dollar and yield series, retrieved Oct 18, 2026 (finance.yahoo.com). Dollar volume = daily close times share volume (BTC-USD volume is already in dollars). Unofficial source, credited. The record-close check uses the full BTC-USD daily history.",
        "Matched sessions: only dates when US equities traded; each weekly average is per session. Gross trading across all channels overlaps and is not net flows.",
        "Correlation, slope and window figures are my calculations from the same Yahoo daily data.",
        "CPI figures, the Fed's September hike and the Oct 27-28 meeting: CNBC, Oct 14, \"Consumer prices rose 3.7% annually in September as gas prices skyrocket\"",
        "PPI, 10-year yield and Warsh's comments: CNBC, Oct 16, \"U.S. Treasury yields waver as traders wrap up volatile week\"",
        "Brent close, Hormuz attacks and exports: CNBC, Oct 16, \"U.S. crude oil tops $100 as Iran escalates Hormuz attacks\"",
        "Tech selloff and semiconductor streak: NBC News, Oct 16, \"Tech stocks erase $1 trillion of wealth as oil surges to $110\"",
        "Nasdaq composite week and memory-chip losses: Investing.com, Oct 16, \"Nasdaq notches worst week since late June with a 4.5% slide\"",
        "MSCI rules, Strategy and the Fundstrat estimate: Yahoo Finance, Oct 16, \"Strategy stock falls 10% as Michael Saylor's bitcoin giant faces index-level threat\"",
        "ETF flows and the $80,000 dip: Decrypt, \"Bitcoin ETFs shed nearly $1 billion in two weeks\"",
        "JPMorgan results: CNBC, Oct 13, \"Bank earnings October 2026: Live updates\" and AP, Oct 13",
        "Warsh: AP, Oct 16, \"Fed chair Warsh pledges price stability but avoids hints about rates\"",
        "Week ahead: CNBC, Oct 18, \"Meta, Tesla earnings preview: Week of Oct. 19\" and Investopedia"
      ]
    },
    {
      "type": "paragraph",
      "text": "*Not investment advice. Charts and numbers are for information only.*"
    }
  ]
},
{
  "slug": "macro-receipts-issue-3",
  "title": "Bitcoin fell 2.3%. Its volume says less than you think.",
  "date": "October 12, 2026",
  "description": "A quieter week for bitcoin, the Mag 7 comparison, and why trading volume says more about the size of a move than its direction.",
  "readingTime": "7 min read",
  "tags": [
    "Macro Receipts",
    "Bitcoin",
    "Liquidity",
    "Data"
  ],
  "links": [
    {
      "label": "Yahoo Finance daily price and volume history (retrieved October 10, 2026)",
      "url": "https://finance.yahoo.com/"
    },
    {
      "label": "Yahoo equity column definitions",
      "url": "https://finance.yahoo.com/quote/MSFT/history/?fr=sycsrp_catchall"
    },
    {
      "label": "Yahoo crypto provider",
      "url": "https://coinmarketcap.com/academy/article/how-yahoo-finance-powers-its-crypto-data-with-coinmarketcap-api"
    }
  ],
  "body": [
    {
      "type": "paragraph",
      "text": "*Macro Receipts, Issue 3. Week ending Friday, Oct 9, 2026. Bitcoin and weekend news as of Sunday Oct 11. Originally published on Oct 12, 2026. Corrected Oct 19, 2026: the bitcoin drawdown below cited a close high of $115,271 (Oct 13, 2025) instead of the record close of $124,753 (Oct 6, 2025). It was 33.8% below the record, not 28.4% below the lower figure. See Issue 4.*"
    },
    {
      "type": "heading",
      "text": "Bitcoin vs the Mag 7, in dollars"
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-3-chart-1.svg",
      "alt": "Stacked bars of weekly average dollars traded per US session in bitcoin spot, spot bitcoin funds and MSTR, with the Magnificent 7 as a line, April to October 2026. Bitcoin-linked trading is $38.3 billion per session this week against $85.9 billion for the Mag 7. A lower panel shows bitcoin-linked trading at 45% of the Mag 7.",
      "caption": "Average dollars traded per US equity session, by week, in billions. Sessions are NYSE trading days only, so bitcoin weekends and holidays are left out of both sides. Bitcoin-linked = BTC spot + ten US spot bitcoin funds (including IBIT) + MSTR. Gross trading, not net flows. Source: Yahoo Finance daily history, retrieved Oct 10, 2026.",
      "width": 1600,
      "height": 1152
    },
    {
      "type": "paragraph",
      "text": "This week bitcoin-linked trading averaged $38.3 billion per session: $33.0 billion in spot, $3.05 billion in MSTR, and $2.21 billion across the funds, of which IBIT was $1.82 billion. The Mag 7 averaged $85.9 billion, and Nvidia alone $24.2 billion."
    },
    {
      "type": "paragraph",
      "text": "The ratio looks like a bitcoin win: bitcoin-linked trading was 45% of the Mag 7, against 38% over the last 13 weeks. Read the bars before you celebrate. Bitcoin-linked trading was 1.6% above its own 12-week average. The Mag 7 was 13.7% below its. The gap narrowed because the big stocks cooled, not because bitcoin picked up. And $38.3 billion is 17% under the $46.1 billion per-session average I used in Issue 2 for the past 200 sessions."
    },
    {
      "type": "heading",
      "text": "The pushback"
    },
    {
      "type": "image",
      "src": "/writing/macro-receipts-issue-3-chart-2.svg",
      "alt": "Scatter plot of 250 US sessions. The horizontal axis is the size of bitcoin's daily price move in percent, the vertical axis is bitcoin-linked dollars traded. Dots rise to the right. Green dots are up days and red dots are down days, mixed throughout.",
      "caption": "One dot per US session, last 250 sessions to Oct 9, 2026. Price move is UTC close to close. Labeled dots are this week. Source: Yahoo Finance.",
      "width": 1600,
      "height": 896
    },
    {
      "type": "paragraph",
      "text": "The line you will read this week is that bitcoin is sliding on \"low volume\". It was a quiet week, and the ETFs did lose money: US spot funds shed $484.9 million on Wednesday and about $244 million on Thursday, per The Crypto News, citing fund flow data. But volume is not a direction signal."
    },
    {
      "type": "paragraph",
      "text": "In the last 250 sessions, the 25 biggest price moves (about 4.4% or more in either direction) averaged $81 billion of bitcoin-linked trading. Every other session averaged $50 billion. Of those 25 days, 14 were up and 11 were down. Volume follows how far the price moves, not which way. The size of the move explains about a quarter of the swings in volume (R squared 0.25). So low volume mostly says the week was calm. It was a 2.3% drop with one session, Thursday, above $50 billion ($52.9 billion, with bitcoin down 1.9%)."
    },
    {
      "type": "paragraph",
      "text": "Fair warning on the other side: the busiest 25 sessions of the year skew down, 16 down to 9 up, and that window includes last October's crash. Volume spikes are more often a selloff than a rally. Even so, \"volume has to come back before it can rise\" is a story, not a test."
    },
    {
      "type": "heading",
      "text": "Scorecard"
    },
    {
      "type": "table",
      "head": [
        "",
        "Last",
        "Change"
      ],
      "rows": [
        [
          "Gold futures",
          "$4,216",
          "Week +1.3%, year to date -2.9%"
        ],
        [
          "10-year Treasury yield",
          "5.24%",
          "Week -3bp, year to date +108bp"
        ],
        [
          "Dollar index",
          "102.21",
          "Week +0.3%, year to date +4.0%"
        ],
        [
          "S&P 500",
          "7,811.5",
          "Week +1.2%, year to date +14.1%. Record close Tuesday."
        ],
        [
          "Nasdaq 100",
          "30,883",
          "Week +0.2%, year to date +22.3%. Record close Tuesday."
        ],
        [
          "Russell 2000",
          "2,807",
          "Week -0.9%, year to date +13.1%"
        ],
        [
          "Bitcoin",
          "$82,546",
          "Week -2.3% to Fri close, year to date -5.7%. Sunday evening (PT) price was about $83,750."
        ],
        [
          "WTI crude",
          "$91.85",
          "Week +0.8%, year to date +60.0%"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "*Friday Oct 9 closes. Week is versus the Oct 2 close, year to date versus the Dec 31 close. Yields in basis points (bp). Bitcoin is the UTC daily close, as on the charts. Source: Yahoo Finance daily data.*"
    },
    {
      "type": "heading",
      "text": "Bonds and the Fed"
    },
    {
      "type": "paragraph",
      "text": "The 10-year closed the week at 5.24%, 3bp lower than a week ago. Monday it closed at 5.31%, the high for the year. Reuters says it touched a 24-year high on Wednesday. The 2-year ended at 4.79%."
    },
    {
      "type": "paragraph",
      "text": "The Fed minutes on Wednesday said officials expect another rate hike before year end, with no sign of when. CNBC reads that as a December question. The next decisions are Oct 28 and Dec 9. Consumers are not enjoying this: the University of Michigan survey put sentiment at 46.3 (Invested Alpha), and Reuters says near-term expectations hit an all-time low."
    },
    {
      "type": "heading",
      "text": "Gold"
    },
    {
      "type": "paragraph",
      "text": "Gold futures closed at $4,216, up 1.3% on the week, with Friday its best day in about five weeks. That leaves gold 20.7% below its Jan 29 closing high of $5,318. Gold rose while the 10-year barely moved, which fits what Issue 1 showed: it has been trading against yields, and when yields pause it gets to breathe."
    },
    {
      "type": "heading",
      "text": "Bitcoin"
    },
    {
      "type": "paragraph",
      "text": "Bitcoin closed Friday at $82,546, down 2.3% on the week, 5.7% below where it started the year and 33.8% below its record close of $124,753 (Oct 6, 2025). It rose 1.5% on Monday, to $85,787, then gave it all back: $83,276 Wednesday, $81,676 Thursday, with an intraday low of $80,427. Saturday closed at $82,912, and it was near $83,750 Sunday evening. The US government moved about $1.44 billion of bitcoin during the week, per Block Insider, which I could not tie to a sale."
    },
    {
      "type": "paragraph",
      "text": "Sizing it, in the same units as Chart 1: MSTR traded $3.05 billion a session this week, 13% above its 12-week average, while the funds were 8.7% below theirs. MSTR closed at $154.34 (down 3.5%) and IBIT at $46.55 (down 2.5%)."
    },
    {
      "type": "heading",
      "text": "US tech"
    },
    {
      "type": "paragraph",
      "text": "The Nasdaq 100 rose 0.2% to 30,883, below Tuesday's record close of 31,224. The S&P 500 finished at 7,811.5, up 1.2% for the week, and 0.1% under its Tuesday record. The Russell 2000 fell 0.9%. Microsoft rose 3.4% to $535.07, Nvidia fell 2.0% to $229.28, Tesla rose 3.3% to $382.70."
    },
    {
      "type": "paragraph",
      "text": "Reuters called it a tepid rally with no edge on Iran headlines. President Trump said the US will not strike Iran before the midterms and called talks productive, but CNBC reports tanker attacks in the Strait of Hormuz hit a wartime high, and WTI settled at $91.85. CNN adds on Sunday that Iran has struck more than a dozen ships since the end of September and that crude is staying above $100 a barrel (that is Brent, not WTI)."
    },
    {
      "type": "heading",
      "text": "This week"
    },
    {
      "type": "list",
      "items": [
        "**Mon, Oct 12: Columbus Day**: US stocks trade. The cash Treasury market is closed, so there is no 10-year print that day.",
        "**Tue, Oct 13: JPMorgan earnings**: Expected EPS $5.90. The first big bank report. Wells Fargo, Goldman, Citi, Bank of America and Morgan Stanley follow.",
        "**Wed, Oct 14: September CPI**: Forecast headline +0.6% on the month and 3.6% on the year. Core +0.2% on the month (CMC Markets)."
      ]
    },
    {
      "type": "paragraph",
      "text": "S&P 500 earnings growth is expected near 30% for the quarter (LSEG via Reuters), with tech at 66.5%. CPI is the number that decides whether the Fed minutes turn into a December hike. Bitfinex analysts see it as the trigger that could break the $84,000 to $87,722 range, which bitcoin has now fallen out of on the low side."
    },
    {
      "type": "heading",
      "text": "The close"
    },
    {
      "type": "paragraph",
      "text": "That is issue three. If a number is wrong, reply and tell me. I read every reply and fix mistakes in the open. Next Monday: what CPI did to all of the above."
    },
    {
      "type": "paragraph",
      "text": "Kumar"
    },
    {
      "type": "heading",
      "text": "Sources and method"
    },
    {
      "type": "list",
      "items": [
        "Prices and volumes: Yahoo Finance daily history for BTC-USD, MSTR, IBIT, FBTC, ARKB, BITB, GBTC, BTCO, HODL, BRRR, EZBC, BTCW and NVDA, MSFT, AAPL, GOOGL, AMZN, META, TSLA, retrieved Oct 10, 2026. Dollar volume = daily close times share volume (BTC-USD volume is already in dollars). Unofficial source; Yahoo credited as in Issue 2.",
        "Matched sessions: only dates when US equities traded; each weekly average is per session. Gross trading across all channels can overlap and is not net flows.",
        "Market close, Iran, earnings expectations, Michigan expectations: Reuters via Yahoo Finance, Oct 9. Market recap: Kiplinger, Oct 9. Sentiment 46.3 and gold best day: Invested Alpha, Oct 9.",
        "Weekend Hormuz update: CNN, Oct 11. Bitcoin Sunday price: Yahoo Finance live quote, Oct 11. Fed minutes: CNBC, Oct 7. Bitcoin ETF flows, $80,427 low, Bitfinex range: The Crypto News, Oct 9. Government transfer: Block Insider, Oct 9. Tanker attacks: CNBC, Oct 9.",
        "Week ahead: CMC Markets, Oct 9 (JPMorgan, CPI forecasts). Core CPI forecast is a single-source figure."
      ]
    },
    {
      "type": "paragraph",
      "text": "*Not investment advice. Charts and numbers are for information only.*"
    }
  ]
},
  {
    slug: "macro-receipts-issue-2",
    title: "Bitcoin's price recovered. Its trading intensity didn't.",
    date: "October 6, 2026",
    description:
      "Bitcoin made a new price high, but its trading volume has not kept pace with its size or with Nvidia. A look at 200-week dollar trading activity on matched US equity sessions.",
    readingTime: "8 min read",
    tags: ["Macro Receipts", "Bitcoin", "Liquidity", "Data"],
    links: [
      {
        "label": "Yahoo Finance daily price and volume history (retrieved October 6, 2026)",
        "url": "https://finance.yahoo.com/"
      },
      {
        "label": "Yahoo equity column definitions",
        "url": "https://finance.yahoo.com/quote/MSFT/history/?fr=sycsrp_catchall"
      },
      {
        "label": "Yahoo crypto provider",
        "url": "https://coinmarketcap.com/academy/article/how-yahoo-finance-powers-its-crypto-data-with-coinmarketcap-api"
      },
      {
        "label": "USD spot-volume method",
        "url": "https://support.coinmarketcap.com/hc/en-us/articles/360043395912-Volume-Open-Interest-Market-Pair-Cryptoasset-Exchange-Aggregate"
      },
      {
        "label": "Reported-volume caveats",
        "url": "https://support.coinmarketcap.com/hc/en-us/articles/360043675052-Market-Pair-Ranking-Confidence-Indicator"
      },
      {
        "label": "Circulating supply archive",
        "url": "https://raw.githubusercontent.com/coinmetrics/data/f1a36afb962731c387bb03982758ab0103063da5/csv/btc.csv"
      },
      {
        "label": "ETF market structure and depth",
        "url": "https://www.kaiko.com/resources/btc-etfs-impact-on-spot-market-structure"
      },
      {
        "label": "MSTR treasury start",
        "url": "https://www.businesswire.com/news/home/20200811005331/en/MicroStrategy-Adopts-Bitcoin-as-Primary-Treasury-Reserve-Asset"
      },
      {
        "label": "US spot-product approvals",
        "url": "https://www.congress.gov/crs-product/IF12573"
      },
      {
        "label": "Derivatives context, not added to the chart",
        "url": "https://www.cmegroup.com/newsletters/quarterly-cryptocurrencies-report/2025-q4-cryptocurrency-insights.html"
      }
    ],
    body: [
      {
        "type": "paragraph",
        "text": "Bitcoin made a new price high. Its trading engine has had a harder time finding a higher gear."
      },
      {
        "type": "paragraph",
        "text": "That was my question after plotting twelve years of dollar trading volume. The climb before 2021 is striking. Since then, the line looks much less convincing. Compare it with Nvidia and the gap gets hard to ignore."
      },
      {
        "type": "paragraph",
        "text": "But the first explanation was too simple. Bitcoin volume has not been flat at $30 billion a day since 2021. It fell, recovered, and slowed again. Adding ETFs and Strategy shares gives us a fuller picture. The question that survives those checks is whether trading activity has kept up with the asset's size."
      },
      {
        "type": "heading",
        "text": "The long view"
      },
      {
        "type": "image",
        "src": "/writing/macro-receipts-issue-2-matched-comparison.png",
        "alt": "Weekly dollar trading activity, 200-week average, for Nvidia, the Magnificent Seven basket, BTC-linked gross activity and BTC spot, on matched US equity sessions.",
        "caption": "200-week average of weekly dollar trading activity on matched US equity sessions, in billions of US dollars per week, linear scale. Source: Yahoo Finance daily history, retrieved October 6, 2026.",
        "width": 2160,
        "height": 1080
      },
      {
        "type": "paragraph",
        "text": "I pulled daily Yahoo Finance history, kept only dates when all seven selected equities traded, summed that dollar activity into complete weeks, and took a 200-week simple moving average. Bitcoin weekends and US equity holidays are excluded. Each weekly sum includes only these matched sessions, and each 200-week average uses the same calendar horizon. The chart shows actual billions of dollars per week on a linear scale, not an index."
      },
      {
        "type": "paragraph",
        "text": "Through October 4, 2026, Bitcoin's spot average is $195.15 billion per matched week. Add eleven selected US spot funds and MSTR, and gross BTC-linked activity is $219.95 billion. The seven-ticker Magnificent Seven basket is $485.60 billion. Nvidia alone is $139.66 billion. These are average weekly trading amounts, not market values or net money entering the assets."
      },
      {
        "type": "paragraph",
        "text": "Nvidia is the standout, not a stand-in for every large stock. Amazon's 200-week dollar-volume average is below its end-2021 level. Tesla's latest 13-week trend is slightly negative. The basket is growing, but the picture is uneven."
      },
      {
        "type": "paragraph",
        "text": "Bitcoin's reported spot volume had an annual matched-session mean of $49.68 billion in 2021. The same measure fell to $20.54 billion in 2023, recovered to $59.79 billion in 2025, and stands at $40.18 billion for 2026 through October 5."
      },
      {
        "type": "paragraph",
        "text": "That 2025 recovery matters. Its matched-session annual mean exceeded 2021 by 20.3%. Calling the entire period a flat line would hide a real cycle."
      },
      {
        "type": "heading",
        "text": "Where did MSTR and IBIT go?"
      },
      {
        "type": "image",
        "src": "/writing/macro-receipts-issue-2-matched-channels.png",
        "alt": "Stacked chart of BTC-linked trading channels: spot, selected listed funds, and MSTR shares.",
        "caption": "BTC-linked dollar trading by channel on matched US equity sessions. Gross activity can overlap and is not unique liquidity or net inflows. Source: Yahoo Finance daily history, retrieved October 6, 2026.",
        "width": 2160,
        "height": 1440
      },
      {
        "type": "paragraph",
        "text": "They belong in the picture. Billions of dollars trade through these instruments, and leaving them out understates how BTC-linked markets have grown."
      },
      {
        "type": "paragraph",
        "text": "The scale still matters. Across the latest 200 common US equity sessions, reported BTC spot activity averages $40.23 billion per session. The selected spot-fund panel adds $3.01 billion. MSTR adds $2.89 billion. The gross sum is $46.13 billion per session, 14.7% above spot alone."
      },
      {
        "type": "paragraph",
        "text": "IBIT alone is about $2.20 billion per session within that fund panel. These are all measured on the same dates. Bitcoin continues to trade on excluded weekends and holidays; this comparison deliberately leaves those trades out. It is a matched-calendar comparison, not the entire Bitcoin trading week."
      },
      {
        "type": "paragraph",
        "text": "The new channels have more impact on growth than their current share alone suggests. Gross BTC-linked activity averaged $68.35 billion per matched session in 2025, versus $50.56 billion in 2021. That is 35.2% growth, versus 20.3% for spot alone."
      },
      {
        "type": "paragraph",
        "text": "Even so, adding them does not erase the contrast with Nvidia. On the 200-week measure, they lift the current level by 12.7%. Over the latest thirteen weeks, spot's long average fell 1.29%; the gross BTC-linked average fell 0.45%. The extra channels soften the slowdown."
      },
      {
        "type": "paragraph",
        "text": "This sum needs a careful name: gross BTC-linked trading activity. ETF market makers may hedge in spot, so activity can overlap. MSTR is a corporate equity with leverage, dilution and valuation effects. Neither can be treated as fresh dollars entering Bitcoin. The total is a view of trading channels, not a double-count-free measure of liquidity."
      },
      {
        "type": "heading",
        "text": "Price grew faster than trading"
      },
      {
        "type": "paragraph",
        "text": "Bitcoin's 2021 high in the Yahoo series was about $68,790. The later high was $126,198 in October 2025. There was a substantial post-2021 price rally. I would not call that \"no real bull market.\""
      },
      {
        "type": "paragraph",
        "text": "The more interesting result is volume relative to market capitalization. Using Yahoo price and volume with Coin Metrics circulating supply, average daily reported spot turnover across all calendar days was 5.55% of market cap in 2021. In 2025 it was 2.61%, about 53% lower."
      },
      {
        "type": "paragraph",
        "text": "Average price more than doubled between those years. Dollar volume grew only 12.4% across all calendar days, or 20.3% on matched equity sessions. Trading activity recovered, but did not keep pace with valuation."
      },
      {
        "type": "paragraph",
        "text": "Lower turnover does not automatically mean worse liquidity or weaker adoption. More investors may simply hold. Executable liquidity depends on depth, spreads and slippage, not just how much traded yesterday. Kaiko's research after the ETF launch found improved Bitcoin order-book depth on US venues, even as spread results were mixed."
      },
      {
        "type": "heading",
        "text": "The flip is worth watching. The prediction needs proof."
      },
      {
        "type": "paragraph",
        "text": "A sustained upward turn in the long volume average would be worth paying attention to. It would tell us that recent weekly activity is beating the older activity leaving the window."
      },
      {
        "type": "paragraph",
        "text": "I tested a simple definition: the 200-week average must be above its value thirteen weeks earlier for four consecutive weekly readings. Count the signal only at the fourth reading, and impose a 26-week cooldown."
      },
      {
        "type": "paragraph",
        "text": "There were only three confirmed turns in the matched-session history. After May 12, 2024, Bitcoin gained 69.4% over the next 52 weeks. After December 8, 2024, it lost 10.5%. After June 29, 2025, it lost 44.0%. Returns use Bitcoin's close on the last matched equity session of each week. These are confirmation dates, not dates chosen afterward to match price bottoms."
      },
      {
        "type": "paragraph",
        "text": "Three mixed episodes do not establish a timing signal. These rules were chosen for an exploratory check, not validated out of sample. Changing from full-week Bitcoin volume to matched-session volume also changes the signal dates, another reason to be careful. Yahoo's Bitcoin history begins in September 2014, so the first complete 200-week point arrives only in July 2018. Earlier-cycle turns are missing."
      },
      {
        "type": "paragraph",
        "text": "There is a mechanical trap too. A 200-week average can turn up when a weak old week drops out, even without a sudden pickup in current trading. The latest matched-session spot average remains down over thirteen weeks. One uptick is a thin basis for calling material outperformance."
      },
      {
        "type": "heading",
        "text": "What I want to see next"
      },
      {
        "type": "paragraph",
        "text": "The case I want to make is about market development. For a much larger Bitcoin market, sustained trading activity, more capacity to absorb large orders, and smaller execution costs would be encouraging."
      },
      {
        "type": "paragraph",
        "text": "The 200-week volume profile is one receipt. It belongs beside same-venue order-book depth, spreads, ETF share activity and Bitcoin-specific derivatives data. A rising line would strengthen the case. It would not finish it."
      },
      {
        "type": "paragraph",
        "text": "For now, the evidence says Bitcoin's trading activity grew more slowly than its price and much more slowly than Nvidia's. ETFs and MSTR improve that picture. They do not turn it into the same growth story."
      },
      {
        "type": "heading",
        "text": "Data notes and receipts"
      },
      {
        "type": "paragraph",
        "text": "All market calculations use Yahoo daily bars retrieved October 6, 2026. Daily analysis excludes the partial October 6 bar; weekly analysis ends October 4. Comparison charts use the intersection of actual trading dates for the seven selected equity tickers; BTC weekends and US market holidays are removed. The 200-week calculation averages matched-session weekly sums, not 200 trading sessions. The separate market-cap-turnover comparison uses all calendar days. Equities use split-adjusted Close multiplied by share Volume, a closing-price estimate of dollar turnover rather than exact trade-by-trade notional. Bitcoin's reported Volume is already USD-denominated aggregate spot activity; it is not multiplied by price again."
      },
      {
        "type": "paragraph",
        "text": "The equity basket is AAPL, AMZN, GOOGL, META, MSFT, NVDA and TSLA. It uses seven ticker lines, not every share class. The fund panel is IBIT, FBTC, GBTC, ARKB, BITB, HODL, BRRR, BTCO, EZBC, BTCW and BTC (Grayscale's mini trust). GBTC includes its earlier listed-trust history. MSTR enters on August 11, 2020, its first disclosed Bitcoin treasury purchase. Only actual common equity sessions enter the ecosystem sum. Pre-launch dates contribute zero; after-launch fund session coverage was checked for missing dates. MSTR is excluded before its BTC treasury adoption. New instruments change coverage over time."
      },
      {
        "type": "paragraph",
        "text": "This is not all global BTC-linked trading. Bitcoin derivatives are excluded because a comparable BTC-only daily history was not reconstructed. CoinMarketCap's aggregate coverage and filtering have evolved, so the full historical series should not be treated as a constant set of venues. Stablecoin-quoted pairs are not simply absent: the provider's method converts quote-currency volume to USD. Turnover uses total circulating supply, not free float. The supply archive ends May 23, 2026; annual turnover comparisons above use complete 2021 and 2025 data."
      },
      {
        "type": "paragraph",
        "text": "Data retrieved from Yahoo Finance on October 6, 2026. Yahoo Finance and underlying providers retain data rights; this article does not redistribute raw histories. Research commentary, not a forecast or investment recommendation."
      }
    ],
  },
  {
    slug: "macro-receipts-issue-1",
    title: "Yields up, gold down, Nasdaq at a record",
    date: "October 5, 2026",
    description:
      "Macro Receipts, issue 1. The 10-year closed the week at 5.28% while gold fell 3.7% and the Nasdaq 100 set a record. Plus bitcoin, the week ahead, and one chart worth the time.",
    readingTime: "7 min read",
    tags: ["Macro Receipts", "Bonds", "Gold", "Bitcoin"],
    links: [
      {
        label: "Federal Reserve H.15 (yields)",
        url: "https://www.federalreserve.gov/releases/h15/",
      },
    ],
    body: [
      {
        "type": "paragraph",
        "text": "*Macro Receipts, Issue 1. Week ending Friday, Oct 2, 2026. Bitcoin and weekend news as of Sunday Oct 4.*"
      },
      {
        "type": "paragraph",
        "text": "Welcome to the first Macro Receipts. Every Monday: gold, bonds, bitcoin and US tech, plus one chart worth the time. Every number below is recomputed from the daily data, and the sources are listed at the bottom. This one covers the week ending Friday, Oct 2."
      },
      {
        "type": "paragraph",
        "text": "The short version:"
      },
      {
        "type": "list",
        "items": [
          "The Fed is backing off. September payrolls rose 29,000 against about 90,000 expected, and the odds of an October hike fell to roughly one in five.",
          "Long bonds did not follow. The 10-year closed the week at 5.28%, after touching 5.34% on Thursday, its highest since 2002.",
          "Gold lost 3.7% on the week to $4,162. It is 21.7% below its January 29 closing high.",
          "The Nasdaq 100 closed at a record. The Russell 2000 did not come along.",
          "Bitcoin spent the week between $83,500 and $84,900, then jumped about 2% over the weekend to $86,576."
        ]
      },
      {
        "type": "heading",
        "text": "Scorecard"
      },
      {
        "type": "table",
        "head": [
          "",
          "Last",
          "Change"
        ],
        "rows": [
          [
            "Gold futures",
            "$4,162",
            "Week -3.7%, year to date -4.1%"
          ],
          [
            "10-year Treasury yield",
            "5.28%",
            "Week +9bp, year to date +111bp"
          ],
          [
            "Dollar index",
            "101.93",
            "Week +1.0%, year to date +3.7%"
          ],
          [
            "S&P 500",
            "7,722.72",
            "Week -0.3%, year to date +12.8%"
          ],
          [
            "Nasdaq 100",
            "30,808",
            "Week +0.7%, year to date +22.0%. Record close."
          ],
          [
            "Russell 2000",
            "2,832.90",
            "Week -0.2%, year to date +14.1%"
          ],
          [
            "Bitcoin",
            "$86,576",
            "Up 2.6% vs Sept 26, year to date -1.1%. Sunday evening price."
          ],
          [
            "WTI crude",
            "$91.11",
            "Week -1.4%, year to date +58.7%"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "*Friday Oct 2 closes. Week is versus the Sept 25 close, year to date versus the Dec 31 close. Yields in basis points (bp). Bitcoin is the Sunday Oct 4 evening (PT) price versus the Sept 26 close, while everything else is Friday's close. Source: Yahoo Finance daily data.*"
      },
      {
        "type": "heading",
        "text": "Bonds"
      },
      {
        "type": "paragraph",
        "text": "The Fed raised rates in September, its first hike since 2023. Then the jobs report landed: 29,000 new jobs against about 90,000 expected, with July and August revised down by 60,000 combined. Traders cut the odds of an October hike to about 21%, from 26% before the report."
      },
      {
        "type": "paragraph",
        "text": "The 2-year yield, which follows the Fed, did what you would expect. It closed Oct 1 at 4.78%, down from 4.92% on Sept 28. The 10-year went the other way: 5.18% a week ago, 5.28% on Friday. Over the quarter it rose from 4.42% to 5.29%, about 87bp. Reuters calls that the biggest quarterly rise since 1994."
      },
      {
        "type": "paragraph",
        "text": "Look at what is in that 5.24% (Oct 1). The 10-year real yield was 2.88%, so inflation expectations account for only about 2.36%. Lenders want to be paid more to hold ten years of government debt, and weak hiring did not change that. Reuters ties the selloff to the Iran war's push on energy prices and to strained public finances. WTI crude closed Friday at $91.11, up 59% this year."
      },
      {
        "type": "heading",
        "text": "Gold"
      },
      {
        "type": "paragraph",
        "text": "Gold futures closed at $4,162.30, down from $4,321.20 a week earlier. Silver did worse, down 6.6%. The dollar index rose 1.0% on the week and sat near a 17-month high on Thursday, which makes gold dearer for everyone who does not hold dollars."
      },
      {
        "type": "paragraph",
        "text": "There is an actual war on and gold is still falling. My read: this year gold has traded less like fear and more like a bond with no coupon. When a 10-year Treasury pays 2.88% above inflation, a metal that pays nothing has a harder time. The chart below shows how that has played out."
      },
      {
        "type": "heading",
        "text": "Bitcoin"
      },
      {
        "type": "paragraph",
        "text": "Bitcoin traded at $86,576 on Sunday evening (Oct 4, Pacific), up 2.6% from its Sept 26 close and 1.1% below where it started the year. It sits 10.7% under its Jan 14 closing high of $96,929 and 38% above its July 3 close of $62,544. Most of the week was flat, with daily closes between $83,503 and $84,853. The jump came over the weekend."
      },
      {
        "type": "paragraph",
        "text": "US spot bitcoin ETFs took in $82.9 million net for the week, per Farside Investors, even after a large midweek withdrawal. Bitcoin did not trade with yields this week. It sat in a tight range while the 10-year ground higher, and only broke out once the bond market closed."
      },
      {
        "type": "heading",
        "text": "US tech"
      },
      {
        "type": "paragraph",
        "text": "The Nasdaq 100 closed at a record 30,808 on Friday, up 0.7% on the week and 22.0% for the year. The tech sector fund XLK also closed at a record and is up 8.8% in a month. The Nasdaq Composite finished at 27,191, 0.2% under its Sept 22 closing high, after hitting a record intraday. CNBC credits a revival in chip stocks after Micron's results."
      },
      {
        "type": "paragraph",
        "text": "Under the headline it was uneven. Nvidia rose 3.9% on the week to $233.95. Meta fell 3.1% and Apple fell 2.2%. The S&P 500 slipped 0.3% and is 1.0% under its Aug 13 closing high. The Russell 2000 is down 4.1% over the past month and 7.7% under its August high. Tech is carrying the index while the broad market treads water."
      },
      {
        "type": "heading",
        "text": "The chart worth the time"
      },
      {
        "type": "image",
        "src": "/writing/macro-receipts-issue-1-chart.png",
        "alt": "Gold futures and the 10-year Treasury yield, Jan 2 to Oct 2, 2026",
        "caption": "Gold futures and the 10-year Treasury yield, daily closes, Jan 2 to Oct 2, 2026. Source: Yahoo Finance (GC=F, ^TNX); the 10-year matches the Federal Reserve H.15 release through Oct 1.",
        "width": 1600,
        "height": 896
      },
      {
        "type": "paragraph",
        "text": "Gold closed at $5,318 on Jan 29. Since then the 10-year yield has gone from 4.23% to 5.28%, up 105bp, and gold has lost 21.7%. Over 37 non-overlapping five-day windows this year, the correlation between gold's percent change and the yield's change is -0.44. Negative and meaningful, but nowhere near a law."
      },
      {
        "type": "paragraph",
        "text": "It also broke down for a stretch. From July 16 to Sept 3 gold climbed from $3,992 to $4,540 while the 10-year rose from 4.57% to 4.76%. Gold and yields can rise together when the fear trade is strong. Since Sept 3, that trade has lost, and yields have won."
      },
      {
        "type": "heading",
        "text": "This week"
      },
      {
        "type": "list",
        "items": [
          "**Mon, 10:00 ET: ISM services**: September reading. Expected 55.1 versus 55.4 before. Watch prices paid.",
          "**Wed, 1:01 ET: 10-year auction**: Demand at this auction tells you if buyers show up at 5.2% and up.",
          "**Wed, 2:00 ET: Fed minutes**: From the Sept 15-16 meeting, so they predate the jobs report.",
          "**Thu, 1:01 ET: 30-year auction**: Same test, longer. Jobless claims are expected near 200,000.",
          "**Thu and Fri: PepsiCo, Delta**: Earnings season starts quietly. Friday also brings Michigan consumer sentiment."
        ]
      },
      {
        "type": "paragraph",
        "text": "The next Fed decision is Oct 28. Prediction markets put a December hike at roughly 73%, so one weak jobs report has not changed the plan. Mid-October inflation data matters more than anything the Fed says this week."
      },
      {
        "type": "paragraph",
        "text": "One thing from the weekend: CNBC reports at least two more tankers were struck near Oman and in the Strait of Hormuz, and Iran says the strait stays closed until its conditions for ending the war are met. WTI was near $90.65 at the Sunday evening open. Oil is what keeps the yield story alive, so watch it on Monday."
      },
      {
        "type": "heading",
        "text": "The close"
      },
      {
        "type": "paragraph",
        "text": "That is issue one. If something here is wrong, hit reply and tell me. I read every reply, and I fix mistakes in the open. Next Monday: whatever the auctions say about the long end."
      },
      {
        "type": "paragraph",
        "text": "Kumar"
      },
      {
        "type": "heading",
        "text": "Sources and method"
      },
      {
        "type": "list",
        "items": [
          "Prices: Yahoo Finance daily closes, pulled Oct 3, bitcoin and weekend oil refreshed Oct 4. Percent and basis-point changes computed from those closes. Yahoo is an unofficial source.",
          "10-year, 2-year and real yields: Federal Reserve H.15, through Oct 1 (federalreserve.gov/Releases/H15).",
          "Payrolls, hike odds, quarterly yield move, Iran war and oil: Reuters via MarketScreener, Oct 2.",
          "Gold, dollar index and 17-month high: Investing.com, Oct 2. December hike odds: Trestlewire, Oct 3 (prediction markets, not a Fed forecast).",
          "Weekend tanker strikes and Hormuz: CNBC, Oct 4. Bitcoin ETF flows: Farside Investors via Coinspress, Oct 3. Week ahead calendar: investingLive and Seeking Alpha, Oct 2. Tech and chips context: CNBC, Oct 2."
        ]
      },
      {
        "type": "paragraph",
        "text": "*Not investment advice. Charts and numbers are for information only.*"
      }
    ],
  },
  {
    slug: "bitcoin-etf-flows",
    title: "Bitcoin ETF flows: the receipts behind the chart",
    date: "September 20, 2026",
    description:
      "Every week I post the same bitcoin ETF flow chart. Here is where the numbers come from, how each one gets verified, and what two years of flows actually say.",
    readingTime: "4 min read",
    tags: ["Bitcoin", "ETF flows", "Data"],
    links: [
      {
        label: "The chart, as posted on X",
        url: "https://x.com/KumarMiskin/status/2100421222945419645",
      },
      {
        label: "Code and data behind every number",
        url: "https://github.com/kumar-miskin/btc-macro-analysis",
      },
      {
        label: "Source data: Farside Investors",
        url: "https://farside.co.uk/bitcoin-etf-flow-all-data/",
      },
    ],
    body: [
      {
        type: "paragraph",
        text: "Every week I post the same chart on X: bitcoin ETF flows. The latest one shows $442M of net outflows in the most recent week of data, against $54.8B of cumulative net inflows since the US spot ETFs launched in January 2024. One red week, one very large line. This piece is the receipts behind that chart: where the numbers come from, how each one gets checked before it posts, and what two years of flows actually say.",
      },
      {
        type: "statgrid",
        stats: [
          { value: "$54.8B", label: "Cumulative net inflows since Jan 2024" },
          { value: "-$442M", label: "Most recent week of data" },
          { value: "$62.7B", label: "Peak cumulative, Oct 9, 2025" },
          { value: "86 vs 55", label: "Inflow vs outflow weeks" },
        ],
      },
      { type: "heading", text: "What two years of flows look like" },
      {
        type: "paragraph",
        text: "The top panel is the cumulative line: every dollar of net flow into every US spot bitcoin ETF, added up day by day since launch. It first crossed $50B on July 9, 2025, peaked at $62.7B on October 9, 2025, and sits at $54.8B as of September 16, 2026.",
      },
      {
        type: "image",
        src: "/writing/bitcoin-etf-flows.png",
        alt: "Two-panel chart of US spot bitcoin ETF flows: cumulative net inflows since January 2024 on top, weekly net flows below.",
        caption:
          "Cumulative (top) and weekly (bottom) net flows for all US spot bitcoin ETFs, through September 16, 2026. Source: Farside Investors.",
      },
      {
        type: "paragraph",
        text: "The bottom panel is the same data week by week. Out of 141 weeks since launch, 86 were inflow weeks and 55 were outflow weeks. The best week brought in $3.35B (November 24, 2024). The worst lost $2.62B (March 2, 2025). A $400M red week looks dramatic on a timeline. On this chart it is a normal week.",
      },
      {
        type: "paragraph",
        text: "2026 has been the choppiest stretch so far: 19 inflow weeks, 19 outflow weeks, about -$1.8B net year to date. The easy one-way bid from 2024 and early 2025 is gone, and weekly prints now swing both ways.",
      },
      { type: "heading", text: "How every number gets checked" },
      {
        type: "paragraph",
        text: "The source is the daily flow table that Farside Investors publishes for each US spot bitcoin ETF. A parser pulls that table into a daily CSV, sums the funds into a total per day, aggregates days into weeks, and builds the cumulative path from the daily totals. The code and the data live in a public repo, one folder per chart, so any number I post can be recomputed from scratch.",
      },
      {
        type: "paragraph",
        text: "The check is the part I care about most. Before anything posts, a script recomputes each claim directly from the committed daily CSV: every weekly total and the full cumulative path, date by date, not just the final value. If an edit to a derived file would make a posted claim wrong, the build fails in CI. It also warns when a number rests on a partial week or a day where some funds have not reported yet, because Farside marks those days provisional.",
      },
      {
        type: "paragraph",
        text: "If you want to audit the work, clone the repo, run the tests and the verification script, and you get the same numbers I post. That is the point of putting the pipeline in public: the chart is the opinion, the repo is the receipt.",
      },
      { type: "heading", text: "How I read it" },
      {
        type: "paragraph",
        text: "Weekly flows are noisy. The cumulative line is what I watch: is the marginal ETF buyer still accumulating? Through 2024 and most of 2025 the answer was an unambiguous yes. In 2026 the honest answer is no, not on net. The line has given back roughly $8B from the October 2025 peak and has moved sideways between about $51B and $58B all year.",
      },
      {
        type: "paragraph",
        text: "That read matters more than any single green or red week. When the cumulative line starts making new highs again, the flow regime has changed. Until then I expect more of what 2026 has delivered: sharp up weeks, sharp down weeks, and a line that goes nowhere fast. I will keep posting the chart every week either way, from the same checked pipeline.",
      },
    ],
  },
];
