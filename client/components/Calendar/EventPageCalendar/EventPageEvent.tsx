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
import { Text } from '../../Text'
import {
  EventDate,
  EventDateBackground,
  EventDateText,
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
  EventTimeText,
  ExpandText,
  DetailsElement,
  EventTitleWrapper,
  RegisterText,
  EventTimeTitle,
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
                  <EventTitleWrapper>
                    <EventTimeTitle>{event.authorEventTitle}</EventTimeTitle>
                    <RegisterText>
                      <Link href="mailto:eva@eva.com">Anmäl dig här</Link>
                    </RegisterText>
                  </EventTitleWrapper>
                  <EventTime>
                    {event.eventTime.includes('-') ? (
                      <>
                        <EventTimeTitle>
                          {getStartTime(event.eventTime)}
                        </EventTimeTitle>
                        <EventTimeTitle>-</EventTimeTitle>
                        <EventTimeTitle>
                          {getEndTime(event.eventTime)}
                        </EventTimeTitle>
                      </>
                    ) : (
                      <EventTimeTitle>{event.eventTime}</EventTimeTitle>
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
                  <EventTitleWrapper>
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
                  </EventTitleWrapper>
                  <EventTime>
                    {event.eventTime.includes('-') ? (
                      <>
                        <EventTimeTitle>
                          {getStartTime(event.eventTime)}
                        </EventTimeTitle>
                        <EventTimeTitle>-</EventTimeTitle>
                        <EventTimeTitle>
                          {getEndTime(event.eventTime)}
                        </EventTimeTitle>
                      </>
                    ) : (
                      <EventTimeTitle>{event.eventTime}</EventTimeTitle>
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
                  <EventTitleWrapper>
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
                  </EventTitleWrapper>
                  <EventTime>
                    {event.eventTime.includes('-') ? (
                      <>
                        <EventTimeText>
                          {getStartTime(event.eventTime)}
                        </EventTimeText>
                        <EventTimeText>-</EventTimeText>
                        <EventTimeText>
                          {getEndTime(event.eventTime)}
                        </EventTimeText>
                      </>
                    ) : (
                      <EventTimeText>{event.eventTime}</EventTimeText>
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
                  <EventTitleWrapper>
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
                  </EventTitleWrapper>
                  <EventTime>
                    {event.eventTime.includes('-') ? (
                      <>
                        <EventTimeTitle>
                          {getStartTime(event.eventTime)}
                        </EventTimeTitle>
                        <EventTimeTitle>-</EventTimeTitle>
                        <EventTimeTitle>
                          {getEndTime(event.eventTime)}
                        </EventTimeTitle>
                      </>
                    ) : (
                      <EventTimeTitle>{event.eventTime}</EventTimeTitle>
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
