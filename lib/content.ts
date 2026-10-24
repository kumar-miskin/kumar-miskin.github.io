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
  { value: "47", label: "Citations" },
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
