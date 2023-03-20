import React, { useState } from "react";

function Text() {
  const [showText, setshowText] = useState(false);
  const [showUrl, setshowUrl] = useState(false);
  const [showPhone, setshowPhone] = useState(false);

  const handleButtonClick = (input) => {
    if (input === "Text") {
      setshowText(true);
      setshowUrl(false);
      setshowPhone(false);
    } else if(input === "URL") {
      setshowText(false);
      setshowUrl(true);
      setshowPhone(false);
    } else if (input === "Phone") {
      setshowText(false);
      setshowUrl(false);
      setshowPhone(true);
    }
  };

  return (
    <>
      <div className="my-3">
        <button
          className="btn btn-primary mx-3 "
          onClick={() => handleButtonClick("Text")}
        >
          Text
        </button>

        <button className="btn btn-primary mx-3" onClick={() => handleButtonClick("URL")}>URL</button>

        <button className="btn btn-primary mx-3" onClick={() => handleButtonClick("Phone")}>Phone</button>
      </div>
      <div className="input-group my-3">
        {showText && <input className="rounded-start form-control border-primary border-2 my-4 m-1" type="text" placeholder="type your text" />}
        {showUrl && <input className="rounded-start form-control border-primary border-2 my-4 m-1" type="text" placeholder="type your URL" />}
        {showPhone && (
          <>
            <input className="rounded-start form-control border-primary border-2 my-4 m-1" type="text" placeholder="type your number" />
            <input className="rounded-start form-control border-primary border-2 my-4 m-1" type="text" placeholder="type your massage" />
          </>
        )}
      </div>
    </>
  );
}

export default Text;
