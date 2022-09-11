import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '../CSS/GoalCalendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

export default function GoalCalendar() {

  const [events, setEvents] = useState([{
    start: "2022-09-09",
    end: "2022-09-28",
    title: "Make Fat Stacks",
    hexColor: "ffa807"
  },{

    start: "2022-09-09",
    end: "2022-09-28",
    title: "Make money fast",
    hexColor: "add8e6"
  }

  ])



  function changeEventBackground(event, start, end, isSelected) {

    let backgroundColor = '#' + event.hexColor;
    let style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    };
  }


  return (
    <div className='gc_mainContainer'>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        events={events}
        style={{ height: 500 }}
        eventPropGetter={(changeEventBackground)}
      />

    </div>
  )
}
