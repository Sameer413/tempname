import React from 'react'
import { styled } from 'styled-components'
import ProfileNav from '../../components/User/ProfileNav'
import ProfileSection from '../../components/User/ProfileSection'

const Profile = () => {
    return (
        <Wrapper>
            <div>
                <ProfileNav />
                <ProfileSection />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1366px;
    min-width: 1128px;
    margin-bottom: 12px;
    &>div{
        margin: 0 auto;
        position: relative;
        padding: 14px 64px 0;
        width: 100%;
        display: flex;
    }
`

export default Profile