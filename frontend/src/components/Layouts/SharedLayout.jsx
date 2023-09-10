import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const SharedLayout = ({ isAuthenticated, role }) => {
    return (
        <>
            <Header isAuthenticated={isAuthenticated} role={role} />
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout