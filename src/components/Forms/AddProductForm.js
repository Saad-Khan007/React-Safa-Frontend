import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';

export default function AddProductForm() {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { code: '../../../assets/img/img-1.jpg', name: 'Wheel 1' },
        { code: '../../../assets/img/img-2.jpg', name: 'Alternator Engine Car' },
        { code: '../../../assets/img/img-3.jpg', name: 'Car Bumper' },
        { code: '../../../assets/img/img-4.jpg', name: 'Engine Motor' },
        { code: '../../../assets/img/img-5.jpg', name: 'Brake 1' },
        { code: '../../../assets/img/img-5-1.jpg', name: 'Brake 2' },
        { code: '../../../assets/img/img-6.jpg', name: 'Car Cushion Seat 1' },
        { code: '../../../assets/img/img-6-1.jpg', name: 'Car Cushion Seat 2' },
        { code: '../../../assets/img/img-7.jpg', name: 'Car Steering' }
    ];

    return (
        <div className="form-wrapper">
            <div className="add-product-container form-container">
                <div className="header">
                    <h3>Add Product</h3>
                </div>
                <fieldset>
                    <legend>Product Details</legend>
                    <form name="submit-to-google-sheet">
                        <input type="text" placeholder="Enter Product Name" />
                        <input type="number" placeholder="Enter Product Price" />
                        <input type="text" placeholder="Enter Product Category" />
                        <input type="text" placeholder="Enter Product Description" />
                        <Dropdown value={selectedOption} onChange={(e) => setSelectedOption(e.value)} options={options} optionLabel="name"
                            placeholder="--Select--" className="w-full md:w-14rem" />
                        <img className={!selectedOption ? 'hidden' : '' } src={selectedOption?.code} alt=''></img>
                        <button type="submit" className="btn" disabled="">Submit</button>
                    </form>
                </fieldset>
            </div>
        </div>
    )
}
