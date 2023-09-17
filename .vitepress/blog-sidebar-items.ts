import fs from 'node:fs'
import path from 'node:path'

const titleRe = new RegExp("title: (.*)");
const createdAtRe = new RegExp("createdAt: (.*)");

interface Item {
  text: string
  link: string
  date: number
}

function getBlogSidebarItems(srcDir: string, linkDir: string) {
  const dir = `${srcDir}${linkDir}`
  return fs.readdirSync(dir)
    .reduce((acc: Item[], name: string) => {
      if (name.endsWith('.md') && name !== 'index.md') {
        const file = fs.readFileSync(path.resolve(dir, name))
        const createdAt = createdAtRe.exec(file)
        const title = titleRe.exec(file)
        if (createdAt && title) {
          acc.push({ text: title[1], link: `${linkDir}${name.slice(0, -3)}`, date: +new Date(createdAt[1]) })
        }
      }
      return acc
    }, []).sort((a:Item, b: Item) => a.date - b.date)
}

export default getBlogSidebarItems
