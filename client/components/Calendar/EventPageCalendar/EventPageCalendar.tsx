import { NextPage } from 'next'
import dynamic from 'next/dynamic'
// import EventPageEvent from './EventPageEvent'
import { Calendar } from '../../../lib/sanity/types'
const EventPageEvent = dynamic(() => import('./EventPageEvent'), {
  ssr: false,
})

interface Props {
  calendar: Calendar[]
}

const EventPageCalendar: NextPage<Props> = ({ calendar }) => {
  return <EventPageEvent calendar={calendar}></EventPageEvent>
}

export default EventPageCalendar
