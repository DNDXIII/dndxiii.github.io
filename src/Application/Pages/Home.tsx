import * as React from 'react';

import Footer from '../Components/Footer';
import About from './About';
import Experience from './Experience';
import PersonalProjects from './PersonalProjects';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <About />
        <Experience />
        <PersonalProjects />
        <Footer />
      </div>
    );
  }
}

export default Home;
