import React, { Component } from 'react';
import MainScreen from './Containers/MainScreen';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      createCategoryDialog: false
    }
  }

  render() {
    return (
      <div>
          <MainScreen />
      </div>
    );
  }
}

export default App;
