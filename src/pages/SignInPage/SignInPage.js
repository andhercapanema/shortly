import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../assets/styles/StyledButton";
import { StyledInput } from "../../assets/styles/StyledInput";
import AuthenticationContext from "../../common/contexts/AuthenticationContext";
import ShortlyResources from "../../common/services/ShortlyResources";
import { SignInForm, StyledSignInPage } from "./style";

function SignInPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const { email, password } = form;
    const navigate = useNavigate();
    const { setUserToken } = useContext(AuthenticationContext);

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function login(e) {
        e.preventDefault();

        try {
            const { data: token } = await ShortlyResources.signIn(form);
            setUserToken(token);
            localStorage.setItem("shortlyUser", JSON.stringify(token));
            navigate("/");
        } catch (err) {
            alert(err.response.data.message);
            console.error(err.response);
        }
    }

    return (
        <StyledSignInPage>
            <SignInForm onSubmit={login}>
                <StyledInput
                    type="email"
                    name="email"
                    onChange={handleForm}
                    value={email}
                    placeholder="E-mail"
                    required
                />
                <StyledInput
                    type="password"
                    name="password"
                    onChange={handleForm}
                    value={password}
                    placeholder="Senha"
                    required
                />
                <StyledButton>Entrar</StyledButton>
            </SignInForm>
        </StyledSignInPage>
    );
}

export default SignInPage;
