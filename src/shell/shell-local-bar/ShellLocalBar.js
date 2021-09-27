import React from "react";

const ShellLocalBarContainerStyle = {
    width: "50px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: "#e5e5e5",
    borderRight: "1px solid #c0c0c0"
}

/**
 * Shell local bar component
 * used to the navigation buttons
 * props: buttons the navigations buttons items
 */
const ShellLocalBar = (props) => (
    <div style={ShellLocalBarContainerStyle}>
        { props.buttons }
    </div>
);
 
export default ShellLocalBar;