import './index.css';
import MatrixBackground from './components/MatrixBackground';
import Navigation from './components/Navigation';
import Inicio from './components/Inicio';
import Acerca from './components/Acerca';
import Favoritos from './components/Favoritos';
import Curriculum from './components/Curriculum';
import Redes from './components/Redes';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <>
      <MatrixBackground />
      <Navigation />
      
      <main>
        <Inicio />
        <Acerca />
        <Favoritos />
        <Curriculum />
        <Redes />
      </main>
      
      <MusicPlayer />
    </>
  );
}

export default App;
