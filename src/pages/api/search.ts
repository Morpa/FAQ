import { NextApiResponse, NextApiRequest } from 'next'

import { getSortedPostsData } from 'lib/posts'

const posts =
  process.env.NODE_ENV === 'production'
    ? // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('scripts/caches').posts
    : getSortedPostsData()

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query

  const results = q
    ? posts.filter(
        (post: { title: { toLowerCase: () => (string | string[])[] } }) =>
          post.title.toLowerCase().includes(q)
      )
    : []

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
