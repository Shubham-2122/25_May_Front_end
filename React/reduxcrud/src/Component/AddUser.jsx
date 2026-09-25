import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAdd } from '../Slice/userSlice'
import { useNavigate } from 'react-router-dom'

function AddUser() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const getChange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const getSubmit = (e) => {
        e.preventDefault()

        dispatch(userAdd(form))
        setform({
            id: "",
            name: "",
            email: "",
            phone: "",
            password: ""
        })
        redirect("/")
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={getSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" onChange={getChange} name='name' value={form.name} className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={getChange} name='email' value={form.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" onChange={getChange} name='phone' value={form.phone} className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={getChange} name='password' value={form.password} className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Add user</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser