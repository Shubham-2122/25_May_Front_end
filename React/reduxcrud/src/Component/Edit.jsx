import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UpatedUser } from '../Slice/userSlice'

function Edit() {

    const redirect = useNavigate()

    const { id } = useParams()
    console.log(id)

    const { users } = useSelector((state) => state.users)

    console.log(users)

    const [editdata, seteditdata] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    useEffect(() => {
        const singleuser = users.filter((data) => data.id === id)
        console.log(singleuser[0])
        seteditdata(singleuser[0])
    }, [])

    const getChange = (e) => {
        seteditdata({
            ...editdata,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch()

    const getsumbit = (e) => {
        e.preventDefault()

        dispatch(UpatedUser(editdata))
        redirect("/")
        seteditdata({
            id: "",
            name: "",
            email: "",
            phone: "",
            password: ""
        })

    }

    return (
        <div>
            <div className="container">
                <h1>Profile Update</h1>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" value={editdata.name} onChange={getChange} name='name' className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={editdata.email} onChange={getChange} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" value={editdata.phone} onChange={getChange} name='phone' className="form-control" id="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={editdata.password} onChange={getChange} name='password' className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button onClick={getsumbit} type="submit" className="btn btn-primary">Update user</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit