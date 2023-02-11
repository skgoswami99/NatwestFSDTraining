import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'

export default function Register() {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            confirmpassword: ''
        },
        onSubmit: values => {
            fetch('http://localhost:3001/auth/v1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => { console.log('User Registered Successfully') })
        },
        onChange: values => {
            
        },

        validationSchema: yup.object().shape({
            firstname: yup.string()
                .min(3, 'FirstName is too short')
                .max(10, 'FirstName is too long')
                .required('FirstName cannot be left blank'),
            lastname: yup.string()
                .min(3, 'LastName is too short')
                .max(10, 'LastName is too long')
                .required('LastName cannot be left blank'),
            email: yup.string()
                .email('Invalid Email Address')
                .required('Email cannot be left blank'),
            username: yup.string()
                .required('username cant be left blank'),
            password: yup.string()
                .required('Password cannot be left blank'),
            confirmpassword: yup.string()
                .required('Confirm Password cannot be left blank')
                .test('confirmpassword', 'Password & confirm password should be same', function(cpass){
                    if(this.parent.password===cpass){
                        return true;
                    }
                    return false;
                })
        }),
    });
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-success text-Dark py-3 text-center rounded">
                        <h2>**Register Here**</h2>
                    </div>
                    <form onSubmit={formik.handleSubmit} >
                        <div className="mt-2">
                            <input id="firstname" name="firstname" type="text" value={formik.values.firstname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="First Name" />
                            {formik.errors.firstname && formik.touched.firstname ? <span className="text-danger">{formik.errors.firstname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="lastname" name="lastname" type="text" value={formik.values.lastname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Last Name" />
                            {formik.errors.lastname && formik.touched.lastname ? <span className="text-danger">{formik.errors.lastname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="email" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Email" />
                            {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                        </div> 
                        <div className="mt-2">
                            <input id="username" name="username" type="text" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Username" />
                            {formik.errors.username && formik.touched.username ? <span className="text-danger">{formik.errors.username}</span> : null}
                        </div>                       
                        <div className="mt-2">
                            <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Password" />
                            {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="confirmpassword" name="confirmpassword" type="password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Confirm Password" />
                            {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className="text-danger">{formik.errors.confirmpassword}</span> : null}
                        </div>

                        <div className="m-2 text-center">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}