export const site = {
  name: "The Rose Foundation",
  tagline: "The Realisation of Selfless Expression",
  address: "128B Oxford Street, Port of Spain, Trinidad & Tobago",
  phoneDisplay: "(868) 628-2557",
  phoneTel: "+18686282557",
  email: "admin@rosefoundationtt.org",
  founded: 1991,
  facebook: "https://www.facebook.com/",
} as const;

export type Project = {
  slug: string;
  title: string;
  short: string;
  body: string[];
};

export const projects: Project[] = [
  {
    slug: "beyond-borders",
    title: "Beyond Borders",
    short: "Regional connection and exchange that widen opportunity beyond traditional boundaries.",
    body: [
      "Beyond Borders supports initiatives that connect people, ideas, and resources across communities—helping partners learn from one another and scale what works.",
      "Programmes emphasise collaboration, cultural respect, and practical outcomes for participants.",
    ],
  },
  {
    slug: "grassroots-chamber-of-commerce",
    title: "Grassroots Chamber of Commerce",
    short: "A voice and network for community-level enterprise and local economic vitality.",
    body: [
      "The Grassroots Chamber focuses on merchants, cooperatives, and micro-enterprises that anchor neighbourhoods.",
      "Through advocacy, training, and introductions, it strengthens the ecosystem around small business.",
    ],
  },
  {
    slug: "small-business-incubator",
    title: "Small Business Incubator",
    short: "Hands-on support to turn viable ideas into sustainable operations.",
    body: [
      "The incubator offers structured guidance on planning, operations, marketing, and finance.",
      "Cohorts benefit from mentorship, peer learning, and access to tools that reduce early-stage risk.",
    ],
  },
  {
    slug: "caribbean-emergence-institute",
    title: "Caribbean Emergence Institute",
    short: "Research and learning focused on regional renewal and resilient development.",
    body: [
      "The Institute curates knowledge, dialogues, and practical frameworks suited to Caribbean contexts.",
      "Themes include enterprise, inclusion, and long-term community wellbeing.",
    ],
  },
  {
    slug: "online-university",
    title: "Online University",
    short: "Flexible learning pathways that meet people where they are.",
    body: [
      "The Online University expands access to structured education through digital channels.",
      "Courses and modules are designed for working learners and community practitioners.",
    ],
  },
  {
    slug: "womens-magnate",
    title: "Women’s Magnate",
    short: "Leadership and wealth-building programmes centred on women entrepreneurs.",
    body: [
      "Women’s Magnate creates spaces for strategy, skills, and solidarity among women building enterprises.",
      "Programming blends coaching, networks, and resources tailored to participants’ goals.",
    ],
  },
  {
    slug: "triumph",
    title: "Triumph!",
    short: "Celebration and storytelling that highlight perseverance and collective wins.",
    body: [
      "Triumph! showcases journeys of overcoming obstacles—individual and communal.",
      "It reinforces the Foundation’s belief in hope, dignity, and selfless service as forces for change.",
    ],
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
