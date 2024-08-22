import { useState } from 'react'
import './App.css'
import Validation from './Validation'




const App = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setLoginError] = useState('');
  const [senhaError, setSenhaError] = useState('');

  const validateInputs = () => {
    let isValid = true;

    if (!Validation({ fieldType: 'email', value: email })) {
      setLoginError('Email inválido. O Email deve conter apenas letras, números, pontos ou hífens e ter no máximo 20 caracteres.');
      isValid = false;
    } else {
      setLoginError('');
    }

    if (!Validation({ fieldType: 'senha', value: senha })) {
      setSenhaError('Senha inválida. A senha deve conter ao menos 8 caracteres, com ao menos uma letra maiúscula, uma minúscula, um número e um símbolo.');
      isValid = false;
    } else {
      setSenhaError('');
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {

      alert('Formulario enviado com sucesso!')
    }
  }
  return (
    <div className='flex justify-center bg-[#30414B] w-full h-screen items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col w-[600px] h-[400px] justify-center items-center bg-[#566E71] content-center rounded-2xl gap-3 p-20'>
        <label className='font-serif text-3xl flex justify-start w-full flex-col' htmlFor="email">Email<input onChange={(event) => setEmail(event.target.value)} className=' mt-2 text-[16px] rounded-md  p bg-[#DBDEE7]' type='email' placeholder='  Teste@email.com.br' />{emailError && <span className='text-red-500 text-sm mt-1'>{emailError}</span>}</label>
        <label className='font-serif text-3xl  flex-col flex w-full' htmlFor="password">Senha<input onChange={(event) => setSenha(event.target.value)} className=' mt-2 text-[16px] rounded-md p pl-3 bg-[#DBDEE7]' type='password' placeholder='●●●●●●●●●●' />{senhaError && <span className='text-red-500 text-sm mt-1'>{senhaError}</span>}</label>
        <button type='submit' onClick={handleSubmit} value='submit' className=' flex items-center text-3xl justify-center font-serif font-bold w-1/2 hover:bg-[#B1BCCC] pl-3 p-4 mt-5 rounded-md bg-[#DBDEE7]'>Entrar</button>
      </form>
    </div>
  )
}



export default App