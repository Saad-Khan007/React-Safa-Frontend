import React from 'react'

export default function ProductList() {
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
                            <tr>
                                <td><img src="../../../assets/img/img-4.jpg" alt=''/></td>
                                <td>Assualt Rifle</td>
                                <td>$2300.00</td>
                                <td>Rifle</td>
                                <td>Assault rifles are selective-fire firearms capable of firing in both semi-automatic and automatic modes. They are designed for rapid fire and are commonly used by military forces around the world.</td>
                                <td className="icon">
                                    <i title="Delete" className="pi pi-trash"></i>
                                    <i title="Update" className="pi pi-pen-to-square"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </div>
        </div>
    )
}
