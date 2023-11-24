import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import GameDetails from "./components/GameDetails/GameDetails";

import { AuthProvider } from "./contexts/AuthContext";
import Path from "./paths";

function App() {
 
    return (
        <AuthProvider>
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
        </AuthProvider>
    );
}

export default App;
