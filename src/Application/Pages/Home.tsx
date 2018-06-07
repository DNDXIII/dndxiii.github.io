import * as React from 'react';
import styled from 'styled-components';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const bgImage = require('../Assets/Images/bg.jpg');

const Page = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${bgImage});
  height: 100vh;
  width: 100%;
  background-size: cover;
`;

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Page>
          <Navbar />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quo
          accusamus sequi enim iusto laudantium optio doloremque quibusdam magni
          vel autem quasi delectus quia amet porro labore cum, dolore natus?
        </Page>
        <Footer />
      </div>
    );
  }
}

export default Home;
