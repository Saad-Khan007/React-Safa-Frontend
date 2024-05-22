import React from 'react'

export default function Orders() {
    return (
        <div className='form-wrapper'>
            <div className="product-list-container form-container">
                <div className="header">
                    <h3>My Orders</h3>
                </div>
                <fieldset>
                    <legend>List</legend>
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>$2300.00</td>
                                <td>In Progress</td>
                                <td className="icon">
                                    <i title="Delete" className="pi pi-trash"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </div>
        </div>
    )
}
