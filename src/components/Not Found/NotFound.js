import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <button onClick={() => navigate('/')}>Homepage</button>
            </div>
        </div>
    )
}
