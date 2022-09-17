import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GoalWidget from '../Components/GoalWidget';



export default function TempPage() {
    return (

        <Popup trigger={<button> GoalWidget</button>}
            modal
            nested
        >
            <GoalWidget/>

            
        </Popup>

    )
}