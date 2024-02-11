import React from 'react'
import styled from 'styled-components'
import Profile from '../images/Hemanth.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from 'react-router-dom';

const AboutContainer = styled.div`
background: ${({ theme }) => theme.bg};
width: 100%;
height: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 0px;
@media (max-width: 768px){
    padding: 40px 0px;
    height: 180vh;
  }
`
const MainInfo = styled.div`
display: flex;
flex-direction: row;
gap: 150px;
text-align: center;
justify-content: center;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`
const WrittenInfo = styled.div`
display: flex;
width: 40%;
flex-direction: column;
justify-content: center;
gap: 30px;
@media (max-width: 768px){
    width: 80%;
  }
`
const Name = styled.div`
font-size: 36px;
font-weight: 500;
color: ${({ theme }) => theme.text_primary};
`
const Description = styled.div`
font-size: 20px;
color: ${({ theme }) => theme.text_secondary};
`
const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Image = styled.img`
border-radius: 100%;
width: 250px;
height: 250px;
object-fit: cover;
@media (max-width: 768px){
    width: 200px;
    height: 200px;
  }
`
const Contacts = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
margin: 20px 0px;
justify-content: center;
align-items: center;
`
const Contact = styled.div`
background-color: ${({ theme }) => theme.primary};
border-radius: 100%;
width: 36px;
height: 36px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
}
`

const Resume = styled.div`
background: ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.text_primary};
padding: 12px;
border-radius: 12px;
font-size: 16px;
&:hover{
    border: 1px solid ${({ theme }) => theme.primary+99};
}
`
const About = () => {
    return (
        <AboutContainer id="about">
            <MainInfo>
                <ImageContainer>
                    <Image src={Profile} />
                </ImageContainer>
                <WrittenInfo>
                    <Name>HEMANTH KUMAR</Name>
                    <Description>"Hello there! I'm a Web Developer experienced in HTML, CSS, JavaScript, React.js, Node.js, SQL, MongoDB, Express.js, and more. With a solid foundation in front-end development, I create engaging and interactive user interfaces. I'm proficient in React.js, enabling me to build dynamic and scalable web applications. Additionally, my back-end skills encompass Node.js, Express, SQL, and MongoDB, allowing me to develop robust server-side functionalities and handle data management efficiently. I'm passionate about crafting seamless web experiences and constantly staying up-to-date with the latest technologies and best practices. And very proficient in Java and OOPS concepts. Let's collaborate and bring your ideas to life on the web!"</Description>
                    <Contacts>
                        <a href="https://www.linkedin.com/in/hemanth-kumar-5332731b5/">
                            <Contact>
                                <LinkedInIcon sx={{ color: "white", fontSize: "24px" }} />
                            </Contact>
                        </a>
                        <a href="https://github.com/aim9886">
                            <Contact>
                                <GitHubIcon sx={{ color: "white", fontSize: "24px" }} />
                            </Contact>
                        </a>
                        <a href="https://www.instagram.com/hemanth14_5">
                            <Contact>
                                <InstagramIcon sx={{ color: "white", fontSize: "24px" }} />
                            </Contact>
                        </a>
                        <a href="https://www.facebook.com/hemanthkumar.hemu.77">
                            <Contact>
                                <FacebookIcon sx={{ color: "white", fontSize: "24px" }} />
                            </Contact>
                        </a>
                        <a href="https://twitter.com/aimanth9886">
                            <Contact>
                                <TwitterIcon sx={{ color: "white", fontSize: "24px" }} />
                            </Contact>
                        </a>
                    </Contacts>
                    <Link to="https://drive.google.com/file/d/1tTspa7NBIw76jkVNbP18gZMMjLPzwDvt/view?usp=drive_link" style={{textDecoration: "none"}}><Resume>Link to Resume</Resume></Link>
                </WrittenInfo>
            </MainInfo>
        </AboutContainer>
    )
}

export default About
