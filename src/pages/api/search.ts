import { NextApiResponse, NextApiRequest } from 'next'

import { getSortedFaqsData } from 'lib/faqs'

const faqs =
  process.env.NODE_ENV === 'production'
    ? // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('../../../scripts/cache').faqs
    : getSortedFaqsData()

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query

  const results = q
    ? faqs.filter(
        (faq: { title: { toLowerCase: () => (string | string[])[] } }) =>
          faq.title.toLowerCase().includes(q)
      )
    : []

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
