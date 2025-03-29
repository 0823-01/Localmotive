import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";

function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = 10;
            if (window.scrollY > offset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={isFixed ? "Fixed" : ""}>
            <nav>
                <a href="/" className="logo">
                    <img
                        src={isFixed ? "/images/logo-w.png" : "/images/logo.png"}
                        alt="로고"
                    />
                </a>
                <input
                    type="checkbox"
                    id="check"
                    checked={menuOpen}
                    onChange={() => setMenuOpen(!menuOpen)}
                />
                <label htmlFor="check">
                    <div className={`menuBtns ${menuOpen ? "change" : ""}`}>
                        <div className={`bar1 ${isFixed ? "bar-color" : ""}`}></div>
                        <div className={`bar2 ${isFixed ? "bar-color" : ""}`}></div>
                        <div className={`bar3 ${isFixed ? "bar-color" : ""}`}></div>
                    </div>
                </label>
                <ul>
                    <li><Link to="/login" onClick={handleNavClick}>로그인</Link></li>
                    <li><Link to="/reservation" onClick={handleNavClick}>공간 예약</Link></li>
                    <li><Link to="/performance" onClick={handleNavClick}>공연 예매</Link></li>
                </ul>
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                    style={{
                        opacity: menuOpen ? 1 : 0,
                        visibility: menuOpen ? "visible" : "hidden",
                    }}
                ></div>
            </nav>
        </header>
    );
}

export default Header;
