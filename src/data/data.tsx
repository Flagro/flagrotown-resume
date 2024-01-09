import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Anton Potapov's Resume",
  description: "Anton Potapov's Resume build with Next.js and Tailwind CSS",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Facts: 'facts',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Anton Potapov.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Montenegro based <strong className="text-stone-100">Backend Developer</strong> with a strong passion for{' '}
        <strong className="text-stone-100">Data Analysis</strong> and{' '}
        <strong className="text-stone-100">NLP tasks</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">Podgorica</strong>, plucking my{' '}
        <strong className="text-stone-100">guitar</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Mountains of Montenegro</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Passionate software developer and data analyst with a strong background in competitive programming and a Bachelor's degree in Computer Science. Skilled in C/C++, high-performance computing (HPC), data analysis, relational databases, and NLP tasks. Excited to tackle complex software development and data analysis challenges with a strong foundation in mathematics and a commitment to continuous learning.`,
  aboutItems: [
    {label: 'Location', text: 'Montenegro, Podgorica', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Russian', Icon: FlagIcon},
    {label: 'Interests', text: 'Backend Development, Data Analysis', Icon: SparklesIcon},
    {
      label: 'Study',
      text: 'Moscow State University, Bachelor in Applied Mathemathics and Computer Science',
      Icon: AcademicCapIcon,
    },
    {label: 'Employment', text: 'C++ Developer, Pet projecting multiple LLM projects', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'C++',
        level: 10,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C++ CUDA/OpenMP/MPI',
        level: 9,
      },
    ],
  },
  {
    name: 'LLMs',
    skills: [
      {
        name: 'Huggingface transformers',
        level: 8,
      },
      {
        name: 'Langchain',
        level: 5,
      },
      {
        name: 'Vector databases',
        level: 7,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Russian',
        level: 10,
      },
      {
        name: 'Serbian',
        level: 3,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'PostgreSQL',
        level: 9,
      },
      {
        name: 'Python Pandas/Seaborn/Graphviz',
        level: 10,
      },
      {
        name: 'Python-Excel integration',
        level: 7,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2019 - June 2023',
    location: 'Moscow State Univesity',
    title: "Bachelor's degree in Applied Mathematics and Computer Science",
    content: (
      <p>
        At Moscow State University's Faculty of Computational Mathematics and Cybernetics, I acquired a solid
        mathematical foundation and honed my programming skills in <strong>C/C++ and ASM</strong>. I gained hands-on
        experience in software development and delved into high-performance computing (HPC) and distributed systems,
        utilizing technologies like <strong>CUDA, OpenMP, and MPI</strong>. My university years were dedicated to
        pushing the boundaries of computational mathematics and computer science, equipping me with a strong skill set
        for software development and beyond.
      </p>
    ),
  },
  {
    date: 'September 2016 - June 2019',
    location: 'Moscow Institute of Physics and Technology',
    title: 'Correspondence Physics and Technology School (CPTS) at MIPT',
    content: (
      <p>
        The invaluable education I received during my years at the Correspondence Physics and Technology School (CPTS)
        at MIPT played a pivotal role in shaping my university experience. It provided me with a strong foundation in
        both mathematics and physics, which proved to be instrumental throughout my academic journey.
      </p>
    ),
  },
  {
    date: 'September 2015 - June 2019',
    location: 'Bauman Moscow State Technical University',
    title: 'Physics and Mathematics Lyceum No. 1580 at Bauman Moscow State Technical University',
    content: (
      <p>
        During my time at my high and middle school, I acquired a strong mathematical foundation and nurtured my passion
        for IT, particularly in the field of competitive programming. Throughout those years, I actively participated in
        math and IT summer schools, which contributed to my continuous improvement. These efforts led to notable
        achievements, including victories and prize placements in competitions such as the "Moscow School Olympiad in
        Informatics" and the "ITMO Informatics Olympiad."
      </p>
    ),
  },
  {
    date: 'September 2018 - June 2022',
    location: 'Summer HPC academy, LKSH, MIPT, FoxFord',
    title: 'Active participation in off-site mathematical and computer science schools',
    content: (
      <p>
        Active participation in esteemed off-site mathematical and computer science schools has been a cornerstone of my
        IT journey, providing me with boundless motivation and inspiration. These include notable programs such as LKSH
        (summer IT school), MIPT Math Summer School, FoxFord School, and the Summer HPC Academy. Through these immersive
        experiences, I have continually expanded my knowledge, honed my skills, and fostered a deep passion for the
        world of technology.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2020 - June 2023',
    location: 'KPMG Russia',
    title: 'Data Analyst, LLM Engineer',
    content: (
      <p>
        Developing tools for automating the analysis and control of project data. This involved utilizing{' '}
        <strong>Python</strong> to automate data extraction from relational models and perform analysis using{' '}
        <strong>Pandas</strong> queries. Additionally, I developed tools to automate data interactions and enable
        automatic data visualization using libraries such as <strong>NetworkX</strong> and <strong>Graphviz</strong>. I
        also gained proficiency in Python libraries for NLP tasks, including <strong>HuggingFace transformers</strong>{' '}
        and <strong>langchain</strong> pipelines, as well as vectorization tools including vector databases such as{' '}
        <strong>FAISS</strong> and <strong>Chroma</strong> and libraries like <strong>Spacy</strong>,{' '}
        <strong>NLTK</strong> and <strong>Natasha</strong>. Furthermore, I utilized server deployment tools to ensure
        efficient deployment of the developed solutions.
      </p>
    ),
  },
  {
    date: 'September 2021 - present',
    location: 'Research Computing Center of Moscow State University',
    title: 'C++ Developer',
    content: (
      <p>
        Development of an optimized C/C++ backend implementation for the GraphBLAS standard at the Research Institute of
        Computational Mathematics and Cybernetics, Moscow State University, as part of a grant. This involved creating
        efficient graph algorithm implementations specifically designed for the targeted processor architecture and
        establishing a comprehensive testing infrastructure. Throughout the project, I utilized a range of technologies,
        including <strong>C++</strong>, <strong>OpenMP</strong>,<strong>CMake</strong>, <strong>gtest</strong>,{' '}
        <strong>Git</strong>, <strong>GitHub Actions</strong>, to ensure smooth development and integration processes.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const fact: TestimonialSection = {
  imageSrc: testimonialImage,
  facts: [
    {
      name: 'Random fact',
      text: 'I have a keen eye for detail, ensuring high-quality code and deliverables in my development projects.',
    },
    {
      name: 'Random fact',
      text: 'I have a strong background in mathematics, which enables me to approach problem-solving from a logical and analytical perspective.',
    },
    {
      name: 'Random fact',
      text: 'I have a passion for innovation and enjoy exploring cutting-edge technologies to develop creative and impactful solutions.',
    },
    {
      name: 'Random fact',
      text: 'I have extensive experience conducting demonstrations, including trainings, related to the integration of digital automation capabilities.',
    },
    {
      name: 'Random fact',
      text: 'As a hobby, I am a music producer proficient in playing guitar, bass, and drums, in addition to utilizing MIDI techniques.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Feel free to reach out to me using either the submit form or through any of the listed platforms. I look forward to hearing from you!',
  items: [
    {
      type: ContactType.Email,
      text: 'flagrogrey@gmail.com',
      href: 'mailto:flagrogrey@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Podgorica, Montenegro',
      href: 'https://www.google.com/maps/place/Podgorica,+Montenegro/@42.4320979,19.1734787,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@flagrogrey',
      href: 'https://www.instagram.com/flagrogrey/',
    },
    {
      type: ContactType.Github,
      text: 'flagro',
      href: 'https://github.com/flagro',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/flagro'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/22146212/anton-potapov'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/flagrogrey/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/flagrogrey/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/flagrogrey'},
];
