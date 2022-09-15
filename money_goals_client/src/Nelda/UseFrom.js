import { useState } from "react";

export default function UseFrom(getFreshModelObject){
    const [values,setvalues] =useState(getFreshModelObject());
    const[errors,setErrors] = useState({});

    const handelInputchange = e =>{
        const 
        { name, value} = e.target
        setvalues({
            ...values,[ name ]:value
        })
    }
    return {
        values,
        setvalues,
        errors,
        setErrors,
        handelInputchange
    }
}