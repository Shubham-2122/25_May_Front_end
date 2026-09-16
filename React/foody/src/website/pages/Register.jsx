import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault()
        try {

            if (form.email == "" || form.name == "" || form.password == "") {
                toast.error("pls Feild data")
                return false
            }

            const res = await axios.post("http://localhost:3000/users", form)
            console.log(res.data)
            toast.success("register succssfully")
            setform({
                id: "",
                name: "",
                email: "",
                password: "",
                status: ""
            })
            redirect("/login")

        } catch (error) {
            toast.error("Api data not Found", error)
            console.log("Api data not Found", error)
        }
    }

    return (
        <div>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <form action="" onSubmit={getsubmit}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                            <MDBInput value={form.name} onChange={getchange} name='name' wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput value={form.email} onChange={getchange} name='email' wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput value={form.password} onChange={getchange} name='password' wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />

                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                        </MDBCardBody>
                    </form>
                </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default Register