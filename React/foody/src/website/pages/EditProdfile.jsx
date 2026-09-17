import React, { useEffect, useState } from 'react'
import Header from '../coman/Header'
import NavTitle from '../coman/NavTitle'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function EditProdfile() {

    const redirect = useNavigate()

    useEffect(() => {
        getdata()
    }, [])

    const [edit, setedit] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getdata = async () => {
        const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("Uid")}`)
        console.log(res.data)
        setedit(res.data)
    }

    const getchange = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const getupdate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/users/${edit.id}`, edit)
            console.log(res.data)
            setedit({
                id: "",
                name: "",
                email: "",
                password: ""
            })
            redirect("/")
            localStorage.setItem("Uname",edit.name)
            toast.success("Profile Updateted")
            
        } catch (error) {
            toast.error("Api data not ", error)
        }
    }

    return (
        <div>
            <Header />
            <NavTitle name="profile" title="Profile" />

            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <form action="" onSubmit={getupdate}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Update Profile</h2>
                            <MDBInput value={edit.name} onChange={getchange} name='name' wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput value={edit.email} onChange={getchange} name='email' wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput value={edit.password} onChange={getchange} name='password' wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />

                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Update Profile</MDBBtn>
                        </MDBCardBody>
                    </form>
                </MDBCard>
            </MDBContainer>
        </div>
    )
}

export default EditProdfile