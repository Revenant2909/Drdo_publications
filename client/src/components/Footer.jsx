import { Facebook, Instagram, Pinterest, Twitter,Phone,Room, MailOutline } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import LogoImg from '../drdo_logo_0.png'
const Container = styled.div`
    width: 100vw;
    display: flex;
    background-color: aliceblue;
    flex-direction: column;
`;
const Top = styled.div`
    display: flex;
`;
const Left = styled.div`
    padding: 20px;
    flex: 1;
`;
const Logo = styled.img`
    height: 100px;
    object-fit: cover;
    background-color: aliceblue;
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-weight: 300;
`;

const SocialContainer = styled.div`
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SocialIcon = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
    width: 40px;
    height: 40px;
    color: white;
    background-color: ${props=>props.color};
    border-radius: 50%;
    
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;
const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
   
`;
const ListItem = styled.li`
    margin: 5px 0px;
    width: 50%;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Bottom = styled.div`
     background-color: #094683;
     height: 8vh;
`;
const UL = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    
`;
const ListItem2 = styled.li`
    padding: 0px  10px;
    border-right: 1px solid white;
    color: white;
`;
const Bottom2 = styled.div`
    background-color: #094683;
     height: 2vh;
     display: flex;
     align-items: center;
     justify-content: space-between;
`;
const OtherInfo = styled.span`
    color: white;
    padding: 0px 50px;
`;
const OtherContainer = styled.div`

`;
const Footer = () => {
  return (
    <Container>
        <Top>

        <Left>
            <Logo src={LogoImg}/>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Architecto sequi expedita praesentium dolorem, magnam velit!
                Nostrum et vero nam nisi.
            </Desc>
            <SocialContainer>
                <SocialIcon color="#2b7de2">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="#d4405c">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="#0667de">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="#d5072d">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Related Links</Title>
            <List>
                <ListItem>e-Journals</ListItem>
                <ListItem>Guest House Booking (for DRDO Officials)</ListItem>
                <ListItem>TDF</ListItem>
                <ListItem>IDST</ListItem>
                <ListItem>ADA</ListItem>
                <ListItem>DRDO VC Booking Portal (Only for DRDO Users)</ListItem>
                <ListItem>DIAT</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>View All</ListItem>
            </List>
            
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Bangalore. Prestige Platina Technology Park Building 2, Block A Bangalore,
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 5642 782
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@laflame.inc
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
        </Top>
        <Bottom>
            <UL>
                <ListItem2>Contact Us</ListItem2>
                <ListItem2>Terms & Conditions </ListItem2>
                <ListItem2>Privacy Policy </ListItem2>
                <ListItem2>Copyright Policy </ListItem2>
                <ListItem2>Hyperlink Policy </ListItem2>
                <ListItem2>Accessibility Statement </ListItem2>
                <ListItem2>Website Policy </ListItem2>
                <ListItem2>Help </ListItem2>
                <ListItem2>STQC Certificate </ListItem2>
                <ListItem2>RTI Third Party Audit </ListItem2>
                <ListItem2>Public Grievances </ListItem2>
                <ListItem2>Website Information Manager </ListItem2>
                <ListItem2>Archives </ListItem2>
            </UL>
            <Bottom2>
                <OtherInfo>Copyright © 2023, DRDO, Ministry of Defence, Government of India</OtherInfo>
            <OtherContainer>
            <OtherInfo>Last Updated: 30/05/2023 </OtherInfo>
            <OtherInfo>Visitors: 24,033,284</OtherInfo>
            </OtherContainer>
            </Bottom2>
        </Bottom>
    </Container>
  )
}

export default Footer