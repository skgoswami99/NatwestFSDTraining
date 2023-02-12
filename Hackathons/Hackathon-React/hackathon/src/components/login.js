import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik'
import * as yup from 'yup'
// import { width } from '@mui/system';

import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Natwest
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {
    const navigate = useNavigate();
      
    const [error, setError] = React.useState(false);
    const [msg, setMsg] = React.useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            fetch(`http://localhost:8181/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.msg === "Logged in Successfully") {
                        localStorage.setItem('token', data.access_token);
                        
                        setError(false);
                        navigate('/')
                    } else {
                        setError(true);
                        setMsg(data.message);
                    }
         
                })
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .email("Email address incorrect")
                .required('Email cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')
        }),
    });

    return (
        <Box >
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{bgcolor: 'peachpuff', alignItems: 'center', justifyContent: 'center', height: '100vh', }}>
                    <CssBaseline />
                    
                    <Grid 
                              item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 4,
                                mx: 8,
                                p:1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: '#401664' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                                {error ? <Alert severity="error">{msg}</Alert> : null}
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{bgcolor: '#401664', mt: 3, mb: 2, fontSize: 15 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    
                                    <Grid item>
                                        <Link href="/register" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Box>
    );
}