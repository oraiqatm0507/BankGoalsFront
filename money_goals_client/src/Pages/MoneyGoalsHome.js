import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/MoneyGoalHome.css'

import GoalPanel_Main from '../Components/GoalPanel_Main'
import GoalPanel from '../Components/GoalPanel'
import GoalPanel_Empty from '../Components/GoalPanel_Empty';
import GoalCalendar from '../Components/GoalCalendar';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};


export default function MoneyGoalsHome() {




  return (
    <div className='MGH_mainContainer'>
      <Carousel className='carouselView' responsive={responsive}>
        <GoalPanel/>
        <GoalPanel_Main/>
        <GoalPanel_Empty/>
        <GoalPanel_Empty/>

        <GoalPanel_Empty/>
        <GoalPanel_Empty/>
        <GoalPanel_Empty/>
        <GoalPanel_Empty/>
        <GoalPanel_Empty/>

      </Carousel>

      <GoalCalendar/>

    </div>


  )
}
