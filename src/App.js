import React, {Component} from 'react';
import './App.css';
import data from './data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      data: []
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component did update is firing")
  }

  componentDidMount(){
    // request external data
    console.log("COMPONENT MOUNTED")
    this.setState({
      data: data
    })
  }

  changeHandler(val){
    this.setState({userInput: val})
  }

  render(){
    console.log("RENDER FIRED")
    console.log("DATA: ", this.state.data)
    const mappedData = this.state.data.map( person => {
      return <div key={person.id}>{person.name.first} {person.name.last}'s favorit giant robot is {person.favGiantRobot}</div>
    })
    return (
      <div className="App">
        <input 
          onChange={ e => this.changeHandler(e.target.value)} 
          value={this.state.userInput} 
          type="text" 
          placeholder="yada yada yada"/>
          {mappedData}
      </div>
    );
  }
}

export default App;
