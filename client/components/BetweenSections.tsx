import { FC, PropsWithoutRef } from 'react'
import styled from 'styled-components'

interface Props {
  color?: string
}

const StripesContaier = styled.div<Props>`
  height: 100px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid #1e1f22;
  background-color: #fbf6ef;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 34px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-template-columns: repeat(12, 1fr);
    height: 140px;
    border: 3px solid #1e1f22;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: repeat(20, 1fr);
    height: 224px;
  }

  > div {
    background-color: ${(props) => props.color};
  }
`
const Stripes = styled.div<Props>`
  background-color: ${(props) => (props.color ? props.color : '#ffffff')};
`

const StripesTablet = styled.div<Props>`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: block;
    background-color: #739598;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const StripesDesktop = styled.div<Props>`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: block;
    background-color: #739598;
  }
`

interface CompProps {
  color: string
}

const BetweenSections: FC<CompProps> = ({ color }) => {
  return (
    <StripesContaier color={color}>
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
