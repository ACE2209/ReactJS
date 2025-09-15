// export default function Tabs({button, children}) {
//   return (
//     <>
//       <menu>{button}</menu>
//       {children}
//     </>
//   );
// }

// Nhớ ghi là ButtonContainer chứ ko được ghi là buttioncontainer vì máy sẽ cho đó là thẻ html và sẽ gây lỗi
// eslint-disable-next-line no-unused-vars
export default function Tabs({button, children, ButtonsContainer}) {
  // dùng dòng này để máy biết B = b và sẽ làm code dài hơn
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  );
}