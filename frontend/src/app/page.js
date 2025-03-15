"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';

const Home = () => {
    const router = useRouter();
    const { user } = useUser();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            if (user.role === 'admin') {
                router.push('/admin');
            } if (user.role === 'user') {
                router.push('/Dashboard'); 
            } if (!user){
                router.push('/landing');
            }
        } else {
            router.push('/landing');
        }
    }, [router]);

    return null;
};

export default Home;