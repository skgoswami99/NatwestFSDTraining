import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';


export default function Register() {
    const navigate = useNavigate();

    const formik = useFormik({

        initialValues: {

            firstname: '',
            lastname: '',
            email: '',
            address: '',
            accountNumber: '',
            mobileNumber: '',
            password: '',
        },

        onSubmit: values => {
            console.log(values)

            fetch('http://localhost:3001/CustDetails', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)

            })
                .then(res => res.json())
                .then(data => {
                    alert("Registration successful, you can login now");
                })
                navigate("/login");
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

            address: Yup.string()
                .required('Address cannot be left blank ...'),

            accountNumber: Yup.string()
                .min(8, 'Account number must be of 8 Digits or more')
                .required('cannot be left blank ...'),

            mobileNumber: Yup.string()
                .min(10, 'Mobile number must be of 10 Digits')
                .max(10, 'Mobile number cant be more than 10 Digits')
                .required('cannot be left blank ...'),

            password: Yup.string()
                .min(6, 'password must be of between 6-14 characters')
                .max(14, 'Mobile number cant be more than 10 Digits')
               .required('cannot be left blank ...'),
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
                                name="firstname" value={formik.values.firstname}
                                className="form-control form-control-sm" placeholder='First Name' onBlur={formik.handleBlur} />

                            {formik.errors.firstname && formik.touched.firstname ?
                                <span className="text-danger"> {formik.errors.firstname} </span> : null}
                        </div>
                        <div className='mb-2'>
                            <input type="text" onChange={formik.handleChange} id="lastname" name="lastname"
                                value={formik.values.lastname} className="form-control form-control-sm" placeholder='Last Name' onBlur={formik.handleBlur} />

                            {formik.errors.lastname && formik.touched.lastname ?
                                <span className="text-danger"> {formik.errors.lastname} </span> : null}
                        </div>
                        <div className='mb-2'>
                            <input type="text" onChange={formik.handleChange} id="email" name="email" value={formik.values.email}
                                className="form-control form-control-sm" placeholder='Email' onBlur={formik.handleBlur} />

                            {formik.errors.email && formik.touched.email ?
                                <span className="text-danger"> {formik.errors.email} </span> : null}
                        </div>
                        <div className='mb-2'>
                            <input type="text" onChange={formik.handleChange} id="address" name="address" value={formik.values.address}
                                className="form-control form-control-sm" placeholder='Address' onBlur={formik.handleBlur} />

                            {formik.errors.address && formik.touched.address ?
                                <span className="text-danger"> {formik.errors.address} </span> : null}
                        </div>
                        <div className='mb-2'>
                            <input type="number" onChange={formik.handleChange} id="accountNumber" name="accountNumber" value={formik.values.accountNumber}
                                className="form-control form-control-sm" placeholder='Account Number' onBlur={formik.handleBlur} />
                                { formik.errors.accountNumber && formik.touched.accountNumber ? 
                        <span className="text-danger"> {formik.errors.accountNumber} </span> : null}
                        </div>
                        <div className='mb-2'>
                            <input type="number" onChange={formik.handleChange} id="mobileNumber" name="mobileNumber" value={formik.values.mobileNumber}
                                className="form-control form-control-sm" placeholder='Moble Number' onBlur={formik.handleBlur} />
                                { formik.errors.mobileNumber && formik.touched.mobileNumber ? 
                        <span className="text-danger"> {formik.errors.mobileNumber} </span> : null}
                        </div>

                        <div className='mb-2'>
                            <input type="password" onChange={formik.handleChange} id="password" name="password" value={formik.values.password}
                                className="form-control form-control-sm" placeholder='Password' onBlur={formik.handleBlur} />
                                { formik.errors.password && formik.touched.password ? 
                        <span className="text-danger"> {formik.errors.password} </span> : null}
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
