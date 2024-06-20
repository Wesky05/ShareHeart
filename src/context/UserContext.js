import React, { createContext, useState, useEffect } from 'react';
import { getUserDetails } from '../services/api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userDetails = await getUserDetails();
                setUser(userDetails);
            } catch (error) {
                console.error('Erro ao buscar detalhes do usuário:', error);
            }
        };

        fetchUser();
    }, []);

    const updateUser = (newUserDetails) => {
        setUser(newUserDetails);
    };


    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
