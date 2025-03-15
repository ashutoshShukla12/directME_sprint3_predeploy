import React from 'react';

const EditVolunteerForm = ({ editData, handleEditChange, handleEditSubmit, setEditData }) => (
    <form onSubmit={handleEditSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="Name" value={editData.Name} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="Email" value={editData.Email} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" name="Phone" value={editData.Phone} onChange={handleEditChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditData(null)}>Cancel</button>
    </form>
);

export default EditVolunteerForm;