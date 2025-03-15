import React from 'react';

const EditJobForm = ({ editData, handleEditChange, handleEditSubmit, setEditData }) => (
    <form onSubmit={handleEditSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="Name" value={editData.Name} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" name="Description" value={editData.Description} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" name="Location" value={editData.Location} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Volunteer Count</label>
            <input type="number" className="form-control" name="VolunteerCount" value={editData.VolunteerCount} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Application End Date</label>
            <input type="date" className="form-control" name="ApplicationEndDate" value={editData.ApplicationEndDate} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Job Run Time</label>
            <input type="number" className="form-control" name="JobRunTime" value={editData.JobRunTime} onChange={handleEditChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Volunteer Email</label>
            <input type="email" className="form-control" name="VolunteerEmail" value={editData.VolunteerEmail} onChange={handleEditChange} />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditData(null)}>Cancel</button>
    </form>
);

export default EditJobForm;