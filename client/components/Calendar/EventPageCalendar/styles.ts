import styled, { keyframes } from 'styled-components'
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

export const LinkWrapper = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.sourceSerifPro};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.fontColor.coffee};
  display: flex;
  align-items: end;
`

export const EventTime = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColumnTime = styled.div`
  display: flex;
  flex-direction: column;
`

export const EventWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100px 1fr 20%;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.coffee};
  border-style: solid;
  border-width: 0px 0px 2px 0px;
`

export const EventTimeTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
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

export const EventTimeText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
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

export const ExpandText = styled.summary`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.fontColor.coffee};
  &:focus {
    font-weight: 700;
  }

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 24px;
    line-height: 29px;
  }
`
export const DetailsElement = styled.details`
  transition: all 0.5s ease-out;
`

export const EventTitleWrapper = styled.div`
  padding-left: 20px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const RegisterText = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.fontColor.coffee};
  &:focus {
    font-weight: 700;
  }

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 24px;
    line-height: 29px;
  }
`
