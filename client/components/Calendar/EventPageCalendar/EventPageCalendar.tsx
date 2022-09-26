import { EventPageCalendarTypes } from './types'

interface Props {
  data: EventPageCalendarTypes
}

const EventPageCalendar: React.FC<EventPageCalendarTypes> = (data) => {
  return (
    <section>
      <h3>Kalendarium</h3>
    </section>
  )
}

export default EventPageCalendar
