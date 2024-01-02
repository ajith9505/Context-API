import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useUserContext } from './context/ProductContext'

function Products() {
    // fetching data from ProductContext
    const { data, quantity, onOptionChangeHandler, options } = useUserContext();

    return (
        <div className='container bg-secondary-subtle'>
            {
                //map fuction for itrates the data 
                data.products.map((product, index) => (
                    <div key={product.id} className="card mb-3 bg-primary-subtle" style={{ fontSize: "13px" }}>
                        <div className="row g-0">
                            <div className="col-md-4 p-5">
                                <img src={product.thumbnail} className="img-fluid rounded" alt="Loading..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className='container-fluid'>
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text"><small className="text-body-secondary">Rating : {product.rating}</small></p>
                                        </div>
                                        <div className='container-fluid text-end w-25'>
                                            <div>
                                                <select onChange={(event) => onOptionChangeHandler(event, index)} className='border-0 bg-white d-inline'>
                                                    {options()}
                                                </select>
                                                <p className="card-text d-inline">    ${product.price}</p>
                                                <br />
                                                <button className='btn btn-danger' style={{ fontSize: '10px', marginTop: '3rem' }}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex">
                                        <div className="container-fluid text-subtle">
                                            <div>Sub Total</div>
                                            <div>Shipping</div>
                                        </div>
                                        <div className='container-fluid text-end'>
                                            <div>${product.price * quantity[index]}</div>
                                            <div>free</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='d-flex'>
                                        <div className='container-fluid'>Total</div>
                                        <strong className='container-fluid text-end'>${product.price * quantity[index]}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products