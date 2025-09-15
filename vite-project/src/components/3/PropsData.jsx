// tối ưu hóa code của bài 2 bằng cách sử dụng file data.js
import { myData } from "../../../data.js";
import PropTypes from "prop-types";

function MainContent({image, title, desc}) {
  return (
    // sử dụng destructuring để giảm thiểu gọi props của bài 2
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}

MainContent.propTypes = {
  image: PropTypes.string.isRequired, // kiểu chuỗi . bắt buộc phải có
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

function Output() {
  
  console.log(myData);

  return (
    <>
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {/* sử dụng toán tử spread operator để "trải" (spread) các thuộc tính của một object  */}
            <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} />
          </ul>
        </section>
      </main>
    </>
  );
}
export default Output;
