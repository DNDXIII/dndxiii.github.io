import * as React from 'react';

import Footer from '../Components/Footer';
import About from './About';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <About />
        <Footer />
      </div>
    );
  }
}

export default Home;
