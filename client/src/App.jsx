import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameCatalog from "./components/GameCatalog/GameCatalog";

function App() {
    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GameCatalog />} />
            </Routes>
        </div>
    );
}

export default App;
