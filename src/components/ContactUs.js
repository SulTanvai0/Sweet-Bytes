import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';



const ContactUs = () => {
    const handelSubmit = (event) =>{
        event.preventDefault()
    }
    
    
    return (
        <Box component="form" my={6} onSubmit={handelSubmit} >
            <Typography variant="h4" my={3}>Contact Us</Typography>
            <TextField label="First Name" type="text" variant="outlined" sx={{ width: "300px", m: 1 }} name="firstName" required  />
            <TextField label="Last Name" type="text" variant="outlined" sx={{ width: "300px", m: 1 }} name="lastName" required   />
            <TextField label="Phone Number" type="number" variant="outlined" sx={{ width: "300px", m: 1 }} name="phone" required  />
            <TextField label="Message" type="text" multiline rows={4} variant="outlined"
                fullWidth sx={{ m: 1 }} name="message"  />
            <Button size="large" variant="contained" type="submit" sx={{ m: 1 }}>Send</Button>
        </Box>
    );
};

export default ContactUs;