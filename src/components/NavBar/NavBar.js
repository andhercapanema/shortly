import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavButton, StyledNavBar } from "./style";
import { useLocation } from "react-router-dom";
import UserUrlsContext from "../../common/contexts/UserUrlsContext";
import AuthenticationContext from "../../common/contexts/AuthenticationContext";

function NavBar() {
    const { pathname } = useLocation();
    const { userUrls, setUserUrls } = useContext(UserUrlsContext);
    const { userToken, setUserToken } = useContext(AuthenticationContext);
    const isLogged = userToken !== null;
    const navigate = useNavigate();

    function logout() {
        setUserUrls(null);
        localStorage.removeItem("shortlyUser");
        setUserToken(null);
        navigate("/");
    }

    return (
        <StyledNavBar isLogged={isLogged}>
            {isLogged ? (
                <>
                    <h3>Seja bem-vindo(a), {userUrls?.name}!</h3>
                    <div>
                        <Link to={"/"}>
                            <NavButton>Home</NavButton>
                        </Link>
                        <Link to={"/ranking"}>
                            <NavButton>Ranking</NavButton>
                        </Link>
                        <NavButton underline onClick={logout}>
                            Sair
                        </NavButton>
                    </div>
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
