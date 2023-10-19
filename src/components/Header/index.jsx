import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-kasa.png';
import styled from 'styled-components'


const NavContainer = styled.nav`
    color: #FF6060;
    font-size: 24px;
    font-weight: 500;
    gap: 60px;
    display: flex;
    align-items: center;
`
const HeaderContainer = styled.nav`
    width: 86.2%;
    margin: auto;
    margin-top: 45px;
    margin-bottom: 50px; 
    display: flex;
    justify-content: space-between;
`
const LogoHeader = styled.img`
    height: 68px;
`
const NavLinkStyled = styled(NavLink)`
    &.active {
        text-decoration: underline; 
    }
`


function Header() {
    return (
        <HeaderContainer>
            <LogoHeader src={logo} alt='kasa' />
            <NavContainer>
                <NavLinkStyled to="/" activeclassname="active">Accueil</NavLinkStyled>
                <NavLinkStyled to="/propos" activeclassname="active">À propos</NavLinkStyled>
            </NavContainer>
        </HeaderContainer>



    )
}

export default Header