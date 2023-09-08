import { defineConfig } from 'vitepress'
import ColorfulCheckbox from 'markdown-it-colorful-checkbox'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(ColorfulCheckbox)
    },
  },
  base: '/site/',
  title: "Goosveridze",
  description: "A Vadimkkka site",
  srcDir: "src",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'shortcut icon', href: '/site/favicon.ico'}],
    ['meta', { name: 'keywords', content: 'dev blog' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#1b1b1f' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#ffffff' }],
    ['meta', { name: 'robots', content: 'index, archive' }],
    ['meta', { name: 'og:type', content: 'website' }],
    // ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Goosveridze' }],
    ['meta', { name: 'og:image', content: 'https://vadimkkka.github.io/site/me.png' }],
  ],
  /* locales: {
    root: { label: 'English', lang: 'en' },
    ru: { label: 'Russian', lang: 'ru' }
  }, */
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: 'oni.png',
    search: { provider: 'local' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
    ],
    sidebar: {
      '/blog/': [
        {
          text: 'Articles',
          link:  '/blog/',
          items: [
            { text: '🚀 Как создавался блог', link: '/blog/hello-world' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vadimkkka' }
    ],
  }
})
