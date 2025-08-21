export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://dojovader.github.io',
    title: 'Qtguru',
    subtitle: 'Welcome to my diary',
    description: 'A simple archive of some of my ideas, projects and works',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [

        {
          text: 'Youtube',
          href: 'https://www.youtube.com/@okeowoaderemi'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/qtguru/'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/okeowo-aderemi-82b75730/'
        }

    ],
    hero: {
        title: 'Personal diary about freelancing, coding, and personal growth.',
        text: `<p>As a fullstack engineer, I’ve spent countless hours crafting Chrome extensions and building robust web applications, diving deep into the interplay of front-end and back-end systems. The challenge of creating seamless user experiences while ensuring scalable, efficient code is what fuels my passion for development. But lately, I’ve been itching to branch out and explore new creative and technical territories.<p>

<p>At the same time, I’m diving into learning C and Kotlin. C’s low-level control fascinates me. It’s like peering under the hood of software development, understanding memory and performance at a granular level. Kotlin, with its modern syntax and Android development potential, feels like a natural next step to expand my mobile development skills.</p>

<p>Balancing my fullstack roots with these new pursuits keeps my curiosity alive and my skills sharp. Stay tuned as I share more about this journey of blending creativity and code!
        </p>`,
        image: {
            src: '/images/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
