import * as React from 'react';

class FocusInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef(null);
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    this.textInput.current.focus()
  }
  render() {
    return (
      <div>
        <input ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(null);
  }

  componentDidMount() {
    this.inputRef.current.focusTextInput();
  }

  render() {
    return (
      <div style={{ border: "1px solid gray", padding: "20px", marginTop: "30px" }}>
        <h3>Ref use in class components</h3>
        <FocusInput ref={this.inputRef} />
      </div>
    );
  }
}

export default CustomInput;