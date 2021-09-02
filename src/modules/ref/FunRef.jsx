// 默认情况下，不能在函数组件上使用 ref 属性 的错误示例
// 如果要在函数组件中使用 ref，你可以使用 forwardRef（可与 useImperativeHandle 结合使用
import * as React from 'react';

function MyFunctionComponent() {
  const textInput = React.useRef(null);
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


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(null);
  }

  componentDidMount() {
    // this.inputRef.current.focusInput();
  }

  // index.js:1 Warning: Each child in a list should have a unique "key" prop.
  render() {
    return (
      <div
        style={{ border: "1px solid gray", padding: "20px", marginTop: "30px" }}
      >
        <h3>Ref use in Function components</h3>
        <MyFunctionComponent ref={this.inputRef} />
      </div>
    );
  }
}

export default Index;