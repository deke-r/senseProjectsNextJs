'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/PopupForm.module.css';
import axios from 'axios';

export default function PopupForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [loading, setLoadingData] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const isSubmitted = localStorage.getItem('popupFormSubmitted');
    if (isSubmitted) return;

    const onScroll = () => {
      if (window.scrollY > 300) {
        setShowPopup(true);
        setTimeout(() => setAnimateIn(true), 100);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onSubmit = async (data) => {
    setLoadingData(true);
    setAlert({ type: '', message: '' });

    try {
      const res = await axios.post('/api/pop-up-form-data', data);

      if (res.status === 200 && res.data.success) {
        setAlert({ type: 'success', message: 'Message sent successfully!' });
        localStorage.setItem('popupFormSubmitted', 'true');
        setFormSubmitted(true);
        reset();
        setTimeout(() => setShowPopup(false), 2000);
      } else {
        setAlert({ type: 'danger', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setAlert({ type: 'danger', message: 'Server error. Please try again later.' });
    } finally {
      setLoadingData(false);
    }
  };

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(() => setShowPopup(false), 300);
  };

  if (!showPopup) return null;

  return (
    <div className={styles.popupContainer}>
      <div className={`${styles.popupBox} ${animateIn ? styles.popupIn : styles.popupOut}`}>
        <div className="container">
          <div className="row">
            <div className={`col-12 text-center ${styles.formHeader}`}>
              <h2 className='fw-bold'>Send a Quick Enquiry to US</h2>
              <p>
                <span className='text-danger fw-semibold'>(Call for Free Consultation) </span>
                <a href="tel:+919319412012">+91-9319412012</a>
              </p>
              <button className={styles.closeButton} onClick={handleClose}>×</button>
            </div>
            <div className="col-12">
              {formSubmitted ? (
                <div className="text-center text-success fw-semibold">Thank you! Your message has been sent.</div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="mt-3">

                  {alert.message && (
                    <div className={`alert alert-${alert.type} rounded-0`} role="alert">
                      {alert.message}
                    </div>
                  )}

                  <input
                    type="text"
                    placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                    className="form-control rounded-0 shadow-none mb-2"
                  />
                  {errors.name && <p className="text-danger">{errors.name.message}</p>}

                  <input
                    type="email"
                    placeholder="Email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' },
                    })}
                    className="form-control rounded-0 shadow-none mb-2"
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}

                  <input
                    type="tel"
                    placeholder="Phone No."
                    {...register('mobile', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Enter a valid 10-digit Indian number',
                      },
                    })}
                    className="form-control rounded-0 shadow-none mb-2"
                  />
                  {errors.mobile && <p className="text-danger">{errors.mobile.message}</p>}

                  <textarea
                    rows="3"
                    placeholder="Message"
                    {...register('message', { required: 'Message is required' })}
                    className="form-control rounded-0 shadow-none mb-2"
                  ></textarea>
                  {errors.message && <p className="text-danger">{errors.message.message}</p>}

                  <label htmlFor="services">Select Services</label>
                  <select
                    {...register('services', { required: 'Please select a service' })}
                    className="form-control mb-3 rounded-0 shadow-none"
                  >
                    <option value="">Options</option>
                    <option value="Construction">Construction</option>
                    <option value="Pre Engineered Buildings">Pre Engineered Buildings</option>
                    <option value="Interior">Interior</option>
                    <option value="Road Services">Road Services</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="MEP Services">MEP Services</option>
                    <option value="Other Services">Other Services</option>
                  </select>
                  {errors.services && <p className="text-danger">{errors.services.message}</p>}

                  <button
                    type="submit"
                    className="btn btn-primary bg-blue border-0 rounded-0 w-100"
                    disabled={loading}
                  >
                    {loading ? 'SUBMITTING...' : 'SUBMIT'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
