import React from 'react';
import styled from 'styled-components';
import portfolio from '../images/portfolio.jpg'

const HomeContainer = styled.div`
background: ${({ theme }) => theme.bg};
width: 100%;
height: 100vh;
display: flex;
justify-content: flex-start;
align-items: flex-start;
`
const Content = styled.div`
width: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
`
const ImageContainer = styled.img`
width: 850px;
height: 500px;
@media (max-width: 768px){
    margin: 60px;
    width: 1000px;
  }
`
const Intro = styled.div`
position: absolute;
text-align: center;
white-space: pre-line;
top: 46%;
left: 24%;
font-size: 50px;
color: ${({ theme }) => theme.text_primary};
@media (max-width: 768px){
    top: 26%;
    left: 4%;
  }
`
const Welcome = () => {
  return (
    <HomeContainer>
        <Content>
            <ImageContainer src={portfolio}/>
            <Intro>
                HELLO, I'M HEMANTH KUMAR,<br/>
                A WEB DEVELOPER
            </Intro>
        </Content>
    </HomeContainer>
  )
}

export default Welcome