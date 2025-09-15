// 1. Muốn sử dụng useState thì phải import
// 2. Những thứ bắt đầu bằng use đều là react Hook
import { useState } from "react";

function Output() {
  // 3. useState ta sẽ truyền vào nó giá trị khởi tạp có thể là null hoặc "chào bạn!" như code
  // 4. Hàm useState luôn trả về một mảng hai phần tử
  // 5. Nên ta dùng destructuring để lấy hai giá trị của hai phần tử đó "[greeting, setGreeting]"
  // 6. greeting lấy giá trị hiện tại của phần tử hay gọi là giá trị mới khởi tạo
  // 7. setGreeting là hàm để update giá trị
  const [greeting, setGreeting] = useState("Chào bạn!");

  // 110. Hàm updateGreeting được khai báo
  function updateGreeting() {
    // setGreeting("lời chào mới");

    // 11. sau đó chúng ta kiểm tra thời gian
    // 12. thời gian hiện tại hoặc là thời gian thực
    // const currentHour = 18;
    const currentHour = new Date().getHours();

    console.log(currentHour);
    // Thỏa mãn điều kiện thì update lời chào
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Chào buổi sáng!");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Chào buổi chiều!");
    } else {
      setGreeting("Chào buổi tối!");
    }
  }

  return (
    <>
      <p>{greeting}</p>
      {/* 8. chúng ta có nút bấm lắng nghe sự kiện onClick. */}
      {/* 9. khi ta onClick sẽ gọi hàm updateGreeting  */}
      <button onClick={updateGreeting}>Cập nhật lời chào</button>
    </>
  );
}

export default Output;
