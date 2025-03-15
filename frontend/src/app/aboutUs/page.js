"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Heart, Users, Shield, Globe, Clock } from "lucide-react";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AboutUsPage = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Navigation Bar */}
            <Navigation />

            {/* Hero Section */}
            <section
                className="bg-primary text-white py-5"
                style={{
                    backgroundImage: "url('/images/about-hero.jpg')", // Replace with your image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col md={8}>
                            <h1 className="display-4 fw-bold">About DirectMe</h1>
                            <p className="lead">
                                Connecting communities to support homeless individuals in Brantford, Ontario.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-5">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title className="h4">Our Mission</Card.Title>
                                    <Card.Text className="text-muted">
                                        To provide a platform that connects individuals, volunteers,
                                        and organizations to support homeless individuals in Brantford.
                                        We aim to make resources accessible and foster a sense of
                                        community through technology and collaboration.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title className="h4">Our Vision</Card.Title>
                                    <Card.Text className="text-muted">
                                        A world where no one is left behind, and everyone has access
                                        to the resources they need to thrive. We envision a community
                                        where technology bridges gaps and empowers individuals to make
                                        a difference.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team Section */}
            <section className="bg-light py-5">
                <Container>
                    <h2 className="text-center mb-5">Meet Our Team</h2>
                    <Row>
                        {[
                            {
                                name: "John Doe",
                                role: "Co-Founder & CEO",
                                image: "/images/team/john.jpg", // Replace with your image
                            },
                            {
                                name: "Jane Smith",
                                role: "Co-Founder & CTO",
                                image: "/images/team/jane.jpg", // Replace with your image
                            },
                            {
                                name: "Alice Johnson",
                                role: "Community Manager",
                                image: "/images/team/alice.jpg", // Replace with your image
                            },
                            {
                                name: "Bob Brown",
                                role: "Volunteer Coordinator",
                                image: "/images/team/bob.jpg", // Replace with your image
                            },
                        ].map((member, index) => (
                            <Col key={index} md={3} className="mb-4">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Img
                                        variant="top"
                                        src={member.image}
                                        alt={member.name}
                                        className="rounded-circle mx-auto mt-4"
                                        style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                    />
                                    <Card.Body>
                                        <Card.Title className="h5">{member.name}</Card.Title>
                                        <Card.Text className="text-muted">{member.role}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Values Section */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center mb-5">Our Core Values</h2>
                    <Row>
                        {[
                            {
                                icon: Heart,
                                title: "Compassion",
                                description: "We care deeply about the well-being of every individual.",
                            },
                            {
                                icon: Users,
                                title: "Community",
                                description: "We believe in the power of people coming together.",
                            },
                            {
                                icon: Shield,
                                title: "Integrity",
                                description: "We are committed to honesty and transparency.",
                            },
                            {
                                icon: Globe,
                                title: "Inclusivity",
                                description: "We strive to create a welcoming environment for all.",
                            },
                            {
                                icon: Clock,
                                title: "Commitment",
                                description: "We are dedicated to making a lasting impact.",
                            },
                        ].map((value, index) => (
                            <Col key={index} md={4} className="mb-4">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <value.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                                        <Card.Title className="h5">{value.title}</Card.Title>
                                        <Card.Text className="text-muted">{value.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Call to Action Section */}
            <section className="bg-primary text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h2 className="mb-4">Ready to Make a Difference?</h2>
                            <p className="lead mb-4">
                                Join us today and start helping your community.
                            </p>
                            <Button variant="light" size="lg" href="/SignUp">
                                Get Started
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default AboutUsPage;