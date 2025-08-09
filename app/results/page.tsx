"use client";

import { useTrivia } from '../providers/TriviaProvider';
import { useRouter } from 'next/navigation';

export default function ResultsPage() {
  const router = useRouter();
  const { puntaje, reiniciarJuego } = useTrivia();

  const handleReiniciar = () => {
    reiniciarJuego();
    router.push('/');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>¡Juego Terminado!</h2>
      <h3>Tu puntaje final es: {puntaje}</h3>
      <button onClick={handleReiniciar}>
        Jugar de Nuevo
      </button>
    </div>
  );
}