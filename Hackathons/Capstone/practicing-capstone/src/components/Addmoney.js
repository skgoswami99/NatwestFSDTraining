import React from "react";
import { MDBRadio } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

} from "mdb-react-ui-kit";
import { Box, Button, Modal, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

import { useFormik } from 'formik'
import * as yup from 'yup'
import { AccountBalanceWalletOutlined } from "@mui/icons-material";

function Addmoney() {

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

  const [modelopen, setModelOpen] = React.useState(false);
  const handleOpen = () => { spin() };
  const handleClose = () => setModelOpen(false);
  const [loading, setLoading] = React.useState(false);
  const [openspinner, setOpenspinner] = React.useState(false);

  const [balance, setBalance] = React.useState('');
  const [error, setError] = React.useState(false);
  const [msg, setMsg] = React.useState('');

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
      balance: ''
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values);
      fetch('http://localhost:8182/auth/addbal', {
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

        .required('Amount cannot be left blank')
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
              <Box sx={{ bgcolor: '#0f2862', px: 2, borderRadius: 1 }} className="fw-bold fs-2 mb-3 text-camelcase text-white">Add Money
                <AccountBalanceWalletOutlined fontSize="" color='warning' />
              </Box>

              <form onSubmit={formik.handleSubmit}>
                <MDBInput
                  wrapperClass=" w-100"
                  placeholder="Enter Amount*"
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

                {/* <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                placeholder="Enter Reference"
                id="formControlref"
                type="text"
                size="lg"
              /> */}
                <div className="fw-bolder">
                  <MDBRadio
                    id="flexRadioDefault1"
                    name="flexRadioDefault"
                    label="Use UPI Account xxxx 5234"
                    defaultChecked
                  />
                  <MDBRadio
                    id="flexRadioDefault2"
                    name="flexRadioDefault"
                    label="Use Debit Card xxxx  1756"
                  />
                  <MDBRadio
                    id="flexRadioDefault3"
                    name="flexRadioDefault"
                    label="Use Credit Card xxxx 8212"
                  />

                </div>



                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleOpen}
                    sx={{ m: 3, ml: 3, bgcolor: '#0f2862' }}
                  >
                    Confirm
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
                open={modelopen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  {(balance) ?
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Amount added Successfully !!
                    </Typography> : <h3> Ooops, Go Back to Add Money  </h3>}
                  <br></br>
                  {(balance) ? <h3>  New Balance: {balance} </h3> : null}
                  <br></br>
                  <Button href="/addmoney" sx={{ bgcolor: '#0f2862', p: 0 }}>
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


            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Addmoney;