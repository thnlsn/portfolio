import React from 'react';

const Contact = ({ placeholders, btnText: text }) => {
  const { name, email, message } = placeholders;
  return (
    <div className='contact-container'>
      <form
        className='contact'
        name='contact'
        method='POST'
        data-netlify='true'
      >
        {/* <input type='hidden' name='form-name' value='contact' /> */}
        <input
          className='contact__name'
          type='text'
          name='name'
          placeholder={name}
          required
        />
        <input
          className='contact__email'
          type='email'
          name='email'
          placeholder={email}
          required
        />
        <textarea
          className='contact__message'
          name='message'
          id='message'
          rows='10'
          placeholder={message}
          resize='none'
        ></textarea>
        <button className='contact__submit text-emphasized' type='submit'>
          {text}
        </button>
      </form>
    </div>
  );
};

export default Contact;
