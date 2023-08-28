import React from 'react'
import { category } from '../../../data'
import CategoryCart from '../../container/Category/CategoryCart'
import { styled } from 'styled-components'

const Category = () => {
    return (
        <Wrapper className="category">
            <div className="category-main">
                {category.map((item) => {
                    return (
                        <CategoryCart
                            key={item.title}
                            title={item.title}
                            img={item.img}
                        />
                    )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    margin: 8px 0;
    &>div{
        display: flex;
    }
`;

export default Category