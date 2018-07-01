import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../Themes/Colors';

const Container = styled.div`
  background-color: ${Colors.lightGrey};
  height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.a`
  text-decoration: none;
  color: inherit;
  margin-right: 23px;
`;

const FooterText = styled.div`
  margin-top: 23px;
`;

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
        <IconContainer>
          <Icon href="https://github.com/DNDXIII"> Github </Icon>
          <Icon href="https://www.linkedin.com/in/didier-dias-6a7364122/">
            LinkedIn
          </Icon>
        </IconContainer>
        <FooterText>
          website developed and mantained by <b>Didier Dias</b>
        </FooterText>
      </Container>
    );
  }
}

export default Footer;
