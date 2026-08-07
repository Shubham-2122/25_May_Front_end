import React, { useState } from 'react'

function FormObj() {

    const [form,setform] = useState({
        name :"",
        password:"",
        email:"",
        phone:""
    })

    const [data,setdata] = useState(["shubham","sujal"])

    console.log(form)

    const getchange=(e)=>{
        setform({
            ...form,
           [e.target.name] : e.target.value
        })
    }
    

  return (
    <div>
           <div className="row">
                <div className="col-md-6 mx-auto">
                    {/* <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="name" name='name' value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ph" className="form-label">Phone</label>
                            <input type="tel"  value={form.phone} onChange={(e)=>setform({...form,phone:e.target.value})} className="form-control" id="ph" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password"  value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form> */}


                      <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="name" name='name' value={form.name} onChange={getchange} className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ph" className="form-label">Phone</label>
                            <input type="tel" name='phone' value={form.phone} onChange={getchange} className="form-control" id="ph" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' value={form.email} onChange={getchange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' value={form.password} onChange={getchange}  className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default FormObj