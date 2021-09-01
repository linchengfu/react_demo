import * as React from 'react';
import path from './avatar.jpg'

class Test extends React.Component{
  componentDidMount(){
    console.log('--componentDidMount--')
  }
  render(){
    return (
      <div>
        <img src={path} alt="avatar" width="60px" />
      </div>
    )
  }
}

export default Test;
