import { NextPage } from 'next'
import Link from 'next/link'
import {
  firstWord,
  getDate,
  getMonthInShortText,
  getEndTime,
  getStartTime,
} from '../../../lib/helpers/calendar'
import { Calendar } from '../../../lib/sanity/types'
import theme from '../../../lib/styles/theme'
import { Text } from '../../Text'
import {
  EventDate,
  EventDateBackground,
  EventDateText,
  EventTitle,
  HomePageCalendarSection,
  HomePageCalendarWrapper,
  SectionTitle,
} from '../SingleEvent/styles'

import {
  EventDescriptionColor,
  EventDescriptionContainer,
  EventDescriptionText,
  EventDescriptionWrapper,
  NoEventText,
  LinkWrapper,
  EventTime,
  EventWrapper,
} from './styles'

interface Props {
  calendar: Calendar[]
}

const EventPageEvent: NextPage<Props> = ({ calendar }) => {
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
                    <Text Color>{event.authorEventTitle}</Text>
                    <LinkWrapper>
                      <Link href="mailto:eva@eva.com">Anmäl dig här</Link>
                    </LinkWrapper>
                  </EventTitle>
                  <EventTime>
                    {event.eventTime.includes('-') ? (
                      <>
                        <div>{getStartTime(event.eventTime)}</div>
                        <div>-</div>
                        <div>{getEndTime(event.eventTime)}</div>
                      </>
                    ) : (
                      <div>{event.eventTime}</div>
                    )}
                  </EventTime>
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
                  <EventTime>
                    {event.eventTime.includes('-') ? (
                      <>
                        <div>{getStartTime(event.eventTime)}</div>
                        <div>-</div>
                        <div>{getEndTime(event.eventTime)}</div>
                      </>
                    ) : (
                      <div>{event.eventTime}</div>
                    )}
                  </EventTime>
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
                  <EventTime>
                    {event.eventTime.includes('-') ? (
                      <>
                        <div>{getStartTime(event.eventTime)}</div>
                        <div>-</div>
                        <div>{getEndTime(event.eventTime)}</div>
                      </>
                    ) : (
                      <div>{event.eventTime}</div>
                    )}
                  </EventTime>
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
                  <EventTime>
                    {event.eventTime.includes('-') ? (
                      <>
                        <div>{getStartTime(event.eventTime)}</div>
                        <div>-</div>
                        <div>{getEndTime(event.eventTime)}</div>
                      </>
                    ) : (
                      <div>{event.eventTime}</div>
                    )}
                  </EventTime>
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
