import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminMain from './AdminNav'
import { styled } from 'styled-components'

const AdminSharedLay = () => {
    return (
        <Wrapper>
            <AdminMain />
            <Outlet />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    width: 100%;
`
export default AdminSharedLay