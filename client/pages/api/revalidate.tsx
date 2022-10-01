import { NextApiRequest, NextApiResponse } from 'next'
import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString()

    if (
      !isValidSignature(
        JSON.stringify(req.body),
        signature as string,
        process.env.SANITY_REVALIDATE_SECRET as string
      )
    )
      return res.status(401).json({ message: 'Invalid' })

    const type = req.body.type
    console.log({ type: type })

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
