import styled from 'styled-components'
import logo from '../../assets/logo-kasa-footer.png';



const FooterContainer = styled.nav`
    color: white;
    background-color: black;
    font-size: 24px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 209px;
`
const ImgFooter = styled.img`

    width: 122px;
`



function Footer() {
    return (
        <FooterContainer>
            <ImgFooter src={logo} alt='kasa logo' />
            <p>© 2020 Kasa. All rights reserved</p>

        </FooterContainer>
    )
}

export default Footer