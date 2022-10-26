import React from 'react'
import addAvatar from '../assets/addAvatar.png'

export const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'> Dogs Chat </span>
        <span className='title'>Registre-se</span>
        <form>
          <input type='text' placeholder='Digite seu Nome'/>
          <input type='email' placeholder='Digite um e-mail'/>
          <input type='password' placeholder='Digite uma senha'/>
          <label htmlFor='file'> 
            <img src={addAvatar} alt="" />
            Adicione sua foto
          </label>
          <input id='file' style={{display: 'none'}} type='file'/>
          <button> Cadastre-se </button>
        </form>
        <p> Já possui cadastro? Login</p>
      </div>
    </div>)
}
