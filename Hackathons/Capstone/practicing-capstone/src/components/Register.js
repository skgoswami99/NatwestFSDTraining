import React from 'react';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from "react-router-dom";
import Regimg from './images/gif2.gif';
import './Register.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as Yup from 'yup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBCardImage,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Register() {

    const theme = createTheme();
    
        const navigate = useNavigate();
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

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

        const formik = useFormik({

            initialValues: {

                firstname: '',
                lastname: '',
                email: '',
                address: '',
                accountNumber: '',
                mobileNumber: '',
                password: '',
                confirmpassword: ''
            },

            onSubmit: values => {
                console.log(values)

                fetch(`http://localhost:8181/auth/register`, {

                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)

                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.status === 409) {
                            
                           alert("User Already Registered")                   
                            
                        } else {
                            
                            setOpen (true)
                            
                        }
                    })

            },

            validationSchema: Yup.object().shape({
                firstname: Yup.string()
                    .min(3, 'Must be greater than 3 characters')
                    .max(10, 'Cannot be more than 10 characters')
                    .required('First Name cannot be left blank'),

                lastname: Yup.string()
                    .min(3, 'Must be greater than 3 characters')
                    .max(10, 'Cannot be more than 10 characters')
                    .required('Last Name cannot be left blank'),

                email: Yup.string()
                    .email('Invalid email Address')
                    .required('Email cannot be left blank'),

                address: Yup.string()
                    .required('Address cannot be left blank'),

                accountNumber: Yup.string()
                    .min(6, 'Must be 6 Digits or more')
                    .required('Cannot be left blank'),

                mobileNumber: Yup.string()
                    .min(10, 'Mobile number must be of 10 Digits')
                    .max(10, 'Cannot be more than 10 Digits')
                    .required('Cannot be left blank ...'),

                password: Yup.string()
                    .min(6, 'Must be between 6-14 Digits')
                    .max(14, 'Cannot be more than 14 Digits')
                    .required('Cannot be left blank'),

                confirmpassword: yup.string()
                .required('Cannot be left blank')
                .oneOf([yup.ref("password"), null], "Passwords must match")
            })
        });

  return (
   
    <MDBContainer fluid className='px-5  background-radial-gradient overflow-hidden'>

      <MDBRow className='px-4'>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
        
        <img src={Regimg} class="d-block w-100" alt="..."/>         

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-4 p-1 text-center bg-glass'>
          <MDBIcon color='info' icon='wallet' className='me-3 fs-2' />
                            <Typography component="h1" variant="h5">
                                Register for Go-Pay
                            </Typography>
            <MDBCardBody  className=''>
              <form onSubmit={formik.handleSubmit}>                        
              <MDBRow >
                <MDBCol col='6'>
                  <MDBInput autoFocus placeholder='First Name*' id="firstname" type='text' onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  />
                   {formik.errors.firstname && formik.touched.firstname ?
                   <span className="text-danger m-0 p-0"> {formik.errors.firstname} </span> : null}
                <br></br>
                </MDBCol>
                

                <MDBCol col='6'>
                  <MDBInput placeholder='Last Name*' id="lastname" type='text' onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/>
                  {formik.errors.lastname && formik.touched.lastname ?
                   <span className="text-danger"> {formik.errors.lastname} </span> : null}
                <br></br>
                </MDBCol>
                
              </MDBRow>
              

              <MDBInput placeholder='Email*' id="email"  type='email' onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/>
                {formik.errors.email && formik.touched.email ?
                <span className="text-danger"> {formik.errors.email} </span> : null}
                <br></br>

              <MDBInput placeholder='Address*' id="address"  type='address'onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/>
                {formik.errors.address && formik.touched.address ?
                <span className="text-danger"> {formik.errors.address} </span> : null}
                <br></br>
              <MDBRow>
                    
              <MDBCol col='6'>
              <MDBInput placeholder='Create Account Number*' id="accountNumber" type='number' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
                  {formik.errors.accountNumber && formik.touched.accountNumber ?
                <span className="text-danger"> {formik.errors.accountNumber} </span> : null}
                <br></br>
              </MDBCol>

              <MDBCol col='6'>
              <MDBInput placeholder='Phone Number*' id="mobileNumber" type='number'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {formik.errors.mobileNumber && formik.touched.mobileNumber ?
                <span className="text-danger"> {formik.errors.mobileNumber} </span> : null}
                 <br></br>
              </MDBCol>
              </MDBRow>

              <MDBRow>
              <MDBCol col='6'>
              <MDBInput  placeholder='Password*' id="password"  type='password'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}/>
              {formik.errors.password && formik.touched.password ?
                <span className="text-danger"> {formik.errors.password} </span> : null}
                <br></br>
              </MDBCol>

              <MDBCol col='6'>
              <MDBInput placeholder='Confirm Password*' id='confirmpassword' type='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className="text-danger">{formik.errors.confirmpassword}</span> : null}
              </MDBCol>
              </MDBRow>

              <div className='d-flex justify-content-center mb-2'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe for promotional mails' />
              </div>
                                                <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        Registration Successful !! You can login now !
                                                    </Typography>

                                                    <Button onClick={() => { navigate("/login") }}>
                                                        <Typography sx={{ color: 'white', p: 1, border: '1px solid' }}>
                                                            go to login
                                                        </Typography>
                                                    </Button>

                                                </Box>
                                            </Modal>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{bgcolor: '#39a0ca', mb: 1, fontSize: 15 }}
                                >
                                    SIGN UP
                                </Button>

                                
                                </form>  
              <div className="text-center">

                <p>Or Sign up with :</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'Blue' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3'>
                <MDBIcon color='secondary' fab icon='instagram text-danger' />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#39a0ca' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'orange' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'black' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

                <div className="text-center text-dark"> 
                            Already Registered?
                            <Link className=" btn btn-primary m-1" style={{ backgroundColor:"#39a0ca" }} to="/login">Click Here to Login</Link>
                        </div>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;

