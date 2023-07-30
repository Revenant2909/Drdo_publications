import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material';
import { addBook } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../requestMethods';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
   
`;
const ImgContainer = styled.div`
    flex: 1;
    border-right: 1px solid teal;
`;
const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: contain;
   
`;
const InfoContainer = styled.div`
     flex: 1;
     padding: 0px 50px;
    
`;
const Title = styled.h1`
    font-weight: 400;
    font-size: 40px;
`;
const Author = styled.p`
    margin: 20px 0px;
    font-size: 24px;
`;
const Price = styled.span`
    display: flex;
    font-weight: 300;
    font-size: 40px;
    margin: 10px 0px ;
    
`;
const Year = styled.span`
    font-weight: 300;
    font-size: 20px;
    
`;
const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
  
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 500;
    margin-right: 10px;
`;
const FilterColor = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: solid aliceblue;
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${props => props.color};
`;
const FilterSize = styled.select`
    cursor: pointer;
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
   
`;
const AmountContainer = styled.div`
        display: flex;
        align-items: center;
        font-weight: 700;
        
`;
const Amount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 2px solid teal;
    border-radius: 10px;
    margin: 0px 5px;
`;

const CartButton = styled.button`
    border: 2px solid black;
    background-color: teal;
    border-radius: 5px;
    padding: 15px;
    font-weight: 700;
    color: white;
    cursor: pointer;
`;
const BuyButton = styled.button`
    border: 2px solid black;
    background-color: black;
    border-radius: 5px;
    padding: 15px;
    font-weight: 700;
    color: white;
    cursor: pointer;
`;
const ShippingDetails = styled.div`
    margin-top: 50px;
`;
const ShippingTitle = styled.h3`
    font-weight: 600;
`;
const ShippingAuthor = styled.span`
     font-weight: 300;
`;
const Available = styled.span`
    color: green;
`;

const Publication = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const id = location.pathname.split("/")[2];
    const [book, setBook] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/books/find/"+id);
                console.log(res.data);
                setBook(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [id]);
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        }
        else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = () => {
        addBook({...book,quantity});
    }
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src={"./upload/"} alt='error'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{book.title} </Title>
                    <Author>
                    <b>Author </b> : {book.author}
                    </Author>
                    <Year><b> Year </b> : {book.year}</Year>
                    <Price>₹ {book.price}</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <CartButton onClick={handleClick}>ADD TO CART</CartButton>
                        <BuyButton onClick={handleClick}>BUY NOW</BuyButton>
                    </AddContainer>
                        <ShippingDetails>
                            <Available>Available</Available>
                            <ShippingTitle>Shipping and Returns</ShippingTitle>
                            <ShippingAuthor>
                        Free standard delivery on all orders and free return for all 
                        qualifying orders within <b>14 days of your order delivery date.</b>
                         Visit our Return Policy for more information.<br/><br/><br/>
                        For any queries, please contact Customer Service at 0000000000
                         or via customercareindia@drdo.com.
                            </ShippingAuthor>
                        </ShippingDetails>
                </InfoContainer>
            </Wrapper>

        </Container>
    )
}

export default Publication