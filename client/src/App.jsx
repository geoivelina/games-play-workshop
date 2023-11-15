import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import GameCreate from "./components/GameCreate/GameCreate";
import Login from "./components/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GameCatalog />} />
                <Route path="/games/create" element={<GameCreate />} />
                <Route path="/login" element={<Login />} />'
                <Route path="/register" element={<Register />} />'
            </Routes>
        </div>
    );
}

export default App;
