import React from "react";
import UserContext from "./UserContext";

function Contexts({ user, setUser, children }) {
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default Contexts;
