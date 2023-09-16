import { defineConfig } from 'vitepress'
import getBlogSidebarItems from './blog-sidebar-items'
import ColorfulCheckbox from 'markdown-it-colorful-checkbox'

const srcDir = 'src'
const base = '/site/'
const blogDir = '/blog/'
const blogSidebarItems = getBlogSidebarItems(srcDir, blogDir)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(ColorfulCheckbox)
    },
  },
  sitemap: { hostname: 'https://vadimkkka.github.io' },
  base,
  title: 'Goosveridze',
  description: 'A Vadimkkka site',
  srcDir,
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'shortcut icon', href: `${base}favicon.ico`}],
    ['meta', { name: 'keywords', content: 'dev blog' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#1b1b1f' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' }],
    ['meta', { name: 'robots', content: 'index, archive' }],
    ['meta', { name: 'og:type', content: 'website' }],
    // ['meta', { name: 'og:locale', content: 'ru' }],
    ['meta', { name: 'og:site_name', content: 'Goosveridze' }],
    ['meta', { name: 'og:image', content: `https://vadimkkka.github.io${base}me.png` }],
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
      { text: 'Blog', link: blogDir },
    ],
    sidebar: {
      [blogDir]: [{ text: 'Articles', link:  blogDir, items: blogSidebarItems }],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vadimkkka' }
    ],
  }
})
