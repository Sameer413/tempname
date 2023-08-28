import { styled } from 'styled-components'
import ProdDetailImg from '../../components/Product/ProdDetailImg';
import ProdDetail_Info from '../../components/Product/ProdDetail_Info';

const ProductDetails = () => {
    return (
        <Wrapper>
            <div className="product-details">
                <ProdDetailImg />
                <ProdDetail_Info />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #fff;
    max-width: 1366px;
    margin: 0 auto;
    min-width: 1128px;
    padding: 0;
    width: 100%;
    position: relative;
    
    .product-details{
        padding: 16px;
        display: flex;

    }
`;


export default ProductDetails