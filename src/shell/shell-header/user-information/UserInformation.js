import React, { useContext } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { userDetailContext } from "../../../App";


/**
 * user informations style
 */
const UserInformationStyle = {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
}

/**
 * User informations component used to display the user set in UserDetailContext in App.js
 */
const UserInformation = () => {
    const userDetails = React.useContext(userDetailContext);
    return <div style={UserInformationStyle}>
        <Avatar size={64} icon={<UserOutlined />} />
        <div>{userDetails.firstName}&nbsp;{userDetails.lastName}</div>
    </div>
}

export default UserInformation;