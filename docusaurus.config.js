// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XState Docs',
  tagline:
    'Documentation for XState: State Machines and Statecharts for the Modern Web',
  url: 'https://stately-docs.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'statelyai', // Usually your GitHub org/user name.
  projectName: 'docusaurus-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),

          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/statelyai/tree/main/docusaurus-docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'docusaurus-preset-shiki-twoslash',
      {
        themes: ['github-light', 'github-dark'],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'XState',
          src: '/xstate-logo-black.svg',
          srcDark: '/xstate-logo-white-nobg.svg',
        },
        items: [
          {
            href: 'https://github.com/statelyai/docusaurus-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Stately',
                href: 'https://stately.ai/',
                target: '_self',
              },
              {
                label: 'Blog',
                href: 'https://stately.ai/blog',
                target: '_self',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/xstate',
                target: '_self',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/statelyai',
                target: '_self',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/c/statelyai',
                target: '_self',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'XState',
                href: 'https://github.com/statelyai/xstate',
                target: '_self',
              },
              {
                label: 'Tools',
                href: 'https://github.com/statelyai/xstate-tools',
                target: '_self',
              },
            ],
          },
        ],
        copyright: `Copyright © Stately, ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX,
        contextualSearch: false,
      },
    }),
};

module.exports = config;