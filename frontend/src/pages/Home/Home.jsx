import { styled } from 'styled-components'
import Category from '../../components/HomeComponents/Category'
import TopProducts from '../../components/HomeComponents/TopProducts';


const Wrapper = styled.div`
        margin: 0 16px;
        margin-top: 8px;
    `;


const Home = () => {

    return (
        <Wrapper>
            <Category />
            <TopProducts advertise={true} />
            <TopProducts advertise={false} />
        </Wrapper>
    )
}

export default Home