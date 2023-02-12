import React, { Component } from "react";
import axios from "axios";

import './Converter.css';
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { SyncAltOutlined } from "@mui/icons-material";
import Sidebar from "./Sidebar";


class Converter extends Component {


    state = {
        result: null,
        fromCurrency: "",
        toCurrency: "",
        amount: 1000,
        currencies: [],
    };


    // Initializes the currencies with values from the api
    componentDidMount() {
        const headers = {
            // 'apikey': 'Edn9CkA9YLF7EEJDkJBRz7Okwxdyvn6R',
            'apikey': 'Edn9CkA9YLF7EEJDkJ///BRz7Okwxdyvn6R',
            // 'apikey': '1mtiYnxOjDzEVdkjegdODafnIZvnyCDT',
            };
        axios
        // https://api.apilayer.com/exchangerates_data/latest
            .get("https://api.apilayer.com/exchang////erates_data/latest", {headers})
            .then(response => {
                // Initialized with 'EUR' because the base currency is 'EUR'
                // and it is not included in the response
                const currencyAr = ["EUR"]
                for (const key in response.data.rates) {
                    currencyAr.push(key)
                }
                this.setState({ currencies: currencyAr.sort() })
            })
            .catch(err => {
                console.log("Ooops", err.message);
            });
    }

    // Event handler for the conversion
    convertHandler = () => {
        const headers = {
            // 'apikey': '1mtiYnxOjDzEVdkjegdODafnIZvnyCDT',
            'apikey': 'Edn9CkA9YLF7EEJDkJBR//z7Okwxdyvn6R',
            // 'apikey': 'Edn9CkA9YLF7EEJDkJBRz//7Okwxdyvn6R',
        };
        if (this.state.fromCurrency !== this.state.toCurrency) {
            axios
                // https://api.apilayer.com/exchangerates_data/convert?to=${this.state.toCurrency}&from=${this.state.fromCurrency}&amount=${this.state.amount}
                .get(`https://api.apilayer.com/exchan////gerates_data/convert?to=${this.state.toCurrency}&from=${this.state.fromCurrency}&amount=${this.state.amount}`, { headers })
                .then(response => {
                    const result = response.data.result;
                    this.setState({ result: result.toFixed(5) })
                    
                })
                .catch(err => {
                    console.log("Oppsie", err.message);
                });
        } else {
            this.setState({ result: "You cant convert the same currency!" })
        }
    };

    // Updates the states based on the dropdown that was changed
    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value })
        }
    }

    render() {
        
        return (

            <><Sidebar /><Box>

                <Grid className="BGconver" container component="main" sx={{
                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                    flexDirection: 'column',
                }}>

                    <Grid item sx={{ bgcolor: '#39a0ca', borderRadius: '2%', m: 2 }} xs={12} sm={6} md={4} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 1,
                                mx: 4,
                                p: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>

                            <h2>Currency <span role="img" aria-label="money">&#x1f4b5;</span> Converter</h2>

                            <TextField
                                size="small"
                                sx={{ bgcolor: 'white', outline: 'black', borderRadius: '2%', width: '75%', mb: 3 }}
                                name="amount"
                                type="text"
                                placeholder="Enter Amount"
                                onChange={event => this.setState({ amount: event.target.value })} />

                            <Box xs={12} sm={12} md={4} component="form" sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                mb: 2
                            }}>

                                <select className="selec"

                                    name="from"
                                    onChange={(event) => this.selectHandler(event)}
                                    value={this.state.fromCurrency}
                                >
                                    {this.state.currencies.map(cur => (
                                        <option key={cur}>{cur}</option>
                                    ))}
                                </select>
                                <SyncAltOutlined sx={{ mx: 3 }} fontSize="large" />
                                <select className="selec"
                                    name="to"
                                    onChange={(event) => this.selectHandler(event)}
                                    value={this.state.toCurrency}
                                >
                                    {this.state.currencies.map(cur => (
                                        <option key={cur}>{cur}</option>
                                    ))}
                                </select>

                            </Box>
                            <Button type="submit"

                                variant="contained"
                                sx={{ bgcolor: '#0f2862', mt: 1, mb: 2, fontSize: 15 }} onClick={this.convertHandler}>Convert</Button>
                        </Box>

                    </Grid>
                    <Grid
                        item sx={{ bgcolor: '#39a0ca', borderRadius: '2%', m: 2, px: 4.5 }} xs={12} sm={6} md={4} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 1,
                                mx: 4,
                                p: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>

                            <h4>Exchanged Value </h4>

                            {<h3 className="exchanged"> {this.state.toCurrency} - {this.state.result}
                            </h3>}


                            <Button sx={{ bgcolor: '#0f2862', ":hover": { backgroundColor: 'none', color: 'white' } }} variant="contained" href="/currencypay" size="large">Order</Button>


                        </Box>

                    </Grid>
                </Grid>
            </Box></>
          

        );
    }
}

export default Converter;