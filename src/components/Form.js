import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        emailConfirmation: '',
        emailError: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            emailError: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation
        if (formData.email !== formData.emailConfirmation) {
            setFormData({
                ...formData,
                emailError: 'Emails do not match'
            });
            return;
        }

        // Further email validation (can be improved)
        if (!validateEmail(formData.email)) {
            setFormData({
                ...formData,
                emailError: 'Invalid email format'
            });
            return;
        }

        // Form submission logic goes here
        console.log('Form submitted:', formData);
    };

    const validateEmail = (email) => {
        // Simple email validation (can be improved)
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emailConfirmation">Confirm Email:</label>
                    <input
                        type="email"
                        id="emailConfirmation"
                        name="emailConfirmation"
                        value={formData.emailConfirmation}
                        onChange={handleChange}
                        required
                    />
                </div>
                {formData.emailError && <p style={{ color: 'red' }}>{formData.emailError}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
