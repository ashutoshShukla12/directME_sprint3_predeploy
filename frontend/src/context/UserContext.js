"use client";
import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Check if user is logged in (e.g., check local storage or make an API call)
            const loggedInUser = localStorage.getItem('user');
            if (loggedInUser) {
                setUser(JSON.parse(loggedInUser));
            } else {
                router.push('/landing');
            }
        }
    }, [router]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);