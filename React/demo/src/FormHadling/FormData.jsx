import React, { useState } from 'react'

function FormData() {

    const [name,setname]= useState("")
    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")
    const [password,setpassword] = useState("")

    console.log(name)

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="name" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ph" className="form-label">Phone</label>
                            <input type="tel" value={phone} onChange={(e)=>setphone(e.target.value)} className="form-control" id="ph" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default FormData