"use client";
import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { MapPin, Heart, Shield, Users } from "react-feather";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useUser } from "@/context/UserContext";
import { redirects } from '@/components/shared/Redirects';
import "bootstrap/dist/css/bootstrap.min.css";

const AssistancePage = () => {
    const { user } = useUser();

    // Example resources and services
    const resources = [
        {
            id: 1,
            title: "Find a Shelter",
            description: "Locate nearby shelters with available beds.",
            icon: <MapPin size={24} className="text-primary" />,
            link: "/shelters"
        },
        {
            id: 2,
            title: "Food Assistance",
            description: "Access free meals and food banks in your area.",
            icon: <Heart size={24} className="text-danger" />,
            link: "/food-assistance"
        },
        {
            id: 3,
            title: "Medical Care",
            description: "Find free or low-cost medical services.",
            icon: <Shield size={24} className="text-success" />,
            link: redirects.medicalResource
        },
        {
            id: 4,
            title: "Counseling Services",
            description: "Get support for mental health and counseling.",
            icon: <Users size={24} className="text-warning" />,
            link: redirects.counsellingResource
        }
    ];

    // Example upcoming events
    const events = [
        {
            id: 1,
            title: "Community Dinner",
            date: "October 25, 2023",
            time: "6:00 PM",
            location: "Brantford Community Center"
        },
        {
            id: 2,
            title: "Health Check-Up Camp",
            date: "October 30, 2023",
            time: "10:00 AM",
            location: "Brantford Health Clinic"
        }
    ];

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
                                <h1 className="display-4 fw-bold">Welcome, {user?.name}!</h1>
                                <p className="lead">
                                    We&apos;re here to help you access the resources and support you need.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Main Content */}
                <main className="flex-grow-1 py-5">
                    <Container>
                        {/* Resources Section */}
                        <Row className="mb-5">
                            <Col>
                                <h2 className="h4 mb-4">Available Resources</h2>
                                <Row>
                                    {resources.map(resource => (
                                        <Col key={resource.id} md={6} className="mb-4">
                                            <Card className="h-100 shadow-sm">
                                                <Card.Body className="d-flex align-items-center">
                                                    <div className="me-3">{resource.icon}</div>
                                                    <div>
                                                        <Card.Title className="h5">{resource.title}</Card.Title>
                                                        <Card.Text className="text-muted">
                                                            {resource.description}
                                                        </Card.Text>
                                                        <Button variant="outline-primary" href={resource.link}>
                                                            Learn More
                                                        </Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>

                        {/* Upcoming Events Section */}
                        <Row className="mb-5">
                            <Col>
                                <h2 className="h4 mb-4">Upcoming Events</h2>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            {events.map(event => (
                                                <ListGroup.Item key={event.id} className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h5 className="h6">{event.title}</h5>
                                                        <p className="text-muted small mb-0">
                                                            {event.date} | {event.time} | {event.location}
                                                        </p>
                                                    </div>
                                                    <Button variant="outline-success" size="sm">
                                                        RSVP
                                                    </Button>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* Emergency Assistance Section */}
                        <Row className="mb-5">
                            <Col>
                                <Card className="shadow-sm bg-light border-0">
                                    <Card.Body className="text-center">
                                        <h2 className="h4 mb-3">Need Immediate Help?</h2>
                                        <p className="text-muted mb-4">
                                            If you&apos;re in urgent need of assistance, please contact us right away.
                                        </p>
                                        <Button variant="danger" size="lg">
                                            Call Emergency Services
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </main>

                {/* Footer Section */}
                <Footer />
            </div>
        </ProtectedRoute>
    );
};

export default AssistancePage;