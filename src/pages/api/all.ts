import { NextApiResponse, NextApiRequest } from 'next'

import { getAllFaqsData } from 'lib/faqs'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const results = getAllFaqsData()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
