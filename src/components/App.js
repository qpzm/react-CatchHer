import React from 'react';
import PlusMinus from './PlusMinus';
import Display from './Display';
import StopWatch from './StopWatch';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value : '0',
      top : '50',
      left : '50',
      started : false
    };

    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
    this.updatePos = this.updatePos.bind(this);
    this.start = this.start.bind(this);
    this.finish = this.finish.bind(this);
  }

  incrementValue(){
   if(this.state.started)
     this.setState((prevState) => {value: prevState.value++;});
  }

  decrementValue(){
    this.setState((prevState) => {value: prevState.value--;});
  }

  updatePos(){
    let xpos = Math.round(Math.random()*100);
    let ypos = Math.round(Math.random()*100);
    this.setState( {top: ypos, left: xpos} );
  }

  start(){
      this.setState({started: true});
  }

  finish(){
      this.setState({started: false});
  }

  render(){
      return (
        <div>
          <Display count={this.state.value} />
          <StopWatch start={this.start} finish={this.finish} started={this.state.started}/>
          <PlusMinus increment={this.incrementValue}
                     decrement={this.decrementValue}
                     updatePos={this.updatePos}
                     top = {this.state.top}
                     left = {this.state.left} />
        </div>
      );
  }
}

export default App;
