import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import logo from './images/Logo.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useFormik } from 'formik'
import * as yup from 'yup'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Foodpayment() {
  const navigate = useNavigate();
  const [modelopen, setModelOpen] = React.useState(false);
  const handleOpen = () => {spin()};
  const handleClose = () => setModelOpen(false);

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

  const [balance, setBalance] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [openspinner, setOpenspinner] = React.useState(false);

  function spin() {
    setLoading(true)
    setOpenspinner(true)
    setTimeout(() => {
        setLoading(false)
        setOpenspinner(false)
        setModelOpen(true)
    }, 1000)
  }

  const formik = useFormik({
    initialValues: {
        email: localStorage.getItem('email'),
        balance: '',

    },
    onSubmit: (values, {resetForm}) => {
      // console.log(values);
        fetch('http://localhost:8182/auth/debitbal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            
            .then(data => {
                            setBalance(data.balance);
                            resetForm();
  
            })
    },
    validationSchema: yup.object().shape({
        balance: yup.string()
            .required('Amount cannot be left blank'),
           
    }),
  });

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
      <form onSubmit={formik.handleSubmit}> 
        <React.Fragment>
        
          <Typography variant="h6" gutterBottom>
            Enter your personal and payment details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                
                id="name"
                label="Your full name"
                fullWidth
                autoComplete="name"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                
                id="address"
                label="delivery address"
                fullWidth
                autoComplete="address"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                
                id="balance"
                name='balance'
                label="Enter Amount*"
                fullWidth
                autoComplete="balance"
                variant="standard" 
                onBlur= {formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.balance && formik.touched.balance ? <span className="text-danger fw-bolder">{formik.errors.balance} </span> : null}
              <br></br>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                
                id="paycurrency"
                label="Payment currency -INR"
                fullWidth
                autoComplete="paycurrency"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard" />
            </Grid>
            <Modal
              open={modelopen}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                
              {(balance)?
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Payment Successful !! Thanks for your order !
                  <br></br>
                  Your ordered food will be delivered to your location within 40 minutes.
                </Typography>
                
                :
                <h3> Oops, Go Back to Make the Payment. </h3> }
                <br></br>
                {(balance)? <h3> Wallet Balance Left: {balance} </h3>: null}
                <br></br>
                <Button sx={{ bgcolor: '#0f2862', p: 0 }} onClick={() => { navigate("/food"); } }>
                  <Typography sx={{ color: 'white', p: 1, border: '1px solid' }}>
                    Close & Go Back
                  </Typography>
                </Button>

              </Box>
            </Modal>

            <Button
              variant="contained"
              onClick={handleOpen}
              type="submit"
              sx={{ m: 3, ml: 3, bgcolor: '#0f2862' }}
              
            >
              Pay Now  
            </Button> 
            <img class="logo" src={logo} ></img>

            {loading ? <Backdrop
                            open={openspinner}
                        >
                            <CircularProgress color="warning" />
                        </Backdrop> : null}
           

          </Grid>
        </React.Fragment>
       
        </form> 
      </Paper>
    
    </Box>
    
    </>
  );
}