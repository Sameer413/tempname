import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoutes = ({ children, isAuthenticated, role }) => {
    if (isAuthenticated, role) {
        return isAuthenticated && role === "admin" ? <Navigate to={"/"} /> : children
    } else {
        return isAuthenticated ? <Navigate to={"/"} /> : children
    }
}

export default ProtectedRoutes