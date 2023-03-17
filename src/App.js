import React, { useState } from "react";
import QRCode from "qrcode.react";

function App() {
  const [inputText, setInputText] = useState("");
  const [qrCodeText, setQRCodeText] = useState("youtube.com");
  const [qrColor, setQrColor] = useState("blue");
  const [qrBGColor, setQrBGColor] = useState("rgb(247 247 247)");

  // generate QR code
  const generateQRCode = () => {
    setQRCodeText(inputText);
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

  return (
    <div className="container my-3 text-center">
      <h1 className="text-primary fw-bold">QR Code Generator</h1>
      <div className="input-group mb-3" style={{margin: "0 0 "}}>
        <input
          className="rounded-start form-control border-primary border-2 my-4 m-1"
          type="search"
          placeholder="Enter URL to generate QR Code"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <input
          className="input-group-text mx-0 btn btn-primary m-4 rounded-end"
          type="button"
          value="Generate"
          onClick={generateQRCode}
        />
      </div>
      <div className=" d-flex justify-content-center">
        <div
          className="p-2 "
        >
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
          <label for="exampleColorInput" className="form-label">
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

          <label for="exampleColorInput" className="form-label my-2">
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

      <br />
      <input
        type="button"
        className="download-btn btn btn-primary "
        style={{width:"200px", marginRight:"100px"}}
        value="Download"
        onClick={downloadQRCode}
      />
    </div>
  );
}

export default App;
