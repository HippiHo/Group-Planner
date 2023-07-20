'use client';

import { useState } from "react";
import Container from "../components/Container";
import Day from "../components/Day";
import { weekDays } from "../constants/constants.weekDays";
import {getCalendarData} from "../utils/getCalendarData"
import { TrashIcon } from '@heroicons/react/24/solid'

export default function Home() {

  const [filteredWeekdays, setFilteredWeekdays] = useState<string[]>([]);


  const filterCalendar = (weekday: string) => {
      setFilteredWeekdays(filteredWeekdays => [...filteredWeekdays, weekday])
  }

  const data = getCalendarData()

  return (
    <main className="flex flex-col items-center mt-0 pt-4">
      <h1>Summer Group planning</h1>
      <p className="mb-5">Dismiss the days that are not free.</p>
      <Container className="items-center md:space-x-4 flex-col md:flex-row">
      <TrashIcon className="h-6 w-6 text-white text-center mb-2 md:mb-0" />
        {weekDays.map( item => <button key={item} onClick={() => filterCalendar(item)} className="text-reddish flex font-semibold hover:text-nude">{item}</button>)}
      </Container>
      {data.map(month => (<Container as="section" className="flex-col items-center mt-5" key={month.title}>
        <h2 className="text-left">{month.title}</h2>
        <div className="grid grid-cols-3 md:grid-cols-7">
          {month.days.map((day) => (
            <Day
              key={`${month.title}-${String(day.number)}`}
              day={day.day}
              number={day.number}
              weekend={day.weekend}
              isFiltered={filteredWeekdays.some(item => item === day.day)}
            />
          ))}
        </div>
        </Container>))}
    </main>
  );
}
