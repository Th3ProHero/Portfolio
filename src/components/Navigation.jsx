import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-content container">
        <a href="#inicio" className="nav-logo">PORTFOLIO_<span className="cursor">|</span></a>
        
        <ul className="nav-links">
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#acerca">ACERCA DE MÍ</a></li>
          <li><a href="#favoritos">FAVORITOS</a></li>
          <li><a href="#curriculum">CURRÍCULUM</a></li>
          <li><a href="#redes">REDES</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
