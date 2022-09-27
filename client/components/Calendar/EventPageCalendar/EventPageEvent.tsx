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
  LinkWrapper,
  EventDateBackground,
} from '../SingleEvent/styles'

import {
  EventDescriptionContainer,
  EventDescriptionWrapper,
  EventDescriptionColor,
  EventDescriptionText,
  NoEventText,
} from './styles'

interface Props {
  calendar: Calendar[]
}

const EventPageEvent: NextPage<Props> = ({ calendar }) => {
  //   const date = new Date()
  //   let day = date.getDate()
  //   let month = date.getMonth() + 1
  //   let year = date.getFullYear()

  //   let currentDate = `${year}-${month}-${day}`
  //   console.log(currentDate)

  function futureEventDateValidation(eventDate: string) {
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let currentDate = `${year}-${month}-${day}`
    console.log(currentDate)
  }

  if (calendar.length === 0) {
    return (
      <HomePageCalendarSection>
        <SectionTitle>Kalendarium</SectionTitle>
        <EventDescriptionContainer>
          <EventDescriptionWrapper>
            <EventDescriptionColor backgroundColor={theme.colors.hemingway} />
            <EventDescriptionText>Författarkvällar</EventDescriptionText>
          </EventDescriptionWrapper>
          <EventDescriptionWrapper>
            <EventDescriptionColor backgroundColor={theme.colors.picasso} />
            <EventDescriptionText>Bokcirklar</EventDescriptionText>
          </EventDescriptionWrapper>
          <EventDescriptionWrapper>
            <EventDescriptionColor backgroundColor={theme.colors.crust} />
            <EventDescriptionText>Bokhandelskvällar</EventDescriptionText>
          </EventDescriptionWrapper>
          <EventDescriptionWrapper>
            <EventDescriptionColor backgroundColor={theme.colors.cream} />
            <EventDescriptionText>Övrigt</EventDescriptionText>
          </EventDescriptionWrapper>
        </EventDescriptionContainer>
        <NoEventText>Just nu har vi inga kommande evenemang.</NoEventText>

        <LinkWrapper>
          <Link href="/evenemang">
            Följ oss på instagram för kontinuerlig uppdatering kring evenmang
            och nyheter
          </Link>
        </LinkWrapper>
      </HomePageCalendarSection>
    )
  }

  return (
    <HomePageCalendarSection>
      <SectionTitle>Kalendarium</SectionTitle>
      <EventDescriptionContainer>
        <EventDescriptionWrapper>
          <EventDescriptionColor backgroundColor={theme.colors.hemingway} />
          <EventDescriptionText>Författarkvällar</EventDescriptionText>
        </EventDescriptionWrapper>
        <EventDescriptionWrapper>
          <EventDescriptionColor backgroundColor={theme.colors.picasso} />
          <EventDescriptionText>Bokcirklar</EventDescriptionText>
        </EventDescriptionWrapper>
        <EventDescriptionWrapper>
          <EventDescriptionColor backgroundColor={theme.colors.crust} />
          <EventDescriptionText>Bokhandelskvällar</EventDescriptionText>
        </EventDescriptionWrapper>
        <EventDescriptionWrapper>
          <EventDescriptionColor backgroundColor={theme.colors.cream} />
          <EventDescriptionText>Övrigt</EventDescriptionText>
        </EventDescriptionWrapper>
      </EventDescriptionContainer>
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
        <Link href="/evenemang">
          Följ oss på instagram för kontinuerlig uppdatering kring evenmang och
          nyheter
        </Link>
      </LinkWrapper>
    </HomePageCalendarSection>
  )
}

export default EventPageEvent
