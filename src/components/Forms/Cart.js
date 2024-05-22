import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'primereact/image';

export default function Cart() {
    return (
        <div className="form-wrapper">
        <div className="cart-container form-container">
            <div className="header">
                <h3>Cart Details</h3>
            </div>
            <div className="cart-details">
                <div className="details">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <Image src="../../../assets/img/img-1.jpg" zoomSrc="../../../assets/img/img-1.jpg" alt="" width="" height="100" preview />
                                    {/* <img src="../../../assets/img/img-1.jpg" alt="Derringers" /> */}
                                </td>
                                <td>Derringers</td>
                                <td>$100.00</td>
                                <td>4</td>
                                <td>
                                    <i title="Remove From Cart" className="pi pi-trash"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <fieldset className="summary">
                    <legend>Summary</legend>
                    <div className="box">
                        <div className="value1">Amount</div>
                        <div className="value1">$400</div>
                    </div>
                    <div className="box">
                        <div className="value1">Tax</div>
                        <div className="value1">$40</div>
                    </div>
                    <div className="box">
                        <div className="value1">Delivery</div>
                        <div className="value1">$12</div>
                    </div>
                    <div className="box">
                        <div className="value1">Discount</div>
                        <div className="value1">$4</div>
                    </div>
                    <div className="box">
                        <div className="value2">Total</div>
                        <div className="value2">$448</div>
                    </div>
                    <div className="box">
                        <Link to="/checkout" className="btn">
                            Checkout
                        </Link>
                    </div>
                </fieldset>
            </div>
        </div>
        </div>
    )
}
