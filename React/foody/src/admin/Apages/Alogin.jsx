import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dash")
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
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
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

            console.log("Login Success")
            localStorage.setItem("Aid",admin.id)
            localStorage.setItem("Aname",admin.name)
            toast.success("Admin login Successfully")
            redirect("/dash")

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

         <form action="
         ">
             <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase text-light">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput value={form.email} onChange={getchange} name='email' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput value={form.password} onChange={getchange} name='password' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn onClick={getSubmit} outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>

           

              <div>
                <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>
         </form>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  )
}

export default Alogin