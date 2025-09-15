import { useState } from "react";
import "./activate.css";

// Don't change the component name "App"
export default function Output() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  function activateHandler() {
    setIsAlertVisible(true);
  }

  function confirmHandler() {
    setIsAlertVisible(false);
    setIsActivated(true);
  }

  function cancelHandler() {
    setIsAlertVisible(false);
    setIsActivated(false);
  }

  return (
    <>
      {/* 5. đây là toán từ AND nên tát cả điều kiện phải đúng*/}
      {!isActivated && !isAlertVisible && (
        <button onClick={activateHandler} className="action-btn">
          Activate
        </button>
      )}

      {/* 1.!isAlertVisible Hiển thị nó đang bằng true */}
      {/* 2. isAlertVisible === false : đây là cách viết nếu nó false  */}
      {/* 3. Nếu isAlertVisible là true thì hiện đoạn code dưới */}
      {isAlertVisible && (
        <div className="alert-box">
          <h2>Warning!</h2>
          <p>Are you sure you want to activate this mode?</p>
          {/* 7. chuyền hàm confirmHandler vào để khi bấm confirm sẽ hiện thông báo h3 ở mục 4. */}
          <button onClick={confirmHandler} className="confirm-btn">
            Confirm
          </button>
          {/* 6. chuyền hàm cancelHandler vào để khi bấm cancel thì sẽ hiện sAlertVisible*/}
          <button onClick={cancelHandler} className="cancel-btn">
            Cancel
          </button>
        </div>
      )}
      {/* 4. nếu isActivated là true thì hiện đoạn h3 */}
      {isActivated && <h3 className="success-message">Mode Activated!</h3>}
    </>
  );
}
