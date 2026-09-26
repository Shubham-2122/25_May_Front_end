import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleterUser, userRead } from '../Slice/userSlice'
import { Link } from 'react-router-dom'

function UserDetails() {

    const { loading, users } = useSelector((state) => state.users)

    // console.log(loading)
    // console.log(users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userRead())
    }, [])

    return (
        <div>
            <div className="container">
                <h1>User Details Show</h1>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map((data) => {
                                return (
                                    <tr className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <Link  to={`/edit/${data.id}`} className='btn btn-success mx-2'>Edit</Link>
                                            <button className='btn btn-danger' onClick={()=>dispatch(deleterUser(data.id))}>Delete</button>

                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default UserDetails