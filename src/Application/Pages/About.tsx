import * as React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Colors from '../Themes/Colors';

const Container = styled.div``;

const Bar = styled.div`
  height: 1vh;
  width: 100%;
  background-color: ${Colors.red};
`;

const Title = styled.h1`
  margin-top: 20vh;
  margin-bottom: 10vh;
  font-size: 72px;
  text-align: center;
`;

const Description = styled.h2`
  font-size: 24px;
  margin-left: 10vw;
  font-weight: normal;
  margin-right: 10vw;
  text-align: center;
  margin-bottom:20vh;
`;

class About extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <Bar />
        <Navbar />
        <Title>Hello, I’m Didier</Title>
        <Description>
          I'm a student, currently finishing my Master's degree in Computer
          Engineering at Faculade de Ciências e Tecnologia. I just recently got
          my Bachelor's degree, on the same area. I love to learn, especially
          new technologies, and I am always trying to develop some personal
          projects in order to improve myself. I currently work at Accenture as a .Net 
          Developer where I help improving a Web Application to facilitate insurance 
          companies on their expertise assessments.
        </Description>
      </Container>
    );
  }
}

export default About;
