"use client";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from "@/components/shared/Navigation";
import {
    MapPin,
    Calendar,
    BookOpen,
    Heart,
    Clock,
    Shield,
    ExternalLink,
} from "lucide-react";
import { useUser } from "@/context/UserContext";
import Footer from "@/components/shared/Footer";

const ProfilePage = () => {
    const router = useRouter();
    const { user, setUser } = useUser();
    
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        router.push("/landing");
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        

        <div className="min-vh-100 bg-light">
            {/* Header Section */}
            <header className="bg-primary py-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-3">
                            <div
                                className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
                                style={{ width: "96px", height: "96px" }}
                            >
                                <span className="text-white display-4">
                                    {user.name.charAt(0)}
                                </span>
                            </div>
                            <div className="text-white">
                                <h1 className="h4 font-weight-bold">{user.name}</h1>
                                <div className="d-flex align-items-center gap-2 mt-1 text-light">
                                    <MapPin className="me-1" />
                                    <span>Brantford, ON</span>
                                    <span className="mx-2">•</span>
                                    <Calendar className="me-1" />
                                    <span>
                                        Joined, {new Date(user.joinedDate).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <Button variant="light">Edit Profile</Button>
                            <Button variant="dark" onClick={handleLogout}>
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            {/* Main Content */}
            <main className="container p-5">
                    <div className="row">
                    {/* Left Column */}
                    <div className="col-md-4 mb-4">
                        <Card className="p-4">
                            <h2 className="h5 font-weight-bold mb-3">About</h2>
                            <p className="text-muted">
                                Passionate about connecting communities and making resources
                                accessible to everyone. Working to create positive change
                                through technology and collaboration.
                            </p>
                        </Card>

                        <Card className="p-4 mt-4">
                            <h2 className="h5 font-weight-bold mb-3">Contact Information</h2>
                            <div className="space-y-3">
                                <div>
                                    <h3 className="text-muted small">Email</h3>
                                    <p className="text-dark">{user.email}</p>
                                </div>
                                <div>
                                    <h3 className="text-muted small">Phone</h3>
                                    <p className="text-dark">{user.phone}</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-8">
                        {/* Stats */}
                        <div className="row mb-4">
                            <div className="col-6 col-md-3 mb-4">
                                <Card className="p-3 text-center animate-slide-in">
                                    <BookOpen className="w-6 h-6 mx-auto mb-2 text-primary" />
                                    <div className="h4 font-weight-bold">28</div>
                                    <div className="small text-muted">Resources Found</div>
                                </Card>
                            </div>
                            <div className="col-6 col-md-3 mb-4">
                                <Card
                                    className="p-3 text-center animate-slide-in"
                                    style={{ animationDelay: "0.1s" }}
                                >
                                    <Heart className="w-6 h-6 mx-auto mb-2 text-danger" />
                                    <div className="h4 font-weight-bold">15</div>
                                    <div className="small text-muted">Saved Items</div>
                                </Card>
                            </div>
                            <div className="col-6 col-md-3 mb-4">
                                <Card
                                    className="p-3 text-center animate-slide-in"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    <Clock className="w-6 h-6 mx-auto mb-2 text-success" />
                                    <div className="h4 font-weight-bold">47</div>
                                    <div className="small text-muted">Hours Helped</div>
                                </Card>
                            </div>
                            <div className="col-6 col-md-3 mb-4">
                                <Card
                                    className="p-3 text-center animate-slide-in"
                                    style={{ animationDelay: "0.3s" }}
                                >
                                    <Shield className="w-6 h-6 mx-auto mb-2 text-purple" />
                                    <div className="h4 font-weight-bold">8</div>
                                    <div className="small text-muted">Services Used</div>
                                </Card>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <Card className="p-4 mb-4">
                            <h2 className="h5 font-weight-bold mb-3">Recent Activity</h2>
                            <div className="space-y-4">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h3 className="font-weight-medium">
                                            Found Community Support Group
                                        </h3>
                                        <p className="text-muted small mt-1">
                                            Located and connected with mental health support group in
                                            Brooklyn
                                        </p>
                                    </div>
                                    <span className="small text-muted">2 days ago</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h3 className="font-weight-medium">
                                            Resource Directory Updated
                                        </h3>
                                        <p className="text-muted small mt-1">
                                            Added new food bank locations to the community resource
                                            directory
                                        </p>
                                    </div>
                                    <span className="small text-muted">1 week ago</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h3 className="font-weight-medium">
                                            Volunteer Program Joined
                                        </h3>
                                        <p className="text-muted small mt-1">
                                            Signed up as a volunteer for local youth mentorship
                                            program
                                        </p>
                                    </div>
                                    <span className="small text-muted">2 weeks ago</span>
                                </div>
                            </div>
                        </Card>

                        {/* Saved Resources */}
                        <Card className="p-4">
                            <h2 className="h5 font-weight-bold mb-3">Saved Resources</h2>
                            <div className="space-y-4">
                                <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-lg hover:bg-light transition-colors">
                                    <div>
                                        <h3 className="font-weight-medium">
                                            Mental Health Support Services
                                        </h3>
                                        <p className="small text-muted mt-1">
                                            Brooklyn, NY • Healthcare
                                        </p>
                                    </div>
                                    <Button variant="link" className="text-primary">
                                        View Details
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-lg hover:bg-light transition-colors">
                                    <div>
                                        <h3 className="font-weight-medium">Food Bank Directory</h3>
                                        <p className="small text-muted mt-1">
                                            Queens, NY • Food Security
                                        </p>
                                    </div>
                                    <Button variant="link" className="text-primary">
                                        View Details
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-lg hover:bg-light transition-colors">
                                    <div>
                                        <h3 className="font-weight-medium">
                                            Youth Mentorship Program
                                        </h3>
                                        <p className="small text-muted mt-1">
                                            Manhattan, NY • Education
                                        </p>
                                    </div>
                                    <Button variant="link" className="text-primary">
                                        View Details
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ProfilePage;
