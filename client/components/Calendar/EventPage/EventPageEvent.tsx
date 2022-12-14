import { NextPage } from 'next'
import Link from 'next/link'
import {
  firstWord,
  getDate,
  getMonthInShortText,
  getEndTime,
  getStartTime,
  getIntroString,
} from '../../../lib/helpers/calendar'
import { Calendar } from '../../../lib/sanity/types'
import theme from '../../../lib/styles/theme'
import { EventDate, EventDateText, SectionTitle } from '../HomePage/styles'

import {
  EventDescriptionColor,
  EventDescriptionContainer,
  EventDescriptionText,
  EventDescriptionWrapper,
  NoEventText,
  LinkWrapper,
  EventTime,
  EventWrapper,
  EventTimeText,
  ExpandText,
  DetailsElement,
  EventTitleWrapper,
  RegisterText,
  EventTimeTitle,
  HomePageCalendarSection,
  HomePageCalendarWrapper,
  HomePagePaddingContainer,
  StyleLink,
  EventDateBackground,
  DateTimeText,
} from './styles'

interface Props {
  calendar: Calendar[]
  instagramUrl: string
}

const EventPageEvent: NextPage<Props> = ({ calendar, instagramUrl }) => {
  if (calendar.length === 0) {
    return (
      <HomePageCalendarSection id="kalender">
        <HomePagePaddingContainer>
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
            <Link href={instagramUrl}>
              Följ oss på instagram för kontinuerlig uppdatering kring evenmang
              och nyheter
            </Link>
          </LinkWrapper>
        </HomePagePaddingContainer>
      </HomePageCalendarSection>
    )
  }

  return (
    <>
      <HomePageCalendarSection id="kalender">
        <HomePagePaddingContainer>
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
        </HomePagePaddingContainer>
        <HomePageCalendarWrapper>
          {calendar &&
            calendar.map((event) => (
              <div key={event._id}>
                {event.event === 'authorNight' && (
                  <EventWrapper>
                    <EventDateBackground
                      backgroundColor={theme.colors.hemingway}
                    >
                      <EventDate>
                        <EventDateText>
                          {getDate(event.calendarDate)}
                        </EventDateText>
                        <EventDateText>
                          {getMonthInShortText(event.calendarDate)}
                        </EventDateText>
                      </EventDate>
                    </EventDateBackground>

                    <EventTimeTitle>{event.authorEventTitle}</EventTimeTitle>
                    <Link href="mailto:eva@eva.com">
                      <RegisterText>Anmäl dig här</RegisterText>
                    </Link>

                    <EventTime>
                      {event.eventTime.includes('-') ? (
                        <>
                          <DateTimeText>
                            {getStartTime(event.eventTime)}
                          </DateTimeText>
                          <DateTimeText>-</DateTimeText>
                          <DateTimeText>
                            {getEndTime(event.eventTime)}
                          </DateTimeText>
                        </>
                      ) : (
                        <DateTimeText>{event.eventTime}</DateTimeText>
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

                    <EventTimeTitle>{event.bookClubTitle}</EventTimeTitle>
                    <EventTimeText>
                      {event.bookClubDescription.length < 18 ? (
                        <EventTimeText>
                          {event.bookClubDescription}
                        </EventTimeText>
                      ) : (
                        <>
                          <EventTimeText>
                            {getIntroString(event.bookClubDescription)}
                          </EventTimeText>
                          <EventTimeText>
                            <DetailsElement>
                              <ExpandText>Läs mer</ExpandText>
                              {event.bookClubDescription}
                            </DetailsElement>
                          </EventTimeText>
                        </>
                      )}
                    </EventTimeText>

                    <EventTime>
                      {event.eventTime.includes('-') ? (
                        <>
                          <DateTimeText>
                            {getStartTime(event.eventTime)}
                          </DateTimeText>
                          <DateTimeText>-</DateTimeText>
                          <DateTimeText>
                            {getEndTime(event.eventTime)}
                          </DateTimeText>
                        </>
                      ) : (
                        <DateTimeText>{event.eventTime}</DateTimeText>
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

                    <EventTimeTitle>{event.bookNightTitle}</EventTimeTitle>
                    <EventTimeText>
                      {event.bookNightDescription.length < 18 ? (
                        <EventTimeText>
                          {event.bookNightDescription}
                        </EventTimeText>
                      ) : (
                        <>
                          <EventTimeText>
                            {getIntroString(event.bookNightDescription)}
                          </EventTimeText>
                          <EventTimeText>
                            <DetailsElement>
                              <ExpandText>Läs mer</ExpandText>
                              {event.bookNightDescription}
                            </DetailsElement>
                          </EventTimeText>
                        </>
                      )}
                    </EventTimeText>

                    <EventTime>
                      {event.eventTime.includes('-') ? (
                        <>
                          <DateTimeText>
                            {getStartTime(event.eventTime)}
                          </DateTimeText>
                          <DateTimeText>-</DateTimeText>
                          <DateTimeText>
                            {getEndTime(event.eventTime)}
                          </DateTimeText>
                        </>
                      ) : (
                        <DateTimeText>{event.eventTime}</DateTimeText>
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

                    <EventTimeTitle>{event.miscEventTitle}</EventTimeTitle>
                    <EventTimeText>
                      {event.miscEventDescription.length < 18 ? (
                        <EventTimeText>
                          {event.miscEventDescription}
                        </EventTimeText>
                      ) : (
                        <>
                          <EventTimeText>
                            {getIntroString(event.miscEventDescription)}
                          </EventTimeText>
                          <EventTimeText>
                            <DetailsElement>
                              <ExpandText>Läs mer</ExpandText>
                              {event.miscEventDescription}
                            </DetailsElement>
                          </EventTimeText>
                        </>
                      )}
                    </EventTimeText>

                    <EventTime>
                      {event.eventTime.includes('-') ? (
                        <>
                          <DateTimeText>
                            {getStartTime(event.eventTime)}
                          </DateTimeText>
                          <DateTimeText>-</DateTimeText>
                          <DateTimeText>
                            {getEndTime(event.eventTime)}
                          </DateTimeText>
                        </>
                      ) : (
                        <DateTimeText>{event.eventTime}</DateTimeText>
                      )}
                    </EventTime>
                  </EventWrapper>
                )}
              </div>
            ))}
        </HomePageCalendarWrapper>
        <HomePagePaddingContainer>
          <LinkWrapper>
            <Link href={instagramUrl} passHref>
              <StyleLink>
                Följ oss på instagram för kontinuerlig uppdatering kring
                evenmang och nyheter
              </StyleLink>
            </Link>
          </LinkWrapper>
        </HomePagePaddingContainer>
      </HomePageCalendarSection>
    </>
  )
}

export default EventPageEvent
