"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/UserContext";

const Navigation = () => {
    const router = useRouter();
    const { user, setUser } = useUser();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        router.push("/landing");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/" className="navbar-brand">
                    DirectMe
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* Conditionally display Home link based on user role */}
                        {!user && (
                            <li className="nav-item">
                                <Link href="/landing" className="nav-link">
                                    Home
                                </Link>
                            </li>
                        )}
                        {user?.type === "Shelter Admin" && (
                            <li className="nav-item">
                                <Link href="/shelter" className="nav-link">
                                    Shelter
                                </Link>
                            </li>
                        )}
                        {user?.type === "Volunteer" && (
                            <li className="nav-item">
                                <Link href="/volunteer" className="nav-link">
                                    Volunteer
                                </Link>
                            </li>
                        )}
                        {user?.type === "Person-in-need" && (
                            <li className="nav-item">
                                <Link href="/assistance" className="nav-link">
                                    Assistance
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link href="/aboutUs" className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contactUs" className="nav-link">
                                Contact Us
                            </Link>
                        </li>
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link href="/Profile" className="nav-link">
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link href="/Login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;