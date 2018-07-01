import * as React from 'react';
import styled from 'styled-components';

// const arrow = require('../Assets/Images/Arrow.svg');

const Container = styled.div`
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

class PersonalProjects extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <Title>Personal Projects</Title>
      </Container>
    );
  }
}

export default PersonalProjects;
