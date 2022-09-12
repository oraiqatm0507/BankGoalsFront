import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import '../CSS/GoalWidget.css'
import ProgressBar from "@ramonak/react-progress-bar";


export default function GoalWidget({
    timeRemaining, goalName, goalDescr,
    installmentAmount, allocateAuto, howOften,
    startDate, endDate, amountSaved, goalAmount }){
    //States to hold the values from the props above.
    const [g_goalType, setG_goalType] = useState("SAVINGS")
    const [durationStart, setDurationStart] =  useState("2022-09-12")
    const [durationEnd, setDurationEnd] = useState(new Date(2022, 10, 11))
    const [g_title, setG_title] = useState("Make Fat Stacks")
    const [g_descr, setG_descr] = useState("Get fat stacks before the end of the year.")
    const [g_installmentAmount, setG_installmentAmount] = useState(20000)
    const [g_recursiveLength, setG_recursiveLength] = useState(2)
    const [g_amountSaved, setG_amountSaved] = useState(190000)
    const [currentGoalAmount, setCurrentGoalAmount] = useState(300000)

    //Helpers
    const [currentDate, setCurrentDate] = useState(new Date());
    const measurement = "days"
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

    function formatMoney(money) {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,

            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });

        return formatter.format(money);

    }

    //Function that returns the what percentage of the goal is completed.
    function calculatePercentage(numA, numB){
        if(numA >= numB)
            return 100
        return Math.round((numA / numB) * 100);
    }

    //Function that takes in the current and end date of a goal and returns the difference.
    function daysRemaining(){
        var diff = Math.abs(durationEnd - currentDate)
        return Math.ceil(diff / (1000 * 60 * 60 * 24))
    }

    //Function that determines how much longer until the goal ends.
    //Calls daysRemaining, then determines whether it should display days, months, or years.
    function checkTimeRemaining(){
        var time = daysRemaining();
        if (time > 364){
            time = Math.floor(time / 365)
        }
        else if (time > 30){
            time = Math.floor(time / 31)
        }
        else if (time > 7){
            time = Math.floor(time / 7)
        }
        return time
    }

    function checkTimeMeasurement(){
        var time = daysRemaining();
        var measurement = "day(s)"
        if (time > 364){
            measurement = "year(s)"
        }
        else if (time > 30){
            measurement = "month(s)"
        }
        else if (time > 7){
            measurement = "week(s)"
        }
        return measurement
    }
        

    return(
        <div className='widgetMain'>
            <p className="timeRemaining">{checkTimeRemaining()} { checkTimeMeasurement() } Remaining</p>
            <p className="goalTitle">{g_title}</p>
            <p className="goalDescription">{g_descr}</p>
            <p className="installments">Installments: {formatMoney(g_installmentAmount)} {recursionOptions[g_recursiveLength].label}</p>
            <p className="t_amountSaved">Amount Saved:</p> 
            <p className="g_amountSaved">{formatMoney(g_amountSaved)}</p>
            <div className="percentSaved">
                <ProgressBar
                completed={ calculatePercentage(g_amountSaved, currentGoalAmount)}
                maxCompleted={100}
                />
            </div>
            <p className="endDate">End Date: {durationEnd.toDateString()}</p>
        </div>
    )
}