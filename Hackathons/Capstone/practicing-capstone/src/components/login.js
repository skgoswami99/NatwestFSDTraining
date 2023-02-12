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
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik'
import * as yup from 'yup'
// import { width } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                GoPay-Wallet
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
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                        localStorage.setItem('email', data.email);
                        
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
                <Grid className='BGLogin' container component="main" sx={{alignItems: 'center', justifyContent: 'center',}}>
                    <CssBaseline />
            
                    
                    <Grid 
                              item sx={{borderRadius: '10%', m:2}} xs={12} sm={6} md={4} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 1,
                                mx: 4,
                                p:1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                     
                            }}
                            
                        >
                            <Avatar sx={{ m: 1, bgcolor: '#39a0ca'}}>
                                <AccountBalanceWalletTwoToneIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign In to Wallet
                            </Typography>
                            <Box xs={12} sm={6} md={4}  component="form" noValidate onSubmit={formik.handleSubmit} sx={{width: 340}}>
                           
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
                                    >
                                        
                                    </TextField>
                                    
                                
                                {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email} </span> : null}
                                
                                <FormControl sx={{mt: 1, width: 340 }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                                            <OutlinedInput
                                                id="password"
                                                name='password'
                                                type={showPassword ? 'text' : 'password'}                             
                                            
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                        
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                            sx={{color: '#39a0ca'}}
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                        
                                    
                                
                                
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
                                    sx={{bgcolor: '#39a0ca', mt: 1, mb: 2, fontSize: 15 }}
                                >
                                    Sign In
                                </Button>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{bgcolor: '#dd4b39', mt: 1, mb: 1, fontSize: 15 }}
                                >
                                    <MailOutlineTwoToneIcon></MailOutlineTwoToneIcon>
                                    Sign in with Google
                                </Button>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{bgcolor: '#3b5998', mt: 0, mb: 2, fontSize: 15 }}
                                >
                                    <FacebookIcon></FacebookIcon>
                                    Continue with facebook
                                </Button>
                                <Grid container>
                                    
                                    <Grid item>
                                        <Link sx={{fontSize: 17, color: 'black' }} href="/register" variant="body2">
                                            {"Don't have an account? Sign Up Here"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 3 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Box>
    );
}