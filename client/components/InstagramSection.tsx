import Layout from '../components/Layout'
import Image from 'next/image'
import { NextPage } from 'next'
import styled from 'styled-components'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import { H1, Text, LinkText, H2 } from '../components/Text'
import Link from 'next/link'

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
const InfoSection = styled.div`
  background: #ecdbc9;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`
const Container = styled.div`
  background: #ecdbc9;
  height: 600px;
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
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
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
            images.slice(0, 2).map((image) => {
              return (
                <div>
                  <InfoSection>
                    <H2 Color={true}>Bokhandeln finns såklart på Instagram!</H2>
                    <Text Color={true}>
                      Besök bokhandelns Instagram för de senaste nyheterna om
                      vad som händer i butiken.
                    </Text>
                    <LinkText Color={true}>
                      Följ{' '}
                      <Link href="https://www.instagram.com/majornasbocker/">
                        @majornasbocker
                      </Link>
                      på Instagram
                    </LinkText>
                  </InfoSection>
                  <div className="InstaImage" key={image.id}>
                    <img
                      src={image.media_url}
                      alt={image.caption}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Container>
  )
}
