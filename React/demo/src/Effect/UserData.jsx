import React, { useEffect, useState } from 'react'

function UserData() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://dummyjson.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                // console.log(res.users)
                setuser(res.users)
            })
    }

    // console.log(user)

    return (
        <div className='container'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">firstName</th>
                        <th scope="col">gender</th>
                        <th scope="col">email</th>
                        <th scope="col">city</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index) => {
                            // console.log(data)
                            return (
                                <tr key={data.id}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.firstName}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address.city}</td>
                                    <td>{data.address.state}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default UserData