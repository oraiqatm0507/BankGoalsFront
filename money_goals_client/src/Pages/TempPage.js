import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GoalPopup from '../Components/GoalPopup';
import { useQuery, gql } from '@apollo/client';


let pdata = {ownerId: "091823812-1298312" }

const GET_GOALS_BY_OWNER = gql`
  query MG_getGoalsByOwner($value: String  ){
    MG_getGoalsByOwner(ownerId: $value){
        name
    }
  }
`;


export default function TempPage() {
    const { loading, error, data } = useQuery(GET_GOALS_BY_OWNER, {"no-cors": true, variables:{ value: "091823812-1298312" } }) ;

    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error : {error.message}</p>;
   
    console.log(data);
    return (

        <Popup trigger={<button> Trigger</button>}
            modal
            nested
        >
            <GoalPopup/>
        </Popup>

    )
}

