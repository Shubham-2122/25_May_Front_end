import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            // console.log(res.data)
            setdata(res.data)
        } catch (error) {
            console.log("Api data ", error)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        data && data.map((product, index) => {
                            // console.log(product)
                            const {image,title,category,description} = product
                            return (
                                <div className="col-md-4" key={product.id}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <h3>{category}</h3>
                                            <p className="card-text">{description}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products