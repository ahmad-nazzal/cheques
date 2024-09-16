import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import "./styles/header.css";
import "./styles/left-section.css";
import "./styles/right-section.css";
import arabicImage from "./assets/arabic.jpg";
import palestineImage from "./assets/palestine.jpg";
import ammanImage from "./assets/amman.jpg";
function App() {
  const [bankImage, setBankImage] = useState(palestineImage);

  const handleBankChange = (event) => {
    const selectedBank = event.target.value;
    setBankImage(selectedBank);
  };
  return (
    <>
      <div class="container">
        <header class="website-header">
          <div class="d-flex flex-column align-items-center">
            <h2>أهلا بكم في موقع شيكات</h2>
            <p>أكبر موقع لطباعة وإدراة الشيكات اونلاين</p>
          </div>
        </header>
        <div class="sperator"></div>
        <div className="container">
          <div class="row g-5">
            <div class="right-side section col-sm-3">
              <div id="form" class="d-flex flex-column align-items-center">
                <h6 class="pt-2">إملأ الحقول و قم بالطباعة</h6>
                <div class="sperator"></div>
                <label for="cheque-date" class="align-self-start">
                  تاريخ الشيك
                </label>
                <input type="date" name="cheque-date" class="w-100" />
                <label for="cheque-name" class="align-self-start">
                  اسم المستفيد
                </label>
                <input type="name" name="cheque-name" class="w-100" />
                <label for="cheque-price" class="align-self-start">
                  المبلغ و العملة
                </label>
                <div class="d-flex align-items-center mb-3">
                  <input type="number" name="cheque-price" />
                  <select class="mr-1">
                    <option value="ls">LS</option>
                    <option value="jod">JOD</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
                <label for="cheque-tasteer" class="align-self-start">
                  التسطير
                </label>
                <select class="w-100">
                  <option value="ls">يصرف للمستفيد الأول</option>
                  <option value="jod">يصرف لحامله</option>
                  <option value="usd">يصرف للمستفيد الأول بتاريخه</option>
                </select>
                <label for="cheque-number" class="align-self-start">
                  رقم الشيك
                </label>
                <input type="text" name="cheque-number" class="w-100" />
              </div>
            </div>
            <div class="left-side section col-sm mr-3 p-4">
              <div id="form" class="d-flex flex-column align-items-center">
                <div class="pt-2 align-self-start">
                  <label for="bank-name" class="align-self-center">
                    البنك
                  </label>
                  <select onChange={handleBankChange}>
                    <option value={palestineImage}>بنك فلسطين</option>
                    <option value={ammanImage}>بنك القاهرة عمان</option>
                    <option value={arabicImage}>البنك العربي</option>
                  </select>
                </div>
              </div>
              <div class="sperator mt-2"></div>
              <img src={bankImage} alt="bank image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
