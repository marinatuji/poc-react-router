import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropsType from "prop-types";
import { INFORMATION, REGISTER, ACCOUNT } from "./enums/enums.navside";
import "./style.css";

function SettingNavSide(props) {
  const { active } = props;
  return (
    <Navbar className="no-padding settings-nav-side-custom">
      <ul className="settings-nav-side-bar">
        <li>
          <Link to="/information" className="nav-side-link">
            <div
              className={`nav-side-link-div ${
                active === INFORMATION ? "nav-side-active" : ""
              }`}
            >
              Informações da empresa
            </div>
          </Link>
        </li>
        <li>
          <Link to="/settings/account" className="nav-side-link ">
            <div
              className={`nav-side-link-div ${
                active === ACCOUNT ? "nav-side-active" : ""
              }`}
            >
              Conta
            </div>
          </Link>
        </li>
        <li>
          <Link to="/settings/register" className="nav-side-link ">
            <div
              className={`nav-side-link-div ${
                active === REGISTER ? "nav-side-active" : ""
              }`}
            >
              Registrar
            </div>
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}

SettingNavSide.propTypes = {
  active: PropsType.number.isRequired
};

export default SettingNavSide;
