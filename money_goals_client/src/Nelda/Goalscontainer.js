import { TextField } from '@mui/material';
import React from 'react';
import { Box, width } from "@mui/system";



const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});



export default function Goalscontainer(props) {

    return (
       

        <div  className=" goalsdivPartent">
           
            <div classNme='goalsdivChild'>

            {/* <TextField className="goalsFrom"
            label="Goals"
            title="Name of Goal"
            input ="What's your goals"
            variant="outlined"
            fullWidth
            />
             */}
            
            </div >

        </div>

               
            

    )
}