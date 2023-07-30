import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px 0px ;
`;
const Product = styled.div`
    margin: 10px 30px;
    display: flex;
    min-width: 25%;
    max-width: 25%;
    height: 30%;
    -webkit-box-shadow: 0px -1px 5px 2px rgba(0,0,0,0.47);
    -moz-box-shadow: 0px -1px 5px 2px rgba(0,0,0,0.47);
    box-shadow: 0px -1px 5px 2px rgba(0,0,0,0.47);
    color: black;
    
`;
const ProductLeft = styled.div`
      flex: 1;
`;
const ProductRight = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-weight: 300;
`;
const ProductName = styled.span`
    padding: 10px;
    font-size: 24px;
    font-weight: 500;
`;
const ProductImage= styled.img`
    height: 300px;
    width: 200px;
    padding: 20px 20px;
`;
const ProductAuthor = styled.span`
    padding: 10px;
`;
const Year = styled.span`
    padding: 10px;
`;
const Price = styled.span`
    padding: 10px;
`;
const Desc = styled.span`
    padding: 10px;
`;
const View = styled.a`
    padding: 10px;
`;
const ProductItem = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        const fetchBooks = async () =>{
            try {
                const res = await axios.get("http://localhost:8800/api/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchBooks();
    },[]);

  return (
    <Container>
            
         { books.map((item)=>(
            <Link to={`/books/find/`+item.id} >
            <Product>
            <ProductLeft>
                <ProductImage src={"./upload/" + item.image} alt="error"/>
            </ProductLeft>
            <ProductRight>
                <ProductName> {item.title}  </ProductName>
                <ProductAuthor><b>Author : </b>{item.author}</ProductAuthor>
                <Desc><b>About the Book : </b>{item.descBook} </Desc>
                <Year><b>Year : </b>{item.year} </Year>
                <Price><b>Price : </b>{item.price} </Price>
                <View href={item.path}>View pdf</View>
            </ProductRight>
            </Product>
            </Link>
         ))}   
        

    </Container>

  )
}

export default ProductItem