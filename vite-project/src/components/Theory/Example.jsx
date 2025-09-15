// Để câp nhật một thành phần chúng ta sẽ dùng useState (State nghĩa là trạng thái, trạng thái của dữ liệu thay đổi từ A -> B)
// Tất cả thành phần bằng đầu bằng tiền tố use... được gọi là react Hook
// Hook bản chất là hàm tính năng được react thiết kế sẵn
import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../../../data.js";
import Section from "./Section.jsx";

function Examples() {
  // khi sử dụng useState bắt buộc phải gọi tại cấp cao nhất của hàm thành phần
  // ý là sẽ nằm ở ngoài chứ ko nằm trong các function nằm trong hàm Output
  // không nằm trong cả if else
  // useState();
  // const [selectedTopic, setSelectedTopic] = useState("Vui lòng click vào nút");
  // const [selectedTopic, setSelectedTopic] = useState("jsx");

  // Đôi khi ta chưa lựa chọn ta sẽ cho nó hiện thông báo click vào r mới hiện thông tin
  const [selectedTopic, setSelectedTopic] = useState();

  console.log(`Output duoc goi ghi nhan f5`);
  // function handleSelect() {
  //   alert("Nút bấm được click");
  // }

  // thêm selectedButton để dùng arrow function
  // function handleSelect(selectedButton) {
  //   alert(`${selectedButton} được chọn`);
  // }

  // let tabContent = "Nội dung được hiển thị";

  // function handleSelect(selectedButton) {
  //   alert(`${selectedButton} được chọn`);
  //   tabContent = selectedButton;
  // }

  // console.log(`${tabContent} ngoai ham`);

  let tabContent = <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>;

  //đây là code của cách 3 để hiện dữ liệu
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    // alert(`${selectedButton} được chọn`);
    // tabContent = selectedButton;
    // console.log(`${tabContent} trong ham`);
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title="Examples" id="examples" className="demo_class">
      {/* thêm dòng này để ko xuống dòng <TabButton onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
 code này */}
      {/* prettier-ignore */}
      {/* <menu> */}
      {/* Dùng props.children để hiển thị nội dung mà bạn đặt giữ cặp thẻ TabButton khi sử dụng component này */}
      {/* <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton> */}

      {/* <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton> */}

      {/* <TábButton onSelect={()=>{handleSelect('components')}}>Components</TábButton>
            <TabButton onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton onSelect={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton onSelect={()=>{handleSelect('state')}}>State</TabButton> */}

      {/* <TabButton
            // 1. kiểm tra xem nó có bằng chuỗi components ko ?
            // 2. Nếu bằng thì giá trị của nó true
              isSelected={selectedTopic==="components"}
              onSelect={()=>{handleSelect('components')}}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onSelect={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onSelect={()=>{handleSelect('state')}}>State</TabButton>
          */}
      {/* <TabButton>Button1</TabButton> */}
      {/* <TabButton random="Components"></TabButton> */}
      {/* </menu> */}

      {/* <Tabs button={
            <>
              <TabButton
              isSelected={selectedTopic==="components"}
              onClick={()=>{handleSelect('components')}}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onClick={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onClick={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onClick={()=>{handleSelect('state')}}>State</TabButton></>
          }>
          {tabContent}
          </Tabs> */}

      {/* {tabContent} */}

      {/* {selectedTopic} */}

      {/* <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].desc}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> */}

      <Tabs
        // ButtonsContainer="menu"
        button={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

      {/* cách 1: Dùng toán tử 3 ngôi */}
      {/* để khi chưa click vào chưa hiện dữ liệu thì ta sẽ dùng toán tử ba ngôi để thực hiện  */}
      {/* cú pháp toán tử "Biến = biểu thức 1 ? biểu thức 2 : biểu thức 3" */}
      {/* Nếu biểu thức 1 đúng thì sẽ thực hiện biểu thức 2. ngược lại, nếu nó sai nó sẽ thực hiện biểu thức 3 */}
      {/* {!selectedTopic ? (
            <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {/* Cách 2: && - dùng toàn tử AND*/}
      {/* ban đầu !selectedTopic là true */}
      {/* Nếu useState ko có gì truyền vào thì in thẻ p */}
      {/* {!selectedTopic && <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>} */}

      {/* còn khi click vào các mục rồi thì sẽ chuyền vào selectedTopic để hiện ra dữ liệu  */}
      {/* {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {/* Cách 3 : khai báo biến riêng biệt để code jsx clean hơn*/}
      {/* {tabContent} */}
    </Section>
  );
}
export default Examples;
