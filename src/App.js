import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      data: []
    }
  }

  changeHandler(val){
    this.setState({userInput: val})
  }

  render(){
    return (
      <div className="App">
        <input 
          onChange={ e => this.changeHandler(e.target.value)} 
          value={this.state.userInput} 
          type="text" 
          placeholder="yada yada yada"/>
      </div>
    );
  }
}

export default App;
