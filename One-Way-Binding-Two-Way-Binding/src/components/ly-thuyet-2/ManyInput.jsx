import { useState } from "react";
import anh1 from "../../assets/anh1.png"; // đường dẫn đúng tới ảnh

function Output() {
  //khởi tạo state dưới dạng object để quản lý nhiều trường input
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });
  //hàm xử lý thay đổi dữ liệu khi nhập vào input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      // toán tử spread
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <img src={anh1} alt="ảnh mô tả" />;<h2>Cập nhật thông tin</h2>
      <label>
        Họ và tên:
        <input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <h3>Thông tin đã nhập</h3>
      <p>Họ và tên: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <img src="/anh2.png" alt="lỗi ảnh" />
    </>
  );
}

export default Output;
