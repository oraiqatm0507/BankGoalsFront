import React, {useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_ACCOUNT = gql`
  query createAccount($value: G_UserInfo  ){
    MG_createAccount(userInfo: $value)
     
  }
`;

export default function CreateAccountQuery({userEmail, userPassword, accBalance}) {
    const [userInfo, setUserInfo] = useState({ id: 0, email: userEmail, password: userPassword, accBalance:accBalance })
    const { loading, error, data } = useQuery(CREATE_ACCOUNT, {  variables: { value: userInfo } });

    if (loading) console.log('loading....');

    console.log(data)
  return (
    <div></div>
  )
}
