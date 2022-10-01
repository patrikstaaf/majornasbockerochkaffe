import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const type = req.body.type

    if (type === 'calendar') {
      await res.revalidate('/')
      await res.revalidate('/evenemang')
    } else if (type === 'companyInfo') {
      await res.revalidate('/')
      await res.revalidate('/kontakt')
      await res.revalidate('/evenemang')
      await res.revalidate('/butikochcafe')
    } else if (type === 'bookOfTheMonth') {
      await res.revalidate('/')
    } else if (type === 'permanentOffer') {
      await res.revalidate('/')
    } else if (type === 'aboutTheStore') {
      await res.revalidate('/')
      await res.revalidate('/butikochcafe')
    } else if (type === 'aboutTheEvents') {
      await res.revalidate('/')
      await res.revalidate('/evenemang')
    }

    return res.json({
      revalidated: true,
    })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
