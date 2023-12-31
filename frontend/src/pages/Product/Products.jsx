import { styled } from "styled-components"
import Filter from "../../components/Products/Filter";
import ProductList from "../../components/Products/ProductList";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { fetchProducts } from "../../redux/features/ProductFeatures/productSlice";
import Loader from '../../components/Layouts/Loader'

const Products = () => {

    return (
        <Wrapper>
            <div>
                <Filter />
                <ProductList />
            </div>

        </Wrapper>
    )
}

export default Products

const Wrapper = styled.div`
    margin: 0 auto;
    min-width: 978px;
    max-width: 1680px;
    padding: 8px;
    width: 100%;
    position: relative;

    &>div{
        display: flex;
    }
`;