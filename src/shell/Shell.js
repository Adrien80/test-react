import React from 'react';
import ShellContent from "./shell-content/ShellContent";
import ShellHeader from "./shell-header/ShellHeader";
import ShellLocalBar from "./shell-local-bar/ShellLocalBar";

/**
 * Shell container style
 */
const ShellContainerStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column"
} 

/**
 * Shell main component
 * props: - routes main application routes definitions  
 *        - displayLocalBar should display the local bar
 */
const Shell = (props) =>  {
    const shellLocalBar = (props.displayLocalBar) ? <ShellLocalBar buttons={props.buttons}></ShellLocalBar> : <></>;
    return (
        <div style={ShellContainerStyle}>
            <ShellHeader></ShellHeader>
            <div style={{
                display: "flex",
                flex: 1
            }}>
                {shellLocalBar}
                <ShellContent routes={props.routes}></ShellContent>
            </div>
        </div>
    );
}

/**
 * Shell props default value
 */
Shell.defaultProps = {
    displayLocalBar: true
}
 
export default Shell;