import React, { useState } from 'react';
import axios from 'axios';
import './PasswordResetForm.css';

const PasswordResetForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/password-reset', { email });
            setMessage(res.data.message);
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <div className="password-reset-container">
            <h2>Password Reset</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter your email" value={email} onChange={handleChange} />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PasswordResetForm;
