import Book from "./Book";
// 1. dữ liệu cho sẵn
const myBooks = ["sách hay", "lập trình cùng ReactJS", "kỹ năng sống"];

import "./map.css";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">Danh sách Sách yêu thích</h1>

        <ul className="book-list">
          {/* cách 1: lấy dữ liệu theo cách cứng */}
          <Book title={myBooks[0]}></Book>
          <Book title={myBooks[1]} />
          <Book title={myBooks[2]} />
          <hr />
          {/* cách 2: dùng .map để lấy dữ liệu */}
          {myBooks.map((sach, index) => (
            <Book title={sach} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
