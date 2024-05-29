import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../Context/Product'
import { Image } from 'primereact/image';

export default function ProductList() {
    const { ProductAPI, token } = useContext(ProductContext)
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if (token) {
            ProductAPI.getProduct(token).then((res) => {
                setProductList(res.data);
            }).catch(err => console.error(err));
        }
    })

    return (
        <div className='form-wrapper'>
            <div className="product-list-container form-container">
                <div className="header">
                    <h3>Product List</h3>
                </div>
                <fieldset>
                    <legend>List</legend>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.length !== 0 ? productList.map((p) => (
                                <tr key={p._id}>
                                    <td>
                                        <Image src={p.imgSrc} zoomSrc={p.imgSrc} alt={p.name} width="" height="100" preview />
                                    </td>
                                    <td>{p.name}</td>
                                    <td>${p.rate}</td>
                                    <td>{p.category}</td>
                                    <td>{p.desc}</td>
                                    <td>
                                        <i title="Remove From Cart" className="pi pi-trash" onClick={() => ProductAPI.deleteProduct(token, p._id)}></i>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="6">No products found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </fieldset>
            </div>
        </div>
    )
}
