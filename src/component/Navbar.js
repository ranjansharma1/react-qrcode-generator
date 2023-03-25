import React from "react";

function Navbar(props) {
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
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
                  className={` nav-link ${
                    props.show.showText ? "active" : ""
                  } btn btn-${props.mode}    my-1`}
                  onClick={() => props.handleButtonClick("text")}
                  style={{ width: "70px" }}
                >
                  Text
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={` nav-link ${
                    props.show.showUrl ? "active" : ""
                  } btn btn-${props.mode}    my-1`}
                  onClick={() => props.handleButtonClick("url")}
                  style={{ width: "70px" }}
                >
                  URL
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={` nav-link ${
                    props.show.showPhone ? "active" : ""
                  }   btn btn-${props.mode}    my-1`}
                  onClick={() => props.handleButtonClick("phone")}
                  style={{ width: "70px" }}
                >
                  Phone
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={` nav-link ${
                    props.show.showSMS ? "active" : ""
                  }  btn btn-${props.mode}    my-1`}
                  onClick={() => props.handleButtonClick("sms")}
                  style={{ width: "70px" }}
                >
                  SMS
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={` nav-link ${
                    props.show.showVcard ? "active" : ""
                  }  btn btn-${props.mode}    my-1`}
                  onClick={() => props.handleButtonClick("vcard")}
                  style={{ width: "70px" }}
                >
                  V-Card
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={` nav-link ${
                    props.show.showWifi ? "active" : ""
                  }   btn btn-${props.mode}    my-1`}
                  onClick={() => props.handleButtonClick("wifi")}
                  style={{ width: "70px" }}
                >
                  Wifi
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={` nav-link ${
                    props.show.showEmail ? "active" : ""
                  }  btn btn-${props.mode}    my-1`}
                  onClick={() => props.handleButtonClick("email")}
                  style={{ width: "70px" }}
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
              style={{marginRight: "20px", marginLeft: "20px"}}
            >
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                D/L
              </label>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="dId"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
