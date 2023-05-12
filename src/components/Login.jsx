import React from 'react'
import './Login.css'
import logo from './logo4.png'
export const Login = () => {
  return (
    <>
      <div className='main-form'>
        <h1>Terminal De Buses la paz</h1>
        <form action="" className='main-form-div'>
          <div className='form-label'>
            <label htmlFor="">Nombre de usuario</label>
            <input type="text" />
          </div>
          <div className='form-label'>
            <label htmlFor="">Contraseña</label>
            <input type="password" />
          </div>
          <button>Enviar</button>
        </form>
      </div>
      <div>
        <img src={logo} alt="" />
        <h2>BRAINSTORMSOFT</h2>
        <p>Servicio,calidad y compromiso</p>
      </div>
    </>
  )
}
