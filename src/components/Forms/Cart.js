import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'primereact/image';
import { ProductContext } from '../../Context/Product';

export default function Cart() {
    const { carts, removeFromCart, total } = useContext(ProductContext);

    

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
                                {carts.length !== 0 ? carts.map((c) => (
                                    <tr key={c.id}>
                                        <td>
                                            <Image src={c.imgSrc} zoomSrc={c.imgSrc} alt={c.name} width="" height="100" preview />
                                        </td>
                                        <td>{c.name}</td>
                                        <td>${c.rate}</td>
                                        <td>{c.quantity}</td>
                                        <td>
                                            <i title="Remove From Cart" className="pi pi-trash" onClick={() => removeFromCart(c)}></i>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="5">No carts found</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                    {carts.length !== 0 && <fieldset className="summary">
                        <legend>Summary</legend>
                        <div className="box">
                            <div className="value1">Amount</div>
                            <div className="value1">${total?.amount}</div>
                        </div>
                        <div className="box">
                            <div className="value1">Tax</div>
                            <div className="value1">${total?.tax}</div>
                        </div>
                        <div className="box">
                            <div className="value1">Delivery</div>
                            <div className="value1">$10</div>
                        </div>
                        <div className="box">
                            <div className="value1">Discount</div>
                            <div className="value1">${total?.discount}</div>
                        </div>
                        <div className="box">
                            <div className="value2">Total</div>
                            <div className="value2">${total?.total}</div>
                        </div>
                        <div className="box">
                            <Link to="/checkout" className="btn">
                                Checkout
                            </Link>
                        </div>
                    </fieldset>}
                </div>
            </div>
        </div>
    )
}
