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
    justify-content: center;
    gap: 29px;
    height: 209px;
    margin-top: 50px;
    @media (max-width: 375px) {
        font-size: 12px;
        gap: 15px;
        margin-top: 22px;
    }
`
const ImgFooter = styled.img`

    width: 122px;
`
const TextFooter = styled.p`
  @media (max-width: 375px) {
    width: 122px;
    text-align: center;
    }
    
`




function Footer() {
    return (
        <FooterContainer>
            <ImgFooter src={logo} alt='kasa logo' />
            <TextFooter>© 2020 Kasa. All rights reserved</TextFooter>

        </FooterContainer>
    )
}

export default Footer