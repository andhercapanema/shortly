import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../common/contexts/UserContext";
import ShortlyResources from "../../common/services/ShortlyResources";
import { SignInForm, StyledSignInPage } from "./style";

function SignInPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const { email, password } = form;
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function login(e) {
        e.preventDefault();

        try {
            const { data: token } = await ShortlyResources.signIn(form);
            setUser(token);
            localStorage.setItem("shortly_user", JSON.stringify(token));
            navigate("/");
        } catch (err) {
            alert(err.response.data.message);
            console.error(err.response);
        }
    }

    return (
        <StyledSignInPage>
            <SignInForm onSubmit={login}>
                <input
                    type="email"
                    name="email"
                    onChange={handleForm}
                    value={email}
                    placeholder="E-mail"
                    required
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleForm}
                    value={password}
                    placeholder="Senha"
                    required
                />
                <button>Criar Conta</button>
            </SignInForm>
        </StyledSignInPage>
    );
}

export default SignInPage;
