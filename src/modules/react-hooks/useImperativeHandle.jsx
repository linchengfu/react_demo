import * as React from 'react';

function MyFunctionComponent(props, ref) {
  const textInput = React.useRef(null);
  React.useImperativeHandle(
    ref,
    () => ({
      focus: () => {textInput.current.focus()}
    }),
    [],
  )
  const focusInput = () => {
    textInput.current.focus()
  }
  return (
    <div>
      <input ref={textInput} />
      <input 
        type="button" 
        value="focus" 
        onClick={focusInput}
      />
    </div>
  );
}

const WrapperMyFunctionComponent = React.forwardRef(MyFunctionComponent);

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(null);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  // index.js:1 Warning: Each child in a list should have a unique "key" prop.
  render() {
    return (
      <div
        style={{ border: "1px solid gray", padding: "20px", marginTop: "30px" }}
      >
        <h3>useImperativeHandle</h3>
        <WrapperMyFunctionComponent ref={this.inputRef} />
        <input type="button" value="Father Component focus" onClick={() => this.inputRef.current.focus()} />
      </div>
    );
  }
}

export default Index;