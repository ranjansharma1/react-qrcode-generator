
import React,{useState} from "react";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import UserForm from "./component/UserForm";

function App() {
  const [darkMode, setdarkMode] = useState("light");
  const [alert, setalert] = useState(null);
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

  const enableDarkMode = () => {
    if (darkMode === "light") {
      console.log("enable dark mode");
      setdarkMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode enabled", "success");
    } else {
      console.log("disable dark mode");
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    //It will fade out after 3 seconds
    setTimeout(() => {
      setalert(null);
    }, 3000);
    console.log("Set Alert successfully executed: ", message, type);
  };

  return (
    <>
      <Navbar handleButtonClick={handleButtonClick} show={show} mode={darkMode}
        toggleMode={enableDarkMode}/>
        <Alert alert={alert} />
      <UserForm show={show} mode={darkMode}/>
      
    </>
  );
}

export default App;
