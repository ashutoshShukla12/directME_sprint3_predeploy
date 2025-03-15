"use client";
import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddJobForm = ({ onJobAdded }) => {
    const [jobData, setJobData] = useState({
        name: '',
        description: '',
        location: '',
        volunteerCount: '',
        applicationEndDate: '',
        jobRunTime: '',
        volunteerEmail: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const authToken = localStorage.getItem('authToken');
            const response = await axios.post('http://localhost:8080/api/jobs', jobData, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            onJobAdded(response.data);
            setJobData({
                name: '',
                description: '',
                location: '',
                volunteerCount: '',
                applicationEndDate: '',
                jobRunTime: '',
                volunteerEmail: ''
            });
        } catch (error) {
            console.error('Error adding job', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={jobData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={jobData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={jobData.location}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Volunteer Count</label>
                <input
                    type="number"
                    className="form-control"
                    name="volunteerCount"
                    value={jobData.volunteerCount}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Application End Date</label>
                <input
                    type="date"
                    className="form-control"
                    name="applicationEndDate"
                    value={jobData.applicationEndDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Job Run Time</label>
                <input
                    type="number"
                    className="form-control"
                    name="jobRunTime"
                    value={jobData.jobRunTime}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Volunteer Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="volunteerEmail"
                    value={jobData.volunteerEmail}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Job</button>
        </form>
    );
};

export default AddJobForm;