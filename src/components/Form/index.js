import React, { Component } from 'react';
import TextField from '../TextField';
import TextAreaField from '../TextAreaField';
import './index.css';

const NAME = 'Name';
const LAST_NAME = 'Last Name';
const EMAIL = 'Email';
const MESSAGE = 'Message';
const DEFAULT_TEXTAREA_VALUE = 'Please contact with me';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form className="form-container">
          <div className="form-row">
            <TextField
              name={NAME}
            />
          </div>
          <div className="form-row">
            <TextField
              name={LAST_NAME}
            />
          </div>
          <div className="form-row">
            <TextField
              name={EMAIL}
              type="email"
            />
          </div>
          <div className="form-row">
            <TextAreaField
              name={MESSAGE}
              rows={3}
              cols={30}
            />
          </div>
          <div className="form-row">
            <button className="Button block">Send Now</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
