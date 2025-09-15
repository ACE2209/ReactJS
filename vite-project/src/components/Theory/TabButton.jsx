// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

// export default function TabButton({ children }) {
//   // trong js tạo hàm btn để lắng nghe sự kiện button và thực hiện việc nào đó
//   // const btn = document.querySelector("button");
//   // btn.addEventListener("click", ()=>{
//   //   //làm việc j đó
//   // })

//   //  Define function thực thi khi click vào button
//   function handleClick() {
//     alert("Nút bấm được click");
//   }
//   return (
//     <li>
//       {/* hàm handleClick sẽ thực thi khi onClick vào nút bấm (button) */}
//       {/* lưu ý là truyền tên hàm (handleClick) ko truyền hàm thực thi "handleClick()" */}
//       {/* children là text để hiện thị dữ ra màn hình khi bấm button */}
//       <button onClick={handleClick}>{children}</button>
//     </li>
//   );
// }

// export default function TabButton({random}) {
//     return (
//       <li>
//         <button>{random}</button>
//       </li>
//     );
//   }

// truyền hàm sự kiện từ component cha vào TabButton
// export default function TabButton({children, onSelect}) {
//   return (
//     <li>
//       <button onClick={onSelect}>{children}</button>
//     </li>
//   );
// }

// thêm class active vào tabButton để biết chúng ta đang click vào nút nào
// export default function TabButton({children, onSelect, isSelected}) {
//   return (
//     <li>
//       {/* 3. Nếu isSelected true thì active còn false thì undefined */}
//       <button className={isSelected ? "active" : undefined} onClick={onSelect}>
//         {children}
//       </button>
//     </li>
//   );
// }

// forwarding props
export default function TabButton({children, isSelected, ...props}) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}