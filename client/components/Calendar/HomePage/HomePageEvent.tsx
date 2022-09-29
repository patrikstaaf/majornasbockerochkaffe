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
  EventDateBackground,
  StyleLink,
} from './styles'

interface Props {
  calendar: Calendar[]
}

const HomePageCalendar: NextPage<Props> = ({ calendar }) => {
  if (calendar.length === 0) {
    return (
      <HomePageCalendarSection>
        <SectionTitle>Kalendarium</SectionTitle>
        <NoEventText>Just nu har vi inga kommande evenemang.</NoEventText>
        <LinkWrapper>
          <Link href="/evenemang/#kalender" scroll={false}>
            Se fullständigt kalendarium här
          </Link>
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
                  <EventDateBackground backgroundColor={theme.colors.hemingway}>
                    <EventDate>
                      <EventDateText>
                        {getDate(event.calendarDate)}
                      </EventDateText>
                      <EventDateText>
                        {getMonthInShortText(event.calendarDate)}
                      </EventDateText>
                    </EventDate>
                  </EventDateBackground>
                  <EventTitle>
                    <Text Color>{firstWord(event.authorEventTitle)}</Text>
                  </EventTitle>
                </EventWrapper>
              )}
              {event.event === 'bookClub' && (
                <EventWrapper>
                  <EventDateBackground backgroundColor={theme.colors.picasso}>
                    <EventDate>
                      <EventDateText>
                        {getDate(event.calendarDate)}
                      </EventDateText>
                      <EventDateText>
                        {getMonthInShortText(event.calendarDate)}
                      </EventDateText>
                    </EventDate>
                  </EventDateBackground>
                  <EventTitle>
                    <Text Color>{event.bookClubTitle}</Text>
                  </EventTitle>
                </EventWrapper>
              )}
              {event.event === 'bookNight' && (
                <EventWrapper>
                  <EventDateBackground backgroundColor={theme.colors.crust}>
                    <EventDate>
                      <EventDateText>
                        {getDate(event.calendarDate)}
                      </EventDateText>
                      <EventDateText>
                        {getMonthInShortText(event.calendarDate)}
                      </EventDateText>
                    </EventDate>
                  </EventDateBackground>
                  <EventTitle>
                    <Text Color>{event.bookNightTitle}</Text>
                  </EventTitle>
                </EventWrapper>
              )}
              {event.event === 'misc' && (
                <EventWrapper>
                  <EventDateBackground backgroundColor={theme.colors.cream}>
                    <EventDate>
                      <EventDateText>
                        {getDate(event.calendarDate)}
                      </EventDateText>
                      <EventDateText>
                        {getMonthInShortText(event.calendarDate)}
                      </EventDateText>
                    </EventDate>
                  </EventDateBackground>
                  <EventTitle>
                    <Text Color>{event.miscEventTitle}</Text>
                  </EventTitle>
                </EventWrapper>
              )}
            </div>
          ))}
      </HomePageCalendarWrapper>
      <LinkWrapper>
        <Link href="/evenemang/#kalender" scroll={false}>
          <StyleLink>Se fullständigt kalendarium här</StyleLink>
        </Link>
      </LinkWrapper>
    </HomePageCalendarSection>
  )
}

export default HomePageCalendar
