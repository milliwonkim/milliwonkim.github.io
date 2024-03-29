// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WELCOME TO MILLIWONKIM POSTS",
  favicon: "static/img/logo.png",

  // Set the production url of your site here
  url: "https://milliwonkim.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "blog", // Usually your GitHub org/user name.
  projectName: "milliwonkim-blog-site", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-394710335",
        anonymizeIP: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: "img/logo.png",
      metadata: [
        {
          name: "keywords",
          content:
            "frontend, development, programming, stock, economy, apple, google, meta, facebook, instagram, tiktok, amazon, aws, microsoft, react, nextjs, vercel, javascript, typescript, jsx",
        },
        {
          content: "zcnlRDhc81xmT4ImRsEKsS7el3lp9F_yrNoTlipMPaI",
          name: "google-site-verification",
        },
      ],

      navbar: {
        title: "MILLIWONKIM POSTS",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "developmentSidebar",
            position: "left",
            label: "Development / Programming",
          },
          {
            href: "https://github.com/milliwonkim",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/in/kiwon-kim-29b23b106/",
            label: "Linkedin",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/milliwonkim",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/kiwon-kim-29b23b106/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Milliwonkim(KIWON KIM). Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
