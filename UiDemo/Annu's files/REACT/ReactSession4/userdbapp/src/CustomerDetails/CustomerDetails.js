import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CustomerDetails() {

    const [customer, setCustomer] = useState([]);

    // making api call by adding API token as header provided by API provider
    useEffect(()=>{
        axios.get('https://dummyapi.io/data/v1/user?limit=30',{

            headers:{
            'app-id': '63649df559e4508bd6a0561a'
            }
        })
        .then(res=>{
            // Got the response from api call and extracting the data 
          setCustomer(res.data.data);
          console.log(res.data.data);
        }).catch((err) =>{
            console.log(err);
        })

      },[])


    return (
    
<div className="container mt-3">
        
        <div className="row">
            {
                customer.map(item =>

                    <div className="col-md-2 col-4 mb-3" key={item.id}>
                        <div className="card">

                            <img src={item.picture} className="card-img-top" alt=".."/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.title}  {item.firstName} {item.lastName}
                                </h5>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  
    )
}