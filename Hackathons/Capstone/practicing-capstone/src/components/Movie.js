import * as React from 'react';
import Box from '@mui/material/Box';

import { Nav } from 'react-bootstrap';
import { Container, Grid } from '@mui/material';
import img1 from "./images/mv1.jpg";
import img2 from "./images/3.webp";
import img3 from "./images/mv3.avif";
import img4 from "./images/mv4.avif";
import img5 from "./images/mv5.avif";
import img6 from "./images/mv6.avif";
import img7 from "./images/1.webp";
import img8 from "./images/mv7.avif";
import img9 from "./images/mv8.avif";
import img10 from "./images/mv10.avif";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import banner from './images/mvbanner.jpg'
import banner1 from './images/mvbanner1.jpg'

export default function Movie() {
    
    const navigate = useNavigate();

    React.useEffect(() => {

        const isAuthenticated =  localStorage.getItem('token');

        if (isAuthenticated === null)   {
            navigate("/Login")
        }     
        
    })

    return (

        <><Box sx={{backgroundColor: '#C4E6FA'}}>
           
           <Box class="mt-3 img-fluid max-width: 100%"
                component="img"
               
                alt="movie banner" src={banner}
            />

            <Nav className='container justify-content-center subnav mt-3' >
                <Nav.Item>
                    <Nav.Link className='text-white fs-5 nlink mx-3' eventKey="link-1" >Bollywood</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-3 fs-5 text-white mx-3 nlink' eventKey="link-2">Hollywood</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-3 fs-5 text-white mx-3 nlink' eventKey="link-3"> Regional</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-3 fs-5 text-white mx-3 nlink' eventKey="link-4">International</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='me-3 fs-5 text-white mx-3 nlink' eventKey="link-5x">More</Nav.Link>
                </Nav.Item>
            </Nav>

            
            <Container sx={{p:4}}>
                
            <Grid sx={{ justifyContent: 'center', mb: 5 }} container spacing={1} rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>

            <Grid item>
                        <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img1}
                                alt="movie image"
                            />
                           
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                    <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img2}
                                alt="movie image"
                            />
                            
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                    <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img3}
                                alt="movile image"
                            />
                           
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item>
                    <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img4}
                                alt="movie image"
                            />
                          
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item>
                    <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img5}
                                alt="movie image"
                            />
                           
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item>
                    <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img6}
                                alt="movie image"
                            />
                          
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item>
                    <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img7}
                                alt="movie image"
                            />
                         
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item>
                    <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img8}
                                alt="movie image"
                            />
                           
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item>
                    <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box',} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img9}
                                alt="movie image"
                            />
                           
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>



                    <Grid item>
                    <Card sx={{textAlign:'center', bgcolor: '#0f2862', maxWidth: 250, color:'white', ":hover":{transform: 'scale(1.07)', transition:'0.4s', color: '#ffee10', boxShadow: '5px 5px 10px #ffee10', boxSizing:'border-box'} }}>
                            <CardMedia
                                component="img"
                                height="300vh"
                                image={img10}
                                alt="movie image"
                            />
                           
                            <CardActions sx={{ justifyContent:'center' }}>
                                <Button sx={{ bgcolor: '#39a0ca', }} variant="contained" onClick={() => { navigate("/checkout") }} size="large">Book Now</Button>

                            </CardActions>
                        </Card>
                    </Grid>
                    
                </Grid>
                <Box class="img-fluid max-width: 100%"
                component="img"
               
                alt="movie offer" src={banner1}
            />
                </Container>
                </Box>
        </>
    );
}