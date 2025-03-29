import { useEffect } from "react";
import "../assets/css/floating.css";

function Floating() {
    useEffect(() => {
        const handleClick = (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        const btn = document.querySelector('.topBtn');
        btn?.addEventListener("click", handleClick);
        return () => btn?.removeEventListener("click", handleClick);
    }, []);

    return (
        <div className="floating">
            <a href="/" className="topBtn">
                <i className="ri-arrow-up-s-line"></i>
            </a>
        </div>
    );
}

export default Floating;
