import React from "react";
import validate from '../../utils/inputValidation';

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

export default class TodoTextInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      text: props.initialValue || ''
    }
  }

  componentDidMount() {
    this.input.focus();
    // ReactDom.findDOMNode(this).focus();
  }

  handleBlur = () => {
    if (this.props.saveOnBlur) {
       this.save();
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleKeyDown = (e) => {
  if (this.props.onCancel && e.keyCode === ESC_KEY_CODE) {
      this.props.onCancel();
    } else if (e.keyCode === ENTER_KEY_CODE) {
      this.save();
    }
  }

  save() {
    const text = this.state.text.trim();
    if (validate(text)) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <input ref={(input) => this.input = input}
             className={this.props.className || ''}
             placeholder={this.state.text}
             value={this.state.text}
             onBlur={this.handleBlur}
             onChange={this.handleChange}
             onKeyDown={this.handleKeyDown} />
    );
  }
}