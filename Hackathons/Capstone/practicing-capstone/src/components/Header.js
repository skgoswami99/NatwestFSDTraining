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
import logo from './images/Logo.png';
import Avatar from '@mui/material/Avatar';
import { Popover, Select } from '@mui/material';
import { CurrencyRupeeSharp } from '@mui/icons-material';

const ColorButton = styled(Button)(({ theme }) => ({

    backgroundColor: '#39a0ca',
    size: 'large',
    '&:hover': {
        backgroundColor: '#0f2862', color: 'white'
    },
}));


function Header() {

    const navigate = useNavigate();
    const [login, setLogin] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [balance, setBalance] = React.useState();
    const [openpop, setOpenpop] = React.useState(false);
    const handleOpenpopover = () => setOpenpop(true);
    const handleClosepopover = () => setOpenpop(false);

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

    React.useEffect(() => {

        const isAuthenticated = localStorage.getItem('token');

        if (isAuthenticated === null) {
            setLogin(false)
        }
        else {
            setLogin(true)
        }

    })

    React.useEffect (() => {
      
        fetch(`http://localhost:8182/auth/balance/${localStorage.getItem('email')}`, {
            
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())

            .then(data => {
                // console.log(data);
                setBalance(data);

            })
    },[])


    function logout() {

        localStorage.removeItem('token');
        localStorage.removeItem('email');
        handleClose();

    };

    // function checkAuth(){
    //     const isAuthenticated =  localStorage.getItem('token');
    //             if (isAuthenticated !== null) {
    //                 navigate('/wallet')
    //             }
    //             else
    //             {navigate('/login')} 
    // }

    return (

        <header>


            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img class="logo" src={logo} href='/'></img>
                    {/* <a class="navbar-brand bg-dark text-light px-3 fs-4" href="/">Natwest</a> */}
                    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <Stack spacing={3} direction="row">
                                <ColorButton href="/" variant="contained">Home</ColorButton>

                                <ColorButton href="/contactus" variant="contained">Contact Us</ColorButton>
                                <ColorButton href="https://www.gopay.com/en/about-us" variant="contained">About Us</ColorButton>


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

                            {(login) ?
                                <Stack spacing={2} direction="row">

                                    <Avatar onClick={handleOpenpopover} alt="Sandy" sx={{ bgcolor: 'orange' }} />

                                    <Popover open={openpop}
                                        onClose={handleClosepopover}
                                        anchorReference="anchorPosition"
                                        anchorPosition={{ top: 60, left: 850 }}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}

                                    >
                                        <Typography sx={{ color: 'orange', px:1 }} >Wallet Balance:<CurrencyRupeeSharp fontSize='small' />{balance}</Typography>
                                    </Popover>


                                    <Button sx={{ color: 'white' }}>Hello, {localStorage.getItem('email')}</Button>

                                    <ColorButton onClick={handleOpen}
                                        variant="contained">Logout</ColorButton>

                                </Stack>
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
