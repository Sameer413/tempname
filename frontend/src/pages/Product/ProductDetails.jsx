import { styled } from 'styled-components'
import ProdDetailImg from '../../components/Product/ProdDetailImg';
import ProdDetail_Info from '../../components/Product/ProdDetail_Info';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { fetchProductD } from '../../redux/features/ProductFeatures/productSlice';

const ProductDetails = () => {

    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        { dispatch(fetchProductD(params.id)) }
    }, [])

    const { product } = useSelector(state => state.product);

    return (
        <Wrapper>
            <div className="product-details">
                <ProdDetailImg
                    product={product?.product}
                />
                <ProdDetail_Info
                    name={product?.product.name}
                    description={product?.product.description}
                    price={product?.product.price}
                    ratings={product?.product.ratings}
                    reviews={product?.product.reviews}
                />
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