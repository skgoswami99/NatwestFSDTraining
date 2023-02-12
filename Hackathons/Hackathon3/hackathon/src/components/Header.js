// import Button from 'react-bootstrap/Button';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple, } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
// import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#401664',
    size: 'large',
    '&:hover': {
        backgroundColor: purple[400],
    },
}));


function Header() {


    const navigate = useNavigate();
    const [login, setLogin] = React.useState(false);
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#401664',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    React.useEffect(() => {

        const isAuthenticated =  localStorage.getItem('token');

        if (isAuthenticated === null)   {
            setLogin(false)
        }     
        else {
        setLogin(true)
        }

        // fetch('http://localhost:9000/auth/isAuthenticated', {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`
        //     }
        // }).then(res => res.json())
        //     .then(data => {
        //         if (data.isAuthenticated === true) {
        //             setLogin(true)
        //         }
        //     });
    })

    function logout() {
        
        localStorage.removeItem('token');
        handleClose();
        
    };

    function checkAuth(){
        const isAuthenticated =  localStorage.getItem('token');

               
                if (isAuthenticated !== null) {
                    navigate('/wallet')
                }
                else
                {navigate('/login')}
            
            
    }

    return (

        <header>
            <ul class="nav nav-tabs bg-dark">
                <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="#">Personal Customers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">Business Customers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="#">International accounts</a>
                </li>

            </ul>


            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand bg-dark text-light px-3 fs-4" href="/">Natwest</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <Stack spacing={2} direction="row">
                                <ColorButton href="/" variant="contained">Home</ColorButton>
                                <ColorButton  onClick={checkAuth} variant="contained">Wallet Services</ColorButton>

                                <li class="nav-item">
                                    <a class="nav-link active fs-5" href="#">AboutUs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active fs-5" href="#">ContactUs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active fs-5" href="#">Bank Accounts</a>
                                </li>

                            </Stack>
                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        Are you sure you want to logout ?
                                                    </Typography>

                                                    <Button href='/' onClick={logout}>
                                                        <Typography sx={{ color: 'white', p: 1, border: '1px solid' }}>
                                                            Yes
                                                        </Typography>
                                                    </Button>
                                                    <Button onClick={handleClose}>
                                                        <Typography sx={{ color: 'white', p: 1, border: '1px solid' }}>
                                                            No
                                                        </Typography>
                                                    </Button>
        
                                                </Box>
                                            </Modal>

                        </ul>
                        <div class="d-flex">

                            {(login)?
                                <ColorButton onClick={handleOpen}
                                variant="contained">Logout</ColorButton>
                                :
                                <Stack spacing={2} direction="row">
                                    <ColorButton href="/register" variant="contained">Register</ColorButton>
                                    <ColorButton href="/login" variant="contained">Login</ColorButton>
                                </Stack>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}
export default Header;
