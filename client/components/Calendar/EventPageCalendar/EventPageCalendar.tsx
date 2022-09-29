import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Calendar } from '../../../lib/sanity/types'
const EventPageEvent = dynamic(() => import('./EventPageEvent'), {
  ssr: false,
})

interface Props {
  calendar: Calendar[]
  instagramUrl: string
}

const EventPageCalendar: NextPage<Props> = ({ calendar, instagramUrl }) => {
  return (
    <EventPageEvent
      calendar={calendar}
      instagramUrl={instagramUrl}
    ></EventPageEvent>
  )
}

export default EventPageCalendar
