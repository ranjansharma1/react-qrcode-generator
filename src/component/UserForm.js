import React, { useState } from "react";
import QrcodeDisp from "./QrcodeDisp";

function UserForm(props) {
  const [inputText, setInputText] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [qrCodeText, setQRCodeText] = useState("example.com");
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

  // generate QR code
  const generateQRCode = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      if (props.show.showText) {
        setQRCodeText(inputText);
        console.log("Your entered text massage is: " + inputText);
      } else if (props.show.showUrl) {
        setQRCodeText(inputText);
        console.log("Your url is: " + inputText);
      } else if (props.show.showPhone) {
        setQRCodeText("tel:" + inputText);
        console.log("Your phone number is: " + inputText);
      } else if (props.show.showSMS) {
        setQRCodeText("SMSTO:" + phoneNumber + ":" + inputText);
        console.log("SMSTO:" + phoneNumber + ":" + inputText);
      } else if (props.show.showVcard) {
        setQRCodeText(
          `BEGIN:VCARD\nVERSION:3.0\nN:${inputText}\nEMAIL:${vcardEmail}\nTEL:${vcardPhone}\nTEL:${vcardPhone2}\nADR:${
            vcardStreet +
            ", " +
            vcardCity +
            ", " +
            vcardPin +
            ", " +
            vcardCountry
          }\nURL:${vcardUrl}\norg:${vcardOrg}\nEND:VCARD`
        );

        console.log(
          `BEGIN:VCARD\nVERSION:3.0\nN:${inputText}\nEMAIL:${vcardEmail}\nTEL:${vcardPhone}\nTEL:${vcardPhone2}\nADR:${
            vcardStreet +
            ", " +
            vcardCity +
            ", " +
            vcardPin +
            ", " +
            vcardCountry
          }\nURL:${vcardUrl}\norg:${vcardOrg}\nEND:VCARD`
        );
      } else if (props.show.showWifi) {
        setQRCodeText(`WIFI:T:${inputText};S:${network};P:${networkPassword};`);
        console.log(
          "SSID:" +
            network +
            "\nPassword:" +
            networkPassword +
            "\nSecurity:" +
            inputText
        );
      } else if (props.show.showEmail) {
        setQRCodeText(
          "mailto:" +
            inputText +
            "?subject=" +
            emailSubject +
            "&body=" +
            textArea
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
    } else {
      form.reportValidity();
    }
  };
  

  return (
    <>
      <div className="container-fluid " style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}>
        <h1>Create Your Own QR Code Just by Few Clicks</h1>
        <hr />
        <div className="row ">
          <form className="col-6 mx-4" onSubmit={generateQRCode}>
            <div
              className="container input-group"
              style={{ marginTop: "30px" }}
            >
              {props.show.showText && (
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Massage
                  </label>
                  <textArea
                    className="rounded-start form-control border-dark border-2  "
                    type="search"
                    rows="3"
                    placeholder="type your massage"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                  />
                </div>
              )}
              {props.show.showUrl && (
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    URL link
                  </label>
                  <input
                    className="rounded-start form-control border-dark border-2  "
                    type="search"
                    placeholder="https://xyz.com/"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                  />
                </div>
              )}
              {props.show.showPhone && (
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Mobile
                  </label>
                  <input
                    className="rounded-start form-control border-dark border-2  "
                    type="number"
                    placeholder="+91 "
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                  />
                </div>
              )}
              {props.show.showSMS && (
                <div className="container mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="rounded-start form-control border-dark border-2"
                    type="number"
                    placeholder="type your number"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                  >
                    Your massage
                  </label>
                  <textarea
                    className="rounded-start form-control border-dark border-2 "
                    type=""
                    rows="3"
                    placeholder="type your massage"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                  />
                </div>
              )}
              {props.show.showVcard && (
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
                        className="rounded-start form-control border-dark border-2 "
                        type="text"
                        placeholder="Enter your name"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        required
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
                        className="rounded-start form-control border-dark border-2"
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
                        className="rounded-start form-control border-dark border-2 "
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
                        className="rounded-start form-control border-dark border-2 "
                        type="text"
                        placeholder="city"
                        value={vcardCity}
                        onChange={(e) => setvcardCity(e.target.value)}
                        required
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
                        className="rounded-start form-control border-dark border-2"
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
                        className="rounded-start form-control border-dark border-2 "
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
                        className="rounded-start form-control border-dark border-2"
                        type="number"
                        placeholder="+91"
                        value={vcardPhone}
                        onChange={(e) => setvcardPhone(e.target.value)}
                        required
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
                        className="rounded-start form-control border-dark border-2 "
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
                        className="rounded-start form-control border-dark border-2"
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
                        className="rounded-start form-control border-dark border-2"
                        type="text"
                        placeholder="http://xyz.me/"
                        value={vcardUrl}
                        onChange={(e) => setvcardUrl(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
              {props.show.showWifi && (
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
                    required
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
                    className="rounded-start form-control border-dark border-2  "
                    type="text"
                    placeholder="Network Name"
                    value={network}
                    onChange={(e) => setnetwork(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                  >
                    Password
                  </label>
                  <input
                    className="rounded-start form-control border-dark border-2  "
                    type="password"
                    placeholder="subject"
                    value={networkPassword}
                    onChange={(e) => setnetworkPassword(e.target.value)}
                    required
                  />
                </div>
              )}
              {props.show.showEmail && (
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-2"
                  >
                    Email
                  </label>
                  <input
                    className="rounded-start form-control border-dark border-2  "
                    type="text"
                    placeholder="abc@gmail.com"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                  >
                    Subject
                  </label>
                  <input
                    className="rounded-start form-control border-dark border-2  "
                    type="text"
                    placeholder="subject"
                    value={emailSubject}
                    onChange={(e) => setemailSubject(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mt-4"
                  >
                    Body
                  </label>
                  <textArea
                    className="rounded-start form-control border-dark border-2  "
                    type="text"
                    rows="4"
                    placeholder="type your massage here..."
                    value={textArea}
                    onChange={(e) => settextArea(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>
            <div className="container text-center my-3">
              <button
                className="btn btn-primary"
                type="submit"
                id="submitButton"
              >
                Generate QR
              </button>
            </div>
          </form>

          <QrcodeDisp qrText={qrCodeText} mode={props.mode}/>
        </div>
      </div>
    </>
  );
}

export default UserForm;
