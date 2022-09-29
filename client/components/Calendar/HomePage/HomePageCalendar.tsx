import { NextPage } from 'next'
import { Calendar } from '../../../lib/sanity/types'
import dynamic from 'next/dynamic'
const HomePageEvent = dynamic(() => import('./HomePageEvent'), {
  ssr: false,
})

interface Props {
  calendar: Calendar[]
}

const HomePageCalendar: NextPage<Props> = ({ calendar }) => {
  return <HomePageEvent calendar={calendar}></HomePageEvent>
}

export default HomePageCalendar
