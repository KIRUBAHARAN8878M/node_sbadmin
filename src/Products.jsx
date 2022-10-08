
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { env } from './config';

function Products() {
    const [products, setProducts] = useState([]);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true);
        let products = await axios.get(`${env.api}/getallproducts`);
        setProducts(products.data);
        setLoading(false);
    }

    let productDelete = async (id) => {
        try {
            let ask = window.confirm("Are You Sure! Do You Want To Delete This Data?");
            if (ask) {
                await axios.delete(`${env.api}/deleteproduct/${id}`);
            }

            let index = products.findIndex((obj) => obj.id === id);
            products.splice(index, 1);
            setProducts([...products]);


        } catch (error) {
            console.log(error)
        }
    }

return (
  <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Products</h1>
            <Link to="/portal/create-product" className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
            <FontAwesomeIcon className="fal mx-2 fa-sm text-white-50" icon={faBicycle} />Create Product</Link>
            </div>
            {
                isLoading ? (<span> Loading . . .</span>) : (
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Product Data Details</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Bicycle Name</th>
                                            <th>Model</th>
                                            <th>Manufacturar</th>
                                            <th>Color</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>#S.no</th>
                                            <th>Bicycle Name</th>
                                            <th>Model</th>
                                            <th>Manufacturar</th>
                                            <th>Color</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            products.map((product, index) => {
                                                return <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{product.product}</td>
                                                    <td>{product.model}</td>
                                                    <td>{product.company}</td>
                                                    <td>{product.color}</td>
                                                    <td>${product.price}</td>
                                                    <td>
                                                        <Link to={`/portal/products/${product._id}`} className='btn btn-sm btn-warning mr-2'>View</Link>

                                                        <Link to={`/portal/products/edit/${product._id}`} className='btn btn-sm btn-primary mr-2'>Edit</Link>

                                                        <button onClick={() => {
                                                            productDelete(product._id)
                                                        }} className='btn btn-sm btn-danger mr-2'>Delete</button>
                                                    </td>
                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )





}

export default Products;