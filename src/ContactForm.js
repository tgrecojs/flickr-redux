
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//import { ContactForm } from '../actions';
import { SUBMIT_FORM } from './features/gallery/state/reducer'
export const submitForm = ({name = 'tom', email = 'tg@fordham.edu',date = Date.now(), message = 'hi'} = {}) => ({
  type: SUBMIT_FORM,
  payload: {name, email, date, message}
});


const ContactForm = ({ dispatch }) => {
  let name; let message;
  let email;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!name.value.trim()) {
            return;
          }
          dispatch(submitForm({name: name.value, email: email.value, message: message.value}));
          name.value = ''; email.value = ''; message.value = ''
          // route navigation to new page
        }}
      >
      <div>
      <label htmlFor="name">Full Name</label>
        <input name="name" type="text" placeholder="John Doe" ref={node => { name = node; }} />
      </div>
      <div>
      <label htmlFor="email">Email Address</label>
        <input name="email" type="email" placeholder="John.Doe@gmail.com" ref={node => { email = node; }} />
      </div>
      <div>
      <label htmlFor="message">Email Address</label>
        <textarea name="message" type="text" placeholder="John.Doe@gmail.com" ref={node => { message = node; }} />
      </div>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ContactForm);