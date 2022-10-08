import { useState, createContext, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';


export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null

});

export const UserProvider = ({ children }) => {

    useEffect(() => {
        const unSubscrie = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unSubscrie;
    }, []);

    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return (
        <UserContext.Provider value={value} >{children}</UserContext.Provider>
    );

};