import { NextPage } from 'next'
import EventPageEvent from './EventPageEvent'
import { Calendar } from '../../../lib/sanity/types'

interface Props {
  calendar: Calendar[]
}

const EventPageCalendar: NextPage<Props> = ({ calendar }) => {
  console.log(calendar)

  return <EventPageEvent calendar={calendar}></EventPageEvent>
}

export default EventPageCalendar
