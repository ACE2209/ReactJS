// export default function Section({title, children, id, className}) {
//   return (
//     <section id={id} className={className}>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// }

// cứ mõi lần truyền thêm thuộc tính như id, className .. chúng ta truyền thủ công sẽ rất mất thời gian 
// khi đó chúng ta sẽ truyền một cách tự động ...props(tên biến bất kì)
// toán tử spread Operator : ...props sẽ tự động trải các thuộc tính này và áp dụng 
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
