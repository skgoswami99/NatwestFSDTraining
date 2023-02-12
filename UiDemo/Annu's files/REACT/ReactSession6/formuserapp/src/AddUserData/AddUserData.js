import { Zoom } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

import * as Yup from 'yup';


export default function AddUserData() {
  
// Our Useformik function below has three main sub-functions namely:
// 1.) initial values to assign values.
// 2.) onSubmit - to assign submit actions 
// 3.) ValidationSchema - to assign validations to the form.

    const formik = useFormik({

        initialValues:{

            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            username:'',
            password:'',
        },

        onSubmit: values =>{
            console.log(values)

            fetch('http://localhost:3001/userdata',{

                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(values)

            })
            .then(res => res.json())
            .then(data => {
                console.log("Data Added successfully ..");
            })
        },

        validationSchema: Yup.object().shape({
            firstname: Yup.string()
            .min(3, 'First Name must be greater than three characters')
            .max(10, 'First Name must be less than or equal to 10 characters')
            .required('First Name cannot be left blank ...'),

            lastname: Yup.string()
            .min(3, 'Last Name must be greater than three characters')
            .max(10, 'Last Name must be less than or equal to 10 characters')
            .required('Last Name cannot be left blank ...'),

            email: Yup.string()
            .email('Invalid email Address')
            .required('Email cannot be left blank ...'),
        }) 
    });

    // React.useEffect(()=>{

    //     fetch('http://localhost:3000/userdata')

    // })

    return (

    <div className='container mt-4'>
        <div className='row'>
            <div className="col-md-4 offset-md-4">
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-2'>
                        <input type="text" onChange={formik.handleChange} id="firstname" 
                        name="firstname"  value={formik.values.firstname} 
                        className="form-control form-control-sm" placeholder='First Name' onBlur={formik.handleBlur}  />
                        
                        { formik.errors.firstname && formik.touched.firstname ? 
                        <span className="text-danger"> {formik.errors.firstname} </span> : null}
                    </div>
                    <div className='mb-2'>
                        <input type="text" onChange={formik.handleChange} id="lastname" name="lastname" 
                        value={formik.values.lastname} className="form-control form-control-sm" placeholder='Last Name' onBlur={formik.handleBlur} />
                            
                        { formik.errors.lastname && formik.touched.lastname ? 
                        <span className="text-danger"> {formik.errors.lastname} </span> : null}
                    </div>
                    <div className='mb-2'>
                        <input type="text" onChange={formik.handleChange} id="email" name="email" value={formik.values.email} 
                        className="form-control form-control-sm" placeholder='Email' onBlur={formik.handleBlur} />
                        
                        { formik.errors.email && formik.touched.email ? 
                        <span className="text-danger"> {formik.errors.email} </span> : null}
                    </div>
                    <div className='mb-2'>
                        <input type="text" onChange={formik.handleChange} id="phone" name="phone" value={formik.values.phone} className="form-control form-control-sm" placeholder='Phone' />
                    </div>
                    <div className='mb-2'>
                        <input type="text" onChange={formik.handleChange} id="username" name="username" value={formik.values.username} className="form-control form-control-sm" placeholder='UserName' />
                    </div>
                    <div className='mb-2'>
                        <input type="password" onChange={formik.handleChange} id="password" name="password" value={formik.values.password} className="form-control form-control-sm" placeholder='Password' />
                    </div>
                    <div className='mb-2'>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
