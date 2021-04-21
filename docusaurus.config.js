/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Amorphic Community',
  tagline: 'This is a place for our community to get latest news, read blog posts, learn by video tutorials and request new features',
  url: 'https://amorphicdata.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/core/favicon.ico',
  organizationName: 'AmorphicData',
  projectName: 'workshop',
  themeConfig: {
    sidebarCollapsible: true,
    hideableSidebar: true,
    image: 'img/core/logo.png',
    navbar: {
      title: 'Amorphic Community',
      logo: {
        alt: 'Amorphic Logo',
        src: 'img/core/logo.svg',
      },
      items: [
        {to: '/news', label: 'News', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs/intro', label: 'Video Tutorials', position: 'left'},
        {to: '/team', label: 'Team', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      logo: {
        alt: 'Amorphic Logo',
        src: 'img/core/logo-white.svg',
        href: 'https://amorphicdata.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      defaultLanguage: 'python',
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsLight')
    },
    colorMode: {
      disableSwitch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          blogTitle: 'Blog title',
          blogDescription: 'Blog',
          showReadingTime: true,
          postsPerPage: 5,
          blogSidebarCount: 3,
          blogSidebarTitle: 'Our blog posts',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Amorphic Data.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ]
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
        {
          id: 'news',
          path: './news',
          routeBasePath: 'news',
          blogTitle: 'News title',
          blogDescription: 'News',
          showReadingTime: true,
          postsPerPage: 10,
          blogSidebarCount: 3,
          blogSidebarTitle: 'Latest news',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Amorphic Data.`,
          },
        }
    ]
  ]
};
