import styled from 'styled-components'

const Container = styled.div`
  background: #b17b54;
  height: 1003px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid #1e1f22;

  @media screen and (min-width: 834px) {
    height: 636px;
  }
  @media screen and (min-width: 1440px) {
    height: 581px;
  }
`
const TitleWrapper = styled.div`
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
  }
`

const ContentWrapper = styled.div`
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
  }
`
const LinkWrapper = styled.div`
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
  }
`

const ContactWrapper = styled.div`
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
  }
`
const SocialMediaWrapper = styled.div`
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
  }
`
const CopyWrapper = styled.div`
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
  }
`

const Footer = () => {
  return (
    <Container>
      <TitleWrapper>Här ligger loggan</TitleWrapper>
      <ContentWrapper>
        <LinkWrapper>är ligger länkar en nav och lista</LinkWrapper>
        <ContactWrapper>här ligger kontaktinformation</ContactWrapper>
        <SocialMediaWrapper>Här är länkar till social media</SocialMediaWrapper>
      </ContentWrapper>
      <CopyWrapper>Här ligger en script och copy text</CopyWrapper>
    </Container>
  )
}

export default Footer
