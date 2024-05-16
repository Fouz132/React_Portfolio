import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import website from "../../Assets/Projects/website.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sentimental Analysis"
              description="Sentiment analysis is the process of analyzing digital text to determine if the emotional tone of the message is positive, negative, or neutral. It's often used by businesses to detect sentiment in social data, gauge brand reputation, and understand customers."
              ghLink="https://github.com/Fouz132/Sentiment_Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Django User Authentication"
              description="The combination of user authentication and file upload functionality will allow your Django application to securely manage user accounts and handle uploaded files, making it suitable for a wide range of web applications, such as document management systems, image galleries, or collaborative platforms."
              ghLink="https://github.com/Fouz132/Django_Login"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Restaurant Recommendation System"
              description="Overview This program is a simple restaurant recommendation system with a graphical user interface (GUI) built using Tkinter. It allows users to input a cuisine type, and the system recommends restaurants based on the entered cuisine. The recommendations are sorted by restaurant rating and proximity."
              ghLink="https://github.com/Fouz132/Restaurant-Recommendation-System"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="E Shop Website"
              description="eShop.com is an e-Commerce website that enables users to shop through variety of products(electronic / household / fashion) , add a product to their cart, and checkout. A user can either register their own username and password or Sign in With Google, or they can simply use the Guest Login button to navigate the website without registering."
              ghLink="https://github.com/Fouz132/Navodita_Full_Stack_Ecommernce"
              demoLink="https://eshop-firebase.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
