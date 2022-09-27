import { NextPage } from 'next'
import { Calendar } from '../../lib/sanity/types'
import SingleEvent from './SingleEvent/SingleEvent'

interface Props {
  calendar: Calendar[]
}

const HomePageCalendar: NextPage<Props> = ({ calendar }) => {
  return <SingleEvent calendar={calendar}></SingleEvent>
}

export default HomePageCalendar
