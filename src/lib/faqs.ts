import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const faqsDirectory = path.join(process.cwd(), '_faqs')

export type FaqProps = {
  slug: string
  title?: string
  contentHtml?: string
}

export function getAllFaqsData() {
  const fileNames = fs.readdirSync(faqsDirectory)
  const allFaqsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')

    const fullPath = path.join(faqsDirectory, fileName)

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      slug,
      ...matterResult.data
    }
  })

  return allFaqsData
}

export function getAllFaqsIds() {
  const fileNames = fs.readdirSync(faqsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getFaqData(slug: string) {
  const fullPath = path.join(faqsDirectory, `${slug}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...matterResult.data
  }
}
