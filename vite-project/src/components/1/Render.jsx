// các cách để render dữ liệu động
import "../../App.css";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const wellCome = [
  "Chào mừng bạn đến với ReactJS", //0
  "Rất vui được học thêm nhiều về ReactJS", //1
  "Chúng ta sẽ học thật nhiều thứ thú vị về React", //2
];

// Để có thể random ngẫu nhiên ta dùng function random sau
function ranDomTitle() {
  return Math.floor(Math.random() * wellCome.length);
}

function Header() {
  const title = wellCome[ranDomTitle()];

  return (
    <>
      <p>
        Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại là{" "}
        <strong>{time}</strong>
      </p>
      <h2>Danh sách công việc của tôi</h2>
      <ul>
        <li>Học bài ReactJS</li>
        <li>Làm bài tập liên quan </li>
        <li>Dọn dẹp lại bàn học</li>
      </ul>
      <p>Chúc hoàn thành tốt công việc ngày hôm nay</p>

      {/* <h1>{wellCome[0]}</h1> lấy giá trị cứng */}
      {/* <h1>{wellCome[ranDomTitle()]}</h1> lấy giá trị random ngẫu nhiên bằng function ranDomTitle */}
      {/* cách để gọi function ngắn gọn hơn  */}
      <h1>{title}</h1>
    </>
  );
}

const name = "Truân";

let isLoggedIn = false;

let person = {
  name: "Truân",
  age: 20,
};

function DynamicValue() {
  return (
    <>
      {/* Cách 1: Dùng để chèn "biểu thức" javaScript (expression) */}
      <h2>chào {name}</h2>
      <p>kết quá: {1 + 2 * 3}</p>

      {/* cách 2: không chèn "câu lệnh" (statement) */}
      {/* <p>{if(true) {"Đúng rồi"}}</p>  báo lỗi ko chạy được*/}

      {/* 3. Kết hợp với điều kiện (Toán tử Ternary) 
      JSX không hỗ trợ trực tiếp `if-else`, nhưng có thể dùng toán tử ternary bên trong
      */}
      {/* nếu isLoggedIn nó true thì màn hình sẽ hiện "bạn đã đăng nhập" ngược lại sẽ hiện "Hãy đăng nhập" */}
      <p>{isLoggedIn ? "Bạn đã đăng nhập" : "Hãy đăng  nhập"}</p>

      {/* 4. chèn thuộc tính đối tượng */}

      <p>
        Tên: {person.name} , Tuổi : {person.age}
      </p>
    </>
  );
}

function Output() {
  return (
    <>
      {/* đây là hai cách gọi cơ bản function trong react */}
      {/* <Header></Header> */}
      <Header />
      <DynamicValue />
    </>
  );
}
export default Output;
