import { defineConfig } from 'vitepress'
import getBlogSidebarItems from './blog-sidebar-items'

export default defineConfig({
  base: '/site/',
  title: "Goosveridze",
  description: "A Vadimkkka site",
  srcDir: "src",
  lastUpdated: true,
  cleanUrls: true,
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
          items: getBlogSidebarItems('src', '/blog/'), // [!code hl]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vadimkkka' }
    ],
  }
})
