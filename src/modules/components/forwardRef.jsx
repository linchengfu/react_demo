import * as React from 'react';

const Son = (props) => {
  const { grandRef } = props;

  return (
    <input ref={grandRef} defaultValue="hello world" />
  )
}

const Parent = (props) => {
  return (
    <div style={{ border: "1px solid gray", padding: "20px" }}>
      <h3>forwardRef</h3>
      <Son grandRef={props.grandRef} />
    </div>
  )
}

const NewParent = React.forwardRef((props, ref) => <Parent grandRef={ref}/>);

class GrandParent extends React.Component {
  node = null;
  componentDidMount() {
    console.log(this.node);
    this.node.focus();
  }
  render() {
    return (
      <div>
        <NewParent ref={(node) => this.node = node}/>
      </div>
    )
  }
}

export default GrandParent;