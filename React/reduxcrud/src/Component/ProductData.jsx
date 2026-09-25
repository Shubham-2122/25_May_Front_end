import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductShow } from '../Slice/productSlice'

function ProductData() {

    const { isloading, products } = useSelector((state) => state.product)

    console.log(isloading)
    console.log("product :", products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ProductShow())
    }, [])

    return (
        <div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.image} style={{width:"100px"}} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.price}</td>
                                        <td>
                                              <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' >Delete</button>
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

export default ProductData