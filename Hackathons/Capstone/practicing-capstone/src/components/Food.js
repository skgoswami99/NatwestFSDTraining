import * as React from 'react';
import Box from '@mui/material/Box';

import foodbar from "./images/foodbar1.jpg";

import { Nav } from 'react-bootstrap';
import { Container, Grid } from '@mui/material';
import img1 from "./images/food1.jpg";
import img2 from "./images/food2.jpg";
import img3 from "./images/food3.jpg";
import img4 from "./images/f8.jpg";
import img5 from "./images/f6.jpg";
import img6 from "./images/f3.jpg";
import img7 from "./images/f4.jpg";
import img8 from "./images/f7.jpg";
import banner from "./images/banner2.jpg";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function Food() {

    const navigate = useNavigate();
  React.useEffect(() => {

    const isAuthenticated =  localStorage.getItem('token');

    if (isAuthenticated === null)   {
        navigate("/Login")
    }     
    
})
    return (

        
        
        <Box sx={{backgroundColor: 'rgb(196, 230, 250)'}}>
            <Box class="img-fluid"
                component="img"
                sx={{
                    height: 300, 
                    width: 1250,
                    maxHeight: { xs: 150, md: 250, lg: 280 },
                    maxWidth: { xs: 400, md: 1200, lg: 1350 },

                }}
                alt="The house of meals" src={foodbar}
            />

            

            <Nav className='container justify-content-center subnav mt-3' >
                <Nav.Item>
                    <Nav.Link className='text-white fs-5 nlink mx-2'>Indian</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-3 fs-5 text-white mx-2  nlink'>Continental </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-3 fs-5 text-white mx-2 nlink' eventKey="link-3">South Indian</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-3 fs-5 text-white mx-2 nlink' eventKey="link-4">Mughlai</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-3 fs-5 text-white mx-2 nlink' eventKey="link-5x">Chinese</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-3 fs-5 text-white mx-2 nlink' eventKey="link-6x">More</Nav.Link>
                </Nav.Item>
            </Nav>


            <Container sx={{ p: 4 }}>
                <Grid sx={{ justifyContent: 'center', mb: 5 }} container spacing={1} rowSpacing={5} columnSpacing={{ xs: 1, sm: 3, md: 5 }}>

                    <Grid item>
                        <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',}}}>
                            <CardMedia
                                component="img"
                                height="250vh"
                                image={img7}
                                alt="American Pizza"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                American Pizza
                                </Typography>
                                <Typography variant="body2 h6" color="white">
                                    Delicious Cheesy Pizza
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/foodpay") }} size="large">Order Meal</Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{textAlign:'center', bgcolor: '#0f2862', color:'white', maxWidth: 250, ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',}}}>
                            <CardMedia
                                component="img"
                                height="250vh"
                                image={img6}
                                alt="Italian Pasta"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Pasta Italiano
                                </Typography>
                                <Typography variant="body2 h6" color="white">
                                Italian Pasta
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/foodpay") }} size="large">Order Meal</Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid sx={{ alignContent: 'center' }} item>
                        <Card sx={{ textAlign:'center', bgcolor: '#0f2862',color:'white', maxWidth: 250, ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',}}}>
                            <CardMedia
                                component="img"
                                height="250vh"
                                image={img3}
                                alt="Chinese"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    China Town
                                </Typography>
                                <Typography variant="body2 h6" color="white">
                                    Chinese special
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/foodpay") }} size="large">Order Meal</Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{ textAlign:'center', bgcolor: '#0f2862', color:'white', maxWidth: 250, ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',}}}>
                            <CardMedia
                                component="img"
                                height="250vh"
                                image={img4}
                                alt="Thai Food"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Thailand Special
                                </Typography>
                                <Typography variant="body2 h6" color="white">
                                    Thai Dishes
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/foodpay") }} size="large">Order Meal</Button>

                            </CardActions>
                        </Card>
                    </Grid>

               

               

                    <Grid item>
                        <Card sx={{ textAlign:'center', bgcolor: '#0f2862', color:'white', maxWidth: 250, ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',}}}>
                            <CardMedia
                                component="img"
                                height="250vh"
                                image={img5}
                                alt="Mexican"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                Mexican
                                </Typography>
                                <Typography variant="body2 h6" color="white">
                                Try Mexican Food
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/foodpay") }} size="large">Order Meal</Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{ textAlign:'center', bgcolor: '#0f2862', color:'white', maxWidth: 250, ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',}}}>
                            <CardMedia
                                component="img"
                                height="250vh"
                                image={img8}
                                alt="Japanese Sushi"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Japanese special
                                </Typography>
                                <Typography variant="body2 h6" color="white">
                                Japanese Sushi
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/foodpay") }} size="large">Order Meal</Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{ textAlign:'center', bgcolor: '#0f2862', color:'white', maxWidth: 250, ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',}}}>
                            <CardMedia
                                component="img"
                                height="250vh"
                                image={img1}
                                alt="Burger"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Burger King Outlet
                                </Typography>
                                <Typography variant="body2 h6" color="white">
                                    Burgers & more
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/foodpay") }} size="large">Order Meal</Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{ textAlign:'center', bgcolor: '#0f2862', color:'white', maxWidth: 250, ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',}}}>
                            <CardMedia
                                component="img"
                                height="250vh"
                                image={img2}
                                alt="Indian Food"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Desi Treats
                                </Typography>
                                <Typography variant="body2 h6" color="white">
                                    Indian Dishes
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/foodpay") }} size="large">Order Meal</Button>

                            </CardActions>
                        </Card>
                    </Grid>
                    </Grid>

                    <Box class="img-fluid max-width: 100% max-height: 240"
                component="img"
               
                alt="The house of meals" src={banner}
            />
            </Container>
           
        </Box>
           

        
    );
}