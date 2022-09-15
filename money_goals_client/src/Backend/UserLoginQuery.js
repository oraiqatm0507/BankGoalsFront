import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';






const GET_USER_INFO = gql`
  query MG_loginUser($value: G_UserInfo  ){
    MG_loginUser(userInfo: $value){
        id
        accBalance
    }
  }
`;
export default function UserLoginQuery({ userEmail, userPassword, cleanUpFunc }) {
    let navigate = useNavigate();
 

    const [userInfo, setUserInfo] = useState({ id: 0, email: userEmail, password: userPassword, accBalance:0 })
    const { loading, error, data } = useQuery(GET_USER_INFO, {  variables: { value: userInfo } });

    if (loading) console.log('loading....');


   
    cleanUpFunc();

    // console.log(data);
    return (
        <div></div>
    )
}
