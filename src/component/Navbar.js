import React, { useState } from "react";
import QRCode from "qrcode.react";

function Navbar() {
  const [inputText, setInputText] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [qrCodeText, setQRCodeText] = useState("example.com");
  const [qrColor, setQrColor] = useState("blue");
  const [qrBGColor, setQrBGColor] = useState("white");
  const [qrSize, setQrSize] = useState("200")

  // generate QR code
  const generateQRCode = () => {
    if (showText) {
      setQRCodeText(inputText);
      console.log("Your entered text massage is: " + inputText);
    } else if (showUrl) {
      setQRCodeText(inputText);
      console.log("Your url is: " + inputText);
    } else if (showPhone) {
      setQRCodeText("tel:" + inputText);
      console.log("Your phone number is: " + inputText);
    } else if (showSMS) {
      setQRCodeText("SMSTO:" + phoneNumber + ":" + inputText);
      console.log("SMSTO:" + phoneNumber + ":" + inputText);
    } else if (showVcard) {
      setQRCodeText(
        `BEGIN:VCARD\nVERSION:3.0\nN:${inputText}\nEMAIL:${vcardEmail}\nTEL:${vcardPhone}\nTEL:${vcardPhone2}\nADR:${
          vcardStreet + ", " + vcardCity + ", " + vcardPin + ", " + vcardCountry
        }\nURL:${vcardUrl}\norg:${vcardOrg}\nEND:VCARD`
      );

      console.log(
        `BEGIN:VCARD\nVERSION:3.0\nN:${inputText}\nEMAIL:${vcardEmail}\nTEL:${vcardPhone}\nTEL:${vcardPhone2}\nADR:${
          vcardStreet + ", " + vcardCity + ", " + vcardPin + ", " + vcardCountry
        }\nURL:${vcardUrl}\norg:${vcardOrg}\nEND:VCARD`
      );
    } else if (showWifi) {
      setQRCodeText(`WIFI:T:${inputText};S:${network};P:${networkPassword};`);
      console.log(
        "SSID:" +
          network +
          "\nPassword:" +
          networkPassword +
          "\nSecurity:" +
          inputText
      );
    } else if (showEmail) {
      setQRCodeText(
        "mailto:" + inputText + "?subject=" + emailSubject + "&body=" + textArea
      );
      console.log(
        "mailto:" +
          inputText +
          "\nsubject=" +
          emailSubject +
          "\nbody=" +
          textArea
      );
      // setQRCodeText("Email:"+inputText + "\nSubject:" +emailSubject+"\nBody:"+textArea)
    }
  };

  // download QR code
  const downloadQRCode = () => {
    console.log("Downloading QR Code");
    console.log("Downloading QR Code");
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log("url: " + qrCodeURL);
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  const [showText, setshowText] = useState(true);
  const [showUrl, setshowUrl] = useState(false);
  const [showPhone, setshowPhone] = useState(false);
  const [showSMS, setshowSMS] = useState(false);
  const [showVcard, setshowVcard] = useState(false);
  const [showWifi, setshowWifi] = useState(false);
  const [showEmail, setshowEmail] = useState(false);
  const [emailSubject, setemailSubject] = useState("");
  const [textArea, settextArea] = useState();
  const [network, setnetwork] = useState();
  const [networkPassword, setnetworkPassword] = useState();
  const [vcardStreet, setvcardStreet] = useState();
  const [vcardOrg, setvcardOrg] = useState();
  const [vcardCity, setvcardCity] = useState();
  const [vcardEmail, setvcardEmail] = useState();
  const [vcardPin, setvcardPin] = useState();
  const [vcardPhone, setvcardPhone] = useState();
  const [vcardCountry, setvcardCountry] = useState();
  const [vcardUrl, setvcardUrl] = useState();
  const [vcardPhone2, setvcardPhone2] = useState();

  const handleButtonClick = (input) => {
    if (input === "text") {
      setshowText(true);
      setshowUrl(false);
      setshowPhone(false);
      setshowSMS(false);
      setshowVcard(false);
      setshowWifi(false);
      setshowEmail(false);
      console.log("text button clicked");
    } else if (input === "url") {
      setshowText(false);
      setshowUrl(true);
      setshowPhone(false);
      setshowSMS(false);
      setshowVcard(false);
      setshowWifi(false);
      setshowEmail(false);
      console.log("url button clicked");
    } else if (input === "phone") {
      setshowText(false);
      setshowUrl(false);
      setshowPhone(true);
      setshowSMS(false);
      setshowVcard(false);
      setshowWifi(false);
      setshowEmail(false);
      console.log("phone button clicked");
    } else if (input === "sms") {
      setshowText(false);
      setshowUrl(false);
      setshowPhone(false);
      setshowSMS(true);
      setshowVcard(false);
      setshowWifi(false);
      setshowEmail(false);
      console.log("sms button clicked");
    } else if (input === "vcard") {
      setshowText(false);
      setshowUrl(false);
      setshowPhone(false);
      setshowSMS(false);
      setshowVcard(true);
      setshowWifi(false);
      setshowEmail(false);
      console.log("vcard button clicked");
    } else if (input === "wifi") {
      setshowText(false);
      setshowUrl(false);
      setshowPhone(false);
      setshowSMS(false);
      setshowVcard(false);
      setshowWifi(true);
      setshowEmail(false);
      console.log("wifi button clicked");
    } else if (input === "email") {
      setshowText(false);
      setshowUrl(false);
      setshowPhone(false);
      setshowSMS(false);
      setshowVcard(false);
      setshowWifi(false);
      setshowEmail(true);
      console.log("email button clicked");
    }
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder" href="#">
            QR Code
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <button
                  className={`fw-bold  nav-link ${
                    showText ? "active" : ""
                  } btn btn-light  px-4   my-1`}
                  onClick={() => handleButtonClick("text")}
                  style={{ width: "100px" }}
                >
                  Text
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    showUrl ? "active" : ""
                  } btn btn-light  px-4   my-1`}
                  onClick={() => handleButtonClick("url")}
                  style={{ width: "100px" }}
                >
                  URL
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    showPhone ? "active" : ""
                  }   btn btn-light  px-4   my-1`}
                  onClick={() => handleButtonClick("phone")}
                  style={{ width: "100px" }}
                >
                  Phone
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    showSMS ? "active" : ""
                  }  btn btn-light  px-4   my-1`}
                  onClick={() => handleButtonClick("sms")}
                  style={{ width: "100px" }}
                >
                  SMS
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    showVcard ? "active" : ""
                  }  btn btn-light  px-4   my-1`}
                  onClick={() => handleButtonClick("vcard")}
                  style={{ width: "100px", border: "none" }}
                >
                  V-Card
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    showWifi ? "active" : ""
                  }   btn btn-light  px-4   my-1`}
                  onClick={() => handleButtonClick("wifi")}
                  style={{ width: "100px" }}
                >
                  wifi
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    showEmail ? "active" : ""
                  }  btn btn-light  px-4   my-1`}
                  onClick={() => handleButtonClick("email")}
                  style={{ width: "100px" }}
                >
                  email
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <h1>Create Your Own QR Code Just by Few Clicks</h1>
        <hr />
        <div className="row ">
          <div className="col-6 mx-4">
            <div
              className="container input-group"
              style={{ marginTop: "30px" }}
            >
              {showText && (
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Massage
                  </label>
                  <textArea
                    className="rounded-start form-control border-primary border-2  "
                    type="search"
                    rows="3"
                    placeholder="type your massage"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </div>
              )}
              {showUrl && (
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    URL link
                  </label>
                  <input
                    className="rounded-start form-control border-primary border-2  "
                    type="search"
                    placeholder="https://xyz.com/"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </div>
              )}
              {showPhone && (
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Mobile
                  </label>
                  <input
                    className="rounded-start form-control border-primary border-2  "
                    type="number"
                    placeholder="+91 "
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </div>
              )}
              {showSMS && (
                <div className="container mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="rounded-start form-control border-primary border-2"
                    type="number"
                    placeholder="type your number"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                  >
                    Your massage
                  </label>
                  <textarea
                    className="rounded-start form-control border-primary border-2 "
                    type=""
                    rows="3"
                    placeholder="type your massage"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </div>
              )}
              {showVcard && (
                <div className="container">
                  <div className="row row-cols-2  mb-3">
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Full Name
                      </label>
                      <input
                        className="rounded-start form-control border-primary border-2 "
                        type="text"
                        placeholder="Enter your name"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                      />
                    </div>
                    <div className="col mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Street Address
                      </label>
                      <textArea
                        className="rounded-start form-control border-primary border-2"
                        type="text"
                        rows="1"
                        placeholder="street address"
                        value={vcardStreet}
                        onChange={(e) => setvcardStreet(e.target.value)}
                      />
                    </div>
                    <div className="col mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Company Name
                      </label>
                      <input
                        className="rounded-start form-control border-primary border-2 "
                        type="text"
                        placeholder="Organization"
                        value={vcardOrg}
                        onChange={(e) => setvcardOrg(e.target.value)}
                      />
                    </div>
                    <div className="col mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        City
                      </label>
                      <input
                        className="rounded-start form-control border-primary border-2 "
                        type="text"
                        placeholder="city"
                        value={vcardCity}
                        onChange={(e) => setvcardCity(e.target.value)}
                      />
                    </div>
                    <div className="col mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        className="rounded-start form-control border-primary border-2"
                        type="email"
                        placeholder="abc@example.com"
                        value={vcardEmail}
                        onChange={(e) => setvcardEmail(e.target.value)}
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Pin Code
                      </label>
                      <input
                        className="rounded-start form-control border-primary border-2 "
                        type="number"
                        placeholder="Area pin code"
                        value={vcardPin}
                        onChange={(e) => setvcardPin(e.target.value)}
                      />
                    </div>
                    <div className="col mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Personal Number
                      </label>
                      <input
                        className="rounded-start form-control border-primary border-2"
                        type="number"
                        placeholder="+91"
                        value={vcardPhone}
                        onChange={(e) => setvcardPhone(e.target.value)}
                      />
                    </div>
                    <div className="col mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Office Number
                      </label>
                      <input
                        className="rounded-start form-control border-primary border-2 "
                        type="number"
                        placeholder="+91 "
                        value={vcardPhone2}
                        onChange={(e) => setvcardPhone2(e.target.value)}
                      />
                    </div>
                    <div className="col mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Country
                      </label>
                      <input
                        className="rounded-start form-control border-primary border-2"
                        type="text"
                        placeholder="country name"
                        value={vcardCountry}
                        onChange={(e) => setvcardCountry(e.target.value)}
                      />
                    </div>

                    <div className="col mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Company url
                      </label>
                      <input
                        className="rounded-start form-control border-primary border-2"
                        type="text"
                        placeholder="http://xyz.me/"
                        value={vcardUrl}
                        onChange={(e) => setvcardUrl(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
              {showWifi && (
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-2"
                  >
                    Authentication:
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  >
                    <option value="WEP">WEP</option>
                    <option value="WPA">WPA/WPA2</option>
                    <option value="nopass">None</option>
                  </select>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                  >
                    SSID:
                  </label>
                  <input
                    className="rounded-start form-control border-primary border-2  "
                    type="text"
                    placeholder="Network Name"
                    value={network}
                    onChange={(e) => setnetwork(e.target.value)}
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                  >
                    Password
                  </label>
                  <input
                    className="rounded-start form-control border-primary border-2  "
                    type="password"
                    placeholder="subject"
                    value={networkPassword}
                    onChange={(e) => setnetworkPassword(e.target.value)}
                  />
                </div>
              )}
              {showEmail && (
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-2"
                  >
                    Email
                  </label>
                  <input
                    className="rounded-start form-control border-primary border-2  "
                    type="text"
                    placeholder="abc@gmail.com"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                  >
                    Subject
                  </label>
                  <input
                    className="rounded-start form-control border-primary border-2  "
                    type="text"
                    placeholder="subject"
                    value={emailSubject}
                    onChange={(e) => setemailSubject(e.target.value)}
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                  >
                    Body
                  </label>
                  <textArea
                    className="rounded-start form-control border-primary border-2  "
                    type="text"
                    rows="4"
                    placeholder="type your massage here..."
                    value={textArea}
                    onChange={(e) => settextArea(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="container text-center">
              <input
                className="input-group-text mx-0 btn btn-primary m-4 rounded-end"
                type="button"
                value="Generate"
                onClick={generateQRCode}
              />
            </div>
          </div>
          <div className="col-5 ms-5">
            <h2>QR Code Preview</h2>
            <hr />
            <div
              className="text-center"
              style={{
                margin:"50px",
                border: "1px solid blue",
                height: "800px",
                width: "600px",
              }}
            >
              <h3 class="text-start mx-3 my-2 fw-bold">
                Select Size
              </h3>
              <input type="range" class="form-range w-75" id="customRange1" min="200" max="450"  onChange={(e)=>setQrSize(e.target.value)}/>
              <hr className="mx-3" />
              <h3 className="text-start mx-3 my-2 fw-bold">Colour</h3>

              <div className="d-flex my-3">
                <div className="  py-2 h-25 w-auto ">
                  <label
                    htmlFor="exampleColorInput"
                    className="mx-4 text-uppercase fw-bold"
                  >
                    Dots
                  </label>
                  <input
                    type="color"
                    className=" form-control-color"
                    style={{ backgroundColor: "white" }}
                    id="exampleColorInput"
                    value={qrColor}
                    title="Choose your color2"
                    onChange={(e) => setQrColor(e.target.value)}
                  />
                </div>
                <div className=" py-2 h-25 w-auto p-3">
                  <label
                    htmlFor="exampleColorInput"
                    className="mx-4  text-uppercase fw-bold"
                  >
                    Background
                  </label>
                  <input
                    type="color"
                    className=" form-control-color  "
                    style={{ backgroundColor: "white" }}
                    id="exampleColorInput"
                    value={qrBGColor}
                    title="Choose your color"
                    onChange={(e) => setQrBGColor(e.target.value)}
                  />
                </div>
              </div>
              <hr className="mx-3" />

              <div className=" my-2">
                <QRCode
                  className="text-center me-3"
                  id="qrCodeEl"
                  size={qrSize}
                  value={qrCodeText}
                  bgColor={qrBGColor}
                  fgColor={qrColor}
                  level="H"
                />
              </div>

              <input
                type="button"
                className="download-btn btn btn-primary mt-2 mb-3"
                style={{ width: "200px" }}
                value="Download"
                onClick={downloadQRCode}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
