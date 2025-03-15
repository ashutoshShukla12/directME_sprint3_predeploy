"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/Login");
    };

    const handleSignUp = () => {
        router.push("/SignUp");

    };

    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Hero Section */}
            <section
                className="bg-primary text-white py-5"
                style={{
                    backgroundImage: "url('/images/hero-bg.jpg')", // Replace with your image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="display-4 fw-bold">Welcome to DirectMe</h1>
                            <p className="lead">
                                Connecting communities to support homeless individuals in Brantford, Ontario.
                            </p>
                            <div className="d-flex gap-3">
                                <Button
                                    variant="light"
                                    size="lg"
                                    onClick={handleLogin}
                                    aria-label="Login"
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="outline-light"
                                    size="lg"
                                    onClick={handleSignUp}
                                    aria-label="Sign Up"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">Why Choose DirectMe?</h2>
                    <Row>
                        <Col md={4}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>Real-Time Updates</Card.Title>
                                    <Card.Text>
                                        Get up-to-date information on shelter availability, donations,
                                        and volunteer opportunities.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>Community-Driven</Card.Title>
                                    <Card.Text>
                                        Join a network of volunteers and organizations working
                                        together to make a difference.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>Easy to Use</Card.Title>
                                    <Card.Text>
                                        Our platform is designed to be simple and accessible for
                                        everyone.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Call to Action Section */}
            <section className="bg-light py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h2>Ready to Make a Difference?</h2>
                            <p className="lead">Join us today and start helping your community.</p>
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={handleSignUp}
                                aria-label="Get Started"
                            >
                                Get Started
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white py-4 mt-auto">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p className="mb-0">&copy; {new Date().getFullYear()} DirectMe. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default LandingPage;