"use client";
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUsPage = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Navigation Bar */}
            <Navigation />

            {/* Hero Section */}
            <section className="bg-primary text-white py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <h1 className="display-4 fw-bold">Contact Us</h1>
                            <p className="lead">
                                We&apos;re here to help! Reach out to us with any questions or feedback.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Contact Form Section */}
            <section className="py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h2 className="h4 mb-4">Send Us a Message</h2>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                placeholder="Enter your message"
                                                required
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Send Message
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default ContactUsPage;