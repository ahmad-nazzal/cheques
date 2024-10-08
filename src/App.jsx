import { createElement, useState, useRef } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import "./styles/header.css";
import "./styles/left-section.css";
import "./styles/right-section.css";
import arabicImage from "./assets/arabic.jpg";
import palestineImage from "./assets/palestine.jpg";
import ammanImage from "./assets/amman.jpg";
import Draggable from "react-draggable";
import { useReactToPrint } from "react-to-print";
import { tafqeet } from "./Tafqeet";
function App() {
  const [bankImage, setBankImage] = useState(palestineImage);
  const [chequeDate, setChequeDate] = useState("");
  const [chequeName, setChequeName] = useState("");
  const [chequePrice, setChequePrice] = useState("");
  const [chequeCurrency, setChequeCurrency] = useState("ils");
  const [chequeTasteer, setChequeTasteer] = useState("");
  const chequeRef = useRef();

  const currecnyToArabic = {
    jod: "ديناراً أردنياً لاغير",
    ils: "شيقل لاغير",
    usd: "دولاراً أمريكياً لاغير",
  };
  const handleBankChange = (event) => {
    setBankImage(event.target.value);
  };

  const handleDateChange = (event) => {
    setChequeDate(event.target.value);
  };

  const handleNameChange = (event) => {
    setChequeName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setChequePrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setChequeCurrency(event.target.value);
  };

  const handleTasteerChange = (event) => {
    setChequeTasteer(event.target.value);
  };
  const handlePrint = useReactToPrint({
    content: () => chequeRef.current,
  });
  useEffect(() => {
    const imageContainer = document.getElementById("image-container");

    function addDragFunctionality() {
      const tasteer = document.getElementById("tasteer");
      if (tasteer) {
        let isDragging = false;
        let offsetX, offsetY;

        const containerRect = imageContainer.getBoundingClientRect();

        tasteer.addEventListener("mousedown", function (event) {
          isDragging = true;
          offsetX = event.clientX - tasteer.offsetLeft;
          offsetY = event.clientY - tasteer.offsetTop;
          event.preventDefault();
          tasteer.style.cursor = "grabbing";
        });

        document.addEventListener("mousemove", function (event) {
          if (isDragging) {
            const tasteerRect = tasteer.getBoundingClientRect();
            let newX = event.clientX - offsetX;
            let newY = event.clientY - offsetY;

            if (newX < 0) newX = 0;
            if (newX + tasteerRect.width > containerRect.width) {
              newX = containerRect.width - tasteerRect.width;
            }
            tasteer.style.left = newX + "px";

            if (newY < 0) newY = 0;
            if (newY + tasteerRect.height > containerRect.height)
              newY = containerRect.height - tasteerRect.height;

            tasteer.style.top = newY + "px";
          }
        });

        document.addEventListener("mouseup", function () {
          tasteer.style.cursor = "move";
          isDragging = false;
        });
      }
    }

    if (chequeTasteer) {
      addDragFunctionality();
    }
  }, [chequeTasteer]);

  return (
    <>
      <div className="container">
        <header className="website-header">
          <div className="d-flex flex-column align-items-center">
            <h2>أهلا بكم في موقع شيكات</h2>
            <p>أكبر موقع لطباعة وإدراة الشيكات اونلاين</p>
          </div>
        </header>
        <div className="sperator"></div>
        <div className="container">
          <div className="row g-5">
            <div className="right-side section col-sm-3">
              <div id="form" className="d-flex flex-column align-items-center">
                <h6 className="pt-2">إملأ الحقول و قم بالطباعة</h6>
                <div className="sperator"></div>
                <label for="cheque-date" className="align-self-start">
                  تاريخ الشيك
                </label>
                <input
                  type="date"
                  name="cheque-date"
                  className="w-100"
                  onChange={handleDateChange}
                />
                <label for="cheque-name" className="align-self-start">
                  اسم المستفيد
                </label>
                <input
                  type="name"
                  name="cheque-name"
                  className="w-100"
                  onChange={handleNameChange}
                />
                <label for="cheque-price" className="align-self-start">
                  المبلغ و العملة
                </label>
                <div className="d-flex align-items-center mb-3">
                  <input
                    type="number"
                    name="cheque-price"
                    onChange={handlePriceChange}
                  />
                  <select className="mr-1" onChange={handleCurrencyChange}>
                    <option value="ils">ILS</option>
                    <option value="jod">JOD</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
                <label for="cheque-tasteer" className="align-self-start">
                  التسطير
                </label>
                <select className="w-100" onChange={handleTasteerChange}>
                  <option value="يصرف للمستفيد الأول">
                    يصرف للمستفيد الأول
                  </option>
                  <option value="يصرف لحامله">يصرف لحامله</option>
                  <option value="يصرف للمستفيد الأول بتاريخه">
                    يصرف للمستفيد الأول بتاريخه
                  </option>
                </select>
                <label for="cheque-number" className="align-self-start">
                  رقم الشيك
                </label>
                <input type="text" name="cheque-number" className="w-100" />
              </div>
            </div>
            <div className="left-side section col-sm mr-3 p-4 d-flex flex-column align-items-center">
              <div id="form" className="d-flex flex-column align-items-center">
                <div className="pt-2 align-self-start">
                  <label for="bank-name" className="align-self-center">
                    البنك
                  </label>
                  <select onChange={handleBankChange}>
                    <option value={palestineImage}>بنك فلسطين</option>
                    <option value={ammanImage}>بنك القاهرة عمان</option>
                    <option value={arabicImage}>البنك العربي</option>
                  </select>
                </div>
              </div>
              <div className="sperator mt-2"></div>
              <div id="print" ref={chequeRef}>
                <div
                  id="image-container"
                  className="position-relative d-inline-block"
                >
                  <img id="image" src={bankImage} alt="bank image" />
                  {chequeDate && (
                    <Draggable bounds="parent">
                      <p
                        style={{
                          bottom: "65px",
                          right: "210px",
                        }}
                      >
                        {chequeDate}
                      </p>
                    </Draggable>
                  )}
                  {chequeName && (
                    <Draggable bounds="parent">
                      <p
                        style={{
                          top: "100px",
                          right: "240px",
                        }}
                      >
                        {chequeName}
                      </p>
                    </Draggable>
                  )}
                  {chequePrice && (
                    <>
                      <Draggable bounds="parent">
                        <p
                          style={{
                            top: "140px",
                            right: "240px",
                            fontSize: "12px",
                          }}
                        >
                          {tafqeet(chequePrice)}{" "}
                          {currecnyToArabic[chequeCurrency]}
                        </p>
                      </Draggable>
                      <Draggable bounds="parent">
                        <p
                          style={{
                            top: "130px",
                            right: "50px",
                          }}
                        >
                          {"#" + chequePrice + "#"}
                        </p>
                      </Draggable>
                    </>
                  )}
                  {chequeTasteer && (
                    <p
                      id="tasteer"
                      style={{
                        fontSize: "14px",
                        width: "96px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        height: "64px",
                        transform: "rotate(-45deg)",
                        top: "0px",
                        left: "0px",
                        textWrap: "nowrap",
                      }}
                    >
                      {chequeTasteer}
                    </p>
                  )}
                </div>
              </div>
              <button className="btn-primary" onClick={handlePrint}>
                إطبع الشيك
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
