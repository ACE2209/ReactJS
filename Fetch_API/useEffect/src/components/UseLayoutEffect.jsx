// Thấy được sự khác nhau giữa useEffect và useLayoutEffect
//  sử dụng useEffect gây ra hiện tượng "nhấp nháy" giao diện và cách useLayoutEffect có thể giải quyết triệt để vấn đề đó.
// import { useState, useLayoutEffect } from "react";
import { useState, useEffect } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //useLayoutEffect(() => {
    if (count > 2) {
      setCount(0);
    }
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Count</button>
    </div>
  );
}
