import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class Input extends React.Component{
    render(){
       return(
        <div className="Input-box">
            <h1 className="Box-heading">Plot</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
                >
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={10}
                defaultValue="Enter Plot Summary"
            />
            </Box>
        </div>
       )
    }
}
export default Input;