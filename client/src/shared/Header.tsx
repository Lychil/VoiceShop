import styled from 'styled-components';
import { Link } from 'react-router-dom'; //
import favouriteImg from "../images/svg/favorite.svg";
import cartImg from "../images/svg/cart.svg";
import Logo from './Logo';

const Wrapper = styled('header')`
height: 60px;
padding: 0 10px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;
border-left: 1px solid black;
border-right: 1px solid black;
border-radius: 0 0 20px 20px;
`;

const Nav = styled('nav')`
display: flex;
align-items: center;
column-gap: 20px;
`;

const NavItem = styled(Link)`
position: relative;
transition: 0.3s;

&:hover {
    margin-top: -5px;
}
`;

const Icon = styled('img')`
width: 30px;
height: 30px;
`;

const Counter = styled('div')`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
font-size: 10px;
top: 0;
right: 0;
width: 15px;
height: 15px;
border-radius: 50%;
color: white;
background-color: #e35252;
`;

const Header = () => {
    return (
        <Wrapper>
            <Logo />
            <Nav>
                <NavItem to="/cart" title='избранное' >
                    <Icon src={favouriteImg} alt='избранное' />
                    <Counter>
                        <span>0</span>
                    </Counter>
                </NavItem>
                <NavItem to="/favorites" title='корзина'>
                    <Icon src={cartImg} alt='корзина' />
                    <Counter>
                        <span>0</span>
                    </Counter>
                </NavItem>
            </Nav>
        </Wrapper>
    );
};

export default Header;
