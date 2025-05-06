import React, { useState } from "react";
import { TextField,Button,Typography, Box } from "@mui/material";
import useEMICalculator from "../hooks/useEMICalculator";

const EMICalculator=()=>{
    const [amount,setAmount]=useState('');
    const [interest,setInterest]=useState('');
    const [term,setTerm]=useState('');
    const [emi,setEmi]=useState(null);

    const {calculateEMI}=useEMICalculator();

    const handleCalculate=()=>{
        const result=calculateEMI(+amount,+interest,+term);
        setEmi(result);
    };

    return (
        <>
        <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
            <Typography variant="h4" gutterBottom>Loan Calculator Dashboard</Typography>
            <Box display="flex" gap={3} mt={2}>
        <TextField label="Loan Amount" fullWidth onChange={(e)=>setAmount(e.target.value)} />
        
        <TextField label="Interest Rate(%)" fullWidth onChange={(e)=>setInterest(e.target.value)} />
        <TextField label="Loan Term(years)" fullWidth onChange={(e)=>setTerm(e.target.value)} />
        </Box>
        <Box mt={3}>
            <Button variant="contained" onClick={handleCalculate}>Caclulate EMI</Button>
            </Box>
            {emi && <Typography variant="h6">Your EMI is {emi}</Typography>}
            </Box>
        </>
    );
};

export default EMICalculator;