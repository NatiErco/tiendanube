import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
      <ul className="footerLinks">
        <li><a href="/terminos">Términos y Condiciones</a></li>
        <li><a href="/privacidad">Política de Privacidad</a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
