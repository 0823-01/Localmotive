import React from "react";
import {Link} from "react-router-dom";
import "../assets/css/article_common.css";
import "../assets/css/login.css";

function Login() {
    return (
        <section className="article">
            <div className="article-wrapper login-wrapper">
                <div className="article-title dark login-title">
                    <h1>로그인</h1>
                </div>

                <form className="login-form">
                    <div className="login-group">
                        <label htmlFor="email">이메일 주소</label>
                        <div className="login-input-wrap">
                            <input type="email" id="email" name="email" required />
                        </div>
                    </div>

                    <div className="login-group">
                        <label htmlFor="password">비밀번호</label>
                        <div className="login-input-wrap">
                            <input type="password" id="password" name="password" required/>
                            <i className="ri-eye-line eyes-on"></i>
                            <i className="ri-eye-off-line eyes-off"></i>
                        </div>
                    </div>

                    <div className="login-options">
                        <label>
                            <input type="checkbox" />
                            이메일 저장
                        </label>
                        <div>
                            <Link to="#">이메일 찾기</Link>
                            <span className="divider">|</span>
                            <Link to="#">비밀번호 찾기</Link>
                        </div>
                    </div>

                    <button type="submit" className="login-btn">로그인</button>
                </form>

                <hr className="login-divider" />

                <div className="login-register">
                    <h2>아직 계정이 없으신가요?</h2>
                    <p>개인 계정을 생성하시면 더욱 다양한 혜택을 누리실 수 있습니다.</p>
                    <button className="register-btn"><Link to="/join">Localmotive 계정 만들기</Link></button>
                </div>
            </div>
        </section>
    );
}

export default Login;
