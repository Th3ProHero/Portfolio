import './Acerca.css';

const Acerca = () => {
  return (
    <section id="acerca" className="section acerca-section">
      <div className="container">
        <h2 className="section-title">Acerca De Mí</h2>
        
        <div className="acerca-content card">
          <div className="acerca-text">
            <h3>&gt; SYSTEM.INFO</h3>
            <p>
              Soy un Data Engineer enfocado en desarrollar soluciones de datos inteligentes, automatización y analíticas. 
              Actualmente trabajo como Senior Data Analyst en Alcon, impulsando proyectos con AWS, Salesforce, y optimizando el ROI.
            </p>
            <p>
              Me apasiona combinar la programación, tecnologías cloud e inteligencia artificial para construir soluciones escalables que conecten los datos con el valor comercial.
            </p>
            <ul className="skills-list">
              <li>Python & ML</li>
              <li>AWS (Glue, Athena, S3)</li>
              <li>Power BI & Tableau</li>
              <li>NVIDIA CUDA®</li>
            </ul>
          </div>
          <div className="acerca-visual">
            <div className="binary-bg">
              01001101 01000001 01010101 01010010 01001001 01000011 01001001 01001111<br/><br/>
              01000100 01000001 01010100 01000001 00100000 01000101 01001110 01000111<br/><br/>
              01010000 01011001 01010100 01001000 01001111 01001110
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acerca;
