import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {
   
  const navigate = useNavigate();

  return (
    <nav  className="navbar">

    <div className="logo-container">

      <h1 className="logo">Shopinube</h1>
      <img src="/Marketplace.gif" alt="Animación" className="gif-logo" />
      </div>

      {/* Links de navegación */}
      <ul className="navLinks">

        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <div className="buttons">

      <button onClick={()=> navigate("/login")} className="login-button">Iniciar Sesion</button>
      <button className="register-button">Crear Tienda </button>
      </div>
    </nav>
  );
}

export default Navbar;
