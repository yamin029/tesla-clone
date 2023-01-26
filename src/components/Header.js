import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/cars/CarsSlice';

const Header = () => {
  const cars = useSelector(selectCars)
  const [sideBar, setSideBar] = useState(false);
  return (
    <Container>
      <a href='www.google.com'>
        <img src="/images/logo.svg" alt="Tesla" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => <a href="#" key={index}><p>{car}</p></a>)}
      </Menu>
      <ExtraInformation>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </ExtraInformation>
      <RightMenu>
        <CustomMenu onClick={() => setSideBar(!sideBar)}></CustomMenu>
      </RightMenu>
      <BurgerNav show={sideBar}>
        <CloseWrapper>
          <CustomCloseIcon onClick={() => setSideBar(!sideBar)}></CustomCloseIcon>
        </CloseWrapper>
        {cars && cars.map((car, index) => <li key={index}><a href='#' key={index}>{car}</a></li>)}
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing </a></li>
        <li><a href='#'>Existing </a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display: flex;
justify-content: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}
@media(max-width: 786px){
  display: none;
}
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  margin-right: 10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
top:0;
right:0;
bottom:0;
background-color:white;
width: 300px;
z-index:2;
list-style: none;
padding:20px;
display: flex;
flex-direction: column;
align-items: start;
// display: ${props => !props.show && 'none'};
transition: all 0.5s ease-in-out;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  font-weight: 600;
}
`
const CustomCloseIcon = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
`

const ExtraInformation = styled.div`
position: absolute;
right: 5rem;
a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  margin-right: 10px;
}
`