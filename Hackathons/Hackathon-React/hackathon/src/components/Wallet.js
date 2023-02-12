import * as React from 'react';
import Box from '@mui/material/Box';

import pymntimg from "./images/pymntimg.jpg";

import { Nav } from 'react-bootstrap';
import { Container, Grid } from '@mui/material';
import img1 from "./images/1.webp";
import img2 from "./images/2.webp";
import img3 from "./images/3.webp";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function Wallet() {
    
    const navigate = useNavigate();

    React.useEffect(() => {

        const isAuthenticated =  localStorage.getItem('token');

        if (isAuthenticated === null)   {
            navigate("/Login")
        }     
        
    })

    return (

        <>
            <Box
                component="img"
                sx={{
                    height: 400,
                    width: 1350,
                    maxHeight: { xs: 150, md: 400, lg: 350 },
                    maxWidth: { xs: 400, md: 1200, lg: 1350 },

                }}
                alt="The house of payments."
                src={pymntimg}
            />


            <Nav className='container justify-content-center subnav mt-3' variant="pills" defaultActiveKey="">
                <Nav.Item>
                    <Nav.Link className='active text-white fs-5 nlink mx-2' eventKey="link-1" href="/wallet">Movies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-2 fs-5 text-white mx-2  nlink' href="/food" eventKey="link-2">Food & Beverages </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-2 fs-5 text-white mx-2 nlink' eventKey="link-3">Medicines</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-2 fs-5 text-white mx-2 nlink' eventKey="link-4">Shopping</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-2 fs-5 text-white mx-2 nlink' eventKey="link-5x">Recharge</Nav.Link>
                </Nav.Item>
            </Nav>

            
            <Container sx={{p:4}}>
            <Grid sx={{justifyContent:'center'}} container spacing={3} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>

                    <Grid item>
                        <Card sx={{bgcolor: 'peachpuff', maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="450vh"
                                image={img1}
                                alt="Avatar"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Avatar
                                </Typography>
                                <Typography variant="body2 h6" color="text.secondary">
                                    English Movie
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{bgcolor: '#401664'}} variant="contained" onClick={() => { navigate("/Checkout") }}size="large">Book Now</Button>
                                
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{bgcolor: 'peachpuff', maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="450vh"
                                image={img2}
                                alt="Drishyam 2"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Drishyam 2
                                </Typography>
                                <Typography variant="body2 h6" color="text.secondary">
                                    Hindi Movie
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{bgcolor: '#401664'}} variant="contained" onClick={() => { navigate("/Checkout") }}size="large">Book Now</Button>
                                
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid sx={{alignContent:'center'}}item>
                        <Card sx={{ bgcolor: 'peachpuff', maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="450vh"
                                image={img3}
                                alt="Wakanda Forever"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Wakanda Forever
                                </Typography>
                                <Typography variant="body2 h6" color="text.secondary">
                                    English Movie
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{bgcolor: '#401664'}} variant="contained" onClick={() => { navigate("/Checkout") }} size="large">Book Now</Button>
                                
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
                </Container>
                
        </>
    );
}