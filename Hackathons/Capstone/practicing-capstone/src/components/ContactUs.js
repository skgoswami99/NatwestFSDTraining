import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SimpleAccordion from './Accordian';
import contact from './images/c1.jpg';



const cards = [1];

const theme = createTheme();

export default function ContactUs() {



    return (
        <Box sx={{ backgroundColor: 'rgb(196, 230, 250)' }}>
            <ThemeProvider theme={theme} >
                <CssBaseline />
                <div className="container user-contactus">
                    <main>
                        {/* Hero unit */}
                        <Box
                            sx={{
                                bgcolor: 'rgb(196, 230, 250)',
                                pt: 8,
                                pb: 6,
                            }}
                        >
                            <Container maxWidth="md">
                                <Typography
                                    component="h1"
                                    variant="h2"
                                    align="center"
                                    color="#0f2862"
                                    gutterBottom
                                >
                                    We're Happy to Help!
                                </Typography>
                                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                    We’re always there to help our customers – get in touch with us using the contact details below
                                </Typography>

                                <div className="container">
                                    <SimpleAccordion />
                                </div>

                                <Stack
                                    sx={{ pt: 4 }}
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >

                                </Stack>
                            </Container>
                        </Box>
                        <Container sx={{ py: 8 }} maxWidth="lg">
                            {/* End hero unit */}

                            <Grid container spacing={4}>
                                {cards.map((card) => (
                                    <Grid item key={card} xs={12} sm={12} md={12}>
                                        <Card
                                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(196, 230, 250)' }}
                                        >
                                            <CardMedia
                                                component="img"
                                                sx={{

                                                    height: '60vh'
                                                }}
                                                image={contact}
                                                alt="random"
                                            />
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                                    GoPay General Enquiries

                                                </Typography>
                                                <Typography style={{ textAlign: 'center' }}>
                                                    For general enquiries please try our contact us page or call us on one of the numbers below.
                                                </Typography>
                                                <Typography style={{ textAlign: 'center' }}>
                                                    Customer care - Call us on: +91 234 567 88. Overseas: 0345 030 3605.
                                                </Typography>
                                                <Typography style={{ textAlign: 'center' }}>
                                                    You can also write to us at 123 churchgate, Delhi, 110011.
                                                </Typography>
                                            </CardContent>

                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </main>
                </div>


            </ThemeProvider>
        </Box>
    );
}