import React from "react";
import "../styles/Login.css";

function Login() {
    return (
        <div className="contenedor">
          <div className="logo-container">
        
            <h2 className="titulo">Inicia sesión en tu cuenta </h2>
          </div>
    
          <div className="formulario-container">
            <form action="#" method="POST">
              <div className="campo">
                <label htmlFor="email">Dirección de correo electrónico</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
    
              <div className="campo">
                <div className="password-container">
                  <label htmlFor="password">Contraseña</label>
                  <a href="#" className="enlace">¿Olvidaste tu contraseña?</a>
                </div>
                <input id="password" name="password" type="password" required autoComplete="current-password" />
              </div>
    
              <div>
                <button type="submit" className="boton">Iniciar sesión</button>
              </div>
            </form>
    
            <p className="texto-registro">
              ¿No tienes una tienda? <a href="#" className="enlace">Crear Tienda Gratis</a>
            </p>
          </div>
        </div>
      );
    }

    export default Login;