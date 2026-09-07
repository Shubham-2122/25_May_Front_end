import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import AnavTi from '../Acoman/AnavTi'
import axios from 'axios'

function ProductsManage() {

    const [product, setproduct] = useState([])

    useEffect(() => {
        fetchproduct()
    }, [])

    const fetchproduct = async () => {
        try {
            const res = await axios.get("http://localhost:3000/products")
            // console.log(res.data)
            setproduct(res.data)
        } catch (error) {
            console.log("product not found", error)
        }
    }

    return (
        <div>
            <Aheader />
            <AnavTi title="Products Manage" name="Products Manage" />

            <div className="container my-5">
                <table className="table ">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            product && product.map((val, index) => {
                                console.log(val)
                                return (
                                    <tr className='text-center'>
                                        <th scope="row">{val.id}</th>
                                        <td>
                                            <img src={val.img} style={{ width: "70px", height: "70px", borderRadius: "50%" }} alt="" />
                                        </td>
                                        <td>{val.name}</td>
                                        <td>{val.category}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
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

export default ProductsManage