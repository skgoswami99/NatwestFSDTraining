import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [error, setError] = React.useState(false);
    const [msg, setMsg] = React.useState('');
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            fetch(`http://localhost:9000/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status != 401) {
                        localStorage.setItem('token', data.access_token);
                        navigate("/");
                    } else {
                        setError(true);
                        setMsg(data.message);
                    }
                })
        },
        validationSchema: yup.object().shape({
            email: yup.string()
                .email('Invalid Email Address')
                .required('Email cannot be left blank'),
            password: yup.string()
                .required('Password cannot be left blank')
        }),
    });
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-dark text-light py-3 text-center rounded">
                        <h2>Sign In</h2>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="mb-3">
                        <div className="mt-2">
                            <input id="email" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Email" />
                            {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Password" />
                            {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                        </div>
                        <div className="mt-2 text-center">
                            <button id="btnLogin" type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                    {
                        error ? <div className="alert alert-danger" role="alert">
                            {msg}
                        </div> : null
                    }
                </div>
            </div>
        </div>

    )
}