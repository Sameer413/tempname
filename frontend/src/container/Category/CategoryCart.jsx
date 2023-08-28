import React from 'react'
import { styled } from 'styled-components'

const CategoryCart = ({ img, title }) => {
    return (
        <>
            <Wrapper>
                <div className="category-item-img">
                    <img src={img} alt="" />
                </div>
                <span className="category-item-title">
                    {title}
                </span>
            </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
    padding: 16px;
    text-align: center;
    cursor: pointer;
    margin: 0 15px;

    &:hover{
        &>span{
            color: #2874f0;
            transition: 0.2s ease-in;
        }
    }

    >div{
        margin-bottom: 8px;
        display: flex;
        justify-content: center;

        &>img{
            width: 64px;
            height: 64px;
        }
    }

    &>span{
        font-size: 14px;
        font-weight: 500;
    }
`

export default CategoryCart