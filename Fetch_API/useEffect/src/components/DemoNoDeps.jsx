// effect API mà ko sử dụng dependency

// useEffect là gì?
// Là một React Hook dùng để chạy side effects (tác vụ phụ) như:
// Gọi API (fetch, axios, …)
// Thao tác DOM
// Lắng nghe/huỷ sự kiện (event listeners)
// Thiết lập/huỷ bỏ timer (setTimeout, setInterval)
// useEffect luôn chạy sau khi component render xong.

// Dependency array ([])
// useEffect(callback, deps) có 2 tham số:
// callback: hàm chứa side effect
// deps: mảng phụ thuộc

import { useEffect, useState } from "react";

export default function DemoNoDeps() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect chạy sau mỗi lần render");
    {
      console.log("Bắt đầu fetch");
    }
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
    {
      console.log("Chương trình đã chạy qua fetch");
    }
  });

  return (
    <>
      {/* useEffect không có dependency → chạy sau mỗi lần render. 
      Mỗi lần nhấn nút làm tăng count → component render lại → useEffect chạy lại → gọi fetch API
      lần nữa. */}
      <h3>Không truyền dependency</h3>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <p>Giá trị : {count}</p>
      {console.log("Render lại giao diện")}
    </>
  );
}
