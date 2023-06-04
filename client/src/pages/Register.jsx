import React, { useState } from 'react'
import styled from 'styled-components'
import { register } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../requestMethods';

const Container = styled.div`
    width: 100vw;
    height: 70vh;
    background: url(https://i.ibb.co/HpYfWN7/indian-flag.png)center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    display: flex;
    background-color: transparent;
    background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgb(255, 255, 255, 0.1)
    );
    flex-direction: column;
`;
const Title = styled.h1`
    padding: 0px 50px;
    font-size: 44px;
    font-weight: 300;
    color: black;
    `;
const Form = styled.form`
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    font-size: 14px;
    max-width: 50%;
    margin: 20px 10px 0px 0px;
    border-radius: 5px;
    border: none;
    height: 20px;
    padding: 10px;
    background-color: aliceblue;
    outline: none;
`;
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
    color: black;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    font-size: 20px;
    padding: 15px 20px;
    background-color: green;
    border-radius: 7px;
    color: aliceblue;
    font-weight: 300;
    cursor: pointer;
`;

const Register = () => {
    const [inputs,setInputs] = useState({isAdmin: 0});  
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        setInputs(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
      }
    //   console.log(inputs);
    const handleSubmit = async (e)  =>{
        e.preventDefault();
        const formData = new FormData();
        const pswd = document.getElementById("password");
        const email = document.getElementById("email");
        const username = document.getElementById("username");
        // formData.append("isAdmin",0);
        // formData.append("email",email);
        // formData.append("password",pswd);
        // formData.append("username",username);
        const user = {...inputs};
        console.log(formData);
       const res = await publicRequest.post("/auth/register",user);
         console.log(res.data);
        
    }

  return (
   
    <Container>
        <Wrapper>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input  name="email" id="email" placeholder="email" onChange={handleChange} />
                <Input name="username" id="username" placeholder="username" onChange={handleChange} />
                <Input name="password" id='password' placeholder="password" onChange={handleChange} />
                <Input name="password2" id='password2'placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>.
                </Agreement>
                <Button onClick={handleSubmit}>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register