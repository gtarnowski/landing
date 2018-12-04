import React, { Component } from 'react';
import TextField from '../TextField';
import TextAreaField from '../TextAreaField';
import './index.css';

const NAME = 'Name';
const LAST_NAME = 'Last Name';
const EMAIL = 'Email';
const MESSAGE = 'Message';

class Form extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    message: '',
  };

  onChange = ({ target: { value } }, fieldName) => this.setState({ [fieldName]: value });

  render() {
    const { name, lastName, email, message } = this.state;
    return (
      <div className="Form">
        <form className="form-container">
          <div className="form-row">
            <TextField name={NAME} onChange={this.onChange} value={name} />
          </div>
          <div className="form-row">
            <TextField name={LAST_NAME} onChange={this.onChange} value={lastName} />
          </div>
          <div className="form-row">
            <TextField name={EMAIL} type="email" onChange={this.onChange} value={email} />
          </div>
          <div className="form-row">
            <TextAreaField name={MESSAGE} rows={3} cols={30} onChange={this.onChange} value={message} />
          </div>
          <div className="form-row">
            <button type="button" className="Button block">
              Send Now
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
