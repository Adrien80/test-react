import React from "react";
import UserInformation from "./user-information/UserInformation";
const logo = require("../../assets/react-logo.png");

const shellHeaderContainerStyle = {
    display: "flex",
    height: "50px",
    padding: "8px",
    background: "#303030",
    color: "#fff"
}

const logoStyle = {
    height: "50px"
}

/**
 * Shell header component
 */
const ShellHeader = () => (
    <div style={shellHeaderContainerStyle}>
        <img style={logoStyle} src={logo}/>
        <UserInformation></UserInformation>
    </div>
)
 
export default ShellHeader;