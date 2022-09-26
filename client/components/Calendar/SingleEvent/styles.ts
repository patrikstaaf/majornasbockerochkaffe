import styled from 'styled-components'

interface Props {
  borderColor: string
}

export const HomePageCalendarSection = styled.section`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 1px 2px 2px 2px;
  border-color: ${({ theme }) => theme.colors.coffee};
  border-style: solid;
  display: flex;
  flex-direction: column;
  padding: 56px 20px 32px 20px;
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
  display: flex;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.coffee};
  border-style: solid;
  border-width: 0px 0px 2px 0px;
`

export const EventDate = styled.div<Props>`
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  border-width: 13px;
  padding: 6px 12px 6px 12px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
