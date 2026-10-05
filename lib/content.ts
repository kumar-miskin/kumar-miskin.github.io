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
  { value: "42", label: "Citations" },
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
