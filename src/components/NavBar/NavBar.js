import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavButton, StyledNavBar } from "./style";
import { useLocation } from "react-router-dom";
import UserContext from "../../common/contexts/UserContext";

function NavBar() {
    const { pathname } = useLocation();
    const { user } = useContext(UserContext);
    const isLogged = user !== null;

    return (
        <StyledNavBar isLogged={isLogged}>
            {isLogged ? (
                <>
                    <Link to={"/signin"}>
                        <NavButton accent={true}>Entrar</NavButton>
                    </Link>
                    <Link to={"/signup"}>
                        <NavButton>Cadastrar-se</NavButton>
                    </Link>
                </>
            ) : (
                <>
                    <Link to={"/signin"}>
                        <NavButton accent={pathname !== "/signup"}>
                            Entrar
                        </NavButton>
                    </Link>
                    <Link to={"/signup"}>
                        <NavButton accent={pathname === "/signup"}>
                            Cadastrar-se
                        </NavButton>
                    </Link>
                </>
            )}
        </StyledNavBar>
    );
}

export default NavBar;
