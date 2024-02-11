import React from 'react'
import styled from 'styled-components';

const EducationContainer = styled.div`
background: ${({ theme }) => theme.bg};
width: 100%;
height: 60vh;
@media (max-width: 768px){
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1800px 320px 0 0;
    margin-top: 15%;
  }
`
const CardsContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 20px 40px;
gap: 24px;
margin-bottom: 20px;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`
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
const Card = styled.div`
background: ${({ theme }) => theme.bgLight};
width: 250px;
height: 122px;
border-radius: 8px;
border: solid #2778cf;
border-width: 4px 0px 0px 0px;
padding: 20px;
&:hover{
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
}
`
const Study = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 18px;
font-weight: 500;
padding: 8px 0px;
`
const Institution = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
padding-top: 10px
`
const Duration = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
padding: 2px 0px;
`
const Marks = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 14px;
padding: 8px 0px;
`
const Education = () => {
  return (
    <EducationContainer id="education">
        <Heading>Education</Heading>
        <CardsContainer>
            <Card>
                <Study>B.E in ECE</Study>
                <Institution>Dr Ambedkar Institute Of Technology, Karnataka</Institution>
                <Duration>August 2016 - October 2020</Duration>
                <Marks>CGPA - 7.64</Marks>
            </Card>
            <Card>
                <Study>Class 12 State</Study>
                <Institution>Bunt's Sangha RNS PU College, Karnataka</Institution>
                <Duration>June 2013 - March 2016</Duration>
                <Marks>Percentage - 46.64%</Marks>
            </Card>
            <Card>
                <Study>Class 10 State</Study>
                <Institution>K.V.V English School, Karnataka</Institution>
                <Duration>March 2003 - March 2013</Duration>
                <Marks>Percentage - 69.92%</Marks>
            </Card>
        </CardsContainer>
    </EducationContainer>
  )
}

export default Education