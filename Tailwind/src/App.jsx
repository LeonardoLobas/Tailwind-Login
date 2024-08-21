
import './App.css'


const App = () => {
  return (
    <div className='flex justify-center bg-[#30414B] w-full h-screen items-center'>
      <form className='flex flex-col w-[600px] h-[400px] justify-center items-center bg-[#566E71] content-center rounded-2xl gap-3 p-20'>
        <label className='font-serif text-3xl flex justify-start w-full flex-col' htmlFor="email">Email<input className=' mt-2 text-[16px] rounded-md  p bg-[#DBDEE7]' type='email' placeholder='  Teste@email.com.br' /></label>
        <label className='font-serif text-3xl  flex-col flex w-full' htmlFor="password">Senha<input className=' mt-2 text-[16px] rounded-md p pl-3 bg-[#DBDEE7]' type='password' placeholder='●●●●●●●●●●' /></label>
        <button className=' flex items-center text-3xl justify-center font-serif font-bold w-1/2 hover:bg-[#B1BCCC] pl-3 p-4 mt-5 rounded-md bg-[#DBDEE7]'>Entrar</button>
      </form>
    </div>

  )
}

export default App

