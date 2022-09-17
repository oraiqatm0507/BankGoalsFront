import React, { useState } from 'react'



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

export default function GoalType({setDurStart, setDurEnd, setOftenValue}) {
    const [startDate, setstartDate] = useState("2022-09-12")
    const [endDate, setEndDate] = useState("2022-09-12")

    return (
        <div className='mainContainerParentDiv'>

            <div className='mainContainerChilDivDateInput'>
                <ul  className='mainContainerul'>
                    <label><h4>Duration: </h4></label>
                    <li className='mainContainerul'>
                        <label>Start Date: </label>
                        <input type="date" value={startDate} onChange={(e) => { 
                            setstartDate(e.target.value);  
                            setDurStart(e.target.value);
                            }} />
                    </li>
                    
              
                    <li>
                        <label>End Date: </label>
                        <input type="date" value={endDate} onChange={(e) => { 
                            setEndDate(e.target.value); 
                            setDurEnd(e.target.value);
                            }} />
                    </li>
                </ul>
            </div>
            <div className='mainContainerChildDivSelect'>
                <label ><h4>How often would you like payments to be made?</h4> 
            <select  className='mainContainerSelect'>
                {recursionOptions.map((option) => (
                    <option key={option.key} value={option.value} onChange={(e) => {setOftenValue(e.target.value)}}>{option.label}</option>
                    ))}
            </select>
            </label>
            </div>



        </div>


    )
}
