import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="lỗi ảnh nè" />
        <h1>Phần Header được tạo trong folder component</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}

export default Header;
