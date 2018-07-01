import * as React from 'react';
import Home from './Application/Pages/Home';

class App extends React.Component {
  componentDidMount() {
    document.title = 'Didier Dias';
  }

  render() {
    return <Home />;
  }
}

export default App;
