import { FooterContainer, FooterWrapper, Icons } from './style';
import { FiGithub } from "react-icons/fi";



const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrapper>
                   <h6 className='h2'>Linguaap</h6>
                <Icons>
                  <a href="https://github.com/ademiralves" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={40} color="#4D498B" />
                  </a>
                </Icons>
                <h6 className='h2'>MMXXII</h6> 
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer