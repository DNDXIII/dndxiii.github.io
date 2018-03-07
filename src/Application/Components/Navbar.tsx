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
  margin: 23px;
  margin-right: 0px;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: inherit;
  &::after {
    content: '';
    display: block;
    width: 0px;
    border-radius: 3px;
    height: 3px;
    background-color: ${Colors.orange};
    transition: all ease-in-out 150ms;
  }
  &:hover::after {
    width: 100%;
  }
`;

class Navbar extends React.Component<{}, {}> {
  render() {
    return (
      <Nav>
        <div style={{ width: '90%' }}>
          <List>
            <ListItem>
              <Link href={'#about'}>about me</Link>
            </ListItem>
            <ListItem>
              <Link href={'#projects'}>projects</Link>
            </ListItem>
            <ListItem>
              <Link href={'#contacts'}>contacts</Link>
            </ListItem>
          </List>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
