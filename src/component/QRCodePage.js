import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodePage() {
  const [inputText, setInputText] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [qrCodeText, setQRCodeText] = useState("youtube.com");
  const [qrColor, setQrColor] = useState("blue");
  const [qrBGColor, setQrBGColor] = useState("rgb(247 247 247)");

  // generate QR code
  const generateQRCode = () => {
    if (showText) {
      setQRCodeText(inputText);
      console.log("Your entered text massage is: " + inputText);
    } else if (showUrl) {
      setQRCodeText(inputText);
      console.log("Your url is: " + inputText);
    } else if (showPhone) {
      setQRCodeText("TEL:" + inputText);
      console.log("Your phone number is: " + inputText);
    } else if (showSMS) {
      setQRCodeText("SMSTO:" + phoneNumber + ":" + inputText);
      console.log("SMSTO:" + phoneNumber + ":" + inputText);
    } else if (showVcard) {
      setQRCodeText(
        "Name:" +
          inputText +
          "\nPhone:" +
          vcardPhone +
          "\nphone:" +
          vcardPhone2 +
          "\nEmail:" +
          vcardEmail +
          "\nWebsite:" +
          vcardUrl +
          "\nAddress:" +
          vcardStreet +
          "\n" +
          vcardCity +
          "\n" +
          vcardPin +
          "\n" +
          vcardCountry +
          "\nCompany:" +
          vcardOrg
      );
    } else if (showWifi) {
      setQRCodeText(`WIFI:T:${inputText};S:${network};P:${networkPassword};`)
      console.log("SSID:"+network + "\nPassword:" +networkPassword+"\nSecurity:"+inputText);
    }else if (showEmail) {
      setQRCodeText("mailto:"+inputText +"?subject=" + emailSubject+ "&body="+ textArea);
      console.log("mailto:"+inputText +"\nsubject=" + emailSubject+ "\nbody="+ textArea)
      // setQRCodeText("Email:"+inputText + "\nSubject:" +emailSubject+"\nBody:"+textArea)
    }
  };

  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL);
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  const [showText, setshowText] = useState(false);
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
      <div className="container my-3">
        <button
          className="btn btn-primary mx-3 "
          onClick={() => handleButtonClick("text")}
        >
          Text
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => handleButtonClick("url")}
        >
          URL
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => handleButtonClick("phone")}
        >
          Phone
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => handleButtonClick("sms")}
        >
          SMS
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => handleButtonClick("vcard")}
        >
          V-card
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => handleButtonClick("wifi")}
        >
          wifi
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => handleButtonClick("email")}
        >
          email
        </button>
      </div>
      <div className="container input-group my-3">
        {showText && (
          <div className="container">
            <label for="exampleFormControlInput1" className="form-label">
              Phone
            </label>
            <input
              className="rounded-start form-control border-primary border-2  "
              type="search"
              placeholder="type your text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
        )}
        {showUrl && (
          <div className="container">
            <label for="exampleFormControlInput1" className="form-label">
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
            <label for="exampleFormControlInput1" className="form-label">
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
            <label for="exampleFormControlInput1" className="form-label">
              Mobile Number
            </label>
            <input
              className="rounded-start form-control border-primary border-2"
              type="number"
              placeholder="type your number"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <label for="exampleFormControlInput1" className="form-label mt-4">
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
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  className="rounded-start form-control border-primary border-2 "
                  type="text"
                  placeholder="type your name"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              <div className="col mb-3">
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
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
                <label for="exampleFormControlInput1" className="form-label">
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
            <label for="exampleFormControlInput1" className="form-label mt-2">
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
            <label for="exampleFormControlInput1" className="form-label mt-4">
              SSID:
            </label>
            <input
              className="rounded-start form-control border-primary border-2  "
              type="text"
              placeholder="Network Name"
              value={network}
              onChange={(e) => setnetwork(e.target.value)}
            />
            <label for="exampleFormControlInput1" className="form-label mt-4">
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
            <label for="exampleFormControlInput1" className="form-label mt-2">
              Email
            </label>
            <input
              className="rounded-start form-control border-primary border-2  "
              type="text"
              placeholder="abc@gmail.com"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <label for="exampleFormControlInput1" className="form-label mt-4">
              Subject
            </label>
            <input
              className="rounded-start form-control border-primary border-2  "
              type="text"
              placeholder="subject"
              value={emailSubject}
              onChange={(e) => setemailSubject(e.target.value)}
            />
            <label for="exampleFormControlInput1" className="form-label mt-4">
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
      <div className="container my-3 text-center">
        
        <div className=" d-flex justify-content-center">
          <div className="p-2 ">
            <QRCode
              id="qrCodeEl"
              size={300}
              value={qrCodeText}
              bgColor={qrBGColor}
              fgColor={qrColor}
              level="H"
            />
          </div>

          <div className="p-2 my-3">
            <label htmlFor="exampleColorInput" className="form-label">
              QR Color
            </label>
            <input
              type="color"
              className="form-control form-control-color d-flex "
              style={{ margin: "0 auto" }}
              id="exampleColorInput"
              value={qrColor}
              title="Choose your color2"
              onChange={(e) => setQrColor(e.target.value)}
            />

            <label htmlFor="exampleColorInput" className="form-label my-2">
              QR-BG Color
            </label>
            <input
              type="color"
              className="form-control form-control-color d-flex  "
              style={{ margin: "0 auto" }}
              id="exampleColorInput"
              value={qrBGColor}
              title="Choose your color"
              onChange={(e) => setQrBGColor(e.target.value)}
            />
          </div>
        </div>

        <input
          type="button"
          className="download-btn btn btn-primary mt-2"
          style={{ width: "200px", marginRight: "100px" }}
          value="Download"
          onClick={downloadQRCode}
        />
      </div>
    </>
  );
}

export default QRCodePage;
