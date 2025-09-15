import MainContent from "./MainContent.jsx";
import { myData } from "../../../data.js";
import Section from "./Section.jsx";

function CoreConcepts() {
  return (
    <Section title="khái niệm chính trong react" id="core-concepts">
      {/* cách thêm dữ liệu cứng */}
      {/* <h2>Khái niệm chính trong React</h2> */}
      <ul>
        {/* <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} /> */}

        {/* 1. dùng .map để lấy dữ liệu từ data.js */}
        {/* 2. khi dùng .map thì sẽ được yêu cầu cung cấp key  */}
        {/* 3. key dùng để xem phần tử trong key có tồn tại không*/}
        {/* 4. toán tử spread */}
        {myData.map((item) => (
          <MainContent key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}
export default CoreConcepts;
