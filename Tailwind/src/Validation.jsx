import { useState } from "react";

const objectValidation = {
    email: {
        emailName: "leonardolobas@gmail.com",
        messageErrorEmail: "Email ou senha não conferem!",
    },
    senha: {
        senhaType: "1234",
        messageErrorSenha: "Email ou senha não conferem!",
    },
};
const Validation = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const validateEmail = (email) => {
        if (email !== objectValidation.email.emailName) {
            setError(objectValidation.email.messageErrorEmail);
            return false;
        }
        return true;
    };
    const validateSenha = (senha) => {
        if (senha !== objectValidation.senha.senhaType) {
            setError(objectValidation.senha.messageErrorSenha);
            return false;
        }
        return true;
    };

    return {
        objectValidation,
        email,
        setEmail,
        senha,
        setSenha,
        validateEmail,
        validateSenha,
        error,
        setError,
    };
};

export default Validation;
