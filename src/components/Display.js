import React from 'react';

class Display extends React.Component{
  
  render(){
    return(
      <div>
        <h1>현재 점수: {this.props.count}</h1>
      </div>
    );
  }

} 

export default Display;
