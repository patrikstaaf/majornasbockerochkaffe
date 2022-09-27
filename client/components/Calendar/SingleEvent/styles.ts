import styled from 'styled-components'

interface Props {
  backgroundColor: string
}

export const HomePageCalendarSection = styled.section`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 1px 2px 2px 2px;
  border-color: ${({ theme }) => theme.colors.coffee};
  border-style: solid;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
  height: 100%;
`

export const HomePageCalendarWrapper = styled.div`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.coffee};
  border: solid;
  border-width: 2px 2px 0px 2px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const EventWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.coffee};
  border-style: solid;
  border-width: 0px 0px 2px 0px;
`

export const EventDateBackground = styled.div<Props>`
  background-color: ${(props) => props.backgroundColor};
  width: 100px;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const EventDate = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  width: 70%;
  height: 70%;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const EventDateText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
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

export const EventTitle = styled.div`
  padding-left: 20px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NoEventText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
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

export const LinkWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.sourceSerifPro};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.fontColor.coffee};
  display: flex;
  align-items: end;
  height: 100%;
  margin-bottom: 20px;
  text-decoration: underline;
  /* &:hover, */
  :focus {
    font-style: italic;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.sourceSerifPro};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 34px;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.fontColor.coffee};
  border-bottom: 1px solid ${({ theme }) => theme.colors.coffee};

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 28px;
    line-height: 29px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 40px;
    line-height: 42px;
  }
`
