import React from 'react';

const EditShelterForm = ({ editData, handleEditChange, handleEditSubmit, setEditData }) => (
    <form onSubmit={handleEditSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={editData.name} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" name="location" value={editData.location} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Capacity</label>
            <input type="number" className="form-control" name="capacity" value={editData.capacity} onChange={handleEditChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditData(null)}>Cancel</button>
    </form>
);

export default EditShelterForm;