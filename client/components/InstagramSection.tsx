import Layout from '../components/Layout'
import Image from 'next/image'
import { NextPage } from 'next'
import styled from 'styled-components'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import { H1, Text } from '../components/Text'

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,caption&access_token=${process.env.INSTAGRAM_KEY}`
  const instagramData = await fetch(url)
  const feed = await instagramData.json()

  return {
    props: {
      images: feed.data,
    },
  }
}

interface OneImage {
  id: number
  media_url: string
  caption: string
}

const Container = styled.div`
  background: #ecdbc9;
  height: 1003px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid #1e1f22;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 834px) {
    height: 636px;

    .InstaImage {
      &:nth-child(3) {
        display: none;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    height: 581px;
    .InstaImage {
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        display: none;
      }
    }
  }
`

export default function Gallery({ images }: { images: Array<OneImage> }) {
  console.log(images)
  return (
    <Container>
      <div>
        <div>
          {images &&
            images.map((image) => {
              return (
                <div className="InstaImage" key={image.id}>
                  <Image
                    src={image.media_url}
                    alt={image.caption}
                    width={500}
                    height={500}
                  />
                </div>
              )
            })}
        </div>
      </div>
    </Container>
  )
}
