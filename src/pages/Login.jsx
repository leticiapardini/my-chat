import React from 'react'

export const Login = () => {
  return (
      <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'> Dogs Chat </span>
          <span className='title'>Login</span>
          <form>
            <input type='email' placeholder='Digite um e-mail'/>
            <input type='password' placeholder='Digite uma senha'/>
            <button> Entrar </button>
          </form>
          <p> Ainda não esta cadastrado? Cadastro</p>
        </div>
      </div>)
}
