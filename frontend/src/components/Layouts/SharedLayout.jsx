import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const SharedLayout = ({ isAuthenticated }) => {
    return (
        <>
            <Header isAuthenticated={isAuthenticated} />
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout