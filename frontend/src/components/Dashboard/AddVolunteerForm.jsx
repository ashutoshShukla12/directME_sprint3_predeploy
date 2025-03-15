"use client";
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddVolunteerForm = ({ onVolunteerAdded }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/volunteers', {
                name,
                email,
                phone,
            });
            onVolunteerAdded(response.data);
            setName('');
            setEmail('');
            setPhone('');
        } catch (error) {
            console.error('Error adding volunteer', error);
        }
    };

    return (
        <div className="container">

            <form onSubmit={handleSubmit} className="mb-4">
                <h3>Add Volunteer</h3>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Volunteer</button>
            </form>
        </div>
    );
};

export default AddVolunteerForm;