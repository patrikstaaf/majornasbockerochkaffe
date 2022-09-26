import styled from 'styled-components'

interface textColor {
  Color: boolean
}

export const Text = styled.p<textColor>`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) =>
    props.Color ? props.theme.fontColor.coffee : props.theme.fontColor.paper};

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 24px;
    line-height: 29px;
  }
`

export const H1 = styled.h1<textColor>`
  font-family: ${({ theme }) => theme.fontFamily.sourceSerifPro};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 34px;
  color: ${(props) =>
    props.Color ? props.theme.fontColor.coffee : props.theme.fontColor.paper};

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 28px;
    line-height: 29px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 40px;
    line-height: 42px;
  }
`
export const H2 = styled.h2<textColor>`
  font-family: ${({ theme }) => theme.fontFamily.sourceSerifPro};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 34px;
  color: ${(props) =>
    props.Color ? props.theme.fontColor.coffee : props.theme.fontColor.paper};

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 28px;
    line-height: 29px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 40px;
    line-height: 42px;
  }
`

export const H3 = styled.h3<textColor>`
  font-family: ${({ theme }) => theme.fontFamily.sourceSerifPro};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: ${(props) =>
    props.Color ? props.theme.fontColor.coffee : props.theme.fontColor.paper};
  margin: 64px 0 16px 0;
  @media screen and (min-width: 834px) {
    font-size: 24px;
    line-height: 31px;
  }
`
export const H4 = styled.h4<textColor>`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) =>
    props.Color ? props.theme.fontColor.coffee : props.theme.fontColor.paper};
  margin: 16px 0 0 0;
`
export const ButtonText = styled(Text)`
  font-size: 18px;
  line-height: 22px;

  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 24px;
    line-height: 29px;
  }
`

export const LinkText = styled.a<textColor>`
  font-family: ${({ theme }) => theme.fontFamily.sourceSerifPro};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: ${(props) =>
    props.Color ? props.theme.fontColor.coffee : props.theme.fontColor.paper};
  text-decoration: underline;
  &:hover,
  :focus {
    font-style: italic;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
