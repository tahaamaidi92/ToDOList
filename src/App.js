import React, { Component } from 'react';
import Input from './component/input.js'
import Main from './component/main.js'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Input />
        <Main />
      </div>
    );
  }
}
 
export default App;