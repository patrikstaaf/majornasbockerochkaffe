import { NextPage } from 'next'
import { Calendar } from '../../lib/sanity/types'
import SinglePage from './SingleEvent/SingleEvent'

interface Props {
  calendar: Calendar[]
}

const HomePageCalendar: NextPage<Props> = ({ calendar }) => {
  return <SinglePage calendar={calendar}></SinglePage>
}

export default HomePageCalendar
