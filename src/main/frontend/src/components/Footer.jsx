import "../assets/css/footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-left">
                    <a href="/" className="logo-f">
                        <img src="/images/logo-w.png" alt="로고 화이트" />
                    </a>
                    <div className="fBtn-wrapper">
                        <Link to="/" className="fBtn" target="_blank">회사소개</Link>
                        <Link to="/" className="fBtn" target="_blank">제휴문의</Link>
                        <Link to="/" className="fBtn" target="_blank">광고제안</Link>
                        <Link to="/" className="fBtn" target="_blank">개인정보처리방침</Link>
                        <Link to="/" className="fBtn" target="_blank">이용약관</Link>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="fr-text">
                        <p>
                            로컬모티브㈜<br />
                            대표이사: 박주로<br />
                            사업자등록번호: 663-86-01051<br />
                            광고문의: localmotive@localmotive.kr<br />
                            서울특별시 영등포구 영신로 183 (당산동3가,당산 SH VILLE) 서울하우징랩
                        </p>
                        <br />
                        <p>ⓒ 2025. Localmotive. All rights reserved.</p>
                    </div>
                    <ul className="fr-sns">
                        <li>
                            <a href="https://blog.naver.com/localmotive" target="_blank" rel="noreferrer">
                                <img src="/images/naverblog.png" alt="네이버 블로그" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/localmotive.lounge" target="_blank" rel="noreferrer">
                                <img src="/images/instagram.png" alt="인스타그램" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@localmotive" target="_blank" rel="noreferrer">
                                <img src="/images/youtube.png" alt="유튜브" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
