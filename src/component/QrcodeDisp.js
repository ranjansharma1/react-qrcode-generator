import React, { useState } from "react";
import QRCode from "qrcode.react";

function QrcodeDisp(props) {
  const [qrColor, setQrColor] = useState("blue");
  const [qrBGColor, setQrBGColor] = useState("white");
  const [qrSize, setQrSize] = useState("300");

  // download QR code
  const downloadQRCode = () => {
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
    props.showAlert("QR Code Donloaded Successfully" , "success");
  };

  return (
    <>
      <div className="col-5 mx-5 ">
        <h2>QR Code Preview</h2>
        <hr />
        <div
          className={`text-center border border-${props.mode === "light" ? "dark" : "white"} ` }
          style={{
            margin: "50px",
            height: "750px",
            width: "600px"
            
          }}
        >
          <h3 className="text-start mx-3 my-2 fw-bold">Select Size</h3>
          <input
            type="range"
            className="form-range w-75"
            id="customRange1"
            min="200"
            max="450"
            value={qrSize}
            onChange={(e) => setQrSize(e.target.value)}
          />
          <hr className="mx-3" />
          <h3 className="text-start mx-3 my-2 fw-bold">Change Colour</h3>

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
              value={props.qrText}
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
    </>
  );
}

export default QrcodeDisp;
