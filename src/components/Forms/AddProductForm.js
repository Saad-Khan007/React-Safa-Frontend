import React, { useContext, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../Context/Product';
import { Image } from 'primereact/image';

export default function AddProductForm() {
    const navigate = useNavigate();
    const { showToast, ProductAPI, token } = useContext(ProductContext);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productSales, setProductSales] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [errors, setErrors] = useState({});

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
    const categories = [
        'Engine', 'Transmission', 'Driveshaft', 'Axles', 'Wheels', 'Tires', 'Brakes', 'Suspension', 'Steering', 'Body', 'Interior', 'Windows', 'Mirrors', 'Lights'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setErrors({});
            const data = {
                category: productCategory,
                desc: productDescription,
                imgSrc: selectedOption.code,
                name: productName,
                rate: productPrice,
                sales: productSales,
            }
            ProductAPI.addProduct(data, token).then((res) => {
                console.log(res);
                showToast('success', 'Product', 'Product Added successfully');
                navigate('/productlist');
            })
        } else {
            showToast('error', 'Product', 'Please fill in the following fields');
            setErrors(errors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!productName.trim()) {
            errors.productName = 'Product name is required';
        }
        if (!productPrice.trim()) {
            errors.productPrice = 'Product price is required';
        } else if (isNaN(productPrice)) {
            errors.productPrice = 'Product price must be a number';
        }

        if (!productSales.trim()) {
            errors.productSales = 'Product sales is required';
        } else if (isNaN(productSales)) {
            errors.productSales = 'Product sales must be a number';
        }

        if (!productCategory.trim()) {
            errors.productCategory = 'Product category is required';
        }
        if (!productDescription.trim()) {
            errors.productDescription = 'Product description is required';
        }
        if (!selectedOption) {
            errors.selectedOption = 'Please select a product image';
        }
        return errors;
    };

    return (
        <div className="form-wrapper">
            <div className="add-product-container form-container">
                <div className="header">
                    <h3>Add Product</h3>
                </div>
                <fieldset>
                    <legend>Product Details</legend>
                    <form onSubmit={handleSubmit} name="submit-form">
                        <input
                            type="text"
                            placeholder="Enter Product Name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                        {errors.productName && <span className="error">{errors.productName}</span>}
                        <input
                            type="number"
                            placeholder="Enter Product Price"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Enter Product Sales"
                            value={productSales}
                            onChange={(e) => setProductSales(e.target.value)}
                        />
                        {errors.productSales && <span className="error">{errors.productSales}</span>}
                        <Dropdown
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.value)}
                            options={categories.map(category => ({ label: category, value: category }))}
                            placeholder="--Select Category--"
                            className="w-full md:w-14rem"
                        />
                        {errors.productCategory && <span className="error">{errors.productCategory}</span>}
                        <textarea placeholder="Enter Product Description"
                            rows={8}
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                        ></textarea>
                        {errors.productDescription && <span className="error">{errors.productDescription}</span>}
                        <Dropdown
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.value)}
                            options={options}
                            optionLabel="name"
                            placeholder="--Select--"
                            className="w-full md:w-14rem"
                        />
                        {errors.selectedOption && <span className="error">{errors.selectedOption}</span>}
                        <Image className={!selectedOption ? 'hidden' : ''} src={selectedOption?.code} zoomSrc={selectedOption?.code} width="" height="100" preview />
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}
