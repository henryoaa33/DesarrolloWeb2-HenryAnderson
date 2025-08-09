export interface Pregunta {
  idPregunta: number;
  descripcionPregunta: string;
  opcionRespuesta1: boolean;
  opcionRespuesta2: boolean; 
  respuestaCorrecta: boolean;
  puntajePregunta: number;
}