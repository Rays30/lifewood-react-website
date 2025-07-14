import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formMessage, setFormMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormMessage('Sending message...');
        setMessageType('');

        // In a real app, you would send this data to a backend API
        try {
            // Example of a mock API call
            const response = await new Promise(resolve => setTimeout(() => {
                if (formData.name && formData.email && formData.message) {
                    resolve({ success: true, message: 'Message sent successfully!' });
                } else {
                    resolve({ success: false, message: 'Please fill all required fields.' });
                }
            }, 1000)); // Simulate network delay

            if (response.success) {
                setFormMessage(response.message);
                setMessageType('success');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
            } else {
                setFormMessage(response.message);
                setMessageType('error');
            }
        } catch (error) {
            setFormMessage('Failed to send message. Please try again.');
            setMessageType('error');
        }
    };

    return (
        <div className="contact-form-container bg-paper" data-aos="fade-left">
            <h3 className="headline-02">Send Us a Message</h3>
            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                {formMessage && (
                    <div id="formMessage" className={`form-message ${messageType === 'success' ? 'success' : 'error'}`} style={{ display: 'block' }}>
                        {formMessage}
                    </div>
                )}
            </form>
        </div>
    );
}

export default ContactForm;