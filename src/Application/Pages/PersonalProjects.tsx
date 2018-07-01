import * as React from 'react';
import styled from 'styled-components';

import Project from '../Components/Project';
const chip8Image = require('../Assets/Images/Chip8.png');

const Container = styled.div``;

const Title = styled.h1`
  font-size: 48px;
  padding-bottom: 5vh;
  text-align: center;
  font-weight: bold;
`;

class PersonalProjects extends React.Component<{}, {}> {
  render() {
    return (
      <Container id="projects">
        <Title>Personal Projects</Title>
        <Project
          title="Chip8 Emulator"
          description="Emulator that simulates all instructions of the Chip8 computer
and can play every game that the original can.

    + Rust"
          image={chip8Image}
        />

        <Project
          title="Chip8 Emulator"
          description="Emulator that simulates all instructions of the Chip8 computer
and can play every game that the original can.

    + Rust"
          image={chip8Image}
          textLeft={true}
        />
      </Container>
    );
  }
}

export default PersonalProjects;
