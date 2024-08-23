import "./App.css";
import Validation from "./Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const {
        error,
        email,
        setEmail,
        senha,
        setSenha,
        validateEmail,
        validateSenha,
    } = Validation();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateEmail(email) && validateSenha(senha)) {
            toast.success("Entrou");
        } else if (!email || !senha) {
            toast.warn("Preencha os campos");
        } else if (!validateEmail(email) && !validateSenha(senha)) {
            toast.error("Email e senha não conferem");
        } else if (validateSenha(senha) && !validateEmail(email)) {
            toast.error(error);
        } else if (!validateSenha(senha) && validateEmail(email)) {
            toast.error(error);
        }
    };

    return (
        <div className="flex  justify-center bg-[#30414B]  h-screen items-center">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="  overflow-hidden flex flex-row h-[700px] w-[90%] justify-center items-center bg-[#566E71] content-center rounded-2xl gap-3"
            >
                <div className="flex w-1/2 h-full justify-center  bg-[#DBDEE7]">
                    <h1 className="font-serif items-center font-bold flex animate-grow">
                        Bem-vindo
                    </h1>
                </div>
                <div className="flex items-center justify-center w-1/2 h-full flex-col">
                    {" "}
                    <label
                        className="font-serif text-3xl flex items-center w-full flex-col"
                        htmlFor="email"
                    >
                        Email
                        <input
                            onChange={(email) => setEmail(email.target.value)}
                            className=" flex mt-2 mb-4 text-[16px] w-80 rounded-md  p bg-[#DBDEE7]"
                            value={email}
                            name="email"
                            type="email"
                            placeholder="  Teste@email.com.br"
                        />
                    </label>
                    <label
                        className="font-serif text-3xl items-center  flex-col flex w-full"
                        htmlFor="password"
                    >
                        Senha
                        <input
                            value={senha}
                            onChange={(senha) => setSenha(senha.target.value)}
                            className=" mt-2 text-[16px] mb-4 w-80 rounded-md p pl-3 bg-[#DBDEE7]"
                            name="senha"
                            type="password"
                            placeholder="●●●●●●●●●●"
                        />
                    </label>
                    <button
                        type="submit"
                        className=" flex items-center text-3xl justify-center font-serif font-bold w-80 hover:bg-[#B1BCCC] pl-3 p-4 mt-5 rounded-md bg-[#DBDEE7]"
                    >
                        Entrar
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default App;
