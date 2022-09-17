import React, { useState } from 'react'
import '../CSS/GoalPanel.css'
import { useNavigate } from 'react-router-dom';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
            
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Goals Report',
        },
    },
};


const labels = [' Saving', 'Budgeting', 'Payement', 'Investing', 'Stock', 'Crypto'];

export default function GoalPanel_Main({checkingBalance, savingBalance}) {
    let navigate = useNavigate();
    const [accountBalance, setAccountBalance] = useState(checkingBalance)
    const [accountSaving, setAccountSaving] = useState(savingBalance)
    const [graphData, setGraphData] = useState(
        {
            labels,
            datasets: [
                {
                    label: 'Goals',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
                    borderColor: 'rgba(128, 0, 128)',
                    backgroundColor: 'rgba(128, 0, 128, 0.5)',
                },
                
            ],
        }


    )



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
    return (
        <div className='GPM_mainContainer'>
            <text>Create A Goal</text>
            <p>Create as many goals as you want. Trall all types of transactions such as saving, stocks, crypto, and payments</p>

            <div className='GPM_miniContainer'>
                <text>Bank Account</text>
                <label>Checking </label>
                <input disabled={true} value={formatMoney(accountBalance)} />
                <div style={{ marginBottom: 20 }} />
                <label>Saving </label>
                <input disabled={true} value={formatMoney(accountSaving)} />

                <div className='barGraph'>
                <Bar options={options} data={graphData} />

                </div>
            </div>
            <div style={{ marginBottom: 10 }} />

            <button className='createGoalBtn'  onClick={() =>{navigate('/CreateGoal')} } >Create New Goal</button>
        </div>
    )
}
