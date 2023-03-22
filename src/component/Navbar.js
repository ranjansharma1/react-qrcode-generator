import React from "react";

function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder" href="/">
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
                    props.show.showText ? "active" : ""
                  } btn btn-${props.mode}  px-4   my-1`}
                  onClick={() => props.handleButtonClick("text")}
                  style={{ width: "100px" }}
                >
                  Text
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    props.show.showUrl ? "active" : ""
                  } btn btn-${props.mode}  px-4   my-1`}
                  onClick={() => props.handleButtonClick("url")}
                  style={{ width: "100px" }}
                >
                  URL
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    props.show.showPhone ? "active" : ""
                  }   btn btn-${props.mode}  px-4   my-1`}
                  onClick={() => props.handleButtonClick("phone")}
                  style={{ width: "100px" }}
                >
                  Phone
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    props.show.showSMS ? "active" : ""
                  }  btn btn-${props.mode}  px-4   my-1`}
                  onClick={() => props.handleButtonClick("sms")}
                  style={{ width: "100px" }}
                >
                  SMS
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    props.show.showVcard ? "active" : ""
                  }  btn btn-${props.mode}  px-4   my-1`}
                  onClick={() => props.handleButtonClick("vcard")}
                  style={{ width: "100px", border: "none" }}
                >
                  V-Card
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    props.show.showWifi ? "active" : ""
                  }   btn btn-${props.mode}  px-4   my-1`}
                  onClick={() => props.handleButtonClick("wifi")}
                  style={{ width: "100px" }}
                >
                  Wifi
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`fw-bold  nav-link ${
                    props.show.showEmail ? "active" : ""
                  }  btn btn-${props.mode}  px-4   my-1`}
                  onClick={() => props.handleButtonClick("email")}
                  style={{ width: "100px" }}
                >
                  Email
                </button>
              </li>
            </ul>
            {/* htmlFor Enabling Dark Mode */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="dId"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
