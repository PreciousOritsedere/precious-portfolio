export type ProjectTag = "Product" | "Solid & RDF" | "Platforms & data" | "Open source";

export const projectTags: ProjectTag[] = [
  "Product",
  "Solid & RDF",
  "Platforms & data",
  "Open source",
];

type Link = { href: string; label: string };

export type Project = {
  slug: string;
  title: string;
  year: string;
  context: string;
  role?: string;
  line: string;
  problem?: string;
  owned?: string;
  build?: string[];
  proof?: string;
  tags: ProjectTag[];
  stack: string[];
  image?: string;
  live?: Link;
  repo?: Link;
  featured?: boolean;
};

const gh = (path: string): Link => ({ href: `https://github.com/${path}`, label: path });

export const projects: Project[] = [
  {
    slug: "openactive",
    title: "OpenActive dashboard",
    year: "2025–26",
    context: "Open Data Institute",
    role: "Main contributor",
    line: "A clearer way to explore the UK’s open data about places and activities.",
    problem:
      "OpenActive data covers thousands of sessions, classes and facilities across the UK. It was difficult to get a useful overview of all that data or see which publishers needed attention.",
    owned:
      "I built most of the public dashboard: its layout, filters, D3 map, API integration and tests. It reads from a separate .NET API over BigQuery; another teammate owns that API and the Python ingestion pipeline behind it.",
    build: [
      "Next.js server functions fetch and cache data from the Monitor API. Custom client hooks keep recent filter results in memory.",
      "The D3 map switches between local-authority and NHS-trust boundaries. It can be filtered by area, publisher, provider, activity and NHS trust.",
      "The landing page gives a national summary. Inside the explorer, the summary follows the active filters and includes population, deprivation and Active Lives context where available.",
      "The feed-quality view uses the same filters and separates data completeness from content quality, with healthy, warning and error states.",
      "The repository has 243 Vitest and Testing Library tests. GitHub Actions runs the tests; ESLint and knip are local checks.",
    ],
    proof: "363 of 376 commits · 65 merged PRs · 243 tests",
    tags: ["Platforms & data", "Product", "Open source"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "D3", "Vitest", "GitHub Actions"],
    image: "/projects/openactive.jpg",
    live: { href: "https://openactive-dashboard.vercel.app/", label: "openactive-dashboard.vercel.app" },
    repo: gh("openactive/openactive-dashboard"),
    featured: true,
  },
  {
    slug: "solid-file-manager",
    title: "Solid File Manager",
    year: "2025–26",
    context: "Open Data Institute · Solid",
    role: "Main contributor",
    line: "A familiar file manager for data stored in a Solid Pod.",
    problem:
      "A Solid Pod gives someone control over their own data, but managing the files inside one can still feel very technical. This project makes the experience closer to using an ordinary drive.",
    owned:
      "I wrote most of the application: sign-in, storage discovery, file operations, sharing and the local Community Solid Server setup used during development.",
    build: [
      "People can sign in with Solid-OIDC, return to an existing session, and open storage roots found through their WebID profile.",
      "Files and folders can be uploaded, downloaded as ZIPs, renamed, copied, moved and deleted. Folder drag-and-drop works in browsers that support the File System Access API.",
      "Sharing works with WebIDs and is stored in the Pod as ACP access policies.",
      "Container RDF metadata is reused where possible. The app falls back to a HEAD request when a file’s type is missing.",
      "Dialogs, menus and notifications use semantic markup and accessible labels.",
    ],
    proof: "279 of 324 commits · 51 merged PRs",
    tags: ["Solid & RDF", "Product", "Open source"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn",
      "Inrupt client",
      "LDO",
      "N3",
      "@solid/object",
      "ACP",
    ],
    image: "/projects/solid-file-manager.jpg",
    live: {
      href: "https://filemanager.solid-experiments.org/",
      label: "filemanager.solid-experiments.org",
    },
    repo: gh("solid-contrib/solid-file-manager"),
    featured: true,
  },
  {
    slug: "code-funhouse",
    title: "Code Funhouse",
    year: "2024–25",
    context: "Code Funhouse",
    role: "Frontend engineer",
    line: "A coding platform for students, teachers and parents, with lessons, a browser editor, AI-assisted tutoring and a separate hackathon product.",
    problem:
      "The product gives children a place to learn real programming languages while teachers and parents can follow their progress.",
    owned:
      "I worked on the frontend from July 2024 to November 2025, across the main learning product, the school experience and a separate hackathon platform.",
    build: [
      "The main app has separate student, teacher and parent dashboards. School administration tools sit within the teacher experience.",
      "Students code in the browser and use tutor chat, hints and lesson checks connected to the product API.",
      "The hackathon platform has its own student, teacher and admin areas.",
      "The wider product uses Stripe and Paystack for payments, Sanity for content, Socket.IO for realtime features and Web Serial for Arduino lessons.",
    ],
    tags: ["Product"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Sanity",
      "Stripe",
      "Paystack",
      "Socket.IO",
      "Monaco",
      "Blockly",
      "Zod",
    ],
    image: "/projects/code-funhouse.jpg",
    live: { href: "https://codefunhouse.com/", label: "codefunhouse.com" },
    featured: true,
  },
  {
    slug: "excluvia",
    title: "Excluvia",
    year: "2025",
    context: "Eclait",
    line: "A platform where creators can run memberships, livestream, chat with fans and sell products.",
    problem:
      "Excluvia brings a creator’s memberships, live content, messages and shop into one product.",
    build: [
      "Livestreaming runs on LiveKit, with chat and presence over WebSockets.",
      "Creators can offer subscription tiers and sell products and courses. Fans can subscribe and send gifts.",
      "Payments use Stripe and Paystack, with wallet, payout and analytics views.",
      "I also worked on the internal dashboard used to manage accounts, analytics and email campaigns.",
      "Firebase Cloud Messaging is used for push notifications.",
    ],
    tags: ["Product"],
    stack: ["React", "Vite", "TypeScript", "TanStack Query", "MUI", "Firebase FCM", "Stripe", "LiveKit"],
    image: "/projects/excluvia.jpg",
    live: { href: "https://www.excluvia.com/", label: "excluvia.com" },
    featured: true,
  },
  {
    slug: "platnova",
    title: "Platnova",
    year: "2024–25",
    context: "Platnova",
    line: "Business and consumer web apps with multi-currency wallet and transfer flows, cards and savings.",
    problem:
      "Platnova needed its main money tools to work well on the web for both businesses and individuals.",
    build: [
      "I worked on the business app for multi-currency wallets, transfers and account management.",
      "On the consumer app, I worked on the dashboard, Vault savings and card creation and linking.",
      "I also built settings, account limits and sign-in flows.",
    ],
    tags: ["Product"],
    stack: ["React", "Vite", "TypeScript", "MUI", "Radix", "Redux Toolkit", "TanStack Query", "pnpm"],
    image: "/projects/platnova.jpg",
    live: { href: "https://platnova.com/", label: "platnova.com" },
    featured: true,
  },
  {
    slug: "volunteering-demo",
    title: "Volunteer Profile Manager",
    year: "2026",
    context: "Open Data Institute",
    role: "Sole author",
    line: "A volunteer profile manager for skills, availability, locations, equipment and credentials, stored in the user’s Solid Pod.",
    proof: "84 commits",
    tags: ["Solid & RDF", "Open source"],
    stack: [
      "Next.js",
      "TypeScript",
      "LDO",
      "TanStack Query",
      "Leaflet",
      "N3",
      "Inrupt client",
      "@solid/object",
      "@volunteeringdata/object",
    ],
    live: { href: "https://profile-manager-demo.vercel.app/", label: "profile-manager-demo.vercel.app" },
    repo: gh("theodi/volunteering-demo"),
  },
  {
    slug: "solid-react-component",
    title: "@solid/react-component",
    year: "2026",
    context: "Solid",
    role: "Sole author",
    line: "Shared React components for Solid sign-in, including a login page, provider picker, auth guard and Next.js adapter.",
    proof: "20 of 20 commits",
    tags: ["Open source", "Solid & RDF"],
    stack: ["React", "TypeScript", "Jest", "Next.js"],
    repo: gh("solid/react-component"),
  },
  {
    slug: "librechat-solid",
    title: "LibreChat × Solid",
    year: "2026",
    context: "Solid",
    role: "Contributor",
    line: "Work on adding Solid-OIDC sign-in to LibreChat, including WebID profile lookup, Pod discovery and session handling.",
    proof: "140 commits · 9 merged PRs",
    tags: ["Solid & RDF", "Open source"],
    stack: ["Express", "React", "Node.js", "Solid-OIDC"],
    repo: gh("solid/LibreChat"),
  },
  {
    slug: "solidproject-org",
    title: "solidproject.org",
    year: "2025–26",
    context: "Solid · W3C",
    role: "Contributor",
    line: "Accessibility improvements and content updates on the Solid project’s public website.",
    proof: "49 commits · 11 merged PRs",
    tags: ["Open source"],
    stack: ["HTML", "CSS", "Accessibility"],
    live: { href: "https://solidproject.org", label: "solidproject.org" },
    repo: gh("solid/solidproject.org"),
  },
  {
    slug: "creative-commons",
    title: "CC Search",
    year: "2022–23",
    context: "Creative Commons · Outreachy",
    role: "Outreachy intern",
    line: "My Outreachy project: moving CC Search pages from PHP to semantic HTML, CSS and JavaScript.",
    proof: "8 merged PRs",
    tags: ["Open source"],
    stack: ["JavaScript", "HTML", "CSS"],
    repo: {
      href: "https://github.com/search?q=author%3APreciousOritsedere+org%3Acreativecommons+is%3Apr+is%3Amerged&type=pullrequests",
      label: "merged PRs on GitHub",
    },
  },
  {
    slug: "turbomedics",
    title: "Turbomedics",
    year: "2024–25",
    context: "Turbham Technologies",
    role: "Frontend developer",
    line: "Vue frontends for Turbomedics: a patient app and a separate health-centre and lab operations app.",
    problem:
      "Turbomedics connects patients, health centres and labs. Patients needed one place for their readings, appointments and records, and staff needed their own tools to run departments and tests.",
    owned:
      "I worked on both Vue 3 apps from March 2024 to October 2025: the patient web app and the wellness-centre app used by health centres and laboratories.",
    build: [
      "The patient dashboard brings together appointments, prescriptions, medical history, progress reports and readings from Turbomedics devices such as the 4G glucometer.",
      "Patients can link family members’ accounts and follow their vitals, health score and reports.",
      "The app includes a wallet with PIN setup, transfers, transaction history and beneficiaries.",
      "I integrated Ask Dr. Deuce and the risk-assessment tools for diabetes, cardiovascular, weight, kidney, liver and lipid health.",
      "The wellness-centre app has separate health-centre and laboratory areas for departments, wards, test centres, doctor requests and patient records.",
      "Charts are built with Chart.js, and Socket.IO handles realtime updates such as notifications and calls.",
    ],
    tags: ["Product"],
    stack: [
      "Vue 3",
      "Vuex",
      "Vite",
      "Tailwind",
      "Vuetify",
      "TanStack Query",
      "Chart.js",
      "Socket.IO",
      "Axios",
    ],
    image: "/projects/turbomedics.jpg",
    live: { href: "https://turbomedics.com/", label: "turbomedics.com" },
    featured: true,
  },
  {
    slug: "engagevents",
    title: "Engagevents",
    year: "2024",
    context: "EngagEvents",
    role: "Frontend engineer, part-time",
    line: "Live Q&A, polls, quizzes, surveys and word clouds for events, with moderation and host analytics.",
    tags: ["Product"],
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "Socket.IO"],
  },
  {
    slug: "minxx",
    title: "Minxx Club",
    year: "2025",
    context: "Freelance",
    line: "A Medusa-backed lash store with collections, kits and an AR-style try-on called Minxx Mirror.",
    tags: ["Product"],
    stack: ["Next.js", "TypeScript", "Tailwind", "TanStack Query", "Zustand", "Medusa"],
    live: { href: "https://www.minxxclub.com/", label: "minxxclub.com" },
  },
  {
    slug: "elite-camp",
    title: "Elite Connect Camp",
    year: "2025",
    context: "Code Funhouse",
    line: "Residential summer camp — parent and agent registration with Stripe checkout and Sanity CMS.",
    tags: ["Product"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Sanity", "Zod", "Motion"],
    live: { href: "https://elite-camp.vercel.app/", label: "elite-camp.vercel.app" },
  },
  {
    slug: "next-gems",
    title: "Next Gems Camp",
    year: "2025",
    context: "Code Funhouse",
    line: "A sister camp site that uses the same Stripe checkout and Sanity CMS pattern, with a different interface.",
    tags: ["Product"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Radix", "Stripe", "Sanity", "Zod", "Motion"],
    live: { href: "https://next-gems-camp.vercel.app/", label: "next-gems-camp.vercel.app" },
  },
  {
    slug: "funtech",
    title: "Fun Tech AI",
    year: "2024",
    context: "Company site",
    line: "Company site for custom AI agents across fintech, education and health.",
    tags: ["Product"],
    stack: [],
    live: { href: "https://www.funtechai.com/", label: "funtechai.com" },
  },
  {
    slug: "hamid",
    title: "Architecture portfolio",
    year: "2024",
    context: "Client",
    line: "Portfolio for architect Izuagbe-Ibrahim Hamid — project gallery and testimonials.",
    tags: ["Product"],
    stack: ["Next.js", "React", "TypeScript"],
    live: {
      href: "https://izuagbe-ibrahim-hamid.vercel.app/",
      label: "izuagbe-ibrahim-hamid.vercel.app",
    },
  },
  {
    slug: "audiophile",
    title: "Audiophile",
    year: "2023",
    context: "Personal",
    line: "Premium audio storefront — catalogue, category pages and cart.",
    tags: ["Product"],
    stack: [],
    live: {
      href: "https://audiophile-ecommerce-sandy-ten.vercel.app/",
      label: "audiophile-ecommerce-sandy-ten.vercel.app",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export type StackGroup = { label: string; note?: string; items: string[] };

export const stackGroups: StackGroup[] = [
  { label: "Languages", items: ["TypeScript", "Python", "JavaScript", "HTML", "CSS"] },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue 3", "Vite", "Tailwind", "MUI", "Radix", "shadcn", "Vuetify", "Motion"],
  },
  {
    label: "Backend & data",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Supabase",
      "Firebase",
      "BigQuery",
      "JWT",
      "NextAuth",
      "Passport",
      "AWS S3",
      "Cloudinary",
      "Swagger",
      "Postman",
    ],
  },
  {
    label: "Solid & open data",
    items: [
      "Community Solid Server",
      "Inrupt client",
      "LDO",
      "N3",
      "rdflib",
      "RDF & Turtle",
      "Solid-OIDC",
      "ACP",
    ],
  },
  {
    label: "State, realtime & payments",
    items: [
      "TanStack Query",
      "Redux Toolkit",
      "Zustand",
      "Vuex",
      "Socket.IO",
      "LiveKit",
      "Stripe",
      "Paystack",
      "Sanity",
      "Medusa",
      "Axios",
      "styled-components",
    ],
  },
  { label: "Data viz & maps", items: ["D3", "Leaflet", "Chart.js"] },
  {
    label: "Testing & CI",
    items: ["Vitest", "Jest", "Testing Library", "GitHub Actions", "Docker", "Vercel", "Git"],
  },
  {
    label: "AI tools",
    note: "I use these in my day-to-day work and review the code before it goes in.",
    items: ["Cursor", "Claude"],
  },
];

export type Role = {
  title: string;
  org: string;
  place?: string;
  dates: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Frontend Developer",
    org: "Open Data Institute",
    place: "London",
    dates: "Nov 2025 – now",
    current: true,
    points: [
      "I’m the frontend developer on the Solid team, working with project managers, backend engineers and standards specialists.",
      "I built most of the OpenActive dashboard: its responsive interface, filters, D3 map, feed-quality views, API integration and test suite.",
      "I also built most of Solid File Manager, including Solid-OIDC sign-in, Pod discovery, file operations and ACP sharing.",
      "I wrote @solid/react-component so our Solid apps could share the same login UI, provider picker and authentication guard.",
      "On solidproject.org, I’ve added a skip link, keyboard-accessible mobile navigation, better semantics and labels, stronger contrast, and mobile layout fixes.",
      "I write unit and integration tests and review the interfaces across screen sizes and keyboard navigation before release.",
    ],
  },
  {
    title: "Senior Frontend Engineer, freelance",
    org: "Eclait",
    dates: "2025",
    points: [
      "I worked on Excluvia, a creator platform with memberships, livestreaming, fan chat, messages, courses and a marketplace.",
      "My work included LiveKit video, realtime chat and presence, Stripe and Paystack payments, wallets and creator analytics.",
      "I also worked on the internal dashboard used to manage creators, fans, products, courses, campaigns and email templates.",
      "I built responsive flows across the public site, creator and fan accounts, payments, settings and the operations dashboard.",
    ],
  },
  {
    title: "Frontend Engineer",
    org: "Code Funhouse",
    dates: "Jul 2024 – Nov 2025",
    points: [
      "I worked across the student, teacher and parent dashboards, including school administration tools in the teacher experience.",
      "For students, I worked on the in-browser code editor, live preview, AI tutor and code checker.",
      "For teachers and parents, I built tools for creating lessons and quizzes and following a child’s progress.",
      "I also worked on a separate hackathon platform where schools register students and participants submit, review, comment on and vote for projects.",
      "The wider product uses Stripe for payments, Sanity for content and Socket.IO for realtime features.",
    ],
  },
  {
    title: "Frontend Developer",
    org: "Turbham Technologies",
    dates: "Mar 2024 – Oct 2025",
    points: [
      "I worked on the Turbomedics patient app and a separate health-centre and lab operations app in Vue 3.",
      "The patient app covers appointments, prescriptions, medical records, reports, charts and data from Turbomedics test devices.",
      "I integrated Ask Dr. Deuce and tools for diabetes, cardiovascular, weight, kidney, liver and lipid risk assessment.",
      "The health-centre app is used to manage departments, wards, test centres and patient records.",
    ],
  },
  {
    title: "Lead Frontend Engineer",
    org: "SellMedia Inc",
    dates: "Jul 2024 – Mar 2025",
    points: [
      "I led a team of four frontend engineers working on Next.js media products.",
      "I planned frontend work with product managers, designers and backend engineers, then reviewed the implementation with the team.",
      "I set frontend conventions, reviewed pull requests and mentored engineers through technical decisions and delivery.",
    ],
  },
  {
    title: "Frontend Engineer, part-time",
    org: "EngagEvents",
    dates: "Apr – Dec 2024",
    points: [
      "I built live Q&A, quizzes, polls, surveys and word clouds using Next.js, TypeScript and Socket.IO.",
      "I worked on moderation tools and host analytics used during live events.",
      "The interfaces were designed to remain usable on phones and during busy, fast-moving sessions.",
    ],
  },
  {
    title: "Blockchain Frontend Developer → Team Lead",
    org: "UNICCON Group",
    dates: "Nov 2022 – Apr 2024",
    points: [
      "I built React and Next.js interfaces that connected to Ethereum smart contracts through ethers and wagmi.",
      "In January 2024, I became the team lead across blockchain, backend, mobile and frontend engineers.",
      "I coordinated work with leadership, wrote development procedures and continued contributing to the frontend.",
    ],
  },
  {
    title: "Frontend Developer (Outreachy)",
    org: "Creative Commons",
    dates: "Dec 2022 – Mar 2023",
    points: [
      "My Outreachy project moved CC Search pages from PHP templates to semantic HTML, CSS and JavaScript.",
      "I improved the page structure and accessibility while keeping the existing search behaviour intact.",
      "I documented the work so future contributors could understand and continue the migration.",
    ],
  },
  {
    title: "Frontend Developer",
    org: "Stepcho Nigeria",
    dates: "Nov 2019 – Nov 2021",
    points: [
      "I built and maintained websites and web apps for clients with React and Next.js.",
      "I connected frontend features to APIs, tested and debugged releases, and helped clients with technical issues.",
      "I paid particular attention to responsive layouts, performance and making the interfaces straightforward to use.",
    ],
  },
];

export const education = [
  { title: "Frontend Engineering diploma", org: "AltSchool Africa", dates: "2022 – 2023" },
  { title: "BA, International Studies & Diplomacy", org: "University of Benin", dates: "2014 – 2018" },
];

export const volunteerOrgs = [
  {
    org: "OneSky Collective",
    role: "Volunteer engineer",
    summary: "I help with engineering on OneSky’s sustainability product.",
    href: "https://www.oneskycollective.org",
  },
  {
    org: "WeTech",
    role: "Frontend mentor",
    summary: "I’ve been mentoring frontend developers here since September 2025.",
  },
  {
    org: "She Code Africa",
    role: "Frontend mentor",
    summary: "I mentor women who are learning frontend development.",
  },
];

export type Post = { title: string; href: string; source: "Medium" | "Hashnode"; date?: string };

export const writingPosts: Post[] = [
  {
    title: "How to fix GitHub SSH authentication issues on Mac",
    href: "https://medium.com/@rukyjacob/how-to-fix-github-ssh-authentication-issues-on-mac-solving-the-ssh-key-problem-for-developers-2dfe405e56aa",
    source: "Medium",
    date: "May 2025",
  },
  {
    title: "The non-tech side: balancing code with real life",
    href: "https://medium.com/@rukyjacob/the-non-tech-side-balancing-code-with-real-life-self-care-and-mental-wellbeing-ad4ab065b986",
    source: "Medium",
    date: "Oct 2023",
  },
  {
    title: "How I created my Git-Spy web application using React",
    href: "https://preciousblogs.hashnode.dev",
    source: "Hashnode",
  },
  {
    title: "Outreachy week 6: mid-point project progress",
    href: "https://preciousblogs.hashnode.dev",
    source: "Hashnode",
  },
  { title: "Everybody struggles", href: "https://preciousblogs.hashnode.dev", source: "Hashnode" },
];
