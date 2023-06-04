import React from 'react'
import styled from 'styled-components'
import logo from '../drdo_logo_0.png';
import { Search } from '@mui/icons-material';


const Container = styled.div`
    width: 100vw;
    background-color: #094683;
    /* background-color: #7e2c7e; */
    color: white;
    font-weight: 400;
    font-size: 18px;
`;
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 150px;
    padding-right: 150px;
    width: 80vw;
    justify-content: space-between;
    align-items: center;
`;
const TopLogo = styled.img`
    display: flex;
`;
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid white;
    border-radius: 30px;
    height: 40px;
    justify-content: center;
    
`;
const NavSearch = styled.input`
        height: 30px;
        background-color: #094683;
        color: white;
        border: none;
        outline: none;
        margin-left: 20px;
`;
const SearchIcon = styled.div`
        margin-right: 10px;
        color: white;
`;
const Hr = styled.hr`
    color: grey;
    width: 90vw;
`;
const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
     justify-content: center;
     align-items: center;
    height: 50px;
`;
const List = styled.ul`
    align-items: center;
    justify-content: center;
    width: 80vw;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;
const ListItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const Navbar = () => {
  return (
    <Container>
        <TopContainer>
        <TopLogo src={logo}/>
        <SearchContainer>
        <NavSearch placeholder='Search'/>
           <SearchIcon> <Search/> </SearchIcon> 
        </SearchContainer>
        </TopContainer>
        <Hr/>
        <BottomContainer>
        <List>
            <ListItem> Home </ListItem>
            <ListItem> DRDO </ListItem>
            <ListItem> Organisation </ListItem>
            <ListItem> Outreach </ListItem>
            <ListItem> Careers </ListItem>
            <ListItem> Publications </ListItem>
            <ListItem> RTI </ListItem>
            <ListItem> Contact Us </ListItem>
        </List>
        </BottomContainer>
    </Container>
  )
}

export default Navbar