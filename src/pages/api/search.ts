import { NextApiResponse, NextApiRequest } from 'next'

import { getALLFaqsData } from 'lib/faqs'

const faqs = getALLFaqsData()
process.env.NODE_ENV === 'production'
  ? // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('../../../scripts/cache').faqs
  : getALLFaqsData()

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { q } = req.query

  const results = q
    ? faqs.filter((faq) => faq.slug.toLowerCase().includes(`${q}`))
    : []

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
