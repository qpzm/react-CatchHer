import React from 'react';
import ssImg from '../../image/Soonsil.jpg';

class PlusMinus extends React.Component{
  increment(){
    this.props.increment();
  }

  decrement(){
    this.props.decrement();

  }

  updatePos(){
   this.props.updatePos();
  }

  constructor(props){
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updatePos = this.updatePos.bind(this);
  }

  render(){
    let randomPos = {
        position: 'fixed',
        top: this.props.top+ '%',
        left: this.props.left + '%',
        transform: 'translate(-50%, -50%)',
    };
    let siri = {
        background: 'url(' + ssImg + ')',
        backgroundSize: 'cover',
        width: '5rem',
        height: '5rem',
        borderRadius: '50%'
    };
    return(
      <div style={randomPos}>
        <button style={siri} onClick={ () => {this.updatePos(); this.increment();}}></button>
      </div>
    );
  }
}
export default PlusMinus;
