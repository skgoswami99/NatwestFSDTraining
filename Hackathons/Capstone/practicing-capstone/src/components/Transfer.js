import React from "react";
import { MDBRadio } from "mdb-react-ui-kit";
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Box, Button, Modal, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import logo from './images/Logo.png';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { AccountBalanceOutlined, InsertEmoticon } from "@mui/icons-material";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Transfer() {

  const navigate = useNavigate();
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => { spin() };
  const handleClose = () => setOpen(false);
  const [balance, setBalance] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [openspinner, setOpenspinner] = React.useState(false);

  function spin() {
    setLoading(true)
    setOpenspinner(true)
    setTimeout(() => {
      setLoading(false)
      setOpenspinner(false)
      setOpen(true)
    }, 1000)
  }

  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem('email'),
      balance: '',
      payeeEmail: ''


    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      fetch('http://localhost:8182/auth/transfer', {
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
      payeeEmail: yup.string()
        .email('Must be a valid email')
        .required('Registered Email is Mandatory')
    }),
  });


  return (

    <MDBContainer fluid style={{ backgroundColor: "rgb(196, 230, 250)" }}>
      <Sidebar />
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className=" text-dark my-4 mx-auto"
            style={{
              borderRadius: "1rem",
              maxWidth: "400px",
              backgroundColor: "#39a0ca",
            }}
          >
            <MDBCardBody className="p-4 px-5 d-flex flex-column align-items-center mx-auto w-100" >
              <Box sx={{ bgcolor: '#0f2862', px: 2, borderRadius: 1 }} className="fw-bold fs-2 mb-3 text-camelcase text-white"><AccountBalanceOutlined fontSize="" color='warning' /> Transfers <AccountBalanceOutlined fontSize="" color='warning' />
              </Box>

              <form onSubmit={formik.handleSubmit}>
                <MDBInput
                  wrapperClass="w-100 mb-0"
                  autoFocus
                  placeholder="Payee's Regd Email*"
                  id="payeeEmail"
                  name="payeeEmail"
                  type="text"
                  size="lg"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.errors.payeeEmail && formik.touched.payeeEmail ? <span className="text-danger fw-bolder">{formik.errors.payeeEmail} </span> : null}
                <br></br>
                <MDBInput
                  wrapperClass=" w-100"
                  placeholder="Enter Amount to Transfer*"
                  id="balance"
                  name="balance"
                  type="text"
                  size="lg"
                  value={formik.values.balance}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.errors.balance && formik.touched.balance ? <span className="text-danger fw-bolder">{formik.errors.balance} </span> : null}
                <br></br>


                <Box sx={{ display: 'flex', flexDirection: 'row', color: '#0f2862', justifyContent: 'space-evenly', alignItems: 'center' }}>
                  <MDBRadio
                    id="flexRadioDefault1"
                    name="flexRadioDefault"
                    defaultChecked
                  />
                  <h5 className="fw-bolder">Pay with </h5>
                  <img class="rechargeImg" src={logo} ></img>

                </Box>



                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleOpen}
                    sx={{ m: 3, ml: 3, bgcolor: '#0f2862' }}
                  >
                    Pay Now
                  </Button>

                  <Button href='/'
                    variant="contained"
                    sx={{ m: 3, ml: 3, bgcolor: '#0f2862', ":hover": { color: 'white' } }}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  {(balance) ?
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Transfer to Payee is Successful <InsertEmoticon fontSize="" />
                    </Typography>
                    : <h3> Oops, Go Back to Make the Payment. </h3>}
                  <br></br>
                  {(balance) ? <h3> Wallet Balance Left: {balance} </h3> : null}
                  <br></br>
                  <Button href="/transfer" sx={{ bgcolor: '#0f2862', p: 0 }}>
                    <Typography sx={{ color: 'white', p: 1, border: '1px solid' }}>
                      Close & Go Back
                    </Typography>
                  </Button>
                </Box>
              </Modal>

              {loading ? <Backdrop
                open={openspinner}
              >
                <CircularProgress color="warning" />
              </Backdrop> : null}

              {(balance) ? <h4 className="exchanged">  Updated Balance : {balance} </h4> : null};
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Transfer;