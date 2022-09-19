import styled from 'styled-components'

const StripesContaier = styled.div`
  height: 100px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid #1e1f22;
  background-color: #fbf6ef;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 34px;
  @media screen and (min-width: 834px) {
    grid-template-columns: repeat(12, 1fr);
    height: 224px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(20, 1fr);
  }
`
const Stripes = styled.div`
  background-color: ${(props) => props.color};
`

const StripesTablet = styled.div`
  display: none;
  @media screen and (min-width: 834px) {
    display: block;
    background-color: #739598;
  }
  @media screen and (min-width: 1440px) {
  }
`

const StripesDesktop = styled.div`
  display: none;
  @media screen and (min-width: 834px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    background-color: #739598;
  }
`

const BetweenSections = () => {
  return (
    <StripesContaier>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <Stripes></Stripes>
      <StripesTablet></StripesTablet>
      <StripesTablet></StripesTablet>
      <StripesTablet></StripesTablet>
      <StripesTablet></StripesTablet>
      <StripesTablet></StripesTablet>
      <StripesTablet></StripesTablet>
      <StripesDesktop></StripesDesktop>
      <StripesDesktop></StripesDesktop>
      <StripesDesktop></StripesDesktop>
      <StripesDesktop></StripesDesktop>
      <StripesDesktop></StripesDesktop>
      <StripesDesktop></StripesDesktop>
      <StripesDesktop></StripesDesktop>
      <StripesDesktop></StripesDesktop>
    </StripesContaier>
  )
}

export default BetweenSections
