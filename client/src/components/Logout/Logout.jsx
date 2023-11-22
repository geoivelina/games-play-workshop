import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";
import Path from "../../paths";

export default function Logout() {
    const navigate = useNavigate();
    const { onLogout } = useContext(AuthContext);
    
    useEffect(() => {
        authService.logout()
            .then(() =>{
             onLogout();
             navigate(Path.Logout
            )})
            .catch(() => navigate(Path.Home));
    }, []);

    return null;
}
