import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Currencypymnt() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {

    const isAuthenticated =  localStorage.getItem('token');

    if (isAuthenticated === null)   {
        navigate("/Login")
    }     
    
})
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#39a0ca',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (

    <><Sidebar />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', p: 2, textAlign: 'center', bgcolor: '#C4E6FA', flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1, p: 4,
          width: 700,
          height: 500,
        },
      }}
    >

      <Paper elevation={10}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Enter your personal and payment details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="name"
                label="Your full name"
                fullWidth
                autoComplete="name"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="address"
                label="delivery address"
                fullWidth
                autoComplete="address"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                select
                id="currency"
                label="Your home currency"
                fullWidth
                autoComplete="currrency"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                select
                id="paycurrency"
                label="Choose payment currency"
                fullWidth
                autoComplete="paycurrency"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard" />
            </Grid>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Payment Successful !! Thanks for your order !
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Your Currency Order will be processed and delivered within 2-3 working days !!
                </Typography>
                <Button sx={{ bgcolor: '#0f2862', p: 0 }} onClick={() => { navigate("/converter"); } }>
                  <Typography sx={{ color: 'white', p: 1, border: '1px solid' }}>
                    Close & Go Back
                  </Typography>
                </Button>

              </Box>
            </Modal>

            <Button
              variant="contained"
              onClick={handleOpen}

              sx={{ m: 3, ml: 3, bgcolor: '#0f2862' }}
            >
              Pay Now
            </Button>

          </Grid>
        </React.Fragment>
      </Paper>
    </Box></>
  );
}