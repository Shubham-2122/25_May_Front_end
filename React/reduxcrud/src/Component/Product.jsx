import React from 'react'
import { useGetProductsQuery } from '../Slice/productApi';

function Product() {
    const {
        data: products,
        error,
        isLoading,
        isFetching,
    } = useGetProductsQuery();

    console.log(products)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            products && products.map((data) => {
                                return (
                                    <div className="col">
                                        <div className="card">
                                            <img src={data.image} style={{height:"300px"}} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{data.name}</h5>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product