import { styled } from 'styled-components'
import './ProdDetailImg.css'
import img from '../../assets/iphone.webp'
import { AiOutlineShoppingCart, AiFillThunderbolt } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/features/ProductFeatures/productSlice'
import { useParams } from 'react-router-dom'

const ProdDetailImg = ({ product }) => {
    console.log(product);

    const dispatch = useDispatch();
    const params = useParams();

    const newCartItemHandler = () => {
        dispatch(addToCart(params.id));
    }

    return (
        <Wrapper >

            <div className="prod-d-img">
                <img src={img} alt="" />
            </div>
            <div className="prod-d-btn">
                <div className="prod-cart" onClick={newCartItemHandler}>
                    <button><AiOutlineShoppingCart size={15} /> ADD TO CART</button>
                </div>
                <div className="prod-buy">
                    <button><AiFillThunderbolt size={15} /> BUY NOW</button>
                </div>

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 41.66%;
    position: sticky;
    align-self: flex-start;
    top: 64px;

    .prod-d-img{
        border: 1px solid #f0f0f0;
        display: flex;
        justify-content: center;

        &>img{
            display: inline-block;
            max-height: 416px;
            max-width: 416px;
            vertical-align: top;
        }
    }
    
    .prod-d-btn{
        display: flex;
        width: 95%;
        margin: 12px auto 0;
        &>*{
            width: 100%;
        }

        &>.prod-cart>button{
            padding: 18px 8px;
            border-radius: 2px;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
            width: 98%;
            border: none;
            float: left;
            background: #ff9f00;
            color: #fff;
            display:flex;
            justify-content: center;
        }
        
        &>.prod-buy>button{
            display:flex;
            justify-content: center;
            padding: 18px 8px;
            border-radius: 2px;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
            width: 98%;
            border: none;
            float: left;
            background: #fb641b;
            color: #fff;
        }
    }
    
`
export default ProdDetailImg