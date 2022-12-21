import React from "react";
import { StyledHeader, HeaderButton } from "./style";
import logo from "../../assets/images/shorts_1fa73.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <StyledHeader>
            <header>
                <Link to={"/signin"}>
                    <HeaderButton accent={true}>Entrar</HeaderButton>
                </Link>
                <Link to={"/signup"}>
                    <HeaderButton>Cadastrar-se</HeaderButton>
                </Link>
            </header>
            <div>
                <h1>Shortly</h1>
                <img alt="Logo do Shortly" src={logo} />
            </div>
        </StyledHeader>
    );
}

export default Header;
