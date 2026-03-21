import './Redes.css';

const Redes = () => {
  return (
    <footer id="redes" className="section redes-section">
      <div className="container text-center">
        <h2 className="section-title" style={{ fontSize: '2rem' }}>Conectar</h2>

        <p className="contact-text">¿Interesado en colaborar en proyectos de Data, Cloud o AI? Contáctame a través de mis canales.</p>

        <div className="social-links">
          <a href="https://github.com/Th3ProHero" target="_blank" rel="noreferrer" className="social-icon">
            GH
          </a>
          <a href="https://www.linkedin.com/in/bautista-flores-mauricio/" target="_blank" rel="noreferrer" className="social-icon">
            IN
          </a>
          <a href="mailto:bautista.flores.mauricio2@gmail.com" className="social-icon">
            @
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mauricio Bautista Flores. Coded with 💚 inside the Matrix.</p>
        </div>
      </div>
    </footer>
  );
};

export default Redes;
