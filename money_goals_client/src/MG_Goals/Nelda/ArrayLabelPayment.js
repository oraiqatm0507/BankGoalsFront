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
export default function arrayLabelPayment(props) {
   
return(
    <div className='mainContainerChildDivSelect'>
  
<select  className='mainContainerSelect'>
    {recursionOptions.map((option) => (
        <option key={option.key} value={option.value}>{option.label}</option>
        ))}
</select>
</div>

 )
}
