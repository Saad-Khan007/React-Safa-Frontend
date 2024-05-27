import React, { useContext, useState } from 'react';
import { ProductContext } from '../../Context/Product';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
    const { total, showToast, carts, setCarts, setOrders } = useContext(ProductContext);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [errors, setErrors] = useState({});
    const navigator = useNavigate();

    const validate = () => {
        let errors = {};

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }

        if (!address) {
            errors.address = 'Address is required';
        }

        if (!contact) {
            errors.contact = 'Contact details are required';
        } else if (!/^\d+$/.test(contact)) {
            errors.contact = 'Contact details should contain only numbers';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            const orderData = {
                email, address, contact,
                status: 'In Progress',
                orders: carts,
                price: total.total
            };
            setOrders((prev) => [...prev, orderData]);
            setCarts([]);
            showToast('success', 'Form Submitted', 'Your form has been submitted successfully.');
            navigator('/orders');

        } else {
            showToast('error', 'Failed', 'Form Submission Failed.');
            setErrors(validationErrors);
        }
    };

    return (
        <div className="form-wrapper">
            <div className="checkout-container form-container">
                <div className="header">
                    <h3>Checkout</h3>
                </div>
                <h1>Total Amount : <span>${total?.total}</span></h1>
                <h1>Payment Method : <span>On Delivery</span></h1>
                <fieldset>
                    <legend>Add Shipping Address</legend>
                    <form name="submit-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Your E-mail.."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                        <input
                            type="text"
                            placeholder="Your Address.."
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.address && <span className="error">{errors.address}</span>}
                        <input
                            type="text"
                            placeholder="Your Contact Details.."
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        {errors.contact && <span className="error">{errors.contact}</span>}
                        <button type="submit" className="btn">Order Now</button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}
