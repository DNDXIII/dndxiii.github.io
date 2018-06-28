import * as React from 'react';

import Footer from '../Components/Footer';
import About from './About';
import Experience from './Experience';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <About />
        <Experience />
        <Footer />
      </div>
    );
  }
}

export default Home;
