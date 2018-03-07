import * as React from 'react';
import styled from 'styled-components';

import Navbar from '../Components/Navbar';
const bgImage = require('../Assets/Images/bg.jpg');

const Page = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${bgImage});
  height: 100vh;
  width: 100vw;
  background-size: cover;
`;

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <Page>
        <Navbar />
      </Page>
    );
  }
}

export default Home;
