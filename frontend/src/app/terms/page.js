"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const TermsAndConditionsPage = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Navigation Bar */}
            <Navigation />

            {/* Hero Section */}
            <section className="bg-primary text-white py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <h1 className="display-4 fw-bold">Terms and Conditions</h1>
                            <p className="lead">
                                Please read these terms and conditions carefully before using our services.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Terms and Conditions Content */}
            <section className="py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h2 className="h4 mb-4">1. Introduction</h2>
                                    <p className="text-muted">
                                        Welcome to DirectMe. By accessing or using our services, you agree to
                                        comply with and be bound by these terms and conditions.
                                    </p>

                                    <h2 className="h4 mb-4">2. User Responsibilities</h2>
                                    <p className="text-muted">
                                        You are responsible for maintaining the confidentiality of your account
                                        and for all activities that occur under your account.
                                    </p>

                                    <h2 className="h4 mb-4">3. Prohibited Activities</h2>
                                    <p className="text-muted">
                                        You may not use our services for any illegal or unauthorized purpose.
                                        You must not violate any laws in your jurisdiction.
                                    </p>

                                    <h2 className="h4 mb-4">4. Limitation of Liability</h2>
                                    <p className="text-muted">
                                        DirectMe shall not be liable for any indirect, incidental, or
                                        consequential damages arising out of your use of our services.
                                    </p>

                                    <h2 className="h4 mb-4">5. Changes to Terms</h2>
                                    <p className="text-muted">
                                        We reserve the right to modify these terms and conditions at any time.
                                        Your continued use of our services constitutes acceptance of the updated
                                        terms.
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

export default TermsAndConditionsPage;