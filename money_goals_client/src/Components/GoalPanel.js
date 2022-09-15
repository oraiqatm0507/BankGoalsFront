import React, {useState} from 'react'
import '../CSS/GoalPanel.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { FiInfo } from 'react-icons/fi';
import GoalPopup from './GoalPopup';
import Popup from 'reactjs-popup';






export default function GoalPanel({goalData}) {
    
    const [goalTitle, setGoalTitle] = useState(goalData.name)
    const [goalType, setGoalType] = useState(goalData.goalType)
    const [goalDescr, setGoalDescr] = useState(goalData.goalMsg)
    const [durationStart, setDurationStart] = useState(goalData.startDate)
    const [durationEnd, setDurationEnd] = useState(goalData.endDate)
    const [progressAmount, setProgressAmount] = useState(goalData.aquiredAmount)
    const [goalAmount, setGoalAmount] = useState(goalData.goalBalance)


    function formatMoney(money) {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',

            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });

        return formatter.format(money);

    }

    function calculatePercentage(numA, numB){
        if(numA >= numB)
            return 100
        return Math.round((numA / numB) * 100);
    }


    function handleGoalPopup(){
        
    }

    return (
        <div className='GP_mainContainer'>
            <text>{goalTitle}</text>
            <div className='descrContainer'>
                <p>{goalDescr}</p>

            </div>

            <div className='GP_miniContainer'>
                <text>Duration:</text>
                <label>Start Date:</label>
                <input disabled = {true}  value={durationStart}/>
                <div style={{marginBottom:20}} />
                <label>End Date:</label>
                <input disabled = {true}  value={durationEnd}/>
            </div>
            <div style={{marginBottom:20}} />


            <div>
                <text>Amount: {goalType}</text>
                <text>{formatMoney(progressAmount)}</text>

                <ProgressBar  completed={ calculatePercentage(progressAmount, goalAmount)} maxCompleted={100} />
            </div>
            <div style={{marginBottom:60}} />

            <Popup trigger={<button className="goalInfo" onClick={handleGoalPopup}>
                <FiInfo size={30}/>
            </button>}
            modal
            nested
        >
            {close =>
                <GoalPopup closeModal={close} goal={goalData} />
            }
          
        </Popup>
            
        </div>
    )
}
