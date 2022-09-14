import styled from 'styled-components'

interface textColor {
  Color: boolean
}

export const Text = styled.p<textColor>`
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => (props.Color ? '#1e1f22' : '#fbf6ef')};

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (min-width: 1512px) {
    font-size: 24px;
    line-height: 29px;
  }
`

export const H1 = styled.h1<textColor>`
  font-family: 'Sitka';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 34px;
  color: ${(props) => (props.Color ? '#1e1f22' : '#fbf6ef')};

  @media screen and (min-width: 834px) {
    font-size: 28px;
    line-height: 29px;
  }
  @media screen and (min-width: 1512px) {
    font-size: 40px;
    line-height: 42px;
  }
`
export const H2 = styled(H1)``

export const ButtonText = styled(Text)`
  font-size: 18px;
  line-height: 22px;

  @media screen and (min-width: 1512px) {
    font-size: 24px;
    line-height: 29px;
  }
`

export const LinkText = styled.p<textColor>`
  font-family: 'Sitka';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: ${(props) => (props.Color ? '#1e1f22' : '#fbf6ef')};
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1512px) {
  }
`
