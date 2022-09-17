import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/MoneyGoalHome.css'
import { useSelector, useDispatch } from 'react-redux'

import GoalPanel_Main from '../Components/GoalPanel_Main'
import GoalPanel from '../Components/GoalPanel'
import GoalPanel_Empty from '../Components/GoalPanel_Empty';
import GoalWidget from '../Components/GoalWidget.js'
import AchieveWidget from '../Components/AchieveWidget.js'
import GoalCalendar from '../Components/GoalCalendar';

import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';


import { setGoals } from '../Backend/goalsSlice';



const defaultGoals = [{
  id: "goal-1",
  name: "Save Big Money",
  goalMsg: "Make as much money as I can before the end of the year.",
  goalOwner: "1",
  startDate: "2022-09-13",
  endDate: "2022-12-25",
  startingInstallment: 30000,
  currentBalance: 400000,
  goalBalance: 700000,
  reminderBuffer: "Bi-Weekly",
  goalColor: "#FFFFF",
  estimatedDurationOfGoal: "3 months",
  preferredGoalDuration: "3 months",
  aquiredAmount: 450000,
  goalType: "SAVING",
  accountType: "CHECKING",
  isCompleted: false,
  recipientId: "1"
}, {
  id: "goal-2",
  name: "Save for House",
  goalMsg: "I'm tired of living on the street where I eat street corn everday.",
  goalOwner: "1",
  startDate: "2022-09-13",
  endDate: "2022-12-25",
  startingInstallment: 30000,
  currentBalance: 400000,
  goalBalance: 600000,
  reminderBuffer: "Bi-Weekly",
  goalColor: "#FFFFF",
  estimatedDurationOfGoal: "3 months",
  preferredGoalDuration: "3 months",
  aquiredAmount: 360000,
  goalType: "SAVING",
  accountType: "CHECKING",
  isCompleted: false,
  recipientId: "1"
},
{
  id: "goal-3",
  name: "Pay Student Loan",
  goalMsg: "Pay off my Dr Degree in sports betting.",
  goalOwner: "1",
  startDate: "2022-08-13",
  endDate: "2022-12-25",
  startingInstallment: 50000,
  currentBalance: 400000,
  goalBalance: 120000,
  reminderBuffer: "Bi-Weekly",
  goalColor: "#FFFFF",
  estimatedDurationOfGoal: "3 months",
  preferredGoalDuration: "3 months",
  aquiredAmount: 70000,
  goalType: "SAVING",
  accountType: "CHECKING",
  isCompleted: false,
  recipientId: "1"
},
{
  id: "goal-4",
  name: "Pay off new Car ",
  goalMsg: "I bought my dream car and now need to finish making payments.",
  goalOwner: "1",
  startDate: "2019-07-13",
  endDate: "2022-8-25",
  startingInstallment: 50000,
  currentBalance: 400000,
  goalBalance: 120000,
  reminderBuffer: "Bi-Weekly",
  goalColor: "#FFFFF",
  estimatedDurationOfGoal: "3 months",
  preferredGoalDuration: "3 months",
  aquiredAmount: 120000,
  goalType: "SAVING",
  accountType: "CHECKING",
  isCompleted: true,
  recipientId: "1"
},{
  id: "goal-5",
  name: "Go on Vacation ",
  goalMsg: "I want to go to travel the carribeans by cruize that will be a week long journey.",
  goalOwner: "1",
  startDate: "2017-07-13",
  endDate: "2020-1-25",
  startingInstallment: 500,
  currentBalance: 400000,
  goalBalance: 3000,
  reminderBuffer: "Bi-Weekly",
  goalColor: "#FFFFF",
  estimatedDurationOfGoal: "3 months",
  preferredGoalDuration: "3 months",
  aquiredAmount: 30000,
  goalType: "SAVING",
  accountType: "CHECKING",
  isCompleted: true,
  recipientId: "1"
},
{
  id: "goal-6",
  name: "Pay Mom Off",
  goalMsg: "Mom lent me 300,000 to start my buisness.",
  goalOwner: "1",
  startDate: "208-06-16",
  endDate: "2022-7-14",
  startingInstallment: 5000,
  currentBalance: 400000,
  goalBalance: 300000,
  reminderBuffer: "Monthly",
  goalColor: "#FFFFF",
  estimatedDurationOfGoal: "3 months",
  preferredGoalDuration: "3 months",
  aquiredAmount: 275000,
  goalType: "SAVING",
  accountType: "CHECKING",
  isCompleted: true,
  recipientId: "1"
}


]


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

  const [allGoals, setAllGoals] = useState(defaultGoals)
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
          (allGoals.length > 0) && allGoals.map((goal) => {

            return <GoalPanel goalData={goal} />
          })
        }

        {
          (allGoals.length < 2) && <GoalPanel_Empty />
        }

        <GoalPanel_Empty />

      </Carousel>


      <h5 className='goalHeadings'>Upcoming Goals</h5>

      <Carousel className='carouselView' responsive={responsive}>
      {
          (allGoals.length > 0) && allGoals.map((goal) => {

            return <GoalWidget goal={goal} />
          })
        }

       
    
      </Carousel>

      <h5 className='achieveHeadings'>Achievements</h5>

      <Carousel className='carouselView' responsive={responsive}>
        <AchieveWidget />
        <AchieveWidget />
        <AchieveWidget />
        <AchieveWidget />
      </Carousel>


      <GoalCalendar allGoals={goals} />




    </div>


  )
}
