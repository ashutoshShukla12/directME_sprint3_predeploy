"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import InputField from '@/components/shared/InputField';
import Link from 'next/link';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const { setUser } = useUser();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                email,
                password,
            });
            
            const user = response.data.user;
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('authToken', response.data.token);


            router.push(user.role === 'admin' ? '/admin' : '/Dashboard');

            
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid email or password');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            
            <main className="flex-grow-1 d-flex align-items-center py-5 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="card shadow-lg">
                                <div className="card-body p-5">
                                    <h1 className="h2 mb-4 text-center">Sign In to Your Account</h1>
                                    {error && (
                                        <div 
                                            className="alert alert-danger" 
                                            role="alert"
                                            aria-live="assertive"
                                        >
                                            {error}
                                        </div>
                                    )}
                                    
                                    <form onSubmit={handleLogin} noValidate>
                                        <InputField
                                            id="email"
                                            label="Email Address"
                                            type="email"
                                            value={email}
                                            onChange={setEmail}
                                            autoComplete="email"
                                            required
                                            disabled={isSubmitting}
                                        />
                                        
                                        <InputField
                                            id="password"
                                            label="Password"
                                            type="password"
                                            value={password}
                                            onChange={setPassword}
                                            autoComplete="current-password"
                                            required
                                            disabled={isSubmitting}
                                        />
                                        
                                        <div className="d-grid mb-4">
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary btn-lg"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Signing In...' : 'Sign In'}
                                            </button>
                                        </div>
                                        
                                        <div className="text-center">
                                            <Link href="/forgot-password" className="text-decoration-none">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                                
                                <div className="card-footer text-center py-3">
                                    <p className="mb-0">
                                        Don&apos;t have an account?{' '}
                                        <Link href="/SignUp" className="text-decoration-none">Create Account</Link>
                                    </p>
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

export default LoginPage;