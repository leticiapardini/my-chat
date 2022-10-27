import React from 'react'
import img from '../assets/img.png'
import attach from '../assets/attach.png'

export const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Digite aqui sua mensagem' />
      <div className='send'>
        <img src={attach} alt="" />
        <input type="file" 
        style={{display: 'none'}} id='file'/>
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>Enviar</button>
      </div>
    </div>
  )
}
