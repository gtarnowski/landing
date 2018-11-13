import React, { Component } from 'react';
import TextField from '../TextField';
import TextAreaField from '../TextAreaField';
import './index.css';

const NAME = 'Name';
const LAST_NAME = 'Last Name';
const EMAIL = 'Email';
const MESSAGE = 'Message';
const DEFAULT_TEXTAREA_VALUE = 'Proszę o kontakt';

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
              defaultValue={DEFAULT_TEXTAREA_VALUE}
              name={MESSAGE}
              textArea={{
                cols: 30,
                rows: 7,
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

