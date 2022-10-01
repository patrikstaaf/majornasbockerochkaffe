import sanityClient from '@sanity/client'
interface ClientConfig {
  projectId: string
  dataset: string
  apiVersion: string
  useCdn: boolean
}

const sanityConfig: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  useCdn: false,
  apiVersion: '2022-09-04',
}

export default sanityClient(sanityConfig)
