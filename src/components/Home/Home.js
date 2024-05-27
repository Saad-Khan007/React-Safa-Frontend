import React, { useCallback, useContext, useEffect, useState } from 'react';
import './Home.css';
import { ProductContext } from '../../Context/Product';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const context = useContext(ProductContext);
    const navigator = useNavigate();
    const products = context.products;
    const [activeTab, setActiveTab] = useState('Featured');
    const addTab = useCallback((data) => {
        const totalSales = data.reduce((acc, obj) => acc + obj.sales, 0);
        const averageSales = totalSales / data.length;
        const currentDate = new Date();
        const daysAgo = new Date(currentDate);
        daysAgo.setDate(currentDate.getDate() - 1);
        const newData = data.map(obj => {
            if (activeTab === "Featured" && obj.sales > averageSales) {
                obj.type = 'Featured';
            }

            if (activeTab === "Latest" && new Date(obj.createdAt) > daysAgo) {
                obj.type = 'Latest';
            }
            return obj;
        });
        return newData;
    }, [activeTab]);
    const [filteredProducts, setFilteredProducts] = useState(addTab(products).filter(product => product.type === activeTab));
    const [isScrolled, setIsScrolled] = useState(false);
    const ProductCard = ({ id, imgSrc, type, name, rate }) => (
        <div className="card" onClick={() => navigator('/productdetail/' + id)}>
            <img src={imgSrc} alt={`${type} - ${name}`} />
            <div className="card-text">
                <div className="type">{type}</div>
                <div className="name">{name}</div>
                <div className="rate">${rate}</div>
            </div>
        </div>
    );

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY >= 200);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setFilteredProducts(addTab(products).filter(product => product.type === activeTab));
    }, [activeTab, addTab, products]);

    return (
        <>
            <div className={`top_arrow ${isScrolled ? 'visible' : 'hidden'}`} onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }}>
                <i className="pi pi-angle-double-up"></i>
            </div>
            <div className="container">
                <div className="black-overlay">
                    <div className="home-text">
                        <h2>Shop the very best</h2>
                        <h1>Get Car Parts Online</h1>
                        <h3>Excludes Performance Parts, Garage Equipments.</h3>
                        <a href="/">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="popular-product-wrapper">
                <div className="popular-product-container">
                    <div className="header">
                        <h3>Popular Product</h3>
                    </div>
                    <div className="header-2">
                        <div className="buttons">
                            {['Featured', 'Latest', 'All'].map(tab => (
                                <span
                                    key={tab}
                                    className={activeTab === tab ? 'active' : ''}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="card-container">
                        {activeTab !== 'All' ? (
                            filteredProducts.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    id={product.id}
                                    imgSrc={product.imgSrc}
                                    type={product.type}
                                    name={product.name}
                                    rate={product.rate}
                                />
                            ))
                        ) : (
                            products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    id={product.id}
                                    imgSrc={product.imgSrc}
                                    type={product.type}
                                    name={product.name}
                                    rate={product.rate}
                                />
                            ))
                        )}

                    </div>
                </div>
            </div>
            <div className="discover-wrapper">
                <div className="discover-container container">
                    <div className="black-overlay">
                        <div className="home-text">
                            <h2>What Auto Parts</h2>
                            <h1>Sales Up To 50% Off</h1>
                            <a href='/'>Discover Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
