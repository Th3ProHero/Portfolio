import './Favoritos.css';

const MOVIES = [
  { title: "The Matrix", image: "/Media/Movies_Covers/Movie1_Matrix.jpg", review: "Un clásico cyberpunk que cuestiona la realidad y redefinió la ciencia ficción." },
  { title: "The Great Gatsby", image: "/Media/Movies_Covers/Movie2_GATSBY.jpg", review: "Visualmente deslumbrante, una narrativa trágica envuelta en excesos dorados." },
  { title: "Jurassic Park", image: "/Media/Movies_Covers/Movie3_Jurassic.jpg", review: "Una maravilla técnica atemporal que captura la majestuosidad de los dinosaurios." },
  { title: "Alien", image: "/Media/Movies_Covers/Movie4_Alien.jpg", review: "Terror espacial claustrofóbico con un diseño de criatura insuperable." },
  { title: "Pacific Rim", image: "/Media/Movies_Covers/Movie5_PacificRim.jpg", review: "Acción colosal y puro entretenimiento mecha vs. kaiju." }
];

const ALBUMS = [
  { title: "My Beautiful Dark Twisted Fantasy", image: "/Media/Album_covers/AlbumCover1_MBDTF.jpg", review: "Una obra maestra maximalista de hip-hop con producción brillante." },
  { title: "CryBaby", image: "/Media/Album_covers/AlbumCover2_CryBaby.jpg", review: "El influyente debut de Lil Peep que definió el emo rap." },
  { title: "I Want to Die in New Orleans", image: "/Media/Album_covers/AlbumCover3_IWTDINO.jpg", review: "Sonido icónico del hip hop sureño agresivo y atmosférico por $uicideboy$." },
  { title: "6 Kiss", image: "/Media/Album_covers/AlbumCover4_6kiss.jpg", review: "El álbum revolucionario de Lil B que cimentó el cloud rap." },
  { title: "The First Time", image: "/Media/Album_covers/AlbumCover5_TFT.jpg", review: "Las emotivas melodías y crecimiento artístico de The Kid Laroi." }
];

const BOOKS = [
  { title: "Neuromante - William Gibson", review: "El padre del cyberpunk y la inspiración de la matriz." },
  { title: "Snow Crash - Neal Stephenson", review: "Entrega un metaverso satírico lleno de acción cibernética." },
  { title: "Do Androids Dream of Electric Sheep? - Philip K. Dick", review: "Preguntas filosóficas profundas sobre lo que significa ser humano." }
];

const Favoritos = () => {
  return (
    <section id="favoritos" className="section favoritos-section">
      <div className="container">
        <h2 className="section-title">Favoritos</h2>
        
        <div className="fav-category">
          <h3 className="category-title">Películas</h3>
          <div className="fav-grid">
            {MOVIES.map((item, idx) => (
              <div className="fav-card card" key={idx}>
                <div className="img-wrapper movie-poster">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="img-overlay"></div>
                </div>
                <div className="card-content">
                  <h4>{item.title}</h4>
                  <p>{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fav-category">
          <h3 className="category-title">Música</h3>
          <div className="fav-grid">
            {ALBUMS.map((item, idx) => (
              <div className="fav-card card" key={idx}>
                <div className="img-wrapper album-cover">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="img-overlay"></div>
                </div>
                <div className="card-content">
                  <h4>{item.title}</h4>
                  <p>{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fav-category">
          <h3 className="category-title">Libros</h3>
          <div className="text-grid">
             {BOOKS.map((item, idx) => (
                <div className="text-card card" key={idx}>
                  <h4>{item.title}</h4>
                  <p>{item.review}</p>
                </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Favoritos;
