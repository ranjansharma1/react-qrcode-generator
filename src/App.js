
import React,{useState} from "react";
import Navbar from "./component/Navbar";
import UserForm from "./component/UserForm";

function App() {
  const [showText, setshowText] = useState(true);
  const [showUrl, setshowUrl] = useState(false);
  const [showPhone, setshowPhone] = useState(false);
  const [showSMS, setshowSMS] = useState(false);
  const [showVcard, setshowVcard] = useState(false);
  const [showWifi, setshowWifi] = useState(false);
  const [showEmail, setshowEmail] = useState(false);


  const show = {
    showText,
    showUrl,
    showPhone,
    showSMS,
    showVcard,
    showWifi,
    showEmail,
  };
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
      <Navbar handleButtonClick={handleButtonClick} show={show} />
      <UserForm show={show}/>
      
    </>
  );
}

export default App;
