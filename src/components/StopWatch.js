import React from 'react';

class StopWatch extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      miliSecondsLeft: 10000
    }
    this.handleStartClick = this.handleStartClick.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.start = this.start.bind(this);
    this.finish = this.finish.bind(this);
  }

  start(){
    this.props.start();
  }

  finish(){
    this.props.finish();
  }

  handleStartClick(){
    if(this.state.miliSecondsLeft > 0){
      this.start();
      this.downClock = setInterval( () =>
                                   {this.setState((prevState) => {prevState.miliSecondsLeft-=10;});
                                   if(this.state.miliSecondsLeft == 0){
                                     this.finish();
                                     clearInterval(this.downClock);
                                   }
                       } , 10);
    }
  }

  formatTime(miliSeconds){
    let m = parseInt(miliSeconds / 60000);
    let s = parseInt(miliSeconds%60000/1000);
    let ms = parseInt(miliSeconds%1000/10);
    return `${s} : ${ms}`;
  }

  render(){
    return(
      <div>
        <h1>{this.formatTime(this.state.miliSecondsLeft)}</h1>
        <button onClick={this.handleStartClick}>시작!</button>
        <a href="/"><button>다시하기</button></a>
      </div>
    );
  };
}

export default StopWatch;
