// One-Way Binding là một cơ chế mặc định. bất kì khi nào state thay đổi thì UI sau khi được react re-render thì giá trị mới sẽ được hiện thị.
// Two-Way Binding là cơ chế giúp đồng bộ dữ liệu giao diện người dùng và state trong react
// vd khi dữ liệu UI tháy đổi thì state sẽ cập nhật ngay lập tức
//    khi state thay đổi thì UI sẽ tự động cập nhật theo.

import { useState } from "react";

function Output() {
  //khai báo state để lưu giá trị của input
  //khởi tạo giá trị ban đầu là Player 1

  const [playerName, setPlayerName] = useState("Player 1");
  //hàm xử lý khi người dùng nhập liệu
  const handleChange = (e) => {
    // setPlayerName là hàm cập nhật trạng thái
    // e.target.value đây là code javaScript có sẵn để lấy dữ liệu
    setPlayerName(e.target.value);
  };
  // tóm lại: khi người dùng nhập dữ liệu vào thanh text thì onChange sẽ xảy ra và nó sẽ gọi hàm HandleChange. và hàm HandleChang sẽ lấy giá trị ô input set lại cho playerName
  return (
    <>
      <h2>Nhập tên người chơi</h2>
      {/* Thuộc tính value là những gì sẽ xuất hiện ở input */}
      {/* truyền value là playerName. mà giá trị ban đầu của playerName là Player 1. thì màn hình sẽ xuất hiện giá trị đầu tiên ở thành text là Player 1  */}
      {/* onChange là sự kiện lắng nghe sự thay đổi. Nếu onChange này xảy ra thì nó sẽ gọi hàm handleChange */}

      <input type="text" value={playerName} onChange={handleChange} />
      <p>Bạn đã nhập: {playerName}</p>
    </>
  );
}

export default Output;
