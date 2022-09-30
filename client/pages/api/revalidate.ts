import {
  isValidRequest,
  isValidSignature,
  SIGNATURE_HEADER_NAME,
} from '@sanity/webhook'
// import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'

import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   message?: string
// }

const secret = process.env.SANITY_WEBHOOK

// const handler: NextApiHandler = async (
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) => {
//   if (req.method !== 'POST') {
//     console.error('Must be a POST request')
//     return res.status(401).json({ message: 'Must be a POST request' })
//   }

//   if (!isValidRequest(req, secret!)) {
//     return res.status(401).json({ message: 'Invalid signature' })
//   }

//   try {

//     const signature = req.headers[SIGNATURE_HEADER_NAME].toString()

//     const {
//       body: { type, slug },
//     } = req

//     switch (type) {
//       case 'post':
//         await res.revalidate(`/${slug}`)
//         return res.status(200).json({
//           message: `Revalidated "${type}" with slug "${slug}"`,
//         })
//     }

//     return res.json({ message: 'No managed type' })
//   } catch (err) {
//     return res.status(500).send({ message: 'Error while revalidating' })
//   }
// }

// export default handler

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  console.log(secret)

  // if (!isValidRequest(req, secret!)) {
  //   return res.status(401).json({ message: 'Invalid signature' })
  // }

  try {
    await res.revalidate('/')
    await res.revalidate('/evenemang')
    await res.revalidate('/kontakt')
    await res.revalidate('/butikochcafe')

    return res.json({ revalidated: true })
  } catch (err) {
    res.status(500).json({ err: err })
  }

  // console.log({ signature: req.headers[SIGNATURE_HEADER_NAME] })
  // console.log({ body: req.body })

  // const signature = req.headers[SIGNATURE_HEADER_NAME]

  // const isValid = isValidSignature(
  //   JSON.stringify(req.body),
  //   signature,
  //   secret
  // )

  // const pathToRevalidate = `/${req.body?.record?.id}`

  // await res.revalidate(pathToRevalidate)

  // return res.send({ revalidated: true })
}

export default handler
