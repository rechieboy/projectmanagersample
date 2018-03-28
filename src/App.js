import React, { Component } from 'react';
import Projects from './Components/Projects';


class App extends Component {
  constructor(){
    super();
    this.state ={
      projects:[
        {
          title:'Business Website',
          category:'Web Design'
        },
        {
          title:'Social App',
          category:'Mobile Development'
        },
        {
          title:'E-Commerce Shopping cart',
          category:'Web Development'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
     	 <Projects projects ={this.state.projects}/>
      </div>
    );
  }
}

export default App;
