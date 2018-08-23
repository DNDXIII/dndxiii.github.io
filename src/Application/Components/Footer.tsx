import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../Themes/Colors';

const github = require('../Assets/Images/Github.svg');
const linkedIn = require('../Assets/Images/LinkedIn.svg');

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

const IconLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin-right: 23px;
`;

const Icon = styled.img`
  max-height: 50px;
  max-width: 50px;
`;

const FooterText = styled.div`
  margin: 24px 5vw 0px; 
  text-align: center;
  white-space: pre-wrap;
`;

const Email = styled.a`
  color: inherit;
`;

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <Container id="contact">
        <IconContainer>
          <IconLink href="https://github.com/DNDXIII">
            <Icon src={github} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/didier-dias-6a7364122/">
            <Icon src={linkedIn} />
          </IconLink>
        </IconContainer>
        <FooterText>
          Send me an email at:
          <Email href="mailto:didier.n.dias@gmail.com" target="_top">
            didier.n.dias@gmail.com
          </Email>
          <br />
          Website developed and mantained by <b>Didier Dias</b>
        </FooterText>
      </Container>
    );
  }
}

export default Footer;
