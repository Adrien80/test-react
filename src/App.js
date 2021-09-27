import { SettingOutlined, HomeOutlined, HeartOutlined } from '@ant-design/icons';
import React, { Component, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BrowserRouter as Router, Link } from "react-router-dom";

import { AppRoutes } from './AppRoutes';
import Shell from './shell/Shell';

const buttonStyle = {
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #c0c0c0"
}

const linkStyle = {
    color: "#666"
}

export const userDetailContext = React.createContext(null);

/**
 * App react component with class structure
 */
class App extends Component {
    /**
     * App constructor
     */
    constructor() {
        super();
        this.state = {
            userDetails: {
                firstName: "Jean",
                lastName: "BonBeurre"
            },
            buttons: [
                <Link style={linkStyle} to="/home" key="0"><HomeOutlined style={buttonStyle}/></Link>,
                <Link style={linkStyle} to="/settings" key="1"><SettingOutlined style={buttonStyle}/></Link>,
                <Link style={linkStyle} to="/favorites" key="2"><HeartOutlined style={buttonStyle}/></Link>
            ]
        }
    }

    /**
     * React render function
     * Contain the router main element used for the shell content
     */
    render = () => {
        return (
            <View style={styles.container}>
                <Router>
                    <userDetailContext.Provider value={this.state.userDetails}>
                        <Shell routes={AppRoutes} buttons={this.state.buttons}></Shell>
                    </userDetailContext.Provider>
                </Router>
            </View>
        );
    }
}

/**
 * test for css StyleSheet object
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: "#666",
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "sans-serif"
    },
});

export default App;