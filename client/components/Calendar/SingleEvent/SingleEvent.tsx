import { NextPage } from 'next'
import Link from 'next/link'
import { Calendar } from '../../../lib/sanity/types'
import theme from '../../../lib/styles/theme'
import { Text } from '../../Text'
import {
  HomePageCalendarSection,
  SectionTitle,
  HomePageCalendarWrapper,
  EventWrapper,
  EventDate,
  EventDateText,
  EventTitle,
  NoEventText,
  LinkWrapper,
} from './styles'

interface Props {
  calendar: Calendar[]
}

const SingleEvent: NextPage<Props> = ({ calendar }) => {
  console.log(calendar)

  function firstWord(text: string) {
    const firstBlank = text.indexOf(' ')
    if (firstBlank == -1) {
      // There is no space at all -- return the whole string
      return text
    }
    return text.slice(0, firstBlank)
  }

  function getDate(date: string) {
    return date.slice(8)
  }

  function getMonthInShortText(date: string) {
    const getMonth = date.substring(5, 7)

    switch (getMonth) {
      case '01':
        return 'jan'
      case '02':
        return 'feb'
      case '03':
        return 'mar'
      case '04':
        return 'apr'
      case '05':
        return 'maj'
      case '06':
        return 'jun'
      case '07':
        return 'jul'
      case '08':
        return 'aug'
      case '09':
        return 'sep'
      case '10':
        return 'okt'
      case '11':
        return 'nov'
      case '12':
        return 'dec'
    }
  }

  if (calendar.length === 0) {
    return (
      <HomePageCalendarSection>
        <SectionTitle>Kalendarium</SectionTitle>
        <NoEventText>Just nu har vi inga kommande evenemang.</NoEventText>
        <LinkWrapper>
          <Link href="/evenemang">Se fullständigt kalendarium här</Link>
        </LinkWrapper>
      </HomePageCalendarSection>
    )
  }

  return (
    <HomePageCalendarSection>
      <SectionTitle>Kalendarium</SectionTitle>
      <HomePageCalendarWrapper>
        {calendar &&
          calendar.map((event, index) => (
            <div key={index}>
              {event.event === 'authorNight' && (
                <EventWrapper>
                  <EventDate borderColor={theme.colors.hemingway}>
                    <EventDateText>{getDate(event.calendarDate)}</EventDateText>
                    <EventDateText>
                      {getMonthInShortText(event.calendarDate)}
                    </EventDateText>
                  </EventDate>
                  <EventTitle>
                    <Text Color>{firstWord(event.authorEventTitle)}</Text>
                  </EventTitle>
                </EventWrapper>
              )}
              {event.event === 'bookClub' && (
                <EventWrapper>
                  <EventDate borderColor={theme.colors.picasso}>
                    <EventDateText>{getDate(event.calendarDate)}</EventDateText>
                    <EventDateText>
                      {getMonthInShortText(event.calendarDate)}
                    </EventDateText>
                  </EventDate>
                  <EventTitle>
                    <Text Color>{event.bookClubTitle}</Text>
                    {/* <Text Color>{firstWord(event.bookClubTitle)}</Text> */}
                  </EventTitle>
                </EventWrapper>
              )}
              {event.event === 'bookNight' && (
                <EventWrapper>
                  <EventDate borderColor={theme.colors.crust}>
                    <EventDateText>{getDate(event.calendarDate)}</EventDateText>
                    <EventDateText>
                      {getMonthInShortText(event.calendarDate)}
                    </EventDateText>
                  </EventDate>
                  <EventTitle>
                    <Text Color>{event.bookNightTitle}</Text>
                    {/* <Text Color>{firstWord(event.bookNightTitle)}</Text> */}
                  </EventTitle>
                </EventWrapper>
              )}
              {event.event === 'misc' && (
                <EventWrapper>
                  <EventDate borderColor={theme.colors.cream}>
                    <EventDateText>{getDate(event.calendarDate)}</EventDateText>
                    <EventDateText>
                      {getMonthInShortText(event.calendarDate)}
                    </EventDateText>
                  </EventDate>
                  <EventTitle>
                    <Text Color>{event.miscEventTitle}</Text>
                  </EventTitle>
                </EventWrapper>
              )}
            </div>
          ))}
      </HomePageCalendarWrapper>
      <LinkWrapper>
        <Link href="/evenemang">Se fullständigt kalendarium här</Link>
      </LinkWrapper>
    </HomePageCalendarSection>
  )
}

export default SingleEvent
