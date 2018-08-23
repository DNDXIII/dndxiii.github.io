import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../Themes/Colors';

const Nav = styled.nav`
  background-color: ${Colors.white};
  height: 70px;
  width: 100%;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  float: right;
  list-style: none;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 20px;

  @media (max-width: 1023px) {
    margin: 20px 12px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: inherit;

  /*for slow color change*/
  -webkit-transition: color 0.2s ease-out;
  -moz-transition: color 0.2s ease-out;
  -o-transition: color 0.2s ease-out;
  -ms-transition: color 0.2s ease-out;
  transition: color 0.2s ease-out;
  &:hover {
    color: ${Colors.red};
  }
`;

class Navbar extends React.Component<{}, {}> {
  render() {
    return (
      <Nav>
        <div style={{ width: '90%' }}>
          <List>
            <ListItem>
              <Link href={'#experience'}>experience</Link>
            </ListItem>
            <ListItem>
              <Link href={'#projects'}>projects</Link>
            </ListItem>
            <ListItem>
              <Link href={'#contact'}>contact</Link>
            </ListItem>
          </List>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
