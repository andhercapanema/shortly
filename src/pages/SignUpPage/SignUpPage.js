import React from "react";
import { SignUpForm, StyledSignUpPage } from "./style";

function SignUpPage() {
    return (
        <StyledSignUpPage>
            <SignUpForm>
                <input placeholder="Nome" required />
                <input placeholder="E-mail" required />
                <input placeholder="Senha" required />
                <input placeholder="Confirmar Senha" required />
                <button>Criar Conta</button>
            </SignUpForm>
        </StyledSignUpPage>
    );
}

export default SignUpPage;
