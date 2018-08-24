import * as React from 'react';
import styled from 'styled-components';

import Project from '../Components/Project';

const chip8 = require('../Assets/Images/Chip8.png');
const personalWebsite = require('../Assets/Images/PersonalWebsite.png');

const Container = styled.div``;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 13vh;
  padding-top: 7vh;
  text-align: center;
  font-weight: bold;

  @media (max-width: 1023px) {
    font-size: 40px;
  }
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

    + Rust
    + SDL2"
          image={chip8}
          url="https://github.com/DNDXIII/chip8"
        />

        <Project
          title="Personal Website"
          description="This simple website where I can show off my latest projects and 
work experience.

    + React
    + TypeScript
    + JavaScript
    + HTML 5
    + CSS 3"
          image={personalWebsite}
          // Only display text to the left if the window is large enough
          textLeft={window.innerWidth > 767}
          url="https://github.com/DNDXIII/dndxiii.github.io"
        />

        <Project
          title="Web Crawler"
          description="Script that periodically checks an auction website (OLX) and checks 
if there is any new product that matches the user defined criteria such as price.

    + Python
    + Raspberry Pi"
          image={chip8}
        />

        <Project
          title="Automatic Garden"
          description="Arduino equiped with sensors in order to verify the status of the garden
and water the plants as needed, sending a notification to the users phone.

    + Arduino
    + C/C++
    + IoT
    + IFTTT"
          image={personalWebsite}
          // Only display text to the left if the window is large enough
          textLeft={window.innerWidth > 767}
        />
      </Container>
    );
  }
}

export default PersonalProjects;
