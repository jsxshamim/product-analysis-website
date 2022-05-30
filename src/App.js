import { Route, Routes } from "react-router-dom";
import "./App.css";
import Features from "./Components/Features/Features";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </>
    );
}

export default App;
