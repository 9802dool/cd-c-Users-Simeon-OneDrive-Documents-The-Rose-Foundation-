const uploads =
  "https://rosefoundationtt.org/wp-content/uploads/2020/04" as const;

export type BoardMember = {
  slug: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  /** How the photo fits the square frame (default: contain). */
  imageFit?: "contain" | "cover";
  bio: string[];
};

/** Leadership bios and portraits sourced from https://rosefoundationtt.org/about/ */
export const boardMembers: BoardMember[] = [
  {
    slug: "sterling-belgrove",
    name: "Sterling Belgrove",
    role: "Co-Founder & Executive Chairman",
    imageSrc: "/directors/Sterling Belgrove.png",
    imageAlt: "Portrait of Sterling Belgrove",
    imageFit: "cover",
    bio: [
      "Sterling Belgrove is Co-Founder and Executive Chairman of The Rose Foundation for the last twenty-five (25) years. He has a distinguished career in the corporate and non-profit sectors. His work in advocating and working for social and economic justice and sustainability in communities earned him a position as facilitator of social and community development in the office of the Prime Minister of Trinidad and Tobago, where he served as advisor to two (2) sitting Prime Ministers of the country for over twelve (12) years.",
      "Mr. Belgrove has served as a specialist consultant to the World Bank and other multilateral agencies. He is a member of the Lunar Federation and a life member of the International Association of Business Leaders, and currently lectures the MBA programme at his alma mater, Anglia Ruskin University, United Kingdom. He sits as board member and advisor to numerous local and international organisations.",
      "Mr. Belgrove is an Ambassador for Peace with the Universal Peace Federation and President of the Trinidad and Tobago Chapter. He has most recently been awarded an Honorary Doctorate in the Humanities from the Academy of Universal Global Peace, USA, an inter-governmental organisation under the United Nations and European Union, and a Certificate of Excellence from the United Nations University for Global Peace for social development initiatives and impact on humanity.",
    ],
  },
  {
    slug: "marcia-mc-clashie-belgrove",
    name: "Marcia Mc Clashie Belgrove",
    role: "Co-Founder, Director & Corporate Secretary · Spiritual Director",
    imageSrc: "/directors/Marcia Mc Clashie Belgrove.png",
    imageAlt: "Portrait of Marcia Mc Clashie Belgrove",
    imageFit: "cover",
    bio: [
      "Marcia Mc Clashie Belgrove is Co-founder, Director and Corporate Secretary of The Rose Foundation, responsible for ensuring that the organisation’s philosophy of “service to others before self” is maintained. Mrs. Belgrove is a visionary and the Spiritual Director of The Rose Foundation.",
      "Her work in advocating and working for social and economic justice and sustainability in communities earned her a position as facilitator of social and community development in the office of the Prime Minister of Trinidad and Tobago, where she served as advisor to two (2) sitting Prime Ministers of the country. Mrs. Belgrove holds a Master’s in Business Administration (MBA) from the Australian Institute of Business and is also a founder/director of a number of social enterprises.",
      "Mrs. Belgrove was most recently conferred an Honorary Doctorate in the Humanities from the Academy of Universal Global Peace, USA, an inter-governmental organisation under the United Nations and European Union, and a Certificate of Excellence from the United Nations University for Global Peace in acknowledgement of her social service engagement and contribution to humanity.",
    ],
  },
  {
    slug: "anisa-oliviel",
    name: "Anisa Oliviel",
    role: "Director",
    imageSrc: `${uploads}/anisa.jpg`,
    imageAlt: "Portrait of Anisa Oliviel",
    bio: [
      "Ms. Anisa Oliviel emerged from the cosmos in the beautiful twin island Republic of Trinidad and Tobago. Ms. Anisa Oliviel is a Director of The Rose Foundation and holds a degree in Politics and Law, graduating with First Class Honours in the field of Politics from the University of Bradford, United Kingdom, and subsequently earned a Post Graduate Diploma in Research Methods from the same institution.",
      "Ms. Oliviel is also the holder of a Master’s in Business Administration (MBA), majoring in Leadership, Entrepreneurship and Innovation from Anglia Ruskin University, United Kingdom. Ms. Oliviel’s work experience spans almost two decades in the voluntary sector, both in the United Kingdom and Trinidad and Tobago. Her current research interest is on the impact of poverty and the role of NGOs in crime prevention in Latin America and the Caribbean.",
      "She was recently appointed as a Peace Ambassador with the Academy of Universal Global Peace, USA, and is also an Ambassador for Peace with the Universal Peace Federation International. Guided by a desire for justice and equity, Ms. Oliviel is passionate about youth and children’s development and is an advocate for continuous education. Her mantra is based on the Divine Philosophy of Our Lady of the Roses: “It is time for all men to be friends with each other” and “The gain is not for this life, but for eternal life”.",
    ],
  },
  {
    slug: "ann-marie-garcia",
    name: "Ann Marie Garcia",
    role: "Director",
    imageSrc: `${uploads}/ann-marie.jpg`,
    imageAlt: "Portrait of Ann Marie Garcia",
    bio: [
      "Anne-Marie Garcia is a Director of The Rose Foundation and has been an educator in the Trinidad and Tobago secondary education system for over forty (40) years. She is proficient in visual and performing arts. She is the founder and director of the St. Joseph School of Art, which focuses on traditional and therapeutic art and provides tutorship for students from ages 2 to 80 years old. She provides a window of opportunity for the acquisition of new skill sets, which allows individual creative expression and communities to visually tell their story.",
      "Ms. Garcia is well known for her groundbreaking work with challenged children, particularly those with Downes Syndrome. She lives by the divine words of Jesus Christ to his disciples: “Suffer the little children to come unto me, and forbid them not”.",
    ],
  },
];
