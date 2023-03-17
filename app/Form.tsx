"use client";

import React, { useState, FormEvent } from "react";

function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const onFieldChange = (event: any) => {
    let value = event.target.value;

    setState({ ...state, [event.target.id]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state)
  };

  return (
    <main>
      <form className='' onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' onChange={onFieldChange} />
        </div>
        <div className='field'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' onChange={onFieldChange} />
        </div>
        <div className='textfield'>
          <label htmlFor='text'>Message:</label>
          <textarea
            name='textarea'
            id='textarea'
            cols={30}
            rows={10}
            placeholder='Write me here'
          ></textarea>
          <input type='email' id='email' onChange={onFieldChange} />
        </div>
        <button type='submit'>Send</button>
      </form>
    </main>
  );
}

export default Form;
