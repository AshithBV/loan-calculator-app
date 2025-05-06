import React, { useEffect, useState } from "react";
import { TextField,Button,Typography, Box,Table,TableBody,TableContainer,TableHead,TableRow,TableCell,Paper,FormControl,InputLabel,Select,MenuItem} from "@mui/material";
import useEMICalculator from "../hooks/useEMICalculator";

const EMICalculator=()=>{
    const [amount,setAmount]=useState('');
    const [interest,setInterest]=useState('');
    const [term,setTerm]=useState('');
    const [emi,setEmi]=useState(null);
    const [schedule,setSchedule]=useState([]);
    const [rate,setRate]=useState(null);
    const [selectedCurrency,setSelectedCurrency]=useState('USD');

    const {calculateEMI}=useEMICalculator();


   
       useEffect(()=>{
           fetch('https://v6.exchangerate-api.com/v6/f1804f235fe6940785dff75d/latest/USD')
           .then(res=>res.json())
           .then(data=>setRate(data.conversion_rates));
   
       },[]);

       const handleCurrencyChange=(event)=>{
        setSelectedCurrency(event.target.value);

       };
       
    const handleCalculate=()=>{
        const result=calculateEMI(+amount,+interest,+term);
        console.log(result);
        setEmi(result.emi);
        setSchedule(result.schedule);
    };

    const handleReset=()=>{
        setAmount('');
        setInterest('');
        setTerm('');
        setEmi(null);
        setSchedule([]);

    };

    const convertCurrency=(value)=>{
        if(!rate||!rate[selectedCurrency]) return value;
        return (value*rate[selectedCurrency]).toFixed(2);
    }

    return (
        <>
        <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
            <Typography variant="h4" gutterBottom>Loan Calculator Dashboard</Typography>
            <Box display="flex" gap={3} mt={2}>
        <TextField label="Loan Amount" fullWidth value={amount} onChange={(e)=>setAmount(e.target.value)} />
        
        <TextField label="Interest Rate(%)" fullWidth value={interest}
         onChange={(e)=>setInterest(e.target.value)} />
        <TextField label="Loan Term(years)" fullWidth value={term} onChange={(e)=>setTerm(e.target.value)} />
        </Box>
        <FormControl fullWidth mt={3} sx={{ marginTop: 3 }}>
                    <InputLabel id="currency-select-label" style={{ marginTop: '16px' }}>Select Currency</InputLabel>
                    <Select
                        labelId="currency-select-label"
                        value={selectedCurrency}
                        label="Select Currency"
                        onChange={handleCurrencyChange}
                    >
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="INR">INR</MenuItem>
                        <MenuItem value="YEN">YEN</MenuItem>
                    </Select>
                </FormControl>
        <Box mt={3} display="flex" gap={2}>
            <Button variant="contained" onClick={handleCalculate}>Caculate EMI</Button>
            <Button variant="outlined" onClick={handleReset}>Reset</Button>
            </Box>
            {emi && (
                <Typography variant="h6">Monthly EMI:{convertCurrency(emi)}{selectedCurrency}</Typography>
            )}
            </Box>
            {schedule.length>0 && (
                <Box mt={5}>
                 <Typography variant="h6" gutterBottom>Amoritization schedule({selectedCurrency})</Typography>
                 <TableContainer component={Paper}>
                 <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Month</TableCell>
                            <TableCell>Principal</TableCell>
                            <TableCell>Interest</TableCell>
                            <TableCell>Remaining Balance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schedule.map((row)=>(
                          <TableRow key={row.month}>
                            <TableCell>{row.month}</TableCell>
                            <TableCell>{convertCurrency(row.principal)}</TableCell>
                            <TableCell>{convertCurrency(row.interest)}</TableCell>
                            <TableCell>{convertCurrency(row.balance)}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                 </Table>
                 </TableContainer>
                </Box>
            )}
        </>
    );
};

export default EMICalculator;