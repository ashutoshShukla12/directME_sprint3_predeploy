import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5 className="h6">Direct Me</h5>
                        <p className="small">
                            Making a difference in our community through technology and
                            compassion.
                        </p>
                    </Col>
                    <Col md={3}>
                        <h5 className="h6">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/" className="text-white text-decoration-none">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/aboutUs" className="text-white text-decoration-none">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link href="/contactUs" className="nav-link">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/terms" className="nav-link">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/privacy" className="nav-link">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <a href="/profile" className="text-white text-decoration-none">
                                    Profile Page
                                </a>
                            </li>
                            <li>
                                <a href="/Login" className="text-white text-decoration-none">
                                    Sign In Page
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className="h6">Contact</h5>
                        <ul className="list-unstyled">
                            <li className="small">DirectMe@directme.com</li>
                            <li className="small">+1 123 456 7894</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className="h6">Follow Us</h5>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mt-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} DirectMe. All rights reserved.</p>
            </Row>
            </Container>
        </footer>
    );
};

export default Footer;