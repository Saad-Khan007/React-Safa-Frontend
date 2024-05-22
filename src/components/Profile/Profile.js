import React from 'react'

export default function Profile() {
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
                                <span>0</span>
                            </div>
                            <div className="box">
                                <h6>Name :</h6>
                                <span></span>
                            </div>
                            <div className="box">
                                <h6>Email :</h6>
                                <span></span>
                            </div>
                            <div className="box">
                                <h6>Password :</h6>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}
