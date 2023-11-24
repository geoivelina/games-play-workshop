import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService';
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);

            localStorage.setItem("accessToken", result.accessToken);

            navigate(Path.Home);
        } catch (error) {
            console.log(`Something went wrong in APP: ${error.message}`);
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;

        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);
            localStorage.setItem("accessToken", result.accessToken);
            setAuth(result);

            navigate(Path.Home);
        } catch (error) {
            console.log(`Something went wrong.`);
        }
    };

    const onLogout = () => {
        localStorage.removeItem("accessToken");
        setAuth({});
    };

    const values = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};
