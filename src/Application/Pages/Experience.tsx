import * as React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

import Card from '../Components/Card';
const tcvIcon = require('../Assets/Images/tcv.png');
const timeline = require('../Assets/Images/Group.svg');
const collabIcon = require('../Assets/Images/collab.png');

const Container = styled.div`
  height: 100vh;
  background-color: ${Colors.lightGrey};
`;

const Title = styled.h1`
  padding-top: 5vh;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

const Timeline = styled.img``;

const ContentContainer = styled.h1`
  display: flex;
  padding-left: 20vw;
  padding-right: 20vw;
`;

const CardContainer = styled.h1`
  display: flex;
  flex-direction: column;
  padding-top: 3vh;
`;

class Experience extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <Title>Work Experience</Title>
        <ContentContainer>
          <Timeline src={timeline} />
          <CardContainer>
            <Card
              title="The Code Venture"
              subtitle="Full Stack Developer"
              icon={tcvIcon}
              description="Development of an iPad application to help orchestras to better 
manage their scores and their notes. 
      
      + React Native
      + Javascript
      + Picha"
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
