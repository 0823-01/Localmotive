import {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Floating from "./components/Floating";
import Home from "./components/Home";
import Login from "./components/Login";
import Join from "./components/Join";

function App() {
    useEffect(() => {
        AOS.init({
            once: true,
            offset: 120,
            delay: 200,
            duration: 1500,
            easing: 'ease'
        });

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const floating = document.querySelector('.floating');

            if (scrollY > 10) {
                floating?.classList.add('show');
            } else {
                floating?.classList.remove('show');
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Router>
            <Header />
            <Floating />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
