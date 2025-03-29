-- 데이터베이스 선택
USE localmotive;

-- 기존 테이블 삭제
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS spaces CASCADE;
DROP TABLE IF EXISTS space_reservations CASCADE;
DROP TABLE IF EXISTS performances CASCADE;
DROP TABLE IF EXISTS performance_reservations CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;

-- 회원 테이블 생성
CREATE TABLE users (
	user_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '회원 고유 ID',
    email VARCHAR(100) NOT NULL UNIQUE COMMENT '로그인용 이메일',
    password VARCHAR(255) NOT NULL COMMENT '비밀번호',
    name VARCHAR(100) NOT NULL COMMENT '회원 이름',
    phone VARCHAR(20) NOT NULL COMMENT '휴대폰 번호',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT '가입 일시',
    status CHAR(1) DEFAULT 'Y' CHECK (status IN ('Y', 'N')) NOT NULL COMMENT '상태 (N: 탈퇴)'
);

CREATE TABLE spaces (
	space_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '공간 고유 ID',
    name VARCHAR(100) NOT NULL UNIQUE COMMENT '공간 이름',
    description TEXT NOT NULL COMMENT '공간 설명',
    price_per_30min INT NOT NULL COMMENT '30분당 가격',
    status CHAR(1) DEFAULT 'Y' CHECK (status IN ('Y', 'N')) NOT NULL COMMENT '상태 (N: 비활성화)'
);

CREATE TABLE space_images (
	image_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '공간 이미지 고유 ID',
    space_id INT NOT NULL COMMENT '공간 ID',
    image_url VARCHAR(255) NOT NULL COMMENT '이미지 경로',
    image_level INT DEFAULT 2 CHECK (image_level IN (1, 2)),
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT '업로드 일시',
    FOREIGN KEY (space_id) REFERENCES spaces(space_id) ON DELETE CASCADE
);

CREATE TABLE space_reservations (
	reservation_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '예약 고유 ID',
    user_id INT NOT NULL COMMENT '회원 ID',
    space_id INT NOT NULL COMMENT '공간 ID',
    reserved_date DATE NOT NULL COMMENT '예약 날짜',
    start_time TIME NOT NULL COMMENT '시작 시간',
    end_time TIME NOT NULL COMMENT '종료 시간',
    total_price INT NOT NULL COMMENT '총 금액 (시간 * 가격)',
    payment_tid VARCHAR(255) NOT NULL UNIQUE COMMENT '결제 번호',
    payment_process VARCHAR(100) NOT NULL COMMENT '결제 방식',
    payment_status CHAR(1) DEFAULT 'Y' CHECK (payment_status IN ('Y', 'N')) NOT NULL COMMENT '결제 상태 (N: 결제 취소)',
    refund_date DATETIME COMMENT '환불 일시',
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (space_id) REFERENCES spaces(space_id)
);

CREATE TABLE performances (
	performance_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '공연 고유 ID',
    title VARCHAR(100) NOT NULL COMMENT '공연 제목',
    description TEXT NOT NULL COMMENT '공연 설명',
    booking_start_date DATE NOT NULL COMMENT '예매 시작일',
    booking_end_date DATE NOT NULL COMMENT '예매 마감일',
    date DATE NOT NULL COMMENT '공연 날짜',
    start_time TIME NOT NULL COMMENT '시작 시간',
    end_time TIME NOT NULL COMMENT '종료 시간',
    price_per_ticket INT NOT NULL COMMENT '1매당 가격',
    status CHAR(1) DEFAULT 'Y' CHECK (status IN ('Y', 'N')) NOT NULL COMMENT '상태 (N: 공연 종료)'
);

CREATE TABLE performance_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '공연 이미지 고유 ID',
    performance_id INT NOT NULL COMMENT '공연 ID',
    image_url VARCHAR(255) NOT NULL COMMENT '이미지 경로',
    image_level INT DEFAULT 2 CHECK (image_level IN (1, 2)),
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL COMMENT '업로드 일시',
    FOREIGN KEY (performance_id) REFERENCES performances(performance_id) ON DELETE CASCADE
);

CREATE TABLE performance_reservations (
	ticket_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '예매 고유 ID',
    user_id INT NOT NULL COMMENT '회원 ID',
    performance_id INT NOT NULL COMMENT '공연 ID',
    quantity INT NOT NULL COMMENT '예매 수량',
    total_price INT NOT NULL COMMENT '총 금액 (수량 * 가격)',
    payment_tid VARCHAR(255) NOT NULL UNIQUE COMMENT '결제 번호',
    payment_process VARCHAR(100) NOT NULL COMMENT '결제 방식',
    payment_status CHAR(1) DEFAULT 'Y' CHECK (payment_status IN ('Y', 'N')) NOT NULL COMMENT '결제 상태 (N: 결제 취소)',
    refund_date DATETIME COMMENT '환불 일시',
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (performance_id) REFERENCES performances(performance_id)
);

CREATE TABLE reviews (
	review_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '리뷰 고유 ID',
    user_id INT NOT NULL COMMENT '작성자 ID',
    reservation_id INT COMMENT '예약 ID (공간 리뷰용)',
    ticket_id INT COMMENT '공연 ID (공연 리뷰용)',
    rating INT CHECK (rating BETWEEN 1 AND 5) NOT NULL COMMENT '평점',
    content TEXT NOT NULL COMMENT '리뷰 내용',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '작성 일시',
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (reservation_id) REFERENCES space_reservations(reservation_id),
    FOREIGN KEY (ticket_id) REFERENCES performance_reservations(ticket_id)
);
