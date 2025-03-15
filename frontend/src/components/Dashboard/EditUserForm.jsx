import React from 'react';

const EditUserForm = ({ editData, handleEditChange, handleEditSubmit, setEditData }) => (
    <form onSubmit={handleEditSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={editData.name} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={editData.email} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" name="phone" value={editData.phone} onChange={handleEditChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditData(null)}>Cancel</button>
    </form>
);

export default EditUserForm;