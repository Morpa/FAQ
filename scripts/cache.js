/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function faqData() {
  const faqsDirectory = path.join(process.cwd(), 'src', 'faqs')
  const fileNames = fs.readdirSync(faqsDirectory)
  const faqs = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(faqsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      slug,
      title: matterResult.data.title
    }
  })
  return `export const faqs = ${JSON.stringify(faqs)}`
}

try {
  fs.readdirSync('cache')
} catch (e) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/data.js', faqData(), function (err) {
  if (err) return console.log(err)
  console.log('Faqs cached.')
})
