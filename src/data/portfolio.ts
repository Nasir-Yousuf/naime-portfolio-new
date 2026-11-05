export interface PersonalInfo {
  name: string;
  title: string;
  badge: string;
  tagline: string;
  shortBio: string;
  fullBio: string;
  location: string;
  phone: string;
  email: string;
  availability: string;
  resumeUrl?: string;
  avatar: string;
  portrait?: string;
  socials: {
    linkedin: string;
    whatsapp: string;
    facebook: string;
  };
}

export interface CredibilityMetric {
  value: string;
  label: string;
  sublabel: string;
  description: string;
  tag: string;
  category?: "INDUSTRY" | "CLIENTS" | "EDUCATION" | "TEACHING";
}

export interface TeachingModule {
  title: string;
  description: string;
  topics: string[];
  outcomes: string;
  practicalTools: string[];
}

export interface TeachingTrack {
  id: string;
  track: string;
  badge: string;
  description: string;
  modules: TeachingModule[];
}

export interface AIToolItem {
  name: string;
  role: string;
  practicalUses: string[];
  iconKey: "chatgpt" | "gemini" | "claude" | "canva" | "firefly" | "perplexity" | "notebooklm";
}

export interface AIWorkflowStage {
  step: string;
  title: string;
  aiRole: string;
  humanRole: string;
  tools: string[];
}

export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  classroomParallels: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: "marketing" | "teaching";
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  keyPoints: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientContext: string;
  industry: string;
  challenge: string;
  strategy: string;
  execution: string[];
  result: string;
  metricHighlight: string;
  metricLabel: string;
  teachingTakeaway: string;
  tools: string[];
  ndaProtected: boolean;
  clientType?: string;
  region?: string;
  objective?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: "Client Work" | "Agency Life" | "Training" | "Presentations" | "Professional Moments" | string;
  caption: string;
  isVideo?: boolean;
  videoUrl?: string;
  thumbnailUrl?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
  imagePlaceholderText: string;
}

export interface PortfolioVideo {
  id: string;
  title: string;
  originalTitle: string;
  youtubeId: string;
  videoUrl: string;
  category: "Client Strategy" | "Live Closing & Deals" | "Masterclass" | "Testimonial";
  format: "standard" | "short";
  badge: string;
  description: string;
  thumbnailUrl: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  authority: string;
  type: "certification" | "degree" | "training";
  period?: string;
  description: string;
  verifiedBadge: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  organization: string;
  relationship: string;
  statusNote: string;
  phone?: string;
  email?: string;
}

export interface BookingData {
  title: string;
  subtitle: string;
  badge: string;
  calendlyUrl: string;
}

export interface TeachingPillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    focus: string;
  }[];
}

export const portfolioData = {
  personal: {
    name: "Naime",
    title: "Digital Marketing, Freelancing & AI Instructor",
    badge: "NSDA Level-3 Certified • Practitioner-Instructor",
    tagline:
      "I turn real-world digital marketing experience into practical learning, helping individuals and businesses develop modern, career-ready skills.",
    shortBio:
      "NSDA Level-3 Certified Digital Marketer with 4+ years of agency marketing experience, 100+ international client accounts managed, and 5+ years of mathematics pedagogy applied to structured digital marketing education.",
    fullBio:
      "Combining formal NSDA Level-3 certification, hands-on agency operations, international client management across global timezones, and over five years of classroom mathematics teaching experience to deliver high-impact, practical digital marketing, freelancing, and AI workflow training.",
    location: "Sirajganj, Bangladesh",
    phone: "+8801625596245",
    email: "digiticnaime@gmail.com",
    availability: "Available for Instructor Roles, Institutional Batches & Corporate Training",
    resumeUrl: "#contact",
    avatar: "/images/naime-hero.jpg",
    portrait: "/images/naime-portrait.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shinewithnaime/",
      whatsapp: "https://wa.me/8801625596245",
      facebook: "https://facebook.com",
    },
  } as PersonalInfo,

  corePillars: [
    {
      title: "Real Industry Experience",
      badge: "Commercial Execution",
      description:
        "100+ international client accounts managed across Meta Ads, Google Ads, full-funnel architectures, and organic growth systems with direct agency accountability.",
    },
    {
      title: "Structured Teaching Ability",
      badge: "Pedagogical Discipline",
      description:
        "5+ years of mathematics teaching experience translated into structured curriculum design, diagnostic concept simplification, and actionable student mentoring.",
    },
    {
      title: "Modern AI Integration",
      badge: "Future-Ready Workflows",
      description:
        "Teaching learners how to strategically use ChatGPT, Gemini, Claude, and Canva to accelerate research and creative workflows while preserving critical human judgment.",
    },
  ],

  credibilityMetrics: [
    {
      value: "100+",
      label: "International Accounts",
      sublabel: "Managed Across Timezones",
      description: "Direct overseas client communication, campaign delivery, and retainer management at Social Tamai.",
      tag: "Client Operations",
      category: "CLIENTS",
    },
    {
      value: "Level-3",
      label: "NSDA Certified Marketer",
      sublabel: "Govt. of Bangladesh",
      description: "National Skills Development Authority competency assessment in digital marketing standards.",
      tag: "Govt. Credential",
      category: "EDUCATION",
    },
    {
      value: "5+ Years",
      label: "Teaching Experience",
      sublabel: "Secondary & Coaching Math",
      description: "Formal classroom pedagogy, assessment design, and breaking complex problem-solving into clear steps.",
      tag: "Instructional Pedagogy",
      category: "TEACHING",
    },
    {
      value: "4+ Years",
      label: "Performance Marketing",
      sublabel: "Next Clicker & Agency Ops",
      description: "Hands-on execution across Meta Ads, Google Ads, conversion funnels, and inbound lead generation.",
      tag: "Agency Track Record",
      category: "INDUSTRY",
    },
  ] as CredibilityMetric[],

  videoShowcase: {
    title: "Building a Personal Brand: Behind the Scenes with Naim Khan",
    subtitle:
      "A walkthrough of personal branding, structured pedagogy, international client campaigns, and practical digital growth frameworks.",
    badge: "Featured Masterclass & Story",
    videoUrl: "https://youtu.be/iQHrgApzAgM?si=FedmxZ2UmMViF-Uy",
    posterImage: "/images/video-poster.jpg",
  },

  teachingTracks: [
    {
      id: "digital-marketing",
      track: "Digital Marketing Mastery",
      badge: "Core Industry Skills",
      description:
        "Comprehensive, hands-on training from marketing fundamentals to advanced paid performance campaigns and analytics telemetry.",
      modules: [
        {
          title: "Digital Marketing Fundamentals & Strategic Frameworks",
          description: "Understanding marketing psychology, customer journey mapping, and cross-channel campaign architectures.",
          topics: [
            "Customer Persona & Behavioral Research",
            "Full-Funnel Alignment (TOFU / MOFU / BOFU)",
            "Value Proposition & Offer Structuring",
            "Competitive Market Auditing",
          ],
          outcomes: "Learners design a complete multi-channel marketing roadmap for any business model.",
          practicalTools: ["Google Docs Strategy Briefs", "Miro Funnels", "Market Research Templates"],
        },
        {
          title: "Meta Advertising (Facebook & Instagram Ads)",
          description: "End-to-end campaign architecture inside Meta Ads Manager with budget pacing and retargeting systems.",
          topics: [
            "Meta Pixel & Conversions API (CAPI) Telemetry",
            "Custom & Lookalike Audience Architectures",
            "Direct-Response Ad Creative Briefs & Angle Testing",
            "A/B Split Testing & Budget Scaling Rules",
          ],
          outcomes: "Students set up, launch, and optimize live Meta ad campaigns with measurable ROAS.",
          practicalTools: ["Meta Ads Manager", "Meta Business Suite", "Events Manager"],
        },
        {
          title: "Google Ads & Search Engine Marketing (SEM)",
          description: "Capturing high-intent commercial demand through targeted Search, Display, and localized keyword architectures.",
          topics: [
            "Commercial Intent Keyword Research & Match Types",
            "Negative Keyword Pruning & Quality Score Tuning",
            "Responsive Search Ads (RSA) & Extension Strategy",
            "Conversion Tracking & Smart Bidding Strategies",
          ],
          outcomes: "Students deploy search campaigns that eliminate wasted ad spend and generate qualified inquiries.",
          practicalTools: ["Google Ads Platform", "Google Keyword Planner", "Search Console"],
        },
        {
          title: "SEO, Content Architecture & Organic Distribution",
          description: "Building sustainable inbound search traffic and social media community presence without ad dependency.",
          topics: [
            "On-Page Technical SEO & Content Structuring",
            "Search Intent Optimization & SERP Feature Targeting",
            "Organic Social Media Editorial Calendars",
            "Content Repurposing & Multi-Platform Syndication",
          ],
          outcomes: "Learners establish organic search footprints and systematic organic distribution engines.",
          practicalTools: ["Google Search Console", "Ubersuggest / Ahrefs Free", "Canva Editorial"],
        },
        {
          title: "Conversion Funnels, Lead Generation & Telemetry",
          description: "Engineering high-converting landing pages, lead capture workflows, and GA4 telemetry dashboards.",
          topics: [
            "Landing Page Wireframing & Conversion Rate Optimization (CRO)",
            "Automated CRM Lead Capture Pipelines",
            "Google Analytics 4 (GA4) Event Setup & Attribution",
            "Campaign Post-Mortems & Data-Driven Reporting",
          ],
          outcomes: "Students connect ad traffic to verified lead capture and interpret GA4 conversion reports.",
          practicalTools: ["Google Analytics 4", "Google Tag Manager", "HubSpot / CRM Workflows"],
        },
      ],
    },
    {
      id: "freelancing",
      track: "Freelancing & International Client Operations",
      badge: "Career & Income Readiness",
      description:
        "Practical career blueprints for building international freelance careers, winning high-value retainers, and communicating professionally across time zones.",
      modules: [
        {
          title: "Marketplace Fundamentals & High-Impact Profile Positioning",
          description: "Navigating international platforms (Upwork, Fiverr, LinkedIn) and structuring client-facing profiles that stand out.",
          topics: [
            "Niche Selection & Service Packaging",
            "Writing High-Converting Marketplace Overviews",
            "Portfolio Case Study Presentation for Overseas Clients",
            "Marketplace Algorithm Signals & Search Visibility",
          ],
          outcomes: "Learners publish a polished, optimized professional profile with verified credibility proof.",
          practicalTools: ["Upwork", "Fiverr", "LinkedIn Creator Suite", "Portfolio Builders"],
        },
        {
          title: "Consultative Discovery, Proposal Writing & Pitching",
          description: "Crafting customized proposals that win jobs by addressing client pain points rather than copy-pasting generic templates.",
          topics: [
            "Dissecting Client Job Briefs for Hidden Pain Points",
            "Writing 3-Paragraph High-Intent Proposals",
            "Conducting Consultative Discovery Calls via Zoom/Meet",
            "Handling Objections & Pitching Value Over Lowest Price",
          ],
          outcomes: "Students write compelling customized proposals and lead professional discovery meetings.",
          practicalTools: ["Proposal Frameworks", "Loom Video Pitches", "Google Meet Discovery"],
        },
        {
          title: "International Client Management & Retainer Operations",
          description: "Techniques for managing 100+ global accounts, setting crystal-clear expectations, and securing recurring monthly retainers.",
          topics: [
            "Cross-Cultural Client Communication & Timezone Pacing",
            "Weekly Milestone Reporting & Performance Transparency",
            "Turning One-Time Projects into Recurring Monthly Retainers",
            "Professional Ethics, NDA Compliance & Scope Management",
          ],
          outcomes: "Learners manage long-term client engagements with high retention and minimal friction.",
          practicalTools: ["Trello / Asana Sprints", "Slack / WhatsApp Client Ops", "Notion Dashboards"],
        },
      ],
    },
    {
      id: "ai-marketing",
      track: "AI for Modern Marketing & Productivity",
      badge: "Future-Ready Curriculum",
      description:
        "Grounding generative AI tools in realistic marketing workflows: deep research, multi-variant copywriting, rapid creative ideation, and human-in-the-loop validation.",
      modules: [
        {
          title: "Generative AI Foundations & Strategic Prompt Engineering",
          description: "Mastering zero-shot, few-shot, and role-based prompting to transform AI assistants into reliable research and strategy partners.",
          topics: [
            "Core Architecture of LLMs & Hallucination Mitigation",
            "Context-Rich Prompt Frameworks (Persona, Objective, Constraint, Format)",
            "Chaining Complex Marketing Workflows in ChatGPT & Claude",
            "Building Reusable Custom GPTs & Project Instructions",
          ],
          outcomes: "Students construct repeatable prompt systems that generate actionable marketing deliverables in minutes.",
          practicalTools: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Google Gemini"],
        },
        {
          title: "AI-Powered Market Research & Audience Discovery",
          description: "Using AI to analyze competitor positioning, synthesize customer reviews, and identify underserved audience angles.",
          topics: [
            "Competitor Ad Library Synthesis with Perplexity & Gemini",
            "Mining Amazon/Reddit Reviews for Customer Pain Points",
            "Synthesizing Industry Reports with NotebookLM",
            "Mapping Demographic & Psychographic Buying Triggers",
          ],
          outcomes: "Learners generate deep customer insight dossiers 5x faster than manual research.",
          practicalTools: ["Perplexity AI", "NotebookLM", "Gemini Advanced"],
        },
        {
          title: "AI-Assisted Direct-Response Copywriting & Content",
          description: "Using AI to draft multi-variant ad headlines, email nurture sequences, and social carousels with strict human editing standards.",
          topics: [
            "Hook Generation for Meta & Short-Form Video Ads",
            "Drafting PAS (Problem-Agitate-Solution) & AIDA Ad Copy",
            "Email Autoresponder Sequences & Subject Line Ideation",
            "Human-in-the-Loop Voice Tuning & Brand Guidelines Enforcement",
          ],
          outcomes: "Students produce dozens of diverse ad copy variations while maintaining authentic brand voice.",
          practicalTools: ["Claude", "ChatGPT", "Hemingway Editor"],
        },
        {
          title: "AI Creative Direction, Visual Production & Automation",
          description: "Accelerating creative asset production with Canva Magic Studio, Adobe Firefly, and automated lead routing.",
          topics: [
            "Canva Magic Studio Workflows for Campaign Collateral",
            "Concept Moodboarding & Ad Backgrounds with Adobe Firefly",
            "Connecting Inbound Leads to CRM via Zapier / Make",
            "Responsible AI Usage, Copyright Awareness & Ethics",
          ],
          outcomes: "Learners build complete creative campaigns and automate repetitive marketing tasks.",
          practicalTools: ["Canva Magic Studio", "Adobe Firefly", "Zapier / Make Automations"],
        },
      ],
    },
  ] as TeachingTrack[],

  aiToolkit: {
    heading: "The Modern Marketer's AI Toolkit",
    subtitle:
      "AI is changing how marketers research, create, analyze and execute. I believe in teaching people how to use these tools strategically, while keeping human judgment, creativity and critical thinking at the center.",
    categories: [
      {
        title: "AI Assistants & Strategic Research",
        subtitle: "Audience Analysis, Synthesizing Data & Campaign Brainstorming",
        tools: [
          {
            name: "ChatGPT (OpenAI)",
            role: "Strategy & Prompt Chaining",
            practicalUses: ["Marketing campaign architectures", "Custom persona simulation", "Multi-angle ad copy drafting"],
            iconKey: "chatgpt",
          },
          {
            name: "Google Gemini",
            role: "Real-Time Search & Multimodal Synthesis",
            practicalUses: ["Live competitor research", "Search trend cross-referencing", "Document & presentation outlines"],
            iconKey: "gemini",
          },
          {
            name: "Claude (Anthropic)",
            role: "Long-Form Analysis & Nuanced Copywriting",
            practicalUses: ["Editorial content structuring", "High-conversion storytelling", "Complex briefing document analysis"],
            iconKey: "claude",
          },
          {
            name: "Perplexity AI",
            role: "Fact-Checked Market Research",
            practicalUses: ["Competitor ad spend intelligence", "Industry benchmark retrieval", "Citing sources for strategic proposals"],
            iconKey: "perplexity",
          },
          {
            name: "Google NotebookLM",
            role: "Source-Grounded Knowledge Management",
            practicalUses: ["Synthesizing client brand guidelines", "Auditing long campaign reports", "Curriculum study guides"],
            iconKey: "notebooklm",
          },
        ] as AIToolItem[],
      },
      {
        title: "AI Content & Creative Production",
        subtitle: "Visual Ideation, Ad Creative Variations & Asset Generation",
        tools: [
          {
            name: "Canva Magic Studio",
            role: "Rapid Campaign Collateral",
            practicalUses: ["Multi-format social post generation", "Visual mockup adaptation", "Ad banner variation at scale"],
            iconKey: "canva",
          },
          {
            name: "Adobe Firefly",
            role: "Generative Commercial Imagery",
            practicalUses: ["High-resolution ad backgrounds", "Product concept mockups", "Creative moodboarding for client approval"],
            iconKey: "firefly",
          },
        ] as AIToolItem[],
      },
    ],
    workflowStages: [
      {
        step: "01",
        title: "Market & Audience Research",
        aiRole: "Analyzes industry forums, competitor ad libraries, and search intent clusters in minutes.",
        humanRole: "Validates cultural relevance, buying power, and commercial feasibility.",
        tools: ["Perplexity", "NotebookLM", "Gemini"],
      },
      {
        step: "02",
        title: "Strategic Funnel Architecture",
        aiRole: "Suggests multi-channel funnel flows, budget allocations, and persona pain point hooks.",
        humanRole: "Selects the optimal channel mix based on real client budget and operational constraints.",
        tools: ["ChatGPT", "Claude"],
      },
      {
        step: "03",
        title: "Creative & Copy Production",
        aiRole: "Generates 20+ ad copy variations, hook angles, and rapid design concepts.",
        humanRole: "Edits for brand voice, emotional authenticity, and compliance with platform ad policies.",
        tools: ["Claude", "Canva Magic Studio", "Adobe Firefly"],
      },
      {
        step: "04",
        title: "Campaign Setup & Tracking",
        aiRole: "Drafts URL UTM parameters and cross-references conversion event tracking checklists.",
        humanRole: "Deploys pixel events, tests sandbox firing, and configures live budget bidding in Ads Manager.",
        tools: ["Meta Ads Manager", "Google Tag Manager", "GA4"],
      },
      {
        step: "05",
        title: "Telemetry & Performance Analysis",
        aiRole: "Synthesizes raw campaign telemetry, identifies cost anomalies, and drafts weekly summary points.",
        humanRole: "Conducts diagnostic root-cause analysis, talks to the client, and decides scaling bets.",
        tools: ["GA4", "ChatGPT Analysis", "Spreadsheets"],
      },
    ] as AIWorkflowStage[],
  },

  teachingMethodology: {
    heading: "Teaching Beyond Theory",
    subtitle:
      "Combining 5+ years of mathematics pedagogy with real-world agency marketing to deliver structured, reproducible learning.",
    stages: [
      {
        number: "01",
        title: "Understand",
        subtitle: "Clear Foundations, Zero Jargon",
        description:
          "Demystifying algorithms, ad auction mechanics, and marketing metrics by breaking them into logical first principles that any learner can comprehend.",
        classroomParallels: "Derived from secondary math teaching: if students cannot visualize the fundamental concept, advanced formulas will fail.",
      },
      {
        number: "02",
        title: "Demonstrate",
        subtitle: "Live Accounts, Real Budgets",
        description:
          "Opening actual ad dashboards, live client campaigns, and real budget pacing instead of relying on outdated textbook slides or hypothetical scenarios.",
        classroomParallels: "Like solving a complex equation on the whiteboard in real-time, showing every decision and pitfall openly.",
      },
      {
        number: "03",
        title: "Practice",
        subtitle: "Guided Hands-On Exercises",
        description:
          "Guiding learners through targeted sandbox tasks: setting up pixel events, structuring ad groups, writing prompt chains, and drafting proposals.",
        classroomParallels: "Immediate diagnostic feedback on problem sets so misunderstandings are corrected before becoming bad habits.",
      },
      {
        number: "04",
        title: "Build",
        subtitle: "Real Capstone Deliverables",
        description:
          "Students build portfolio-grade deliverables: a complete Meta ad campaign, an optimized freelance profile, and client strategy decks.",
        classroomParallels: "Moving from textbook exercises to solving unassisted mock exam challenges with full creative ownership.",
      },
      {
        number: "05",
        title: "Improve",
        subtitle: "Critique, Refine & Career Launch",
        description:
          "Constructive peer reviews, campaign post-mortems, consultative interview rehearsals, and ongoing professional mentorship.",
        classroomParallels: "Individualized mentoring that identifies each student's personal learning curve and elevates their confidence.",
      },
    ] as MethodologyStep[],
  },

  experiences: [
    {
      period: "Mar 2026 – Present",
      role: "Growth & Marketing Specialist",
      company: "Next Clicker",
      location: "Bangladesh (Agency)",
      type: "marketing",
      description:
        "Architecting data-backed performance marketing campaigns, conversion funnels, and inbound lead acquisition channels for commercial clients.",
      responsibilities: [
        "Develop multi-channel acquisition funnels combining Meta Ads, Google Ads, and landing page optimization.",
        "Collaborate with creative teams to produce high-performing direct-response ad collaterals and angles.",
        "Implement end-to-end event telemetry, GA4 tracking, and transparent ROI reporting for business stakeholders.",
      ],
      keyPoints: [
        "Develop multi-channel acquisition funnels combining Meta Ads, Google Ads, and landing page optimization.",
        "Collaborate with creative teams to produce high-performing direct-response ad collaterals and angles.",
        "Implement end-to-end event telemetry, GA4 tracking, and transparent ROI reporting for business stakeholders.",
      ],
      achievements: [
        "Streamlined inbound qualified lead funnels, reducing customer acquisition costs across commercial campaigns.",
        "Mentored junior marketing associates on campaign structure, ad copywriting, and client communication standards.",
      ],
      skills: ["Growth Strategy", "Conversion Funnels", "Paid Media", "Meta Ads", "GA4", "Lead Generation"],
    },
    {
      period: "Nov 2023 – Mar 2026",
      role: "Digital Marketing Strategist & Client Lead",
      company: "Social Tamai",
      location: "Remote / International Accounts",
      type: "marketing",
      description:
        "Directly managed communications, campaign delivery, and retainer relationships for 100+ international clients across multiple industries.",
      responsibilities: [
        "Served as direct client liaison for 100+ overseas business owners, managing deliverables, sprint reviews, and reporting.",
        "Executed organic social media growth strategies, audience nurturing schedules, and multi-platform distribution.",
        "Managed client expectations, handled consultative revisions, and maintained high retention on recurring monthly accounts.",
      ],
      keyPoints: [
        "Served as direct client liaison for 100+ overseas business owners, managing deliverables, sprint reviews, and reporting.",
        "Executed organic social media growth strategies, audience nurturing schedules, and multi-platform distribution.",
        "Managed client expectations, handled consultative revisions, and maintained high retention on recurring monthly accounts.",
      ],
      achievements: [
        "Maintained client satisfaction across 100+ accounts through proactive communication and reliable milestone delivery.",
        "Built standardized client onboarding checklists and reporting templates that reduced project setup time by 40%.",
      ],
      skills: [
        "International Client Management",
        "Social Media Strategy",
        "Retainer Delivery",
        "Cross-Platform Marketing",
        "Client Retention",
      ],
    },
    {
      period: "Mar 2023 – Nov 2023",
      role: "Senior Mathematics Teacher",
      company: "Primacia Coaching Home",
      location: "Tamai, Sirajganj",
      type: "teaching",
      description:
        "Instructed senior students in advanced analytical mathematics, developing systematic pedagogical methods to simplify complex problem-solving.",
      responsibilities: [
        "Structured advanced mathematical curricula into intuitive, step-by-step conceptual units.",
        "Designed weekly diagnostic assessments to isolate individual learning bottlenecks and provide personalized coaching.",
        "Facilitated interactive problem-solving workshops that fostered critical thinking, analytical logic, and discipline.",
      ],
      keyPoints: [
        "Structured advanced mathematical curricula into intuitive, step-by-step conceptual units.",
        "Designed weekly diagnostic assessments to isolate individual learning bottlenecks and provide personalized coaching.",
        "Facilitated interactive problem-solving workshops that fostered critical thinking, analytical logic, and discipline.",
      ],
      achievements: [
        "Demonstrated significant improvements in student conceptual clarity and standardized exam performance.",
        "Established structured lesson frameworks later adapted directly into digital marketing instructional modules.",
      ],
      skills: ["Curriculum Structuring", "Conceptual Simplification", "Diagnostic Assessment", "Student Mentoring", "Pedagogy"],
    },
    {
      period: "Aug 2019 – Mar 2023",
      role: "Junior Mathematics Teacher",
      company: "Light High Public School",
      location: "Sirajganj, Bangladesh",
      type: "teaching",
      description:
        "Delivered secondary school mathematics education to cohorts of 50+ students, honing core skills in classroom management and clear verbal instruction.",
      responsibilities: [
        "Delivered daily curriculum-aligned classroom lectures to cohorts of 50+ secondary students.",
        "Organized dedicated remedial sessions for struggling students, tailoring explanations to diverse learning styles.",
        "Maintained continuous academic performance records and engaged with parents regarding student development.",
      ],
      keyPoints: [
        "Delivered daily curriculum-aligned classroom lectures to cohorts of 50+ secondary students.",
        "Organized dedicated remedial sessions for struggling students, tailoring explanations to diverse learning styles.",
        "Maintained continuous academic performance records and engaged with parents regarding student development.",
      ],
      achievements: [
        "Maintained consistently high cohort pass rates through engaging, student-centered explanatory methods.",
        "Developed deep professional patience, public speaking confidence, and the ability to explain difficult concepts clearly.",
      ],
      skills: ["Classroom Management", "Public Speaking", "Instructional Design", "Student Motivation", "Clear Communication"],
    },
  ] as ExperienceItem[],

  caseStudies: [
    {
      id: "cs-1",
      title: "Qualified Lead Generation & Funnel Architecture",
      clientContext: "International B2B Professional Services Firm",
      clientType: "International B2B Professional Services Firm",
      industry: "B2B Professional Services",
      region: "North America Remote",
      objective: "Generate high-intent inbound qualified leads with reduced acquisition cost.",
      ndaProtected: true,
      challenge:
        "The client was experiencing unpredictable inbound lead flow with high acquisition costs and inconsistent inquiry quality through unstructured social campaigns.",
      strategy:
        "Engineered a multi-touch acquisition funnel combining high-intent LinkedIn demographic targeting and Meta lookalike audiences with a streamlined inquiry qualification flow.",
      execution: [
        "Audited target customer personas, segmenting decision-makers by company scale and operational bottlenecks.",
        "Drafted direct-response ad copy emphasizing concrete business value and transparent consultation deliverables.",
        "Implemented conversion pixel telemetry with automated CRM lead routing for rapid sales follow-up.",
        "Iterated weekly budget allocations toward top-converting audience segments and creative formats.",
      ],
      result:
        "Maintained a continuous 6-month campaign cycle achieving a verified 42% reduction in Cost Per Qualified Lead (CPL) while improving lead response turnaround.",
      metricHighlight: "-42% CPL",
      metricLabel: "Cost Per Qualified Lead Reduction",
      teachingTakeaway:
        "Used in my classroom to teach students how audience qualification before the click drastically lowers acquisition cost.",
      tools: ["Meta Ads Manager", "Google Analytics 4", "CRM Pipeline Automation"],
    },
    {
      id: "cs-2",
      title: "Omnichannel Social Media Growth & Dynamic Retargeting",
      clientContext: "International Consumer Goods & E-Commerce Brand",
      clientType: "International Consumer Goods & E-Commerce Brand",
      industry: "E-Commerce / Consumer Retail",
      region: "Europe & Australia Remote",
      objective: "Drive product discovery, organic follower engagement, and recover abandoned browsing carts.",
      ndaProtected: true,
      challenge:
        "High shopping cart abandonment rates and stagnant organic brand engagement during competitive seasonal promotional quarters.",
      strategy:
        "Structured a complementary two-part strategy: a value-driven organic educational content calendar paired with dynamic product catalog retargeting ads for recent visitors.",
      execution: [
        "Structured a 90-day content calendar focusing on product utility, customer unboxings, and transparent social proof.",
        "Configured dynamic catalog ads targeting site visitors who viewed specific product categories within a 7-day window.",
        "Established conversational community engagement workflows to answer inbound pre-sale inquiries promptly.",
      ],
      result:
        "Delivered a sustained 3.2x Peak Return on Ad Spend (ROAS) across peak holiday sales periods with a 3x increase in organic social reach.",
      metricHighlight: "3.2x ROAS",
      metricLabel: "Peak Return on Ad Spend",
      teachingTakeaway:
        "Demonstrates to learners why paid retargeting must always be supported by consistent organic brand credibility.",
      tools: ["Meta Business Suite", "Dynamic Catalog Ads", "Canva Creative Direction", "Shopify Analytics"],
    },
    {
      id: "cs-3",
      title: "High-Intent Local Search & Conversational WhatsApp Conversion",
      clientContext: "Regional Education & Professional Training Institution",
      clientType: "Regional Education & Professional Training Institution",
      industry: "Healthcare & Educational Training",
      region: "Regional Bangladesh",
      objective: "Increase enrolled admissions and scheduled consultations through local search.",
      ndaProtected: true,
      challenge:
        "Low enrollment numbers for new professional training cohorts due to broad, untargeted advertising that wasted ad spend outside the catchment area.",
      strategy:
        "Deployed hyper-localized Google Search campaigns focused on high-intent commercial keywords, directing mobile traffic directly to a WhatsApp consultation flow.",
      execution: [
        "Conducted geo-targeted search keyword research with rigorous negative keyword exclusions to eliminate irrelevant queries.",
        "Crafted mobile-optimized landing pages with direct click-to-WhatsApp admission consultation triggers.",
        "Trained internal admission counseling staff on conversational inquiry handling and follow-up timelines.",
      ],
      result:
        "Filled 100% of available cohort seats across three consecutive enrollment cycles while cutting wasted local search spend to zero.",
      metricHighlight: "100%",
      metricLabel: "Cohort Capacity Reached",
      teachingTakeaway:
        "Teaches students how reducing friction through direct chat onboarding transforms search intent into confirmed enrollments.",
      tools: ["Google Ads Search", "Google Search Console", "WhatsApp Business Integration"],
    },
  ] as CaseStudy[],

  credentials: [
    {
      id: "cred-1",
      title: "NSDA Certified Digital Marketer — Level 3",
      issuer: "National Skills Development Authority (NSDA)",
      authority: "Prime Minister's Office, Government of Bangladesh",
      type: "certification",
      description:
        "Rigorous national competency assessment validating operational proficiency in digital marketing campaign execution, ethical standards, analytics interpretation, and professional digital delivery.",
      verifiedBadge: "Government Standard Assessment",
    },
    {
      id: "cred-2",
      title: "Professional Digital Marketing Certification",
      issuer: "National Institute of Youth Development (NIYD)",
      authority: "Ministry of Youth and Sports, Government of Bangladesh",
      type: "training",
      description:
        "Comprehensive professional training curriculum spanning paid advertising mechanics, search marketing strategy, conversion funnels, and agency operations.",
      verifiedBadge: "Institutional Training Graduate",
    },
    {
      id: "cred-3",
      title: "Bachelor of Arts (BA)",
      issuer: "National University, Bangladesh",
      authority: "National University Academic Board",
      type: "degree",
      description:
        "Undergraduate academic degree establishing a solid foundation in humanities, formal structured communication, logical inquiry, and pedagogical discipline.",
      verifiedBadge: "University Degree",
    },
  ] as CredentialItem[],

  references: [
    {
      name: "Aliul Kabir",
      role: "CEO, Next Clicker",
      organization: "Master Trainer, ICT Division",
      relationship: "Agency Leadership & Master Trainer Professional Association",
      statusNote: "Direct contact details available upon request for institutional vetting.",
      phone: "+8801733053796",
    },
    {
      name: "Sharmin Akter",
      role: "Assistant Director",
      organization: "National Institute of Youth Development (NIYD)",
      relationship: "Institutional Training Authority & Professional Endorsement",
      statusNote: "Direct contact details available upon request for institutional vetting.",
      phone: "+8801789378048",
      email: "ad.admin@niyd.gov.bd",
    },
  ] as ReferenceItem[],

  booking: {
    badge: "Direct Calendar Access • 15 / 30 Min Discovery",
    title: "Discuss an Instructor Role or Training Opportunity",
    subtitle:
      "Looking for a qualified instructor for your training institute, corporate cohort, university, or academy? Select a time directly on the calendar below.",
    calendlyUrl: "https://calendly.com/stamai/shine_with_naime",
  } as BookingData,

  // Legacy compatibility fields
  clientJourneySteps: [
    { step: "01", name: "Understand", description: "Audit market baseline, audience demographics, and core business goals." },
    { step: "02", name: "Plan", description: "Build data-driven campaign funnels, budget allocation, and messaging frameworks." },
    { step: "03", name: "Execute", description: "Deploy targeted paid ads, content distribution, and tracking infrastructure." },
    { step: "04", name: "Measure", description: "Monitor conversion metrics, CPA, ROAS, and qualitative client feedback." },
    { step: "05", name: "Improve", description: "Iterate on creatives, audience subsets, and retention strategies." },
  ],

  mediaItems: [
    {
      id: "media-1",
      title: "International Client Strategy Session",
      category: "Client Work",
      caption: "Conducting remote sprint review and performance dashboard walkthrough with overseas clients.",
      imagePlaceholderText: "Client Meeting / Video Call Workspace",
      aspectRatio: "landscape",
    },
    {
      id: "media-2",
      title: "Agency Campaign Optimization",
      category: "Agency Life",
      caption: "Reviewing ad creative metrics, conversion pipelines, and budget reallocation at Next Clicker.",
      imagePlaceholderText: "Agency Marketing Desk & Multi-Screen Setup",
      aspectRatio: "square",
    },
    {
      id: "media-3",
      title: "Building a Personal Brand: Behind the Scenes",
      category: "Training",
      caption: "Behind the scenes insights, structured communication, and practical digital branding with Naim Khan.",
      imagePlaceholderText: "Featured Masterclass & Brand Story",
      aspectRatio: "landscape",
      isVideo: true,
      videoUrl: "https://youtu.be/iQHrgApzAgM?si=FedmxZ2UmMViF-Uy",
      thumbnailUrl: "/images/video-poster.jpg",
    },
    {
      id: "media-4",
      title: "NIYD Professional Certification Session",
      category: "Presentations",
      caption: "Participating in formal digital marketing evaluations and practical curriculum presentations.",
      imagePlaceholderText: "Institute Presentation & Professional Activity",
      aspectRatio: "portrait",
    },
    {
      id: "media-5",
      title: "One-on-One Student Mentoring",
      category: "Training",
      caption: "Helping students review their personal freelance profiles, proposals, and live campaign setups.",
      imagePlaceholderText: "Mentoring & Hands-on Student Support",
      aspectRatio: "square",
    },
    {
      id: "media-6",
      title: "Campaign Data Analysis & Strategy",
      category: "Professional Moments",
      caption: "Deep-diving into search telemetry and analytics reports to identify high-leverage growth avenues.",
      imagePlaceholderText: "Professional Focus / Marketing Strategy Review",
      aspectRatio: "landscape",
    },
  ] as MediaItem[],

  youtubeChannelUrl: "https://www.youtube.com/@shine_with_naime",

  portfolioVideos: [
    {
      id: "vid-1",
      title: "Live Zoom Call: High-Ticket Client Closing & Payment Proof",
      originalTitle: "Live Zoom Call: সঠিক প্রেজেন্টেশন দিয়ে হাই-টিকেট ক্লায়েন্ট ক্লোজিং ও পেমেন্ট প্রুফ! #freelancing101",
      youtubeId: "7Oytrn2SB9o",
      videoUrl: "https://youtube.com/shorts/7Oytrn2SB9o?feature=share",
      category: "Live Closing & Deals",
      format: "short",
      badge: "High-Ticket Closing",
      description: "Direct client presentation deconstruction demonstrating international high-ticket client closing and live payment confirmation.",
      thumbnailUrl: "https://i.ytimg.com/vi/7Oytrn2SB9o/hqdefault.jpg",
    },
    {
      id: "vid-2",
      title: "International Client Icebreaking to Live Strategy Pitch",
      originalTitle: "ইন্টারন্যাশনাল ক্লায়েন্টের সাথে Icebreaking থেকে শুরু করে Live Strategy Pitch! 🔥| Digital Marketing",
      youtubeId: "wQ3TjR0gccg",
      videoUrl: "https://youtu.be/wQ3TjR0gccg",
      category: "Client Strategy",
      format: "standard",
      badge: "Live Strategy Pitch",
      description: "Step-by-step breakdown of warming up international clients, handling objections, and pitching full-funnel marketing systems live on Zoom.",
      thumbnailUrl: "https://i.ytimg.com/vi/wQ3TjR0gccg/hqdefault.jpg",
    },
    {
      id: "vid-3",
      title: "Building a Personal Brand: Behind the Scenes with Naim Khan",
      originalTitle: "Building a Personal Brand: Behind the Scenes with Naim Khan",
      youtubeId: "iQHrgApzAgM",
      videoUrl: "https://youtu.be/iQHrgApzAgM",
      category: "Masterclass",
      format: "standard",
      badge: "Personal Brand BTS",
      description: "An authentic behind-the-scenes breakdown of personal brand architecture, content positioning, and high-trust audience building.",
      thumbnailUrl: "https://i.ytimg.com/vi/iQHrgApzAgM/hqdefault.jpg",
    },
    {
      id: "vid-4",
      title: "Why Posting More Won't Grow Your Brand Anymore (Do This Instead)",
      originalTitle: "Why Posting More Won't Grow Your Brand Anymore! (Do This Instead)",
      youtubeId: "laoYCmr9VsU",
      videoUrl: "https://youtu.be/laoYCmr9VsU",
      category: "Masterclass",
      format: "standard",
      badge: "Organic Growth",
      description: "Why high-frequency, low-intent content fails to convert, and the high-leverage frameworks required to build durable authority.",
      thumbnailUrl: "https://i.ytimg.com/vi/laoYCmr9VsU/hqdefault.jpg",
    },
    {
      id: "vid-5",
      title: "Inside a $640 Social Media Agency Deal | Live Client Meeting to Payment",
      originalTitle: "Inside a $640 Social Media Agency Deal | Live Client Meeting to Payment",
      youtubeId: "w85NJLAcP7g",
      videoUrl: "https://youtube.com/shorts/w85NJLAcP7g?feature=share",
      category: "Live Closing & Deals",
      format: "short",
      badge: "$640 Retainer Proof",
      description: "Real-time client meeting recording showing the transition from discovery dialogue directly to closed deal and payment.",
      thumbnailUrl: "https://i.ytimg.com/vi/w85NJLAcP7g/hqdefault.jpg",
    },
    {
      id: "vid-6",
      title: "Inside a Live US Real Estate Client Strategy Call | Agency BTS",
      originalTitle: "Inside a Live US Real Estate Client Strategy Call | Social Media Agency BTS",
      youtubeId: "rrcHJJl5wGw",
      videoUrl: "https://youtu.be/rrcHJJl5wGw",
      category: "Client Strategy",
      format: "standard",
      badge: "US Client Session",
      description: "Unedited sprint session consulting an American real estate client on paid advertising funnels and localized lead generation.",
      thumbnailUrl: "https://i.ytimg.com/vi/rrcHJJl5wGw/hqdefault.jpg",
    },
    {
      id: "vid-7",
      title: "How We Helped Our Client Grow on LinkedIn | Client Testimonial",
      originalTitle: "How We Helped Our Client Grow on LinkedIn | Honest Client Testimonial #shorts",
      youtubeId: "xulz_zT-zRA",
      videoUrl: "https://youtube.com/shorts/xulz_zT-zRA?feature=share",
      category: "Testimonial",
      format: "short",
      badge: "Client Review",
      description: "Unfiltered client video testimonial validating organic executive brand growth and genuine LinkedIn performance metrics.",
      thumbnailUrl: "https://i.ytimg.com/vi/xulz_zT-zRA/hqdefault.jpg",
    },
    {
      id: "vid-8",
      title: "Inside a Live US Client Strategy Call: Building 100% Organic Personal Brands",
      originalTitle: "Inside a Live US Client Strategy Call: How We Build 100% Organic Personal Brands!",
      youtubeId: "xirAyEgr1Ds",
      videoUrl: "https://youtu.be/xirAyEgr1Ds",
      category: "Client Strategy",
      format: "standard",
      badge: "Organic Personal Brand",
      description: "Comprehensive Zoom call demonstrating audience persona architecture, compounding reach, and organic funnel design.",
      thumbnailUrl: "https://i.ytimg.com/vi/xirAyEgr1Ds/hqdefault.jpg",
    },
    {
      id: "vid-9",
      title: "Why Smart Leaders Delegate Social Media Growth | Business Mindset",
      originalTitle: "Why Smart Leaders Delegate Social Media Growth | Real Client Meeting & Business Mindset",
      youtubeId: "05msqdG-uHw",
      videoUrl: "https://youtu.be/05msqdG-uHw",
      category: "Masterclass",
      format: "standard",
      badge: "Leadership & Strategy",
      description: "Deconstructing why agency owners and business leaders must delegate social marketing execution to scale their core operations.",
      thumbnailUrl: "https://i.ytimg.com/vi/05msqdG-uHw/hqdefault.jpg",
    },
  ] as PortfolioVideo[],

  teachingPillars: [
    {
      title: "Simplify",
      tagline: "Clarity Over Jargon",
      description: "Turn complex algorithms, ad mechanics, and analytics into easily digestible, intuitive principles that students grasp quickly.",
      iconName: "Lightbulb",
    },
    {
      title: "Structure",
      tagline: "Framework-Driven Learning",
      description: "Build every lecture around structured workflows, actionable checklists, and reproducible step-by-step methodologies.",
      iconName: "Layers",
    },
    {
      title: "Demonstrate",
      tagline: "Grounded in Real Campaigns",
      description: "Replace hypothetical textbook theory with live ad managers, real client accounts, budget management, and campaign post-mortems.",
      iconName: "ScreenShare",
    },
    {
      title: "Mentor",
      tagline: "Career & Client Readiness",
      description: "Prepare learners for the actual market: client communication, proposal drafting, portfolio presentation, and freelancing ethics.",
      iconName: "Users2",
    },
  ] as TeachingPillar[],

  curriculumTopics: [
    { title: "Digital Marketing Fundamentals", category: "Foundation" },
    { title: "Digital Marketing Strategy", category: "Strategy" },
    { title: "Social Media Marketing", category: "Social" },
    { title: "Meta Advertising (Facebook & IG)", category: "Paid Media" },
    { title: "Google Ads (Search & Display)", category: "Paid Media" },
    { title: "LinkedIn Marketing & B2B", category: "Social" },
    { title: "Lead Generation Architectures", category: "Growth" },
    { title: "Marketing Funnels & Retargeting", category: "Growth" },
    { title: "SEO & Content Architecture", category: "Search" },
    { title: "Search Analytics & Performance", category: "Search" },
    { title: "Email Marketing & Copywriting", category: "Retention" },
    { title: "Marketing Automation Workflows", category: "Retention" },
    { title: "Client Communication & Pitching", category: "Client Ops" },
    { title: "Freelancing & Client Management", category: "Client Ops" },
    { title: "Marketing Analytics & KPIs", category: "Analytics" },
    { title: "Organic Social Media Growth", category: "Social" },
  ],

  classroomToCampaign: {
    classroom: [
      "Translating complex abstract ideas into plain language",
      "Designing structured step-by-step lecture syllabi",
      "Diagnosing student bottlenecks and learning curves",
      "Facilitating interactive Q&A and problem-solving",
      "Mentoring individuals toward tangible milestones",
      "Patience and clear articulation under questioning",
    ],
    realWorld: [
      "Direct communication with 100+ international clients",
      "Deploying and managing real advertising budgets",
      "Multi-platform lead generation and conversion funnels",
      "Data-backed performance tracking and ROAS reporting",
      "Adapting strategies to volatile platform algorithm updates",
      "Strict delivery deadlines and agency accountability",
    ],
    theInstructor: "A trainer who doesn't just read presentation slides, but teaches from battle-tested campaign experience and knows exactly how to transmit that knowledge to learners.",
  },

  skillsByCategory: [
    {
      category: "Strategy & Growth",
      description: "High-level campaign architecture and full-funnel customer acquisition planning.",
      skills: [
        { name: "Digital Strategy", focus: "Multi-channel roadmap & channel mix" },
        { name: "Marketing Funnels", focus: "TOFU/MOFU/BOFU stage alignment" },
        { name: "Audience Segmentation", focus: "Behavioral & demographic targeting" },
        { name: "Growth Strategy", focus: "Inbound pipeline acceleration" },
        { name: "Performance Tracking", focus: "KPI dashboards & conversion rates" },
      ],
    },
    {
      category: "Paid Advertising",
      description: "Direct-response advertising campaigns built for measurable return on ad spend.",
      skills: [
        { name: "Meta Ads Manager", focus: "Pixel/CAPI, lookalikes & dynamic retargeting" },
        { name: "Google Ads", focus: "Search intent keywords & display campaigns" },
        { name: "LinkedIn Ads", focus: "B2B account targeting & sponsored content" },
        { name: "Campaign Optimization", focus: "A/B testing ad copy, bids & landing pages" },
        { name: "Conversion Optimization", focus: "Drop-off reduction & CRO principles" },
      ],
    },
    {
      category: "Organic Growth",
      description: "Sustained audience community building and organic brand visibility.",
      skills: [
        { name: "Social Media Marketing", focus: "Channel curation & algorithmic pacing" },
        { name: "Content Strategy", focus: "Value-first editorial planning & themes" },
        { name: "Audience Engagement", focus: "Community interaction & retention" },
        { name: "Organic Growth Systems", focus: "Shareability & viral distribution loops" },
      ],
    },
    {
      category: "Search (SEO & SEM)",
      description: "Organic search visibility and targeted intent-driven search engine marketing.",
      skills: [
        { name: "SEO Fundamentals", focus: "On-page optimization & content structure" },
        { name: "SEM (Search Ads)", focus: "Intent bidding, ad relevance & quality score" },
        { name: "Search Analytics", focus: "Google Search Console & ranking telemetry" },
        { name: "Keyword Strategy", focus: "Commercial intent research & volume gap" },
      ],
    },
    {
      category: "Automation & Retention",
      description: "Lifecycle marketing, email workflows, and automated customer nurturing.",
      skills: [
        { name: "Email Marketing", focus: "Drip campaigns, newsletters & copy" },
        { name: "Email Workflows", focus: "Trigger-based lead onboarding sequences" },
        { name: "Marketing Automation", focus: "CRM integrations & pipeline tagging" },
        { name: "Lead Nurturing", focus: "Educational sequences & re-engagement" },
      ],
    },
    {
      category: "Client & Business Operations",
      description: "Cross-cultural international client communication and professional delivery.",
      skills: [
        { name: "Client Communication", focus: "Briefing, expectations & weekly reporting" },
        { name: "International Client Mgmt", focus: "100+ global clients across timezones" },
        { name: "Sales Communication", focus: "Consultative discovery & proposal scopes" },
        { name: "Project Delivery", focus: "Milestone accountability & quality control" },
      ],
    },
  ] as SkillCategory[],
};
