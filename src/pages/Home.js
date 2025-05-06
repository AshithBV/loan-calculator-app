import React from "react";
import EMICalculator from '../components/EMICalculator';
import CurrencyConvertor from '../components/CurrencyConverter';
import ThemeToggle from '../components/ThemeToggle';
import { Link } from "react-router-dom";
import { Box, Button, Container,Stack,Typography } from "@mui/material";

const Home=()=>(
    <Container>
        <ThemeToggle/>
        <Box
         sx={{
         backgroundColor:"#1976d2",
         color:"#ffffff",
         padding:"16px",
         textAlign:"center",
         borderRadius:"4px",
         mt:2,
         mb:4,

         }}
         >
        <Typography variant="h4" gutterBottom>Loan EMI Caclulator</Typography>

        <Stack direction="row" spacing={3} justifyContent="flex-end">
            <Button component={Link}
                    to="/"
                    variant="text"
                    sx={{
                        color:"white",
                        '&:hover':{
                            backgroundColor:"rgba(255,255,255,0.2)"
                        }
                    }}
                    >
                Home

            </Button>
            <Button component={Link}
                    to="/about"
                    variant="text"
                    sx={{
                        color:"white",
                        '&:hover':{
                            backgroundColor:"rgba(255,255,255,0.2)"
                        }
                    }}
                    >
                About

            </Button>
            <Button component={Link}
                    to="/error"
                    variant="text"
                    sx={{
                        color:"white",
                        '&:hover':{
                            backgroundColor:"rgba(255,255,255,0.2)"
                        }
                    }}
                    >
                ErrorPage

            </Button>

        </Stack>
        
        </Box>
       
        <EMICalculator/>
        <CurrencyConvertor/>
    </Container>
);
export default Home;
