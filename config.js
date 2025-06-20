// Change It
// config.js

const portfolioConfig = {
  siteTitle: "Portfolio 4.0",

  user: {
    name: "Tom Calm",
    title: "Frontend Web Developer",
    intro:
      "A frontend software engineer and interface designer who builds UX rich accessible and performant websites.",
  },

  navItems: [
    { label: "Home", href: "#" },
    { label: "My Work", href: "#work" },
    { label: "See Blog", href: "#blog" },
    { label: "My Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  buttons: {
    hireMe: { label: "Hire me", href: "#contact" },
    seeWork: { label: "See my work", href: "#work" },
  },

  trustedLogos: [
    { src: "assets/images/trusted-by/stripe.svg", alt: "Ideacraft" },
    { src: "assets/images/trusted-by/datastax.svg", alt: "Golden grid" },
    { src: "assets/images/trusted-by/coke.svg", alt: "Theia" },
    { src: "assets/images/trusted-by/gm.svg", alt: "General motors" },
    { src: "assets/images/trusted-by/shares.svg", alt: "Chippy" },
    { src: "assets/images/trusted-by/shopify.svg", alt: "Shopify" },
    { src: "assets/images/trusted-by/agency-elevation.svg", alt: "Agency elevation" },
    { src: "assets/images/trusted-by/gitlab.svg", alt: "Ron jones" },
    { src: "assets/images/trusted-by/duolingo.svg", alt: "Mighty furniture's" },
    { src: "assets/images/trusted-by/coyote.svg", alt: "Bulls eye" },
    { src: "assets/images/trusted-by/astrato.svg", alt: "Chippy" },
    { src: "assets/images/trusted-by/mercado.svg", alt: "Fastlane" },
  ],

  workProjects: [
    {
      title: "portfolio template",
      description: "A free to use, minimal and accessible portfolio template for developers.",
      technologies: ["React", "Gatsby", "SCSS", "MDX"],
      image: "assets/images/work/portfolio-template.webp",
      imageAlt: "agency elevation",
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      title: "agencyelevation.com",
      description: "Website for Agency Elevation.",
      technologies: ["React", "Gatsby", "Material UI"],
      image: "assets/images/work/agency-elevation.webp",
      imageAlt: "portfolio template",
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      title: "contribute.dev",
      description: "Website for DevX A dedicated space for developer experience",
      technologies: ["Ruby", "SvelteKit", "Emotion"],
      image: "assets/images/work/contribute-dev.webp",
      imageAlt: "contribute dev",
      projectUrl: "#",
      codeUrl: "#",
    },
  ],

  blogArticles: [
    {
      title: "22 Useful CSS Tips and Tricks Every Developer Should Know",
      description:
        "Note: All the tips, tricks shared in this article are part of my GitHub repository css tips tricks A handmade collection of pro css tips tricks for developers.",
      image: "assets/images/featured-blog.webp",
      reactions: 416,
      url: "#",
    },
    {
      title: "JavaScript Default Function Parameters.",
      description:
        "In JavaScript when we call a function which expects some data to be passed in if you call that without passing",
      reactions: 47,
      url: "#",
    },
    {
      title: "Free Open-source portfolio template for developers ✨",
      description:
        "A beautiful, minimal and accessible portfolio template for Developers which is completely free and Open Source.",
      reactions: 177,
      url: "#",
    },
    {
      title: "HTML tips and tricks.",
      description:
        "In my very last article I shared some JavaScript tips and tricks In this article I will be covering HTML tips and tricks.",
      reactions: 350,
      url: "#",
    },
  ],

  skills: [
    "react.webp",
    "svelte.webp",
    "typescript.webp",
    "a11y.webp",
    "shell.webp",
    "next-js.webp",
    "graphql.webp",
    "git.webp",
    "html.webp",
    "js.webp",
  ],

  testimonials: [
    {
      text:
        "Working with Syed was a great experience. His drive for clean aesthetics and his open communication style helped us collaborate closely on the solution.",
      name: "Harris Kareem",
      job: "Developer @Outlets",
      image: "assets/images/testimonials/rich-harris.png",
    },
    {
      text:
        "Syed is a fantastic UI/UX designer and developer with a keen sense for marketing, and lead generation.",
      name: "Andrew Mead",
      job: "Chief Scientist @Logos",
      image: "assets/images/testimonials/frank-mcsherry.webp",
    },
    {
      text:
        "Talented artist, experienced with various media and can make any project you are working on look good. I would work with Syed again.",
      name: "Brian Hirsh",
      job: "Head @Zero-in",
      image: "assets/images/testimonials/brian-hirsh.png",
    },
    {
      text:
        "Syed is a true professional with amazing talent. He is a creative thinker, has his finger on the pulse of what's to come.",
      name: "Adam Argalye",
      job: "SWE @Google",
      image: "assets/images/testimonials/adam.png",
    },
    {
      text:
        "He's my go-to colleague when trouble shooting any new technique or technology because he understands how to tackle unknown problems.",
      name: "Val Head",
      job: "CEO @Engines",
      image: "assets/images/testimonials/val-head.png",
    },
    {
      text:
        "Syed is a talented artist. He is very experienced with various media and can make any project look good.",
      name: "Gary Simon",
      job: "A11y Advocate @W3C",
      image: "assets/images/testimonials/tim-satterwhite.webp",
    },
  ],

  contact: {
    availability: "Available for hire",
    intro: [
      "As a software engineer, I construct web interfaces and design systems with a special love for accessibility and performance.",
      "I'm also an open-source developer, and in my spare time, I do digital art with my iPad Pro.",
    ],
  },

  socialLinks: [
    { title: "GitHub", icon: "github.svg", url: "#" },
    { title: "Codepen", icon: "codepen.svg", url: "#" },
    { title: "Linkedin", icon: "linkedin.svg", url: "#" },
    { title: "Twitter", icon: "twitter.svg", url: "#" },
  ],

  copyright: {
    year: "2025",
    name: "Portfolio 4.0",
  },
};