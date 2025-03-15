"use client";
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddEventForm = ({ onEventAdded }) => {
    
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const authToken = localStorage.getItem('authToken');
            const response = await axios.post('http://localhost:8080/api/events', {
                name,
                date,
                location,
            }, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            onEventAdded(response.data);
            setName('');
            setDate('');
            setLocation('');
        } catch (error) {
            setError('Error adding event');
            console.error('Error adding event', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <h3>Add Event</h3>
            {error && <div className="alert alert-danger">{error}</div>}
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
                <label htmlFor="date" className="form-label">Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Event</button>
        </form>
    );
};

export default AddEventForm;
