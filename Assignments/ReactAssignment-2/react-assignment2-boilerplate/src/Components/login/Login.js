import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'

import { useNavigate } from "react-router-dom";

export default function Login() {
   
    let navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            fetch(`http://localhost:3001/auth/v1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status !== 403) {
                        localStorage.setItem('token', data.token);
                        navigate("/dashboard");
                    } 
                })
        },
        validationSchema: yup.object().shape({
            username: yup.string()
                .required('username cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')
        }),
    });

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-success text-Dark py-3 text-center rounded">
                        <h2>Sign In</h2>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="mb-3">
                        <div className="mt-2">
                            <input id="username" name="username" type="text" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Username" />
                            {formik.errors.username && formik.touched.username ? <span className="text-danger">{formik.errors.username}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Password" />
                            {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                        </div>
                        <div className="mt-2 text-center">
                            <button id="btnLogin"  type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>

    )
};