import "../../index.css";
import CoreConcepts from "./CoreConcepts.jsx";

import Header from "../Header/Header.jsx";
import Examples from "./Example.jsx";

function Output() {
  // để kiếm tra giá trị được lấy chưa ở console.log
  // const kq = myData.map((item) => ({ ...item }));
  // console.log(kq);

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default Output;
