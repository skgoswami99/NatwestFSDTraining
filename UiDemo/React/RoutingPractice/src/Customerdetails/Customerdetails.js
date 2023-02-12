import React from 'react'
// import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Customerdetails() {

    let {id} = useParams();

    const [customer, setCustomer] = React.useState([]);

    // making api call by adding API token as header provided by API provider
    // One api id is given in header to fetch the data from the given link.
    // to show the data on the webpage we used http://localhost:3000/customerdetails/60d0fe4f5311236168a109cd
    // this was just to show the data temporarily for example as we are currently passing the id via this code
    React.useEffect(()=>{
        axios.get(`https://dummyapi.io/data/v1/user/${id}`,{
            headers:{
            'app-id': '63649df559e4508bd6a0561a'
            }
        })
        .then(res=>{
            // Got the response from api call and extracting the data 
          setCustomer(res.data);
          console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
      },[])

    return (
    
// details mentioned below to show the data on webpage from the fetched data using ID
<div className="container mt-5">
        <div className="row">
            <div className="col-md-4">
                <img src={customer.picture} width="100%" alt=""/>
            </div>
            <div className="col-md-4">
                <h2>
                    {customer.firstName}    {customer.lastName}
                </h2>
                <p>
                    {customer.email}
                </p>
                <p>
                    {customer.gender}
                </p>
                <p>
                    {customer.phone}
                </p>
                <p>
                    {customer.registerDate}
                </p>
                <p>
                    {customer.location?.country}
                </p>
            </div>
        </div>
    </div>
    )
}
