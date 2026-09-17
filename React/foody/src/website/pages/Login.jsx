import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }
    },[])

    const [form,setform] = useState({
        email:"",
        password:""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const getSubmit=async(e)=>{
        e.preventDefault()

        const {email,password} = form
        try {

            if(email == "" || password == ""){
                toast.error("Pls Feild this data");
                return false
            }

            // fetch data email macth
            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)
            
            // email check
            if(res.data.length === 0){
                toast.error("Email Does not Match..")
                console.log("Email Does not Match..")
                return false
            }

            // password
            const admin = res.data[0]
            // console.log(admin) 

            if(admin.password !== password){
                toast.error("password does not Match")
                return false
            }

            if(admin.status == "block"){
              toast.error("Account hase been block..")
                return false
            }

            console.log("Login Success")
            localStorage.setItem("Uid",admin.id)
            localStorage.setItem("Uname",admin.name)
            toast.success("Users login Successfully")
            redirect("/")

        } catch (error) {
            console.log("Api Data not",error)
            toast.error("Api Data not",error)
        }
    }

  return (
    <div>
        <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
           <form action="">
             <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput name='email' value={form.email} onChange={getchange} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput name='password' value={form.password} onChange={getchange} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg' onClick={getSubmit}>
                Login
              </MDBBtn>

              <hr className="my-4" />

               <div>
                <p className="mb-0">Don't have an account? <Link to="/register" className="text-black fw-bold">Sign Up</Link></p>

              </div>    

            </MDBCardBody>
           </form>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  )
}

export default Login