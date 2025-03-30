import React from "react";
import "../assets/css/article_common.css";
import "../assets/css/join.css";

function Join() {
    return (
        <section className="article">
            <div className="article-wrapper join-wrapper">
                <div className="article-title dark join-title">
                    <h1>회원가입</h1>
                    <p className="required-info">필수입력사항 *</p>
                </div>

                <form className="join-form">
                    <div className="join-group">
                        <label htmlFor="name">이름 *</label>
                        <div className="join-input-wrap">
                            <input type="text" id="name" name="name" required />
                            <i className="ri-check-line valid-icon"></i>
                        </div>
                    </div>

                    <div className="join-group">
                        <label htmlFor="phone">연락처 *</label>
                        <div className="join-row">
                            <input type="tel" id="phone" name="phone" required className="join-row-input" />
                            <button type="button" className="join-row-btn">인증번호 받기</button>
                        </div>
                    </div>

                    <div className="join-group">
                        <label htmlFor="verifyCode">인증번호 *</label>
                        <div className="join-row">
                            <input type="text" id="verifyCode" name="verifyCode" required className="join-row-input" />
                            <button type="button" className="join-row-btn">확인</button>
                        </div>
                    </div>

                    <div className="join-group">
                        <label htmlFor="email">이메일 주소 *</label>
                        <div className="join-input-wrap">
                            <input type="email" id="email" name="email" required/>
                            <i className="ri-check-line valid-icon"></i>
                            <i className="ri-close-circle-fill clear-button"></i>
                        </div>
                        <small className="input-hint">
                            이메일 형식을 확인해주세요.
                        </small>
                    </div>

                    <div className="join-group">
                        <label htmlFor="password">비밀번호 *</label>
                        <div className="join-input-wrap">
                            <input type="password" id="password" name="password" required/>
                            <i className="ri-check-line valid-icon"></i>
                            <i className="ri-eye-line eyes-on"></i>
                            <i className="ri-eye-off-line eyes-off"></i>
                        </div>
                        <small className="input-hint">
                            영문, 숫자, !@#$%^&*?+ 중 하나의 특수문자를 포함해주세요.
                        </small>
                    </div>

                    <div className="join-agreement">
                        <h2>약관 동의</h2>
                        <div className="terms-box">
                            <label><input type="checkbox" /> 본인은 아래 모든 사항에 동의합니다.</label>
                            <label><input type="checkbox" /> [필수] 만 14세 이상입니다.</label>
                            <label><input type="checkbox" /> [필수] 서비스 이용 약관 동의<button>자세히 보기</button></label>
                            <label><input type="checkbox" /> [필수] 개인정보 수집 및 이용 동의 <button>자세히 보기</button></label>
                            <label><input type="checkbox" /> [선택] 광고성 정보 수신 동의 <button>자세히 보기</button></label>
                        </div>
                    </div>

                    <button type="submit" className="join-btn">회원가입</button>
                </form>
            </div>
        </section>
    );
}

export default Join;
