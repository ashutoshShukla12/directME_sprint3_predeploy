"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getUsers,
  getShelters,
  getEvents,
  getVolunteers,
  deleteUser,
  deleteShelter,
  deleteVolunteer,
  deleteEvent,
  editUser,
  editEvent,
  editShelter,
  editVolunteer,
  getJobs,
  deleteJob,
  updateJob,
} from "@/utils/api";
import AddShelterForm from "./AddShelterForm";
import AddVolunteerForm from "./AddVolunteerForm";
import AddJobForm from "./AddJobForm";
import AddEventForm from "./AddEventForm";
import EditUserForm from "./EditUserForm";
import EditShelterForm from "./EditShelterForm";
import EditVolunteerForm from "./EditVolunteerForm";
import EditEventForm from "./EditEventForm";
import EditJobForm from "./EditJobForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Tab, Tabs } from "react-bootstrap";
import "./custom.css";

const DashboardOverview = () => {
  const [users, setUsers] = useState([]);
  const [shelters, setShelters] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [events, setEvents] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState("users");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await getUsers();
        const sheltersResponse = await getShelters();
        const volunteersResponse = await getVolunteers();
        const eventsResponse = await getEvents();
        const jobsResponse = await getJobs();

        setUsers(usersResponse);
        setShelters(sheltersResponse);
        setVolunteers(volunteersResponse);
        setEvents(eventsResponse);
        setJobs(jobsResponse);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleShelterAdded = (newShelter) => {
    setShelters([...shelters, newShelter]);
  };

  const handleVolunteerAdded = (newVolunteer) => {
    setVolunteers([...volunteers, newVolunteer]);
  };

  const handleEventAdded = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleJobAdded = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    router.push("/");
  };

  const handleDelete = async (id, type) => {
    try {
      let deleteFunction;
      switch (type) {
        case "user":
          deleteFunction = deleteUser;
          break;
        case "shelter":
          deleteFunction = deleteShelter;
          break;
        case "volunteer":
          deleteFunction = deleteVolunteer;
          break;
        case "event":
          deleteFunction = deleteEvent;
          break;
        case "job":
          deleteFunction = deleteJob;
          break;

        default:
          throw new Error("Invalid type");
      }

      await deleteFunction(id);

      switch (type) {
        case "user":
          setUsers(users.filter((user) => user._id !== id));
          break;
        case "shelter":
          setShelters(shelters.filter((shelter) => shelter._id !== id));
          break;
        case "volunteer":
          setVolunteers(volunteers.filter((volunteer) => volunteer._id !== id));
          break;
        case "event":
          setEvents(events.filter((event) => event._id !== id));
          break;
        case "job":
          setJobs(jobs.filter((job) => job._id !== id));
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error deleting ${type} with id ${id}`, error);
    }
  };

  const [editData, setEditData] = useState(null);

  const handleEdit = (id, type) => {
    let itemToEdit;
    switch (type) {
      case "user":
        itemToEdit = users.find((user) => user._id === id);
        break;
      case "shelter":
        itemToEdit = shelters.find((shelter) => shelter._id === id);
        break;
      case "volunteer":
        itemToEdit = volunteers.find((volunteer) => volunteer._id === id);
        break;
      case "event":
        itemToEdit = events.find((event) => event._id === id);
        break;
      case "job":
        itemToEdit = jobs.find((job) => job._id === id);
        break;
      default:
        break;
    }
    setEditData({ ...itemToEdit, type });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    // Implement the update logic here
    let editFunction;
    switch (editData.type) {
      case "user":
        editFunction = editUser;
        break;
      case "shelter":
        editFunction = editShelter;
        break;
      case "volunteer":
        editFunction = editVolunteer;
        break;
      case "event":
        editFunction = editEvent;
        break;
      case "job":
        editFunction = updateJob;
        break;
      default:
        throw new Error("Invalid type");
    }

    // Update the state with the updated data
    switch (editData.type) {
      case "user":
        setUsers(
          users.map((user) => (user._id === editData._id ? editData : user))
        );
        break;
      case "shelter":
        setShelters(
          shelters.map((shelter) =>
            shelter._id === editData._id ? editData : shelter
          )
        );
        break;
      case "volunteer":
        setVolunteers(
          volunteers.map((volunteer) =>
            volunteer._id === editData._id ? editData : volunteer
          )
        );
        break;
      case "event":
        setEvents(
          events.map((event) => (event._id === editData._id ? editData : event))
        );
        break;
      case "job":
        setJobs(jobs.map((job) => (job._id === editData._id ? editData : job)));
        break;
      default:
        break;
    }

    // After updating, reset the editData state
    setEditData(null);
  };

  return (
    <div className="min-vh-100 bg-light">
      <header className="actionbtn py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="text-white">Admin Dashboard</h1>
            <button className="btn btn-dark" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="container-fluid">
        <div className="row min-vh-100">
          <div className="col-md-3 bg-dark p-3">
            <Nav
              variant="pills"
              className="flex-column"
              activeKey={activeTab}
              onSelect={(selectedKey) => setActiveTab(selectedKey)}
            >
              <Nav.Item>
                <Nav.Link eventKey="users" className="text-white">
                  Users
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="shelters" className="text-white">
                  Shelters
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="volunteers" className="text-white">
                  Volunteers
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="events" className="text-white">
                  Events
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="jobs" className="text-white">
                  Jobs
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="addData" className="text-white">
                  Add Data
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="col-md-9">
            {editData && (
              <section className="mb-4">
                <h2>Edit {editData.type}</h2>
                {editData.type === "user" && (
                  <EditUserForm
                    editData={editData}
                    handleEditChange={handleEditChange}
                    handleEditSubmit={handleEditSubmit}
                    setEditData={setEditData}
                  />
                )}
                {editData.type === "shelter" && (
                  <EditShelterForm
                    editData={editData}
                    handleEditChange={handleEditChange}
                    handleEditSubmit={handleEditSubmit}
                    setEditData={setEditData}
                  />
                )}
                {editData.type === "volunteer" && (
                  <EditVolunteerForm
                    editData={editData}
                    handleEditChange={handleEditChange}
                    handleEditSubmit={handleEditSubmit}
                    setEditData={setEditData}
                  />
                )}
                {editData.type === "event" && (
                  <EditEventForm
                    editData={editData}
                    handleEditChange={handleEditChange}
                    handleEditSubmit={handleEditSubmit}
                    setEditData={setEditData}
                  />
                )}
                {editData.type === "job" && (
                  <EditJobForm
                    editData={editData}
                    handleEditChange={handleEditChange}
                    handleEditSubmit={handleEditSubmit}
                    setEditData={setEditData}
                  />
                )}
              </section>
            )}
            {!editData && activeTab === "users" && (
              <section className="mb-4">
                <h2>Users</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => handleEdit(user._id, "user")}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(user._id, "user")}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}
            {!editData && activeTab === "shelters" && (
              <section className="mb-4">
                <h2>Shelters</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Capacity</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shelters.map((shelter) => (
                      <tr key={shelter._id}>
                        <td>{shelter.name}</td>
                        <td>{shelter.location}</td>
                        <td>{shelter.capacity}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => handleEdit(shelter._id, "shelter")}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(shelter._id, "shelter")}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}
            {!editData && activeTab === "volunteers" && (
              <section className="mb-4">
                <h2>Volunteers</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteers.map((volunteer) => (
                      <tr key={volunteer._id}>
                        <td>{volunteer.Name}</td>
                        <td>{volunteer.Email}</td>
                        <td>{volunteer.Phone}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() =>
                              handleEdit(volunteer._id, "volunteer")
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              handleDelete(volunteer._id, "volunteer")
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}
            {!editData && activeTab === "events" && (
              <section className="mb-4">
                <h2>Events</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Location</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr key={event._id}>
                        <td>{event.Name}</td>
                        <td>{event.Date}</td>
                        <td>{event.Location}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => handleEdit(event._id, "event")}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(event._id, "event")}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}
            {!editData && activeTab === "jobs" && (
              <section className="mb-4">
                <h2>Jobs</h2>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Location</th>
                      <th>Volunteer Count</th>
                      <th>Application End Date</th>
                      <th>Job Run Time</th>
                      <th>Volunteer Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job._id}>
                        <td>{job.Name}</td>
                        <td>{job.Description}</td>
                        <td>{job.Location}</td>
                        <td>{job.VolunteerCount}</td>
                        <td>
                          {new Date(
                            job.ApplicationEndDate
                          ).toLocaleDateString()}
                        </td>
                        <td>{job.JobRunTime}</td>
                        <td>{job.VolunteerEmail}</td>
                        <td>
                          <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => handleEdit(job._id, "job")}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(job._id, "job")}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}
            {!editData && activeTab === "addData" && (
              <section className="mb-4">
                <h2>Add Data</h2>
                <Tabs
                  defaultActiveKey="addEvent"
                  id="add-data-tabs"
                  className="mb-3"
                >
                  <Tab eventKey="addEvent" title="Add Event">
                    <div className="p-4 bg-white rounded shadow-sm">
                      <AddEventForm onEventAdded={handleEventAdded} />
                    </div>
                  </Tab>
                  <Tab eventKey="addShelter" title="Add Shelter">
                    <div className="p-4 bg-white rounded shadow-sm">
                      <AddShelterForm onShelterAdded={handleShelterAdded} />
                    </div>
                  </Tab>
                  <Tab eventKey="addVolunteer" title="Add Volunteer">
                    <div className="p-4 bg-white rounded shadow-sm">
                      <AddVolunteerForm
                        onVolunteerAdded={handleVolunteerAdded}
                      />
                    </div>
                  </Tab>
                    <Tab eventKey="addJob" title="Add Job">
                        <div className="p-4 bg-white rounded shadow-sm">
                        <AddJobForm onJobAdded={handleJobAdded} />
                        </div>
                    </Tab>
                </Tabs>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardOverview;
