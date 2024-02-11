import React, { useState } from 'react'
import styled from 'styled-components';
import '../index.css';
import About from '../components/About.js';
import Projects from '../components/Projects.js';
import Skills from '../components/Skills.js';
import Education from '../components/Education.js';
import Contact from '../components/Contact.js';
import Welcome from '../components/Welcome'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
background: ${({ theme }) => theme.bg};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  height: 70px;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 70px;
  gap: 50px;
  font-size: 18px;
  @media (max-width: 768px){
    display: block;
    flex-direction: column;
    width: 100px;
    padding: 10px 10px;
    z-index: 6;
  }
`
const Nav = styled.div`
padding: 8px 20px;
border-radius: 4px;
textDecoration: none;
  &:hover{
    background-color: ${({ theme }) => theme.primary};
  }
`
const Button = styled.div`
cursor: pointer;
`
const Home = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <Container>
      <NavContainer>
        <Button onClick={() => setShowNav(!showNav)}><MenuIcon sx={{ color: "white" }} /></Button>
        {showNav ?
          <>
            <NavLink to='/' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Home</Nav></NavLink>
            <a href='#about' style={{ color: 'inherit', textDecoration: 'none' }}><Nav>About</Nav></a>
            <a href="#skills" style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Skills</Nav></a>
            <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Projects</Nav></a>
            <a href="#education" style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Education</Nav></a>
            <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}><Nav>Contact</Nav></a>
          </>
          :
          <></>
        }
      </NavContainer>
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact/>
    </Container>
  )
}

export default Home