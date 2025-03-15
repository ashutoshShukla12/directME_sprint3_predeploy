import React from 'react';

const EditEventForm = ({ editData, handleEditChange, handleEditSubmit, setEditData }) => (
    <form onSubmit={handleEditSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="Name" value={editData.Name} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" name="Date" value={editData.Date} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" name="Location" value={editData.Location} onChange={handleEditChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditData(null)}>Cancel</button>
    </form>
);

export default EditEventForm;