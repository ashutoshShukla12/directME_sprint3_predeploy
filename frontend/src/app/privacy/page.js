"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicyPage = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Navigation Bar */}
            <Navigation />

            {/* Hero Section */}
            <section className="bg-primary text-white py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <h1 className="display-4 fw-bold">Privacy Policy</h1>
                            <p className="lead">
                                Your privacy is important to us. Learn how we collect, use, and protect your
                                information.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h2 className="h4 mb-4">1. Information We Collect</h2>
                                    <p className="text-muted">
                                        We collect personal information such as your name, email address, and
                                        phone number when you register for an account or use our services.
                                    </p>

                                    <h2 className="h4 mb-4">2. How We Use Your Information</h2>
                                    <p className="text-muted">
                                        We use your information to provide and improve our services, communicate
                                        with you, and ensure the security of our platform.
                                    </p>

                                    <h2 className="h4 mb-4">3. Data Sharing</h2>
                                    <p className="text-muted">
                                        We do not share your personal information with third parties except as
                                        required by law or to provide our services.
                                    </p>

                                    <h2 className="h4 mb-4">4. Data Security</h2>
                                    <p className="text-muted">
                                        We implement security measures to protect your information from
                                        unauthorized access, alteration, or destruction.
                                    </p>

                                    <h2 className="h4 mb-4">5. Your Rights</h2>
                                    <p className="text-muted">
                                        You have the right to access, update, or delete your personal
                                        information at any time.
                                    </p>
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

export default PrivacyPolicyPage;