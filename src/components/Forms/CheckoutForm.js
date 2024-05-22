import React from 'react'

export default function CheckoutForm() {
    return (
        <div className="form-wrapper">
            <div className="checkout-container form-container">
                <div className="header">
                    <h3>Checkout</h3>
                </div>
                <h1>Total Amount : <span>$448</span></h1>
                <h1>Payment Method : <span>On Delivery</span></h1>
                <fieldset>
                    <legend>Add Shipping Address</legend>
                    <form name="submit-to-google-sheet">
                        <input type="email" placeholder="Your E-mail.." />
                        <input type="text" placeholder="Your Address.." />
                        <input type="text" placeholder="Your Contact Details.." />
                        <button type="submit" className="btn">Order Now</button>
                    </form>
                </fieldset>
            </div>
        </div>
    )
}
