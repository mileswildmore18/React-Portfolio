import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    //A State to manage form inputs and submission status
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');
    const [lastBlurredField, setLastBlurredField] = useState('');
    
    useEffect(() => {
        if (lastBlurredField) {
            const fieldElement = document.getElementById(lastBlurredField);
            if (fieldElement && fieldElement.value.trim() === '') {
                alert(`Please fill out the ${lastBlurredField} field.`);
            }
        }
    }, [lastBlurredField]);

    //The function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefult();
        // A validation check to make sure the boxes are filled out
        if (!name || !email || !message) {
            setSubmitStatus('Please fill out all fields.');
            return;
        }

        //Sending the data to the backend service if there is one
        alert('Form submitted successfully')
        setSubmitStatus('Your message has been sent.');

        //Reseting form after successful submission
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleBlur = (field) => {
        if (!document.getElementById(field).value.trim()) {
            setLastBlurredField(field);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => handleBlur('name')}
                required
                className='input-field'
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur('email')}
                required
                className='input-field'
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => handleBlur('message')}
                required
                className='input-message'

            />

            <button className='click' type="submit">Submit</button>

            {submitStatus && <p>{submitStatus}</p>}
        </form>
    );
};

export default ContactForm;