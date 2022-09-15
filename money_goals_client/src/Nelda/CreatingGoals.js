import { Button, Card, CardContent, Checkbox, colors, TextField, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React, { useState } from "react";
import UseFrom from "./UseFrom";
import Goalscontainer from "./Goalscontainer";
import GoalType from "./GoalsType";
import ArrayLabelPayment from "./ArrayLabelPayment";

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import './Nelda.css'

const getFreshModelObject = () => ({
    name: '',
    goals: ''
})


const accountTypes = [{ key: 0, value: "Checking", label: "Checking" }, { key: 1, value: "Saving", label: "Saving" }]
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


export default function CreatingGoals() {
    let navigate = useNavigate();
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    


    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [goalName, setGoalName] = useState()
    const [durationStart, setDurationStart] = useState(new Date())
    const [durationEnd, setDurationEnd] = useState(new Date())
    const [goalTargetAmnt, setGoalTargetAmnt] = useState()
    const [oftenDuration, setOftenDuration] = useState(0)
    const [goalStartAmnt, setGoalStartAmnt] = useState()
    const [startInstallment, setStartInstallment] = useState()
    const [autoMaticFunds, setAutoMaticFunds] = useState(false)
    const [paymentStart, setPaymentStart] = useState(new Date())
    const [paymentEnd, setPaymentEnd] = useState()
    const [installmentAmount, setInstallmentAmount] = useState()
    const [accountType, setaccountType] = useState(0)

    function getHowOften(val){
        let option = recursionOptions.find(option => option.value === val);
        return option.label;
    }

    function submitToServer() {
        let packet = {
            id: "goal-1",
            name: (name + " " + lastName),
            goalMsg: "Make as much money as I can before the end of the year.",
            goalOwner: "1",
            startDate: durationStart,
            endDate: durationEnd,
            startingInstallment: startInstallment,
            currentBalance: 400000,
            goalBalance: goalTargetAmnt,
            reminderBuffer: getHowOften(oftenDuration),
            goalColor: "#FFFFF",
            estimatedDurationOfGoal: "3 months",
            preferredGoalDuration: "3 months",
            aquiredAmount:10000,
            goalType: "SAVING",
            accountType: "CHECKING",
            isCompleted: false,
            recipientId: "1",
        }

        //TODO: Fix the above and send to server.
        console.log("Hello world")
    }



    const {
        values,
        setvalues,
        errors,
        setErrors,
        handelInputchange
    } = UseFrom(getFreshModelObject);

    const add = e => {
        e.perventDefault();
        if (validate())
            console.log(add)

    }
    const validate = () => {
        let temp = {}
        temp.name = values != "" ? "" : "Please enter your Name."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }

    return (

        <Card className="mainCard" >
            <CardContent >
                <Typography variant="h3" sx={{
                    my: 4,
                    textAlign: "center"
                }}>
                    Create New Goal
                </Typography>
                <Box sx={{
                    '& .MuiTextField-root': {
                        m: '2% ',
                        width: '25%',
                        padding: '.4%',
                        marginRight: '15%'
                    }
                }}>

                    <form noValidate sx={{ textAlign: 'left' }} onSubmit={add}>
                        <h4
                            label="C"
                            sx={{
                                width: '100%',
                                m: '2px'
                            }}>What is your Goal?</h4>
                        <hr className="CreatinGoalsHR" />
                        <div>
                            <TextField
                                label="Name"
                                name="name"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                variant="outlined"
                                {...(errors.email && { error: true, helperText: errors.email })}
                                sx={{ background: 'rgb(245, 254, 253)' }} />
                            <TextField
                                label="Last Name"
                                name="name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                variant="outlined"
                                {...(errors.email && { error: true, helperText: errors.email })}
                                sx={{ background: 'rgb(245, 254, 253)' }} />
                            <TextField
                                label="Goal Name"
                                name="name"
                                value={goalName}
                                onChange={(e) => setGoalName(e.target.value)}
                                variant="outlined"
                                {...(errors.email && { error: true, helperText: errors.email })}
                                sx={{ background: 'rgb(245, 254, 253)' }} />
                            <GoalType setDurStart={setDurationStart} setDurEnd={setDurationEnd} setOftenValue={setOftenDuration} />
                        </div>
                        <TextField
                            label="Goals Target Amount:"
                            name="Name"
                            variant="outlined"
                            type={"number"}
                            value={goalTargetAmnt}
                            onChange={(e) => { setGoalTargetAmnt(e.target.value) }}
                            sx={{ background: 'rgb(245, 254, 253)' }} />
                        <TextField
                            label="Starting Istallment:"
                            name="Date"
                            type={"number"}
                            value={startInstallment}
                            onChange={(e) => setStartInstallment(e.target.value)}
                            variant="outlined"
                            sx={{ background: 'rgb(245, 254, 253)' }} />
                        <h4
                            label="C"
                            sx={{
                                width: '100%',
                                m: '0px'
                            }}>How would you like to satisfy your Goal?</h4>
                        <hr className="CreatinGoalsHR" />
                        <div>
                            <label>
                                Would you like to automatically allocate funds to this goal?
                            </label>
                            <Checkbox value={autoMaticFunds} onChange={(e) => { setAutoMaticFunds(e.target.value) }} />
                            <br />
                        </div>
                        <div>
                            <h4>
                                How often would you like payments to be made?
                            </h4>
                            <ul>
                                <li>
                                    <h5>
                                        <label> Start Date </label>
                                        <input type='date' value={paymentStart} onChange={(e) => { setPaymentStart(e.target.value) }} >
                                        </input>
                                        <br />
                                        <br />
                                        <label>
                                            <label>End Date </label>
                                            <input type='date' value={paymentEnd} onChange={(e) => { setPaymentEnd(e.target.value) }} >
                                            </input>
                                        </label>
                                    </h5>
                                </li>

                                <ArrayLabelPayment />
                            </ul>
                        </div>
                        <TextField
                            label="Installments Amount:"
                            name="Date"
                            variant="outlined"
                            type={"number"}
                            value={installmentAmount}
                            onChange={(e) => { setInstallmentAmount(e.target.value) }}

                        />
                        <div className="N_choseAccount">
                            <h5>Which Account would you like to use? </h5>
                            <select >
                                {accountTypes.map((option) => (
                                    <option key={option.key} value={option.value} onChange={(e) => { setaccountType(e.target.value) }}>{option.label}</option>
                                ))}
                            </select>

                        </div>
                        <Button
                            type="Submit"
                            variant="contained"
                            size="large"
                            onClick={() => submitToServer}
                            sx={{
                                width: '20%',
                                textAlign: "center",
                                m: '0 40% ', background: "rgba(1, 57, 106, 0.8)"
                            }}>Create Goal</Button>

                    </form>


                </Box>


            </CardContent>
        </Card>


    )
}


