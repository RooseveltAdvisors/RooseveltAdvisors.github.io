import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: true,
      },
    ],
    "./src/plugins/recent-blog-posts-plugin.ts",
  ],
  scripts: [
    {
      src: "https://cloud.umami.is/script.js",
      "data-website-id": "c31542ec-5010-4c26-9acb-391b1c521728",
      "data-domains": "jonroosevelt.com,rooseveltadvisors.github.io",
      defer: true,
    },
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  title: "Jon Roosevelt",
  tagline: "Building beyond the boundaries of imagination",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://jonroosevelt.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RooseveltAdvisors", // Usually your GitHub org/user name.
  projectName: "RooseveltAdvisors.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-TECW05ZKH4",
          anonymizeIP: true,
        },
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/my-social-card.png",
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Jon Roosevelt",
      logo: {
        alt: "Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "https://cloud.umami.is/share/nl5j9KUNu01VtqfG/jonroosevelt.com",
          label: "Analytics",
          position: "left",
        },
        { to: "/showcase", label: "Projects", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://www.linkedin.com/in/jonroosevelt/",
          position: "right",
          className: "header-linkedin-link",
          "aria-label": "Linkedin profile",
        },
        {
          href: "https://github.com/RooseveltAdvisors",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Connect",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/jonroosevelt/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jon Roosevelt, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
