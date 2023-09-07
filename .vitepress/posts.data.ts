import { createContentLoader } from 'vitepress'

export default createContentLoader('src/blog/*.md', {
  transform(rawData) {
    const index = rawData.findIndex(x => x.url === '/blog/');
    if (index !== -1) {
      rawData.splice(index, 1);
    }

    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map(({ url,frontmatter }) => ({
      url,
      title: frontmatter.title,
      description: frontmatter.description,
    }))
  }
})
