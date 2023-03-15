import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {

  const [text, setText] = useState("")

  const handleChange =(e)=>{
    setText(e.target.value);
  }
  return (
    <div className="container my-3 text-center">
      <h1 className="text-primary fw-bold">QR Code Generator</h1>
      <div className="input-group-lg">
        <input className="rounded-pill form-control border-primary border-2 my-4" type="search"  placeholder='Enter url to Generate QR Code' value={text} onChange={(e)=>{handleChange(e)}} />
      </div>
      <div className="my-5" >
        <QRCode value={text} style={{width
      :"300px", height
      : "300px"}}/>
      </div>
    </div>
  );
}

export default App;
