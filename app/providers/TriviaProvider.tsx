"use client";

import { useState, useContext, ReactNode } from 'react';
import { TriviaContext } from '../context/TriviaContext';

interface Props {
  children: ReactNode;
}

export const TriviaProvider = ({ children }: Props) => {
  const [puntaje, setPuntaje] = useState(0);
  const [preguntasRespondidas, setPreguntasRespondidas] = useState(0);

  const incrementarPuntaje = (puntos: number) => {
    setPuntaje((puntajeActual) => puntajeActual + puntos);
    setPreguntasRespondidas((respondidas) => respondidas + 1);
  };

  const reiniciarJuego = () => {
    setPuntaje(0);
    setPreguntasRespondidas(0);
  };

  return (
    <TriviaContext.Provider value={{ puntaje, preguntasRespondidas, incrementarPuntaje, reiniciarJuego }}>
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => {
  const context = useContext(TriviaContext);
  if (!context) {
    throw new Error('useTrivia debe ser usado dentro de un TriviaProvider');
  }
  return context;
};