import React, { useContext, useState } from 'react';
import { ProductContext } from '../../Context/Product';
import { Dialog } from 'primereact/dialog';
import { Image } from 'primereact/image';

export default function Orders() {
    const { orders } = useContext(ProductContext);
    const [visible, setVisible] = useState(false);
    const [currentVisible, setCurrentVisible] = useState([]);

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
                            {orders.length !== 0 ? orders.map((o, index) => (
                                <tr key={index}>
                                    <td>#{index + 1}</td>
                                    <td>${o.price}</td>
                                    <td>{o.status}</td>
                                    <td className="icon">
                                        <i title="Delete" className="pi pi-trash"></i>
                                        <i title="View Products" className="pi pi-eye" onClick={() => {
                                            setCurrentVisible(o.orders);
                                            setVisible(true);
                                        }}></i>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4">No orders found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </fieldset>
            </div>
            <Dialog header="Ordered Products" visible={visible} style={{ width: '80vw' }} onHide={() => setVisible(false)}>
                <table>
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentVisible.length !== 0 && currentVisible.map((o) => (
                            <tr key={o.id}>
                                <td>
                                    <Image src={o.imgSrc} zoomSrc={o.imgSrc} alt={o.name} width="" height="100" preview />
                                </td>
                                <td>{o.name}</td>
                                <td>${o.rate}</td>
                                <td>{o.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Dialog>
        </div>
    );
}
