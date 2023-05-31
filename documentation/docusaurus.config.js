// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "react-a11y-tools",
	tagline: "Focus on Accessible Web experiences",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
	url: "https://joaotmdias.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/react-a11y-tools/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
	organizationName: "@jtmdias",
	projectName: "react-a11y-tools",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [() => ({
    name: 'resolve-react',
    configureWebpack() {
      const NODE_MODULES = path.join(__dirname, '../node_modules');
      const REACT = `${NODE_MODULES}/react`;
      const REACT_DOM = `${NODE_MODULES}/react-dom`;

      console.log({
        react: REACT,
        reactDOM: REACT_DOM
      });

      return {
        resolve: {
          alias: {
            react: path.resolve(REACT),
            "react-dom": path.resolve(REACT_DOM),
          },
        },
      };
    },
  }),
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-react-docgen-typescript",
      {
        src: ["../src/**/*.tsx"],
        global: true,
        parserOptions: {
          propFilter: (prop, component) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes("@types/react");
            }

            return true;
          },
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],




  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
				title: "React a11y tools",
        logo: {
          alt: '',
					src: "img/favicon.svg",
        },
				items: [
					{
						href: "https://www.npmjs.com/package/@jtmdias/react-a11y-tools/",
						label: "NPM",
						position: "right",
					},
					{
						href: "https://github.com/joaotmdias/react-a11y-tools/",
						label: "GitHub",
						position: "right",
					},
				],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
