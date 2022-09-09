import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GoalPopup from '../Components/GoalPopup';



export default function TempPage() {
    return (

        <Popup trigger={<button> Trigger</button>}
            modal
            nested
        >
            <GoalPopup/>

            
        </Popup>

    )
}
