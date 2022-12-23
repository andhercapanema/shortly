import React from "react";
import AuthenticationContext from "./AuthenticationContext";
import UserUrlsContext from "./UserUrlsContext";

function Contexts({
    children,
    userUrls,
    setUserUrls,
    userToken,
    setUserToken,
}) {
    return (
        <UserUrlsContext.Provider value={{ userUrls, setUserUrls }}>
            <AuthenticationContext.Provider value={{ userToken, setUserToken }}>
                {children}
            </AuthenticationContext.Provider>
        </UserUrlsContext.Provider>
    );
}

export default Contexts;
