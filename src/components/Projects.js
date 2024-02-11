import React from 'react'
import styled from 'styled-components';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';
import Newslist from '../images/Newslist.png'
import Youtube from '../images/Youtube.png'
import Blog from '../images/Blog.png'
import Student from '../images/Student.png'
import Job from '../images/Job.png'
import Finding from '../images/Finding.png'
import ChatApp from '../images/ChatApp.png';
import ObjectDetection from '../images/object-detection.png'
import Yoga from '../images/Yoga.png'
import ShoppingCart from '../images/ShoppingCart.png';
import BookFinder from '../images/BookFinder.png';
import Todo from '../images/Todo.png';

const ProjectsContainer = styled.div`
background: ${({ theme }) => theme.bg};
width: 100%;
height: fit-content;
padding: 100px 0px;
justify-content: center;
@media (max-width: 768px){
    padding: 80px 0px;
    height: 450vh;
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
const Cards = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 20px 0px;
gap: 24px;
margin-bottom: 20px;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const Card = styled.div`
width: 300px;
height: 360px;
border: solid #2778cf;
border-width: 4px 0px 0px 0px;
border-radius: 8px;
padding: 14px;
background-color: ${({ theme }) => theme.bgLight};
&:hover{
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
}
`
const ProjectName = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 24px;
font-weight: 600;
display: flex;
align-items: center;
justify-content: center;
`
const Upper = styled.div`
position: relative;
height: 170px;
`
const PrimaryDetails = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 4%;
left: 4%;
width: 90%;
`
const Name = styled.div`
display: flex;
justify-content: space-between;
`
const Lower = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height: 180px;
`
const Date = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
font-weight: 600;
margin: 4px 0px;
`
const Tags = styled.div`
display: flex;
flex-wrap: wrap;
gap: 6px;
width: 100%;
padding: 20px 0px 18px 0px;
`
const Tag = styled.div`
padding: 6px;
border-radius: 10px;
background-color: #99b4d1;
font-size: 14px;
color: ${({ theme }) => theme.bgLight};
`
const Description = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
`
const ProjectImage = styled.div`
width: 100%;
height: 170px;
border-radius: 14px 14px 14px 14px;
`

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <Heading>Projects</Heading>
            <Cards>

                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Newslist})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>News App</ProjectName>
                                <Link to='https://news-list-grid-cy3j.vercel.app/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>Oct 2023 - Nov 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Firebase</Tag>
                            <Tag>Grid & List View</Tag>
                            <Tag>Wishlist</Tag>
                        </Tags>
                        <Description>Developed a React-based news app with Firebase integration, allowing users to register and log in for personalized news preferences using Firebase authentication. Integrate an open-source news API, such as newsapi.org, to fetch the latest articles and display them in both list and two-column grid views, offering users a toggle button to switch between the two.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ObjectDetection})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Object Detection</ProjectName>
                                <Link to='https://github.com/aim9886/Object-Detection'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>Jan 2023 - Feb 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Mediapipe</Tag>
                            <Tag>Artificial Intelligence</Tag>
                        </Tags>
                        <Description>Built with ReactJS, this web application is designed to provide a seamless and user-friendly experience for detecting objects from both images and webcam feeds. To achieve this functionality, I utilised the Mediapipe API.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Yoga})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Yoga Form</ProjectName>
                                <Link to='https://join-yoga.netlify.app/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>June 2022 - July 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Health</Tag>
                            <Tag>Yoga</Tag>
                            <Tag>Get Registered</Tag>
                        </Tags>
                        <Description>This web application is designed to make the process of registering for yoga classes easier for both users and admin personnel. The backend of the app uses MySQL to store user, batch, and payment data, which enables admins to manage batch scheduling and payment details with ease.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ShoppingCart})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Shopping Cart With Stripe Payment</ProjectName>
                                <Link to='https://shopping-cart-stripe-payment.vercel.app/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>July 2023 - August 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Redux Js</Tag>
                            <Tag>Stripe</Tag>
                            <Tag>BootStrap</Tag>
                        </Tags>
                        <Description>The shopping cart project features an intuitive interface, enabling users to effortlessly manage their cart, mark favourites, and remove items. With seamless integration with Stripe, users can make secure transactions using various payment methods, complemented by tokenization for data security.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${ChatApp})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Chat App</ProjectName>
                                <Link to='https://react-chat-app-aim9886.vercel.app/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>Nov 2022 - Dec 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Connect</Tag>
                            <Tag>Fun</Tag>
                            <Tag>Firebase</Tag>
                        </Tags>
                        <Description>Built with ReactJS and Firebase, this web application provides a simple and user-friendly platform for chatting with friends and new acquaintances. Using Firestore Database for the chats collection, users can easily send and receive messages in real-time.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BookFinder})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>Book Finder</ProjectName>
                                <Link to='https://book-finder-aim9886.vercel.app/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>October 2022 - November 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>BookWorm</Tag>
                            <Tag>e-book</Tag>
                            <Tag>API</Tag>
                        </Tags>
                        <Description>Search and find the desired book and see price details. Used React Js for the Web App. Used Google Books API and Axios for fetching data of different books. It's a web app in which we can search books, see the prices and buy the e-book from Google books.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                    <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Todo})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                            <ProjectName>To-Do List</ProjectName>
                                <Link to='https://todolist-aim9886.vercel.app/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>March 2022 - April 2022</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Work</Tag>
                            <Tag>To Do</Tag>
                            <Tag>Local Storage</Tag>
                        </Tags>
                        <Description>Used Local Storage for storing Todo Data. Used React Js for the Web App. Edit, Delete, New Todo functionality are present. We can add todo tasks that are to be done, all data are store in browser's local storage and so the data remains safe if we close the browser.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Youtube})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Youtube Clone</ProjectName>
                                <Link to='https://react-youtube-clone-green.vercel.app/'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>March 2023 - April 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Material UI</Tag>
                            <Tag>env</Tag>
                            <Tag>player</Tag>
                        </Tags>
                        <Description>Developed a YouTube clone using React.js, integrating YouTube API for fetching video data and enabling search functionalities. Implemented Redux for efficient state management, ensuring. Successfully deployed the application on platforms like Netlify for public access, showcasing proficiency in development, design, state management, testing, and deployment processes.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Blog})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Blog App</ProjectName>
                                <Link to='https://github.com/aim9886/mern-blog-backend'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>Jan 2023 - March 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>MERN</Tag>
                            <Tag>UUID</Tag>
                            <Tag>Nodemailer</Tag>
                            <Tag>Slugify</Tag>
                        </Tags>
                        <Description>Developed fully functional MERN stack blogging application. Implemented user, CRUD, & media. Enhanced user engagement with features like liking, commenting, and reading lists. Implemented skeleton effect</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Student})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Student Management System</ProjectName>
                                <Link to='https://github.com/aim9886/mern-student'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>Dec 2023 - Jan 2024</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>MERN</Tag>
                            <Tag>BootStrap</Tag>
                            <Tag>Mongoose</Tag>
                            <Tag>Axios</Tag>
                        </Tags>
                        <Description>Developed a robust MERN Student Management System with features including user authentication, real-time communication, and data visualization. Implemented a user-friendly interface for students, faculty, and administrators, enhancing efficiency in tasks such as scheduling, grading, and communication within educational institutions.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Finding})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Finding Everything</ProjectName>
                                <Link to='https://github.com/aim9886/finding-nemo-frontend'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>May 2023 - Jun 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>MERN</Tag>
                            <Tag>Emotion</Tag>
                            <Tag>Spinner</Tag>
                        </Tags>
                        <Description>Developed fully functional MERN finding everything application, facilitating connections between individuals who have lost or found items. Users can effortlessly create, manage, and browse listings, complete with detailed descriptions and images. The integration of an interactive map enhances the visibility of lost/found items, streamlining the retrieval process.</Description>
                    </Lower>
                </Card>

                <Card>
                    <Upper>
                        <ProjectImage>
                            <div style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Job})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '6px',
                                width: '100%',
                                height: '100%',
                            }} />
                        </ProjectImage>
                        <PrimaryDetails>
                            <Name>
                                <ProjectName>Job Quiz</ProjectName>
                                <Link to='https://github.com/aim9886/react-quiz'><LinkIcon sx={{ color: "#b1b2b3" }} /></Link>
                            </Name>
                            <Date>Feb 2023 - March 2023</Date>
                        </PrimaryDetails>

                    </Upper>
                    <Lower>
                        <Tags>
                            <Tag>Tailwind css</Tag>
                            <Tag>Framer Motion</Tag>
                            <Tag>Firebase hooks</Tag>
                            <Tag>Vite</Tag>
                        </Tags>
                        <Description>React Quizzy is a dynamic quiz application built with React.js, Vite, and Tailwind CSS. Users can sign up, log in securely, and select from a variety of quiz categories including general knowledge, science, history, and technology.</Description>
                    </Lower>
                </Card>

            </Cards>
        </ProjectsContainer>
    )
}

export default Projects