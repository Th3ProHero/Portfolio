import { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const SONGS = [
  { title: "Burgundy - SuicideBoys", file: "/Media/Music/Burgundry%20-%20SuicideBoyS.mp3" },
  { title: "Driveway - Lil Peep", file: "/Media/Music/Driveway%20-%20Lil%20Peep.mp3" },
  { title: "I'm GOD - Lil B", file: "/Media/Music/I'm%20GOD%20-Lil%20B.mp3" },
  { title: "SORRY - The Kid Laroi", file: "/Media/Music/SORRY%20-%20The%20Kid%20Laroi.mp3" },
  { title: "YUKON - Justin Bieber", file: "/Media/Music/YUKON%20-%20Justin%20Bieber.mp3" }
];

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Pick a random song on startup
    const randomIndex = Math.floor(Math.random() * SONGS.length);
    setCurrentSongIndex(randomIndex);
  }, []);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  const initAudioContext = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioContextRef.current = audioCtx;
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 128; // Small fft for simple visualizer
    analyserRef.current = analyser;

    const source = audioCtx.createMediaElementSource(audioRef.current);
    sourceRef.current = source;
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    drawVisualizer();
  };

  const drawVisualizer = () => {
    if (!canvasRef.current || !analyserRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const analyser = analyserRef.current;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, width, height);

      const barWidth = (width / bufferLength) * 2;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        // Reducir la sensibilidad: escalar en base a la altura (30px) y un multiplicador
        barHeight = (dataArray[i] / 255) * height * 0.8; 
        ctx.fillStyle = '#00ff41';
        ctx.fillRect(x, height - Math.max(1, barHeight), barWidth, Math.max(1, barHeight));
        x += barWidth + 1;
      }
    };
    draw();
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % SONGS.length;
    setCurrentSongIndex(nextIndex);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 50);
    }
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);

  const currentSong = SONGS[currentSongIndex];
  const decodedFileName = decodeURIComponent(currentSong?.file.split('/').pop() || "");

  return (
    <div className="music-player">
      <div className="player-info">
        <marquee scrollamount="3" className="song-title">
          {currentSong?.title || "Loading..."}
        </marquee>
        <span className="file-name">{decodedFileName}</span>
      </div>

      <div className="visualizer-container">
        <canvas ref={canvasRef} className="visualizer" width="220" height="30" />
      </div>

      <div className="controls">
        <button className="control-btn" onClick={handlePlayPause}>
          {isPlaying ? '။' : '▶'}
        </button>
        <button className="control-btn" onClick={handleNext}>
          ⏭
        </button>
      </div>

      <audio
        ref={audioRef}
        src={currentSong?.file}
        onEnded={handleNext}
        onPlay={() => {
          setIsPlaying(true);
          if (!audioContextRef.current) initAudioContext();
        }}
        onPause={() => setIsPlaying(false)}
        autoPlay
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default MusicPlayer;
