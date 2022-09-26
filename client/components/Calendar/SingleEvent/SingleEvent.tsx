import { NextPage } from 'next'
import Link from 'next/link'
import { Calendar } from '../../../lib/sanity/types'
import theme from '../../../lib/styles/theme'
import {
  firstWord,
  getDate,
  getMonthInShortText,
} from '../../../lib/helpers/calendar'
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
