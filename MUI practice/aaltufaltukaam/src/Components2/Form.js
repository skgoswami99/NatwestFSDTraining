import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import image1 from "../images/permier3.jpg";
import Autocomplete from '@mui/material/Autocomplete';

export default function FormPropsTextFields() {

    const top100Films = [
        { label: 'Credit Card' },
        { label: 'Debit Card' },
        { label: 'Wallet' }
    ]

    return (
        <>
            <Box
                component="img"
                sx={{
                    height: 350,
                    width: 1300,
                    maxHeight: { xs: 233, md: 200, lg: 350 },
                    maxWidth: { xs: 350, md: 800, lg: 1300 },
                }}
                alt="The house from the offer."
                src={image1}
            />
            <Box>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 225, ml: 3 }}
                    renderInput={(params) => <TextField {...params} label="Payment Options" />}
                />
            </Box>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }, p: 2
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        fullname
                        id="outlined-Full Name"
                        label="Full Name"
                        defaultValue=""
                    />
                    <TextField
                        cardnumber
                        id="outlined-Card Number"
                        label="Card Number"
                        defaultValue=""
                    />
                    <TextField
                        id="outlined-expiry-input"
                        label="CVV"
                        type="CVV"
                        autoComplete=""
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search" />
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
                </div>

                <Stack spacing={2} direction="row">
                    <Button sx={{ ml: 1 }} variant="contained">Submit</Button>
                </Stack>
            </Box>
        </>
    );
}