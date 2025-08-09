"use client";

import { createContext } from 'react';


export interface TriviaContextProps {
  puntaje: number;
  preguntasRespondidas: number;
  incrementarPuntaje: (puntos: number) => void;
  reiniciarJuego: () => void;
}


export const TriviaContext = createContext<TriviaContextProps>({} as TriviaContextProps);