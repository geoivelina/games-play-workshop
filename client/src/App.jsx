import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GameDetails from "./components/GameDetails/GameDetails";

import * as authService from "./services/authService";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);

            navigate("/games");
        } catch (error) {
            console.log(`Something went wrong in APP: ${error.message}`);
        }
    };

    const context = {
        onLoginSubmit,
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
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<GameCatalog />} />
                    <Route path="/games/create" element={<GameCreate />} />
                    <Route path="/login" element={<Login />} />'
                    <Route path="/register" element={<Register />} />'
                    <Route path="/games/:gameId" element={<GameDetails />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
