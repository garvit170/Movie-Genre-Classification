import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';


const api = axios.create({
    baseURL: "https://genre-backend.herokuapp.com",
});
const Boxes = () => {
        const [val, setVal] = useState();
        const [output, setOutput] = useState('');
        const createPlot = async () => {
            console.log(val);
            var dataa = new FormData();
            dataa.append("message", val);
            console.log("form-data", Object.fromEntries(dataa));
            try {
              let response = await api.post("/predict", dataa, {
                headers: { "Content-Type": "multipart/form-data" },
              });
              console.log(response.data);
              setOutput(response.data.toString());
            } catch (e) {
              console.log("error", e.config.data);
            }
            console.log("jai Mata di");
          };
          const handleAddPlot = (e) => {
            e.preventDefault();
            createPlot();
          };
          const handleClear = (e) => {
            e.preventDefault();
            setVal("");
          }
       return(
        <div className="Wrapper">
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
                rows={8}
                value={val}
                onChange={(e) => setVal(e.target.value)}
                inputProps={{ style: { fontFamily: 'nunito'}}}
                label="Plot Summary"
            />
            <div className="Button-row">
                <Button 
                    variant="contained" 
                    endIcon={<CheckIcon />}
                    sx={{ m: 0.5 }}
                    onClick={(e) => handleAddPlot(e)}
                    color='success'
                    >
                    Predict
                </Button>
                <Button 
                    variant="contained" 
                    endIcon={<DeleteIcon />}
                    sx={{ m: 0.5 }}
                    onClick={handleClear}
                    >
                    Clear
                </Button>
            </div>
            </Box>
            </div>
            <div className="Input-box">
            <h1 className="Box-heading">Genre</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                >
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={7}
                value={output}
                label="Predicted Genres"
                inputProps={
					{ readOnly: true, style: { fontSize: '25px'} }
                }
            />
            </Box>
        </div>
        </div>

       )
}
export default Boxes;