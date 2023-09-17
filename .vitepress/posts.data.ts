import { createContentLoader } from 'vitepress'

export default createContentLoader('src/blog/*.md', {
  transform(rawData) {
    const index = rawData.findIndex(x => x.url === '/blog/');
    if (index !== -1) {
      rawData.splice(index, 1);
    }

    return rawData
      .filter(x => x.frontmatter.createdAt)
      .sort((a, b) => (+new Date(b.frontmatter.createdAt) - +new Date(a.frontmatter.createdAt)))
      .map(({ url, frontmatter }) => {
        let preview = frontmatter.head?.find(x => x[0] === 'meta' && x[1].name === 'og:image')
        if (preview) {
          preview = preview[1].content
        }
        return  {
          url,
          preview,
          title: frontmatter.title,
          tags: frontmatter.tags.split(' '),
          description: frontmatter.description,
          date: new Date(frontmatter.createdAt).toLocaleDateString('ru', { day: '2-digit', month: '2-digit', year: '2-digit' })
        }
    })
  }
})
