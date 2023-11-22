import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import GameDetails from "./components/GameDetails/GameDetails";

import { AuthContext } from "./contexts/AuthContext";
import * as authService from "./services/authService";
import Path from "./paths";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem("accessToken");

        return {};
    });

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

            navigate("/login");
        } catch (error) {
            console.log(`Something went wrong.`);
        }
    };

    const onLogout = () => {
        localStorage.removeItem("accessToken");
        setAuth({});
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={context}>
            <div id="box">
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Logout} element={<Logout />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.Create} element={<GameCreate />} />
                    <Route path={Path.Catalog} element={<GameCatalog />} />
                    <Route path={Path.GameDetails} element={<GameDetails />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
