import './Curriculum.css';

const Curriculum = () => {
  return (
    <section id="curriculum" className="section curriculum-section">
      <div className="container">
        <h2 className="section-title">Currículum</h2>

        <div className="cv-grid">
          <div className="cv-column card">
            <h3 className="cv-title">EXPERIENCIA</h3>

            <div className="cv-item">
              <div className="cv-date">Sept 2025 - Presente</div>
              <h4 className="cv-role">Sr. Associate Surgical Marketing Data Analyst</h4>
              <h5 className="cv-company">Alcon</h5>
              <p>Lidero la estrategia de inteligencia de datos, automatizando reportes críticos vía Tableau y QuickSight, e integrando flujos de Salesforce y SAP para optimización de mercado en LATAM y Canadá.</p>
            </div>

            <div className="cv-item">
              <div className="cv-date">Mar 2025 - Ago 2025</div>
              <h4 className="cv-role">IT Process Analyst / Marketing Data Analyst</h4>
              <h5 className="cv-company">Axity (Asignado a Alcon)</h5>
              <p>Desarrollo de apps en Power Apps y dashboards en Power BI, modelado de datos en AWS Athena y scripts en Python para procesos ETL.</p>
            </div>

            <div className="cv-item">
              <div className="cv-date">Ago 2024 - Mar 2025</div>
              <h4 className="cv-role">MCA Digital Cell</h4>
              <h5 className="cv-company">SLB</h5>
              <p>Desarrollador Power Apps y analista de datos Power BI usando tecnologías de Microsoft 365.</p>
            </div>

            <div className="cv-item">
              <div className="cv-date">Ene 2022 - Abr 2024</div>
              <h4 className="cv-role">QA Tester</h4>
              <h5 className="cv-company">UNAM Facultad de Ingeniería</h5>
              <p>Pruebas de calidad en sistemas web usando Python y Selenium, con generación de matrices de prueba.</p>
            </div>

            <div className="cv-item">
              <div className="cv-date">Feb 2020 - Jun 2021</div>
              <h4 className="cv-role">Junior Project Manager</h4>
              <h5 className="cv-company">Alfa Inmobiliaria México</h5>
              <p>Diseño corporativo y administración de bases de datos de NAS locales y remotas para respaldos de la compañía.</p>
            </div>

          </div>

          <div className="cv-column card">
            <h3 className="cv-title">EDUCACIÓN Y CERTIFICADOS</h3>

            <div className="cv-item">
              <div className="cv-date">2017 - 2023</div>
              <h4 className="cv-role">Ingeniería en Computación</h4>
              <h5 className="cv-company">Facultad de Ingeniería UNAM</h5>
            </div>

            <div className="cv-item">
              <div className="cv-date">Certificaciones</div>
              <h4 className="cv-role">Especializaciones Técnicas</h4>
              <h5 className="cv-company">NVIDIA & SQL</h5>
              <p>Getting Started with AI on Jetson Nano, SQL (Advanced, Intermediate), Linux Unhatched.</p>
            </div>

            <br />
            <h3 className="cv-title" style={{ marginTop: '20px' }}>HABILIDADES</h3>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', fontSize: '0.95rem' }}>
              <li>AWS (Glue, Athena, S3) & PySpark</li>
              <li>NVIDIA cuDNN & CUDA®</li>
              <li>Python, ETL & Machine Learning</li>
              <li>Power BI, Tableau & Power Apps</li>
              <li>SQL, Salesforce & SAP Insights</li>
              <li>Linux Sysadmin</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Curriculum;
