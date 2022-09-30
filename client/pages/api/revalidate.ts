import { isValidRequest } from '@sanity/webhook'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
}

const secret = process.env.SANITY_WEBHOOK

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    console.error('Must be a POST request')
    return res.status(401).json({ message: 'Must be a POST request' })
  }

  if (!isValidRequest(req, secret!)) {
    res.status(401).json({ message: 'Invalid signature' })
    return
  }

  try {
    const pathToRevalidate = req.body.slug.current

    console.log(`===== Revalidating: ${pathToRevalidate}`)

    await res.revalidate(pathToRevalidate)

    return res.json({ message: 'Revalidated true' })
  } catch (err) {
    return res.status(500).send({ message: 'Error while revalidating' })
  }
}
