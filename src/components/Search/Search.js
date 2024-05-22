import React from 'react'
import './Search.css'

export default function Search() {
    return (
        <div className="form-wrapper">
            <div className="search-container form-container">
                <div className="header">
                    <h3>Search Results</h3>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="../../../assets/img/img-1.jpg" alt='' />
                        <div className="card-text">
                            <span className="type">Pistol</span>
                            <span className="name">Derringers</span>
                            <span className="price">Price: $100.00</span>
                            <span className="desc">Derringers are small, compact pistols known for their concealability. They are typically designed for close-range self-defense and are popular as backup weapons.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
