import { defineConfig } from 'vitepress'

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
