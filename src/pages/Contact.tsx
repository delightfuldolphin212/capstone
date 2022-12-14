import React, { ChangeEvent, FormEvent, useRef } from "react";
import axios from 'axios';
import { AwesomeButton } from "react-awesome-button";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type FormState = {
  email: string;
  name: string;
  message: string;
}

type ServiceMessage = {
  class: string;
  text: string;
}
export default function Contact() {
  const formID = '2MCOB57k';
  const formSparkUrl = 'https://submit-form.com/2MCOB57k';
  const recaptchaKey = '6Lc0tnojAAAAAM7Su518-jC2R7NZ8dTBbMwzMFv1';
  const recaptchaRef = useRef<any>();

  const intialFormState = {
    email: '',
    name: ' ',
    message: ' ',
  };
  
  const [formState, setFormState] = useState<FormState>(intialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const [recaptchaToken, setrecaptchaToken] = useState<string>();

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () =>{
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: 'green',
        text: 'Thanks, someone will be in touch'
      });
      setFormState(intialFormState);
      recaptchaRef.current.reset();
    } catch(error) {
      console.log(error);
      setMessage({
        class: 'red',
        text: 'Sorry, there was a problem. Please try again.'
      });
    }

  };

  const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = event.target;
    const formKey = id as keyof FormState;
    const updatedFormState = { ...formState};
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token: string | null) => {
    setrecaptchaToken(token as string);
  };
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1><span>Contact us below</span></h1>
        {message && <div>{message.text}</div>}
        <form onSubmit={submitForm}>
          <div className="contact-box">
            <label htmlFor="name">Name</label>
            <input
             onChange={updateFormControl}
             type="text" 
             id="name" 
             value={formState.name}/>
          </div>
          <div className="contact-box">
            <label htmlFor="email">Email</label>
            <input
             onChange={updateFormControl}
             type="text" 
             id="email" 
             value={formState.email}/>
          </div>
          <div className="contact-box">
            <label htmlFor="message">Message</label>
            <textarea id="message" 
            onChange={updateFormControl}
            value={formState.message}
            ></textarea>
          </div>

          <ReCAPTCHA 
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
          <div className="contact-box">
          <button disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
