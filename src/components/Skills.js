import React from 'react'
import styled from 'styled-components';

const Heading = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 30px;
font-weight: 500;
margin-bottom: 20px;
text-align: center;
@media (max-width: 768px){
    text-align: center;
}
`
const List = styled.div`
display: flex;
flex-wrap: wrap;
height: fit-content;
gap: 12px;
width: 60%;
justify-content: center;
align-items: center;
@media (max-width: 768px){
    width: 90%;
}
`
const Item = styled.div`
border: 1px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
border-radius: 16px;
padding: 8px;
&:hover{
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
}
`
const SkillContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: ${({ theme }) => theme.bg};
`
const Skills = () => {
  return (
    <SkillContainer id="skills">
            <Heading>Skills</Heading>
            <List>
                <Item>HTML5</Item>
                <Item>CSS3</Item>
                <Item>Javascript</Item>
                <Item>ReactJS</Item>
                <Item>Redux</Item>
                <Item>NodeJS</Item>
                <Item>REST API</Item>
                <Item>ExpressJS</Item>
                <Item>MongoDB</Item>
                <Item>SQL</Item>
                <Item>MySQL</Item>
                <Item>JDBC</Item>
                <Item>Hibernate</Item>
                <Item>Agile</Item>
                <Item>SDLC</Item>
                <Item>Axios</Item>
                <Item>Git</Item>
                <Item>Github</Item>
                <Item>Figma</Item>
                <Item>Bootstrap</Item>
                <Item>Mongoose</Item>
                <Item>Firebase</Item>
                <Item>Data Structures and Algorithms</Item>
                <Item>Object Oriented Programming</Item>
                <Item>Database Management System</Item>
                <Item>Java</Item>
                <Item>Netlify and Vercel</Item>
            </List>
            </SkillContainer>
  )
}

export default Skills