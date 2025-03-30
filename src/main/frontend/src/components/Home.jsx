import { useEffect } from "react";
import {Link} from "react-router-dom";
import { Map, MapMarker, CustomOverlayMap, ZoomControl } from "react-kakao-maps-sdk";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/promotion.css";
import "../assets/css/article_common.css";
import "../assets/css/article1.css";
import "../assets/css/article2.css";
import "../assets/css/article3.css";
import "../assets/css/floating.css";

function Home() {
    useEffect(() => {
        AOS.init({
            once: true,
            offset: 500,
            delay: 200,
            duration: 1000,
            easing: 'ease'
        });

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollDown = document.querySelector('.scrollDown');

            if (scrollY > 100) {
                scrollDown?.classList.add('hide');
            } else {
                scrollDown?.classList.remove('hide');
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main>
            <section className="promotion" id="1">
                <div className="promotion-wrapper">
                    <div className="p-text">
                        <h1 data-aos="fade-in" data-aos-delay="0">
                            모티베이터들이 영감을 주고받는<br/>
                            도심 속 모임 공간
                        </h1>
                    </div>
                </div>
                <picture className="scrollDown">
                    <source srcSet="/images/scrollDown2.svg" media="(max-width: 850px)" />
                    <img src="/images/scrollDown.svg" alt="스크롤 다운" />
                </picture>
            </section>
            {/* Article 1 - LOUNGE */}
            <section className="article article1" id="2">
                <div className="article-wrapper">
                    <div className="a1-wrapper">
                        <div className="a1-left">
                            <div className="article-title dark">
                                <h1 data-aos="fade-in">LOUNGE</h1>
                                <p>
                                    180인치의 초고화질 대형 LED스크린과<br />
                                    최상의 음향설비를 갖추고 있어<br />
                                    공연 / 세미나 / 파티 / 스포츠 관람 / 촬영 등<br />
                                    다양한 이벤트를 할 수 있습니다.
                                </p>
                                <div className="at-vertical"></div>
                                <Link to="#LOUNGE">
                                    LOUNGE 예약하기 <i className="ri-arrow-right-s-line"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="a1-right">
                            <div className="a1-box-wrapper">
                                <div className="a1-box" data-aos="fade-up">
                                    <div className="a1-box-image">
                                        <img src="/images/lounge-1.jpg" alt="lounge1" />
                                    </div>
                                    <div className="a1-box-text">
                                        <h2>LOUNGE</h2>
                                        <h1>
                                            최대 50인 이용 가능<br />
                                            <span>넓고 쾌적한 프리미엄 공간</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="a1-box" data-aos="fade-up">
                                    <div className="a1-box-image">
                                        <img src="/images/lounge-2.jpg" alt="lounge2" />
                                    </div>
                                    <div className="a1-box-text">
                                        <h2>LOUNGE</h2>
                                        <h1>
                                            180인치 초고화질<br />
                                            <span>대형 LED스크린</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="a1-box-wrapper">
                                <div className="a1-box" data-aos="fade-up">
                                    <div className="a1-box-image">
                                        <img src="/images/lounge-3.jpg" alt="lounge3" />
                                    </div>
                                    <div className="a1-box-text">
                                        <h2>LOUNGE</h2>
                                        <h1>
                                            공연, 세미나, 파티 등<br />
                                            <span>다목적 활용 가능</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="a1-box" data-aos="fade-up">
                                    <div className="a1-box-image">
                                        <img src="/images/lounge-4.jpg" alt="lounge4" />
                                    </div>
                                    <div className="a1-box-text">
                                        <h2>LOUNGE</h2>
                                        <h1>
                                            최상의 음향설비<br />
                                            <span>현장감 넘치는 사운드</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Article 2 - SOHO */}
            <section className="article article2" id="3">
                <div className="article-wrapper">
                    <div className="a2-wrapper">
                        <div className="a2-left">
                            <div className="a2-box-wrapper">
                                <div className="a2-box" data-aos="fade-up">
                                    <div className="a2-box-image">
                                        <img src="/images/soho-1.jpg" alt="soho1" />
                                    </div>
                                    <div className="a2-box-text">
                                        <h2>SOHO</h2>
                                        <h1>
                                            미팅, 워크샵 등 <br />
                                            <span>소규모 모임 최적화</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="a2-box" data-aos="fade-up">
                                    <div className="a2-box-image">
                                        <img src="/images/soho-2.jpg" alt="soho2" />
                                    </div>
                                    <div className="a2-box-text">
                                        <h2>SOHO</h2>
                                        <h1>
                                            5,000안시 & 120인치<br />
                                            <span>빔프로젝터</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="a2-box-wrapper">
                                <div className="a2-box" data-aos="fade-up">
                                    <div className="a2-box-image">
                                        <img src="/images/soho-3.jpg" alt="soho3" />
                                    </div>
                                    <div className="a2-box-text">
                                        <h2>SOHO</h2>
                                        <h1>
                                            쾌적한 공간과<br />
                                            <span>실용적인 시설</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="a2-box" data-aos="fade-up">
                                    <div className="a2-box-image">
                                        <img src="/images/soho-4.jpg" alt="soho4" />
                                    </div>
                                    <div className="a2-box-text">
                                        <h2>SOHO</h2>
                                        <h1>
                                            편안한 분위기<br />
                                            <span>효과적인 커뮤니케이션</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="a2-right">
                            <div className="article-title dark">
                                <h1 data-aos="fade-in">SOHO</h1>
                                <p>
                                    120인치의 빔프로젝터가 설치되어 <br />
                                    미팅 / 워크샵 / 소규모 모임 등 <br />
                                    편안하고 실용적인 환경을 제공합니다.
                                </p>
                                <div className="at-vertical"></div>
                                <Link to="#SOHO">
                                    <i className="ri-arrow-left-s-line"></i> SOHO 예약하기
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Article 3 - Location */}
            <section className="article article3" id="4">
                <div className="article-wrapper">
                    <div className="a3-wrapper">
                        <div className="a3-left">
                            <div className="article-title dark">
                                <h1 data-aos="fade-in">Location</h1>
                                <p>
                                    매일 09:00 ~ 22:00 <br />
                                    방문상담은 전화로 먼저 예약해 주시기 바랍니다.
                                </p>
                                <div className="at-vertical"></div>
                                <a
                                    href="https://map.kakao.com/link/to/로컬모티브,37.5231460595577,126.896750446841"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    길찾기
                                    <i className="ri-arrow-right-s-line"></i>
                                </a>
                            </div>
                        </div>
                        <div className="a3-right" data-aos="fade-left">
                            <Map
                                center={{lat: 37.5231460595577, lng: 126.896750446841}}
                                style={{width: "100%", height: "500px"}}
                                level={4}
                            >
                                <MapMarker position={{ lat: 37.5231460595577, lng: 126.896750446841 }} />
                                <CustomOverlayMap position={{ lat: 37.5231460595577, lng: 126.896750446841 }}
                                                  yAnchor={2.8}
                                >
                                    <div className="roughmap-maker-label">
                                        <span className="roughmap-lebel-text">
                                            Localmotive
                                        </span>
                                    </div>
                                </CustomOverlayMap>
                                <ZoomControl position={"RIGHT"} />
                            </Map>
                            <div className="a3-address">
                                <p>
                                    <i className="ri-map-pin-line"></i>
                                    서울특별시 영등포구 당산로18길 5, 1층
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
