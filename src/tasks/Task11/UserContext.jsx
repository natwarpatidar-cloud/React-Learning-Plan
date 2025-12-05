import { useState } from "react";
import { createContext } from "use-context-selector";
import { useMemo } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: 'Natwar',
        email: 'patidar.natwar@gmail.com'
    });

    const value = useMemo(() => ({
        user,
        setUser,
    }), [user]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
