import React, { useState } from 'react'
import { FiEdit, FiX, FiTrash2 } from 'react-icons/fi'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CSS/GoalPopup.css'
import ProgressBar from "@ramonak/react-progress-bar";



export default function GoalPopup({goal, closeModal}){
    //States to hold values coming in through props above ^
    const [g_title, setG_title] = useState(goal.name)
    const [g_descr, setDescr] = useState(goal.goalMsg)
    const [g_installmentAmount, setInstallMentAmount] = useState(goal.startingInstallment);
    const [g_recursiveLength, setRecursiveLength] = useState(2);
    const [durationStart, setDurationStart] = useState(goal.startDate);
    const [durationEnd, setDurationEnd] = useState(goal.endDate)
    const [g_goalType, setGoalType] = useState(goal.goalType)
    const [g_amountSaved, setAmountSaved] = useState(goal.aquiredAmount)
    const [currentGoalAmount, setCurrentGoalAmount] = useState(goal.goalBalance)

    //States to manage what to display
    const [editGoalTitle, setEditGoalTitle] = useState(false);
    const [editGoalDescr, setEditGoalDescr] = useState(false);
    const [editGoalInstallments, setEitGoalInstallments] = useState(false);
    const [editGoalDuration, setEditGoalDuration] = useState(false)
    const [editGoalAmount, seteditGoalAmount] = useState(false)


    const [editMade, setEditMade] = useState(false)
    const [showSaveBtn, setShowSaveBtn] = useState(false)

    //Helpers
    const [currentDate, setCurrentDate] = useState(new Date());
    const [descrCount, setDescrCount] = useState(42)



    const recursionOptions = [
        { key: 0, value: 0, label: "Daily" },
        { key: 1, value: 1, label: "Weekly" },
        { key: 2, value: 2, label: "Bi-Weekly" },
        { key: 3, value: 3, label: "Every 3 Weeks" },
        { key: 4, value: 4, label: "Monthly" },
        { key: 5, value: 5, label: "Bi-Monthly" },
        { key: 6, value: 6, label: "Every 3 Months" },
        { key: 7, value: 8, label: "Every 6 Months" },
        { key: 8, value: 9, label: "Yearly" },
    ]

    function onClose() {
        closeModal();
    }

    function updateInstallment(val) {

    }

    function updateRecusiveLength(event) {
        setRecursiveLength(event.target.value);
    }

    function submitChanges() {

    }

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

    function handleEdit(val) {
        console.log(val);
        switch (val) {
            case 0:
                setEditGoalTitle(true);
                break;
            case 1:
                setEditGoalDescr(true);
                setDescrCount(g_descr.length)
                break;
            case 2:
                setEitGoalInstallments(true);
                break;
            case 3:
                setEditGoalDuration(true);
                break;
            case 4:
                seteditGoalAmount(true);
                break;
            default:

        }

        setShowSaveBtn(true);

    }


    function tileClassName({ date, view }) {
        let start = new Date(durationStart);
        let end = new Date(durationEnd);
        // Add class to tiles in month view only
        if (view === 'month') {
          // Check if a date React-Calendar wants to check is on the list of dates to add class to
          if (date > start && date < end){
            return 'durationDays'
          }
        }
      }

    return (
        <div className='windowMain' >
            <button className="closeBtn" onClick={onClose}>
                <FiX />
            </button>
            <div className='windowHeader'>
                {!editGoalTitle ?
                    <p className='goalTitle'>{g_title} <button className="editBtn" onClick={() => handleEdit(0)}><FiEdit /></button> </p>
                    : //or option of the () ? option 1 : option 2
                    <div style={{ marginTop: 30 }}>
                        <label>Goal Title:  </label>
                        <input style={{ width: 200 }} value={g_title} onChange={(e) => setG_title(e.target.value)} maxLength={30} />
                    </div>
                }

            </div>


            <div className='mainContainer'>

                <div className='listContainer'>
                    <ul className='dataList'>
                        <li>
                            <div className="changeOption">
                                {
                                    !editGoalDescr ? //if Not editing goal
                                        <div>
                                            <p>Description: {g_descr}
                                                <button className="editBtn" onClick={() => handleEdit(1)}><FiEdit /></button>
                                            </p>

                                        </div>

                                        : //if user is editing 
                                        <div>
                                            <label>Description:</label>
                                            <div className='textArea'>
                                                <textarea
                                                    className='goalDescr'
                                                    id="description"
                                                    value={g_descr}
                                                    maxLength={150}
                                                    onChange={(e) => {
                                                        setDescr(e.target.value);
                                                        setDescrCount(e.target.value.length)
                                                    }}
                                                />
                                                <p>{descrCount} / 150</p>
                                            </div>
                                        </div>

                                }

                            </div>
                        </li>
                        <li>
                            <div className="Installments">

                                {
                                    !editGoalInstallments ?
                                        <div>
                                            <p>Installment: {formatMoney(g_installmentAmount)} , {recursionOptions[g_recursiveLength].label}
                                                <button className="editBtn" onClick={() => handleEdit(2)}><FiEdit /></button>
                                            </p>

                                        </div>
                                        :
                                        <div>
                                            <label> Installments:</label>
                                            <div>
                                                <label>$  </label>
                                                <input value={g_installmentAmount} type="number" onChange={(e) => setInstallMentAmount(e.target.value)} />
                                                <select value={g_recursiveLength} onChange={updateRecusiveLength}>
                                                    {recursionOptions.map((option) => (
                                                        <option key={option.key} value={option.value}>{option.label}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                }


                                <br />
                            </div>
                        </li>

                        <li>
                            <div className="duration">
                                {
                                    !editGoalDuration ?
                                        <div>
                                            <p>Duration:</p>
                                            <ul >
                                                <li className='durList'>Start Date {durationStart}</li>
                                                <br/>
                                                <li className='durList'>End Date   {durationEnd}
                                                    <button className="editBtn" onClick={() => handleEdit(3)}><FiEdit /></button>
                                                </li>

                                            </ul>

                                        </div>
                                        :

                                        <div>
                                            <label>Duration:</label>
                                            <ul>
                                                <li>
                                                    <label>Start Date: </label>
                                                    <input type="date" value={durationStart} onChange={(e) => { setDurationStart(e.target.value); console.log(e.target.value) }} />
                                                </li>
                                                <li>
                                                    <label>End Date: </label>
                                                    <input type="date" value={durationEnd} onChange={(e) => { setDurationEnd(e.target.value); console.log(e.target.value) }} />
                                                </li>
                                            </ul>
                                        </div>
                                }

                            </div>
                        </li>

                    </ul>

                    <div>



                    </div>
                </div>

                <div className='calendar'>
                    <Calendar value={currentDate} tileClassName={tileClassName} />
                </div>
            </div>

            <div className='progress'>
                <p>Amount {g_goalType} : <b>{formatMoney(g_amountSaved)}</b> </p>
                {
                    !editGoalAmount ?
                        <div>
                            <p>Goal Amount : <b>{formatMoney(currentGoalAmount)}</b><button className="editBtn" onClick={() => handleEdit(4)}><FiEdit /></button> </p>
                        </div>
                        :
                        <div>
                            <p>Goal Amout : $<input style={{"text-align":"right"}} value = {currentGoalAmount} onChange = {(e) => setCurrentGoalAmount(e.target.value)} /></p>
                        </div>

                }

            </div>
            <ProgressBar completed={ calculatePercentage(g_amountSaved, currentGoalAmount)} maxCompleted={100} />


            <button className="deleteBtn" onClick={onClose}>
                <FiTrash2 />
            </button>
            {showSaveBtn &&
                <div className='saveBtn'>
                    <button className='button-65' onClick={submitChanges} >Save Changes</button>
                </div>
            }
            <p className='estimatedDuration'>2 Weeks Remaining</p>

        </div>
    )
}
