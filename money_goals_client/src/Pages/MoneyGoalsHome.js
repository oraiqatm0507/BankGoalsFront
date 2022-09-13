import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/MoneyGoalHome.css'
import { useSelector, useDispatch } from 'react-redux'

import GoalPanel_Main from '../Components/GoalPanel_Main'
import GoalPanel from '../Components/GoalPanel'
import GoalPanel_Empty from '../Components/GoalPanel_Empty';
import GoalCalendar from '../Components/GoalCalendar';

import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';


import { setGoals } from '../Backend/goalsSlice';



const GET_GOALS_BY_OWNER = gql`
  query MG_getGoalsByOwner($value: String  ){
    MG_getGoalsByOwner(ownerId: $value){
      name
	    goalMsg
	    goalOwner
	    startDate
	    endDate
	    startingInstallment
	    currentBalance
	    goalBalance
	    reminderBuffer
	    goalColor
	    estimatedDurationOfGoal
	    preferredGoalDuration
	    goalType
	    aquiredAmount
	    accountType
	    isCompleted
	    recipientId
    }
  }
`;

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
  const user = useSelector((state) => state.user.value)
  const goals = useSelector((state) => state.goals.value)
  const dispatch = useDispatch();
  let navigate = useNavigate();


  useEffect(() => {
    if (!user.loggedIn)
      navigate('/SignIn')




  }, [])
  const { loading, error, data } = useQuery(GET_GOALS_BY_OWNER, { "no-cors": true, variables: { value: user.id } });


  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  console.log(data);
  dispatch(setGoals(data.MG_getGoalsByOwner))


  function handleGoalPanels() {
    if (goals.length > 0) {

    }
  }
  return (
    <div className='MGH_mainContainer'>
      <Carousel className='carouselView' responsive={responsive}>
        <GoalPanel_Main checkingBalance={user.accBalance} savingBalance={user.accSavingBalance} />
        {
          (goals.length > 0) && goals.map((goal) => {
            return <GoalPanel goalData={goal} />
          })
        }

        {
          (goals.length < 2) && <GoalPanel_Empty />
        }

        <GoalPanel_Empty />

      </Carousel>

      <GoalCalendar allGoals={goals}/>

    </div>


  )
}
