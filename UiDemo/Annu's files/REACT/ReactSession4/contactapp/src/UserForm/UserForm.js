import React from 'react'
import { useState } from 'react';

import {v4 as uuidv4} from 'uuid'
import Contact from '../Contact/Contact';

export default function UserForm() {
 
    const [contacts, setContacts] = useState([]);

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
 
    const AddUserdetails = ()=>{

        setContacts([...contacts, {id:uuidv4(), fname,lname,email,phone} ])

    }

    console.log(contacts);
 

    return (


    <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="bg-dark text-light text-center rounded py-3">
                    <h2>
                        Contact Form
                    </h2>
                </div>
            </div>
        </div>

    <div className="row">
    <div className="col-md-4 offset-md-4">
        <div className="mt-2">
            <input type="text" onChange={(e) => setFname(e.target.value)} className="form-control form-control-md" placeholder="First Name"/>
        </div>

        <div className="mt-2">
            <input type="text" onChange={(e) => setLname(e.target.value)} className="form-control form-control-md" placeholder="Last Name"/>
        </div>

        <div className="mt-2">
            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control form-control-md" placeholder="Email"/>
        </div>

        <div className="mt-2">
            <input type="text"  onChange={(e) => setPhone(e.target.value)} className="form-control form-control-md" placeholder="Phone No"/>
        </div>

        <div className="mt-2 text-center">
            <button className="btn btn-success" onClick={AddUserdetails}>
                Submit
            </button>
        </div>    
    </div>

        <br></br>
        <hr></hr>


        <div className="row mt-2">
            {
                contacts.map(item => <Contact key={item.id} fname={item.fname} lname={item.lname}
                email={item.email} phone={item.phone}
                />)
            }
        </div>

    </div>   
    </div>
 
    )
}