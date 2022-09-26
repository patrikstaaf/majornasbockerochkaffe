import { HomePageCalendar } from './types'

interface Props {
  data: HomePageCalendar
}

const HomePageCalendar: React.FC<HomePageCalendar> = (data) => {
  return (
    <section>
      <h3>Kalendarium</h3>
    </section>
  )
}

export default HomePageCalendar
