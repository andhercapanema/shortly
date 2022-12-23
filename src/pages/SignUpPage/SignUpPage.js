import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../assets/styles/StyledButton";
import { StyledInput } from "../../assets/styles/StyledInput";
import ShortlyResources from "../../common/services/ShortlyResources";
import { SignUpForm, StyledSignUpPage } from "./style";

function SignUpPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { name, email, password, confirmPassword } = form;
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function registerUser(e) {
        e.preventDefault();

        try {
            await ShortlyResources.postNewUser(form);
            navigate("/signin");
        } catch (err) {
            alert(err.response.data.message);
            console.error(err.response);
        }
    }

    return (
        <StyledSignUpPage>
            <SignUpForm onSubmit={registerUser}>
                <StyledInput
                    name="name"
                    onChange={handleForm}
                    value={name}
                    placeholder="Nome"
                    required
                />
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
                <StyledInput
                    type="password"
                    name="confirmPassword"
                    onChange={handleForm}
                    value={confirmPassword}
                    placeholder="Confirmar Senha"
                    required
                />
                <StyledButton>Criar Conta</StyledButton>
            </SignUpForm>
        </StyledSignUpPage>
    );
}

export default SignUpPage;
