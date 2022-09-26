import { FrontPageCalendarTypes } from './types'

interface Props {
  data: FrontPageCalendarTypes
}

const FrontPageCalendar: React.FC<FrontPageCalendarTypes> = (data) => {
  return (
    <section>
      <h3>Kalendarium</h3>
    </section>
  )
}

export default FrontPageCalendar
