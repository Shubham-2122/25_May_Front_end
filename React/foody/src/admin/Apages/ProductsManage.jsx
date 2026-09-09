import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import AnavTi from '../Acoman/AnavTi'
import axios from 'axios'
import useAPI from '../../custom/useAPI'

function ProductsManage() {

    // const [product, setproduct] = useState([])

    // useEffect(() => {
    //     fetchproduct()
    // }, [])

    // const fetchproduct = async () => {
    //     try {
    //         const res = await axios.get("http://localhost:3000/products")
    //         // console.log(res.data)
    //         setproduct(res.data)
    //     } catch (error) {
    //         console.log("product not found", error)
    //     }
    // }

    const { test, fetchdata } = useAPI("http://localhost:3000/products")

    useEffect(() => {
        fetchdata()
    }, [])

    //  console.log(test)

    const [sigpro, setsigpro] = useState({
        id: "",
        name: "",
        price: "",
        category: "",
        img: ""
    })

    // single product 
    const signleproduct = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/products/${id}`)
            console.log(res.data)
            setsigpro(res.data)
        } catch (error) {
            console.log("api error", error)
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
                            test && test.map((val, index) => {
                                // console.log(val)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{val.id}</th>
                                        <td>
                                            <img src={val.img} style={{ width: "70px", height: "70px", borderRadius: "50%" }} alt="" />
                                        </td>
                                        <td>{val.name}</td>
                                        <td>{val.category}</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => signleproduct(val.id)}>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Product Name : {sigpro.name}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div  className="col wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item">
                                        <div className="position-relative bg-light overflow-hidden">
                                            <img className="img-fluid w-50" src={sigpro.img} alt />
                                            <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{sigpro.category}</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <a className="d-block h5 mb-2" href>{sigpro.name}</a>
                                            <span className="text-primary me-1">${sigpro.price}</span>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductsManage