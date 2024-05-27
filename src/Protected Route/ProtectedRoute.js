import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ component: Component, auth }) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!auth) {
            if (!localStorage.getItem('safaToken')) {
                navigate('/login');
            }
        } else {
            if (localStorage.getItem('safaToken')) {
                navigate('/');
            }
        }
    })
    return Component ? <Component /> : null
}
