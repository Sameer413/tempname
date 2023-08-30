import { styled } from "styled-components"


const Loader = () => {
    return (
        <Wrapper>
            <div></div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &>div{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 8px solid;
        border-color: #E4E4ED;
        border-right-color: #2874f0;
        animation: spin 1s infinite linear;

        @keyframes spin {
            to {
            transform: rotate(1turn);
            }
        }
    }
`
export default Loader