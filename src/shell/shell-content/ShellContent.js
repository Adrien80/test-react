import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

/**
 * Shell content container style
 */
const ShellContentContainerStyle = {
    display: "flex",
    flex: 1
}

/**
 * Shell content component
 * contains the differents application modules components corresponding to their route access
 * props: - routes main application routes definitions  
 */
const ShellContent = (props) => (
    <div style={ShellContentContainerStyle}>
        <Switch>
            {props.routes.map((route, i) => (
                <Route key={i} {...route} />
            ))}
        </Switch>
    </div>
    
);

export default ShellContent;
