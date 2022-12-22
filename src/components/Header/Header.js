import React from "react";
import { StyledHeader } from "./style";
import logo from "../../assets/images/shorts_1fa73.png";

function Header() {
    return (
        <StyledHeader>
            <h1>Shortly</h1>
            <img alt="Logo do Shortly" src={logo} />
        </StyledHeader>
    );
}

export default Header;
