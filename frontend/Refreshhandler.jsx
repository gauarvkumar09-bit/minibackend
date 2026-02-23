import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token){
            setIsAuthenticated(true);

            // Agar user public page pe hai, token hone ke bawajood redirect home
            const publicPaths = ['/', '/login', '/signup'];
            if(publicPaths.includes(location.pathname.toLowerCase())){
                navigate('/home', { replace: true });
            }

        } else {
            setIsAuthenticated(false);
        }

        // ✅ dependency location se har URL change pe check hoga
    }, [location, navigate, setIsAuthenticated]);

    return null;
}

export default RefreshHandler;