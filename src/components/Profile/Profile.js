import React, { useContext } from 'react'
import { ProductContext } from '../../Context/Product'

export default function Profile() {
    const { user } = useContext(ProductContext)
    return (
        <div className="form-wrapper">
            <div className="profile-container form-container">
                <div className="header">
                    <h3>Profile</h3>
                </div>
                <fieldset>
                    <legend>Data</legend>
                    <div className="profile-box">
                        <div className="main-box">
                            <div className="box">
                                <h6>ID :</h6>
                                <span>{user._id}</span>
                            </div>
                            <div className="box">
                                <h6>Name :</h6>
                                <span>{user.username}</span>
                            </div>
                            <div className="box">
                                <h6>Email :</h6>
                                <span>{user.email}</span>
                            </div>
                            <div className="box">
                                <h6>Created At :</h6>
                                <span>{new Date(user.createdAt).toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}
