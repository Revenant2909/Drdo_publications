import React, { useState  } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img from '../indian-flag.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { Link } from 'react-router-dom';



const Container = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(https://i.ibb.co/HpYfWN7/indian-flag.png)center ;
    background-size: auto;
    background-repeat: no-repeat;
    object-fit: contain;
    background-color: aliceblue;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(rgb(255, 255, 255,0.1),
      rgb(255, 255, 255,0.3));
`;


const Title = styled.h1`
    font-size: 34px;
    font-weight: 300;
    z-index: 2;
    padding-left: 10px;
    color: black;
    `;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
const Input = styled.input`
    min-width: 40%;
    height: 25px;
    margin: 10px;
    padding: 10px;
    border: none;
    font-size: 17px;
    border-radius: 4px;
    outline: none;
`;
const Button = styled.button`
    margin: 10px;
    margin-top: 20px;
    width: 40%;
    border: none;
    font-size: 20px;
    padding: 10px;
    background-color: #06940a;
    color: white;
    font-weight: 300;
    cursor: pointer;
    border-radius: 4px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;
const Links = styled.a`
    text-decoration: none;
    color: white;
    margin: 5px 0px;
    font-size: 12px;
    cursor: pointer;
`;
const Error = styled.span`
    color  : red;
`;

const Login = () => {
   const[email,setEmail] = useState("");
   const[password,setPassword] = useState("");
   const dispatch = useDispatch();
   const{isFetching,error} = useSelector((state)=>state.user);
   const handlelogin = (e) =>{
    e.preventDefault();
    login(dispatch,{email,password});
   };
  return (
    <Container>
    <Wrapper>
    <Form>
    <Title>SIGN IN </Title>
            <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={handlelogin} disabled={isFetching} > LOGIN </Button>
            {error && <Error>Something went wrong...</Error> }   <Links>Forgot password?</Links>
            <Link to="/register">
            <Links>CREATE A NEW ACCOUNT</Links>
            </Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login