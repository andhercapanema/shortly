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
                    <h3>Seja bem-vindo(a), {user}!</h3>
                    <Link to={"/"}>
                        <NavButton accent={true}>Entrar</NavButton>
                    </Link>
                    <Link to={"/ranking"}>
                        <NavButton accent={true}>Entrar</NavButton>
                    </Link>
                    <Link>
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
