'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ type: '', message: '' });

    const onSubmit = async (data) => {
        setLoading(true);
        setAlert({ type: '', message: '' });

        try {
            const res = await axios.post('/api/contact-form-data', data);

            if (res.status === 200) {
                setAlert({ type: 'success', message: 'Message sent successfully!' });
                reset();
            } else {
                setAlert({ type: 'danger', message: 'Something went wrong. Please try again later.' });
            }
        } catch (error) {
            setAlert({ type: 'danger', message: 'Server error. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {alert.message && (
                <div className={`alert alert-${alert.type} rounded-0`} role="alert">
                    {alert.message}
                </div>
            )}

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control inp rounded-0"
                    placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <small className="text-danger">{errors.name.message}</small>}
            </div>

            <div className="mb-3">
                <input
                    type="email"
                    className="form-control inp rounded-0"
                    placeholder="Email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                    })}
                />
                {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>

            <div className="mb-3">
                <input
                    type="tel"
                    className="form-control inp rounded-0"
                    placeholder="Mobile"
                    {...register('phone', {
                        required: 'Phone is required',
                        pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: 'Enter a valid Indian mobile number',
                        }

                    })}
                />
                {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control inp rounded-0"
                    placeholder="Subject"
                    {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && <small className="text-danger">{errors.subject.message}</small>}
            </div>

            <div className="mb-3">
                <textarea
                    className="form-control inp-text rounded-0"
                    rows="5"
                    placeholder="Message"
                    {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <small className="text-danger">{errors.message.message}</small>}
            </div>

            <button
                type="submit"
                className="btn submit_btn rounded-0 font-semibold font-pop py-3 w-100"
                disabled={loading}
            >
                {loading ? 'Sending...' : 'Submit Message'}
            </button>
        </form>
    );
};

export default ContactForm;
