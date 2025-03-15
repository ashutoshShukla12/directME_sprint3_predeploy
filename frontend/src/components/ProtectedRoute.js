"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const { user, setUser } = useUser();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        const checkUserToken = async () => {
            const storedUser = localStorage.getItem('user');
            const token = localStorage.getItem('authToken');
            if (storedUser && token) {
                try {
                    // Simulate an API call to validate the token and get user data
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/validateToken`, {}, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (response.status === 200) {
                        setUser(JSON.parse(storedUser)); // Set the user data in context
                        setIsLoading(false); // Allow rendering once user is confirmed
                    } else {
                        localStorage.removeItem('user');
                        localStorage.removeItem('authToken');
                        router.push("/Login"); // Redirect if token is invalid
                    }
                } catch (err) {
                    localStorage.removeItem('user');
                    localStorage.removeItem('authToken');
                    router.push("/Login"); // Redirect if token validation fails
                }
            } else {
                router.push("/Login"); // Redirect if no token is found
            }
        };

        if (!user) {
            checkUserToken();
        } else {
            setIsLoading(false); // Allow rendering if user is already set
        }
    }, [user, router, setUser]);

    if (isLoading) {
        return <div>Loading...</div>; // Show a loader while checking auth
    }

    return children; // Render children if user is authenticated
};

export default ProtectedRoute;