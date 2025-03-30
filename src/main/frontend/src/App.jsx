import {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Floating from "./components/Floating";
import Home from "./components/Home";
import Login from "./components/Login";
import Join from "./components/Join";

function App() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const floating = document.querySelector('.floating');

            if (scrollY > 100) {
                floating?.classList.add('show');
            } else {
                floating?.classList.remove('show');
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Header />
            <Floating />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
