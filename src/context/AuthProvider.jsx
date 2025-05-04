import React, { createContext, useEffect, useState } from 'react'
import { setLocalStorage, getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)
    const [datasetted, setDatasetted] = useState(false);

    useEffect(() => {
        if (datasetted) {
            const { employees } = getLocalStorage();
            setUserData(employees);
        }
    }, [datasetted]);

    useEffect(() => {
        if (!datasetted) {
            setTimeout(() => {
                setLocalStorage(); // now safe to call
            }, [100]);
            setDatasetted(true);
        }
    }, []);



    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider