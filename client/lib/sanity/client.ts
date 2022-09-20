import sanityClient from '@sanity/client'
interface ClientConfig {
  projectId: string
  dataset: string
  apiVersion?: string
  useCdn?: boolean
}

const sanityConfig: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  useCdn: process.env.SANITY_CDN !== 'production',
  apiVersion: process.env.SANITY_APIVERSION!,
}

export default sanityClient(sanityConfig)
