"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import InputField from "@/components/shared/InputField";
import SelectField from "@/components/shared/SelectField";
import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        type: "Volunteer",
        role: "user",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        setSuccess("");

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
                formData
            );

            setSuccess("Signup successful! Redirecting to login...");
            setError("");
            setTimeout(() => router.push("/Login"), 2000); // Redirect after 2 seconds
        } catch (err) {
            setError(err.response?.data || "Signup failed. Please try again.");
            console.error("Signup error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navigation />
            
            <main className="flex-grow-1 d-flex align-items-center bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="h2 mb-4 text-center">Create Your Account</h1>
                                    {error && (
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    )}
                                    {success && (
                                        <div className="alert alert-success" role="alert">
                                            {success}
                                        </div>
                                    )}

                                    <form onSubmit={handleSignUp}>
                                        <InputField
                                            id="name"
                                            label="Full Name"
                                            value={formData.name}
                                            onChange={(value) => handleChange("name", value)}
                                            required
                                            disabled={isSubmitting}
                                        />

                                        <InputField
                                            id="email"
                                            label="Email Address"
                                            type="email"
                                            value={formData.email}
                                            onChange={(value) => handleChange("email", value)}
                                            required
                                            disabled={isSubmitting}
                                        />

                                        <InputField
                                            id="password"
                                            label="Password"
                                            type="password"
                                            value={formData.password}
                                            onChange={(value) => handleChange("password", value)}
                                            required
                                            disabled={isSubmitting}
                                        />

                                        <InputField
                                            id="phone"
                                            label="Phone Number"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(value) => handleChange("phone", value)}
                                            required
                                            disabled={isSubmitting}
                                        />

                                        <SelectField
                                            id="type"
                                            label="Account Type"
                                            value={formData.type}
                                            onChange={(value) => handleChange("type", value)}
                                            options={[
                                                { value: "Volunteer", label: "Volunteer" },
                                                { value: "Shelter Admin", label: "Shelter Admin" },
                                                { value: "Person-in-need", label: "Person in Need" },
                                            ]}
                                            disabled={isSubmitting}
                                        />

                                        <SelectField
                                            id="role"
                                            label="Role"
                                            value={formData.role}
                                            onChange={(value) => handleChange("role", value)}
                                            options={[
                                                { value: "user", label: "User" },
                                                { value: "admin", label: "Admin" },
                                            ]}
                                            disabled={isSubmitting}
                                        />

                                        <div className="d-grid mt-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? "Signing Up..." : "Sign Up"}
                                            </button>
                                        </div>
                                    </form>

                                    <div className="text-center mt-4">
                                        <p className="mb-0">
                                            Already have an account?{" "}
                                            <Link href="/Login" className="text-decoration-none">
                                                Log In
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SignUpPage;