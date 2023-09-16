import fs from 'node:fs'
import path from 'node:path'

const titleRe = new RegExp("title: (.*)");

function getBlogSidebarItems(srcDir: string, linkDir: string) {
  const dir = `${srcDir}${linkDir}`
  return fs.readdirSync(dir)
    .reduce((acc, name) => {
      if (name.endsWith('.md') && name !== 'index.md') {
        const file = fs.readFileSync(path.resolve(dir, name))
        const title = titleRe.exec(file)
        if (title) {
          acc.push({ text: title[1], link: `${linkDir}${name}` })
        }
      }
      return acc
    }, [])
}

export default getBlogSidebarItems
