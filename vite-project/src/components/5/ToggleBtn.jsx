import { useState } from "react";
import "./ToggleBtn.css";

export default function Output() {
  // 1. sử dụng useState để cập nhật trạng thái
  //   2. Khởi tạo giá trị ban đầu là false
  // 3. isActive : trạng thái ban đầu
  // 4. setIsActive : hàm để cập nhật trạng thái
  const [isActive, setIsActive] = useState(false);

  //   9. Hàm này có chức năng là
  function handleToggle() {
    // 10. chuyền vào tham số (prev) và cố định tham số đó (!prev)
    // 11. Nếu đang là true thì chuyển thành false và ngược lại
    // 12. Do click lần đầu là false nên sẽ được chuyển sang true và ngược lại khi click thêm cái nữa là thành false
    // 13. và sẽ set lại cái IsActive (setIsActive) thành true
    setIsActive((prev) => !prev);
  }
  return (
    <div className="container">
      {/* 5. Dùng toán từ ba ngôi để kiểm tra isActive là true hay false */}
      {/* 6. Do ta mới truy cập vào active nên giá trị khởi tạo là false */}
      {/* 7. Vì là false nên nhận giá trị classname là undefined */}
      {/* 14. và khi nó là true nó sẽ nhận giá trị đằng sau là active */}
      <p className={isActive ? "active" : undefined}>Click vào em!</p>
      {/* 8. khi người dùng click vào nút thì sẽ gọi hàm handleToggle */}
      <button onClick={handleToggle}>Toggle btn</button>
    </div>
  );
}
