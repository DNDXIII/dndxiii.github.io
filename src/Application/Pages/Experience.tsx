import * as React from 'react';
import styled from 'styled-components';
import Colors from '../Themes/Colors';

import Card from '../Components/Card';

const Container = styled.div`
  height: 100vh;
  background-color: ${Colors.lightGrey};
`;

const Title = styled.h1`
  padding-top: 10vh;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

class Experience extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <Title>Work Experience</Title>
        <Card
          title="The Code Venture"
          subtitle="Full Stack Developer"
          description="Development of an iPad application using React Native, GraphQL and MongoDB. 
    
    + React Native
    + Javascript
    + Picha"
        />
      </Container>
    );
  }
}

export default Experience;
