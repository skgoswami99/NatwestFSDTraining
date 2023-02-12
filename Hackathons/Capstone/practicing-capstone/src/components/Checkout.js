import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import logo from './images/Logo.png';
import { useNavigate } from 'react-router-dom';

function Copyright() {
  const navigate = useNavigate();
  React.useEffect(() => {

    const isAuthenticated =  localStorage.getItem('token');

    if (isAuthenticated === null)   {
        navigate("/Login")
    }     
    
})

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        GoPay@payments
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Personal Details', 'Payment details', 'Review your Booking'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
    const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box  sx={{bgcolor: '#C4E6FA'}} >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        
      </AppBar>
      <Container component="main" maxWidth="sm" >
        <Paper variant="outlined" sx={{ bgcolor: 'white' , my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography sx={{ p:2 , bgcolor: '#0f2862', color: 'white'}}component="h5" variant="h5" align="center">
            Payment For your Movie
          </Typography>
          <Stepper activeStep={activeStep} sx={{pt: 3, pb: 2 }}>
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your booking with us.
              </Typography>
              <Typography variant="subtitle1">
                Your booking number is #2001539. We have emailed your booking
                details. !! Enjoy your Movie !!
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                  variant="contained" onClick={() => { navigate("/movie") }}
                   sx={{mt: 3, ml: 1, p:1, bgcolor: '#0f2862' }}
                
                >Go to movies</Button>
                </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <img class="logo" src={logo} ></img>
                {activeStep !== 0 && (
                  <Button size="large" onClick={handleBack} sx={{color: '#0f2862', mt: 2, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 2, ml: 1, bgcolor: '#0f2862' }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
             
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
    </Box>
  );
}