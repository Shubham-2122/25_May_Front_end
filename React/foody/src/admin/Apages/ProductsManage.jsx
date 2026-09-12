import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import AnavTi from '../Acoman/AnavTi'
import axios from 'axios'
import useAPI from '../../custom/useAPI'
import { toast } from 'react-toastify'

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
            // console.log(res.data)
            setsigpro(res.data)

        } catch (error) {
            console.log("api error", error)
        }
    }


    // single product delete 

    const singlepro = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/products/${id}`)
            // console.log(res.data)
            console.log("delete product")
            toast.success("Product deleted successfully")
            fetchdata()
        } catch (error) {
            console.log("Error api ", error)
            toast.error("Api data not Found")
        }
    }

    // editting
    const [edit, setedit] = useState(null)
    const [editing, setediting] = useState({
        id: "",
        name: "",
        price: "",
        category: "",
        img: ""
    })

    console.log(edit)

    const getopen = (data) => {
        // console.log(data)
        setedit(data)
        setediting(data)
    }

    const getchange = (e) => {
        setediting({
            ...editing,
            [e.target.name]: e.target.value
        })
    }

    const getupdate = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.put(`http://localhost:3000/products/${editing.id}`, editing)
            console.log(res.data)
            toast.success("Product Updated successfully")
            setediting({
                id: "",
                name: "",
                price: "",
                category: "",
                img: ""
            })
            setedit(null)
            fetchdata()
        } catch (error) {
            toast.error("Api data not Found", error)
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
                                            <button className='btn btn-success mx-2' onClick={() => getopen(val)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => singlepro(val.id)} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                {
                    edit && (
                        <div className="container my-5">
                            <div className="col- col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                                <h1>Product Update form</h1>
                                <form >
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input name='name' onChange={getchange} value={editing.name} type="text" className="form-control" id="name" placeholder="Product Name" />
                                                <label htmlFor="name">Product Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input name='price' onChange={getchange} value={editing.price} type="text" className="form-control" id="price" placeholder="Product Price" />
                                                <label htmlFor="price">Product Price</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <select name='category' onChange={getchange} value={editing.category} class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                    <option hidden>Select your Category</option>
                                                    <option value="vegetables">Vegetables</option>
                                                    <option value="fruits">Fruits</option>
                                                </select>
                                                <label for="floatingSelect">Select your Category</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input name='img' onChange={getchange} value={editing.img} type="url" className="form-control" id="img" placeholder="Product Image url" />
                                                <label htmlFor="img">Product image url</label>

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary rounded-pill  py-3 px-5" type="submit" onClick={getupdate}>Product Update</button>
                                            <button className="btn btn-primary rounded-pill py-3 px-5" onClick={() => setedit(null)}>Product cancle</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Product Name : {sigpro.name}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="col wow fadeInUp" data-wow-delay="0.1s">
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