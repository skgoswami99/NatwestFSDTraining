import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function EmployeeDetails() {
    
    const [contacts, setContacts] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3001/contacts')
            .then((res) => {
                setContacts(res.data);
            });
    }, [])

    // Add the data inside the database by taking it from user as user input
    const AddContact = () => {
        axios.post('http://localhost:3001/contacts', { fname, lname, city, email, phone })
            .then((res) => {
                setContacts([...contacts, res.data]);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        {/* Setting the first name at the time user enter the data in textfield
                        by using ochange event of input text field target will refer the input text field
                        where event will occur value will give the value of the target object which is 
                        input field */}
                        <input type="text" onChange={(e) => setFname(e.target.value)} 
                        className="form-control form-control-sm" placeholder="First Name" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setLname(e.target.value)} 
                        className="form-control form-control-sm" placeholder="Last Name" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setCity(e.target.value)} 
                        className="form-control form-control-sm" placeholder="City" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} 
                        className="form-control form-control-sm" placeholder="Email" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control form-control-sm" placeholder="Phone" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="mt-2">
                        <button className="btn btn-success" onClick={AddContact}>Submit</button>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                {
                    contacts.map(item => <div key={item.id} className="col-md-4 col-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.fname} {item.lname}</h5>
                                <p className="card-text">{item.city}</p>
                                <p className="card-text">{item.email}</p>
                                <p className="card-text">{item.phone}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
