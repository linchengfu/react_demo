import * as React from 'react';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: 'lin',
        age: 28
      }
    }
  }
  handerClick = () => {
    const { data } = this.state;
    data.age++;
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <div style={{ border: "1px solid gray", padding: "20px" }}>
        <h3>PureComponent</h3>
        <p>{ data.name }</p>
        <p>{ data.age }</p>
        <button onClick={this.handerClick}>age+1</button>
      </div>
    )
  }
}

export default Index;


