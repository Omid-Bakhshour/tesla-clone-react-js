import React,{useState} from "react";
import styled from "styled-components";

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';



function Header() {

    const [burgerStatus,setBurgerStatus]=useState(false);
    return (



        <Container>

            <a>
                <img src="/images/logo.svg" alt=""></img>
            </a>

            <Menu>

                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>

            </Menu>

             <RightMenu>

                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>

                <CustomMenu onClick={()=>setBurgerStatus(true)}>
                   
                </CustomMenu>
            
            </RightMenu>

            <BurgerNav show={burgerStatus}>




                
                <CloseWrapper onClick={()=>setBurgerStatus(false)}>
                <CustomClose></CustomClose>

                </CloseWrapper>

                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Cyber Truck</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model Y</a></li>
            </BurgerNav>




        </Container>
    )
}


export  default Header

const Container=styled.div`

min-height: 60px;
position:fixed;
align-items: center;
display:flex;
top:0;
right:0;
left:0;
padding:0 20px;
justify-content: space-between;
z-index:1;

`

const Menu=styled.div`

align-items: center;
display:flex;
flex:1;
justify-content: center;

@media (max-width:768px) {
    display:none;
    
  }



a{
 font-weight: 600;
 text-transform: uppercase;
 padding:0 10px;
 flex-wrap: nowrap;

}

`

const RightMenu=styled.div`

align-items: center;
display:flex;

a{
 font-weight: 600;
 text-transform: uppercase;
 margin-right:10px;
 padding:0 10px;
 flex-wrap: nowrap;

}

`

const CustomMenu=styled(MenuIcon)`

display:flex;
cursor: pointer;

`

const BurgerNav=styled.div`

transform: ${props=>props.show?'translateX(0%)':'translate(100%)'};

transition:transform 0.2s ease-in;

position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);

    a{
        font-weight:600;
    }
}


`

const CloseWrapper=styled.div`

display:flex;
justify-content:flex-end;

`


const CustomClose=styled(CloseIcon)`

cursor: pointer;
`