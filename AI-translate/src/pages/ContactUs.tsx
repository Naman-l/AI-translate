import { Box, Typography, Button, TextField } from '@mui/material';
import Header from '../components/Header';
import { useState } from 'react';
import Paper from '@mui/material/Paper';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
  
    const handleSubmit = () => {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Query:', query);
    };

  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      height:'100%',
      minHeight:'100vh'
  }}>
    <Box
        sx={{
          position: 'fixed',
          top: 0,
          zIndex: -10,
          height: '100vh',
          width: '100vw',
        }}
    >
        <Box
            sx={{
              position: 'absolute',
              top: 0,
              zIndex: -2,
              height: '100vh',
              width: '100vw',
              backgroundColor: 'white',
              backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))',
            }}
            />
      </Box>
      <Header/>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          margin: '60px',
          height: '90vh' 
        }}
      >
        <Box
          sx={{
            maxWidth: '50%',
            marginY: '50px',

          }}
        >
          <Typography variant='h3'>Contact Us</Typography>
          <Typography variant='h6'>Thank you for your interest in reaching out to us. We value your feedback, inquiries, and suggestions. Please feel free to get in touch with us using the following form.</Typography>
        </Box>

        <Box
          sx={{
            minWidth: '200px',
            marginY: '50px',
            maxWidth: '400px',
          }}
        >
        <Paper elevation={24} sx={{ padding: '20px'}}>
            <Typography sx={{textAlign: 'center'}} variant="h5" gutterBottom>Get in Touch</Typography>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Query"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Paper>
        </Box>

      </Box>

  </Box>
  )
}

export default ContactUs
