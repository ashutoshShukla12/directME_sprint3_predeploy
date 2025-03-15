import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Function to get the authentication token from local storage
const getAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const getShelters = async () => {
    try {
        const response = await axios.get(`${API_URL}/shelters`);
        return response.data;
    } catch (error) {
        console.error('Error fetching shelters:', error);
        throw error;
    }
};


export const getEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}/events`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};



export const getVolunteers = async () => {
    try {
        const response = await axios.get(`${API_URL}/volunteers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching volunteers:', error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/users/${id}`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

export const deleteShelter = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/shelters/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting shelter:', error);
        throw error;
    }
};  

export const deleteEvent = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/events/${id}`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting event:', error);
        throw error;
    }
};

export const deleteVolunteer = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/volunteers/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting volunteer:', error);
        throw error;
    }
};

export const editUser = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/users/${id}`, data, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error editing user:', error);
        throw error;
    }
};

export const editShelter = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/shelters/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error editing shelter:', error);
        throw error;
    }
};

export const editEvent = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/events/${id}`, data, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error editing event:', error);
        throw error;
    }
};

export const editVolunteer = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/volunteers/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Error editing volunteer:', error);
        throw error;
    }
};

export const getJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}/jobs`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        throw error;
    }
};

export const addJob = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/jobs`, data, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding job:', error);
        throw error;
    }
};

export const updateJob = async (id, data) => {
    try {
        const response = await axios.put(`${API_URL}/jobs/${id}`, data, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating job:', error);
        throw error;
    }
};

export const deleteJob = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/jobs/${id}`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting job:', error);
        throw error;
    }
};
