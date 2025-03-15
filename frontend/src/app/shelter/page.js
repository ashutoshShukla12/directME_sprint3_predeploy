"use client";
import React from "react";
import { Container, Row, Col, Card, Button, Badge, Form } from "react-bootstrap";
import { MapPin, Clock, Users, Heart, Shield } from "react-feather";
import Navigation from "../../components/shared/Navigation";
import Footer from "../../components/shared/Footer";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useUser } from "../../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

const ShelterPage = () => {
    const { user } = useUser();
    const [bedCount, setBedCount] = React.useState(15); // Example data
    const lastUpdated = new Date().toLocaleTimeString();

    // Example shelter data
    const shelter = {
        name: "Brantford Community Shelter",
        address: "123 Main St, Brantford, ON",
        phone: "(555) 123-4567",
        capacity: 50,
        availableBeds: bedCount,
        services: ["Meals", "Showers", "Counseling", "Medical Care"]
    };

    // Example requests and opportunities
    const donations = [
        { id: 1, item: "Winter Coats", quantity: 20, urgency: "high" },
        { id: 2, item: "Non-perishable Food", quantity: 100, urgency: "medium" }
    ];

    const volunteerRoles = [
        { id: 1, role: "Night Shift Support", time: "8PM - 12AM", slots: 2 },
        { id: 2, role: "Meal Preparation", time: "10AM - 2PM", slots: 4 }
    ];

    return (
        <ProtectedRoute>
            <div className="min-vh-100 d-flex flex-column">
                <Navigation />
                
                {/* Hero Section */}
                <section className="bg-primary text-white py-5">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={8}>
                                <h1 className="display-4 fw-bold">Brantford Shelters</h1>
                                <p className="lead">
                                    Find real-time availability and support services for homeless shelters in our community
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Main Content */}
                <main className="flex-grow-1 py-5">
                    <Container>
                        {/* Real-time Bed Availability */}
                        <Row className="mb-5">
                            <Col md={8}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div>
                                                <Card.Title className="h4">
                                                    <MapPin className="me-2" />
                                                    {shelter.name}
                                                </Card.Title>
                                                <p className="text-muted mb-1">{shelter.address}</p>
                                                <p className="text-muted">Phone: {shelter.phone}</p>
                                            </div>
                                            <Badge bg="success" className="fs-5">
                                                {shelter.availableBeds} Beds Available
                                            </Badge>
                                        </div>
                                        <div className="text-muted small">
                                            Last updated: {lastUpdated} | Total capacity: {shelter.capacity}
                                        </div>
                                    </Card.Body>
                                </Card>

                                {/* Services Offered */}
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <Card.Title className="h4 mb-3">
                                            <Shield className="me-2" />
                                            Services Offered
                                        </Card.Title>
                                        <Row>
                                            {shelter.services.map((service, index) => (
                                                <Col key={index} md={4} className="mb-2">
                                                    <div className="d-flex align-items-center">
                                                        <span className="me-2">•</span>
                                                        {service}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Donation Requests */}
                            <Col md={4}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <Card.Title className="h4 mb-3">
                                            <Heart className="me-2" />
                                            Urgent Donations Needed
                                        </Card.Title>
                                        {donations.map(donation => (
                                            <div key={donation.id} className="mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <strong>{donation.item}</strong>
                                                        <div className="text-muted small">
                                                            Qty: {donation.quantity}
                                                        </div>
                                                    </div>
                                                    <Badge bg={donation.urgency === "high" ? "danger" : "warning"}>
                                                        {donation.urgency.toUpperCase()}
                                                    </Badge>
                                                </div>
                                                <Button variant="outline-primary" size="sm" className="w-100 mt-2">
                                                    Donate Now
                                                </Button>
                                            </div>
                                        ))}
                                    </Card.Body>
                                </Card>

                                {/* Volunteer Opportunities */}
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <Card.Title className="h4 mb-3">
                                            <Users className="me-2" />
                                            Volunteer Opportunities
                                        </Card.Title>
                                        {volunteerRoles.map(role => (
                                            <div key={role.id} className="mb-3">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <strong>{role.role}</strong>
                                                        <div className="text-muted small">
                                                            {role.time} | Slots: {role.slots}
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button variant="outline-success" size="sm" className="w-100">
                                                    Volunteer
                                                </Button>
                                            </div>
                                        ))}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* Shelter Admin Dashboard */}
                        {user?.role === "shelter" && (
                            <Card className="shadow-sm mb-5">
                                <Card.Body>
                                    <Card.Title className="h4 mb-4">Shelter Management Dashboard</Card.Title>
                                    <Row>
                                        <Col md={4}>
                                            <Form>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Update Available Beds</Form.Label>
                                                    <Form.Control 
                                                        type="number" 
                                                        value={bedCount}
                                                        onChange={(e) => setBedCount(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Button variant="primary">Update Status</Button>
                                            </Form>
                                        </Col>
                                        <Col md={8}>
                                            <div className="text-muted">
                                                <Clock className="me-2" />
                                                Last Updated: {lastUpdated}
                                            </div>
                                            <div className="mt-3">
                                                <h5 className="h6">Quick Actions:</h5>
                                                <Button variant="outline-secondary" className="me-2">
                                                    Create Donation Request
                                                </Button>
                                                <Button variant="outline-secondary">
                                                    Add Volunteer Opportunity
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        )}
                    </Container>
                </main>

                <Footer />
            </div>
        </ProtectedRoute>
    );
};

export default ShelterPage;