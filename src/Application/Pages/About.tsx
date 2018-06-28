import * as React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';

const arrow = require('../Assets/Images/Arrow.svg');

const Container = styled.div`
  height: 100vh;
`;

const Title = styled.h1`
  margin-top: 30vh;
  margin-bottom: 10vh;
  font-size: 72px;
  text-align: center;
  font-weight: bold;
`;

const Description = styled.h1`
  font-size: 24px;
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: center;
`;

const ArrowIcon = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
`;

class About extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <Navbar />
        <Title>Hello, I’m Didier</Title>
        <Description>
          I'm a student, currently finishing my Master's degree in Computer
          Engineering at Faculade de Ciências e Tecnologia. I just recently got
          my Bachelor's degree, on the same area. I love to learn, especially
          new technologies, and I am always trying to develop some personal
          projects in order to improve myself.
        </Description>
        <ArrowIcon src={arrow} />
      </Container>
    );
  }
}

export default About;
