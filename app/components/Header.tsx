"use client";

import { useTrivia } from '../providers/TriviaProvider';

export const Header = () => {
  const { puntaje } = useTrivia();

  return (
    <header style={{ padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc', textAlign: 'center' }}>
      <h1>Trivia del Estudiante</h1>
      <h2>Puntaje Actual: {puntaje}</h2>
    </header>
  );
};