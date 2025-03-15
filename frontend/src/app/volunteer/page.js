"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navigation from "../../components/shared/Navigation";
import Footer from "../../components/shared/Footer";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useUser } from "../../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

const VolunteerPage = () => {
    const { user } = useUser(); // Get user from context
    console.log(user);
    return (
        <ProtectedRoute>
            <div className="min-vh-100 d-flex flex-column">
                {/* Navigation Bar */}
                <Navigation />

                {/* Hero Section */}
                <section className="bg-primary text-white py-5">
                    <Container>
                        <Row className="align-items-center">
                            <Col>
                                <h1 className="display-4 fw-bold">Become a Volunteer with DirectMe</h1>
                                <p className="lead">
                                    Join us in making a difference in the lives of those in need.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Volunteer Program Information */}
                <section className="py-5">
                    <Container>
                        <Row className="mb-5">
                            <Col md={6}>
                                <Card className="h-100 shadow-sm">
                                    <Card.Body>
                                        <Card.Title className="h4">About the Volunteer Program</Card.Title>
                                        <div className="text-muted">
                                            Our volunteer program is designed to empower individuals to
                                            contribute to their community by supporting homeless individuals
                                            in Brantford, Ontario. Whether you&apos;re helping at a shelter,
                                            organizing donations, or providing mentorship, your efforts
                                            make a real impact.
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="h-100 shadow-sm">
                                    <Card.Body>
                                        <Card.Title className="h4">Responsibilities</Card.Title>
                                        <div className="text-muted">
                                            <ul>
                                                <li>Assist in shelter operations (e.g., serving meals).</li>
                                                <li>Help organize and distribute donations.</li>
                                                <li>Provide mentorship and support to individuals in need.</li>
                                                <li>Participate in community outreach programs.</li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* Benefits of Volunteering */}
                        <Row className="mb-5">
                            <Col>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <Card.Title className="h4">Benefits of Volunteering</Card.Title>
                                        <div className="text-muted">
                                            <ul>
                                                <li>Gain valuable experience and skills.</li>
                                                <li>Make a positive impact in your community.</li>
                                                <li>Meet like-minded individuals and build connections.</li>
                                                <li>Receive a certificate of appreciation.</li>
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* Conditional Rendering */}
                        {user ? (
                            // Display Welcome Back section for logged-in users
                            <Row className="mb-5">
                                <Col>
                                    <Card className="shadow-sm">
                                        <Card.Body>
                                            <Card.Title className="h4">Welcome Back, {user.name}!</Card.Title>
                                            <div className="text-muted">
                                                Thank you for being part of our volunteer team. Here are some
                                                exclusive updates and resources for you:
                                                <ul>
                                                    <li>Upcoming volunteer events in your area.</li>
                                                    <li>Access to our volunteer training portal.</li>
                                                    <li>Special recognition for your contributions.</li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        ) : (
                            // Display Join Us as a Volunteer button for non-logged-in users
                            <Row className="mb-5">
                                <Col className="text-center">
                                    <Button variant="primary" size="lg" href="/SignUp">
                                        Join Us as a Volunteer
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Container>
                </section>

                {/* Footer Section */}
                <Footer />
            </div>
        </ProtectedRoute>
    );
};

export default VolunteerPage;