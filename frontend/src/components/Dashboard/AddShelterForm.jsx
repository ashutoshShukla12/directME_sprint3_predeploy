"use client";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AddShelterForm = ({ onShelterAdded }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/shelters', {
                name,
                location,
                capacity,
            });
            onShelterAdded(response.data);
            setName('');
            setLocation('');
            setCapacity('');
        } catch (error) {
            console.error('Error adding shelter', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="mb-4">
                <h3>Add Shelter</h3>
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
                <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity</label>
                    <input
                        type="number"
                        className="form-control"
                        id="capacity"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Shelter</button>
            </form>
        </div>
    );
};

export default AddShelterForm;
