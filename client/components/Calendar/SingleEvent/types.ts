import { GeneralTypes } from '../generaltypes'

export interface FrontPageCalendarTypes extends GeneralTypes {
  authorEventTime?: string
  authorEventTitle?: string
  authorNightDescription?: string
  bookClubTime?: string
  bookClubTitle?: string
  bookClubDescription?: string
  bookNightTitle?: string
  bookNightTime?: string
  bookNightDescription?: string
  miscEventTitle?: string
  miscEventTime?: string
  miscEventDescription?: string
  calendarDate: string
  event: string
}
