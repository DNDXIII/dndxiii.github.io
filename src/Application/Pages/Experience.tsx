import * as React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

import Card from '../Components/Card';
const tcvIcon = require('../Assets/Images/tcv.png');
const timeline = require('../Assets/Images/Group.svg');
const collabIcon = require('../Assets/Images/collab.png');

const Container = styled.div`
  background-color: ${Colors.lightGrey};
`;

const Title = styled.h1`
  padding-top: 7vh;
  margin-bottom: 10vh;
  font-size: 48px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 1023px) {
    font-size: 40px;
  }
`;

const Timeline = styled.img`
  margin-bottom: 10vh;

  margin-right: 100px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class Experience extends React.Component<{}, {}> {
  render() {
    return (
      <Container id="experience">
        <Title>Work Experience</Title>
        <ContentContainer>
          <Timeline src={timeline} />
          <CardContainer>
            <Card
              title="The Code Venture"
              subtitle="Full Stack Developer"
              icon={tcvIcon}
              description="Development of an iPad application to help orchestras to better 
manage their scores and their notes by being able to take notes 
and synchronize the sheets between themselves.
      
      + React Native
      + JavaScript
      + NodeJs"
            />
            <Card
              title="Novabase/Collab"
              subtitle="Full Stack Developer"
              icon={collabIcon}
              description="Development of a NGINX server manager that could make changes
to the configurations and push them to the servers in production.
      
      + React 
      + Javascript
      + C#
      + .Net Core
      + MVC"
            />
          </CardContainer>
        </ContentContainer>
      </Container>
    );
  }
}

export default Experience;
