import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import AnavTi from '../Acoman/AnavTi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ProductAdds() {

    const redirect = useNavigate()

    const [product, setproduct] = useState({
        id: "",
        name: "",
        price: "",
        category: "",
        img: ""
    })

    const getchange = (e) => {
        setproduct({
            ...product,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(product)
    }

    const getSumbit = async (e) => {
        e.preventDefault()

        try {

            if (product.category == "" || product.img == "" || product.name == "" || product.price == "") {
                console.log("pls required product field")
                return false
            }

            const res = await axios.post("http://localhost:3000/products",product)
            console.log(res.data)
            setproduct({
                id: "",
                name: "",
                price: "",
                category: "",
                img: ""
            })
            redirect("/productmanage")
            console.log("product Successfully added")

        } catch (error) {
            console.log("Api data not Found")
        }
    }

    return (
        <div>
            <Aheader />
            <AnavTi name="Product Add" title="Product Add" />

            <div className="container my-5">
                <div className="col- col-md-12 wow fadeInUp" data-wow-delay="0.5s">

                    <form onSubmit={getSumbit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input value={product.name} name='name' onChange={getchange} type="text" className="form-control" id="name" placeholder="Product Name" />
                                    <label htmlFor="name">Product Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input value={product.price} name='price' onChange={getchange} type="text" className="form-control" id="price" placeholder="Product Price" />
                                    <label htmlFor="price">Product Price</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <select value={product.category} name='category' onChange={getchange} class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option hidden>Select your Category</option>
                                        <option value="vegetables">Vegetables</option>
                                        <option value="fruits">Fruits</option>
                                    </select>
                                    <label for="floatingSelect">Select your Category</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input value={product.img} name='img' onChange={getchange} type="url" className="form-control" id="img" placeholder="Product Image url" />
                                    <label htmlFor="img">Product image url</label>

                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Product Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductAdds