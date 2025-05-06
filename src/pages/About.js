import React from "react";
import { Button, Typography ,Container} from "@mui/material";
import { Link } from "react-router-dom";

const About=()=>(
    <Container>
    <Typography textAlign="center">This app calculates EMI and converts currency</Typography>
    <Button 
    component={Link}
    to="/"
    variant="contained"
    color="primary"
    sx={{mt:2}}
     >Go to Home</Button>
     </Container>
);

export default About;
    
