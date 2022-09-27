import styled from 'styled-components'
import theme from '../../../lib/styles/theme'

interface Props {
  backgroundColor: string
}

export const EventDescriptionContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: 100%;
  gap: 10px;
  @media screen and (min-width: ${({ theme }) => theme.device.mini}) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: flex;
    gap: 30px;
  }
`

export const EventDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const EventDescriptionColor = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
  width: 30px;
  height: 30px;
`

export const EventDescriptionText = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding-left: 6px;
  color: ${({ theme }) => theme.fontColor.coffee};

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 24px;
    line-height: 29px;
  }
`

export const NoEventText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.fontColor.coffee};

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 24px;
    line-height: 29px;
  }
`
