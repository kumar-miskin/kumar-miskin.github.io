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
  | { type: "image"; src: string; alt: string; caption: string }
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
