"use client"

import React, { useState, FormEvent } from "react";
import Link from "next/link";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    textarea: "",
  })

  const onFieldChange = (event: any) => {
    let value = event.target.value;

    setState({ ...state, [event.target.id]: value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state)
  }
  return (
    <main className='py-40'>
      <div className='grid'>
        <div>
          <h1 className='pb-6'>Can we Talk</h1>
          <p>You can find me on my</p>
          <div className='pt-10 grid grid-cols-[1fr_1fr]'>
            <Link href=''>Twitter</Link>
          </div>
        </div>
        <div className="pb-4">
          <form className="" ></form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
