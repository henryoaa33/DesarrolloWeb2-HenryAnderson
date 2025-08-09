
"use client";

import { useState, useEffect } from 'react';
import { useTrivia } from '../providers/TriviaProvider';
import { Pregunta } from '../models/Pregunta';
import { useRouter } from 'next/navigation';

const preguntasSimuladas: Pregunta[] = [
  { idPregunta: 1, descripcionPregunta: "¿React es un framework de JavaScript?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: false, puntajePregunta: 1 },
  { idPregunta: 2, descripcionPregunta: "¿'use client' se usa para componentes de servidor?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: false, puntajePregunta: 1 },
  { idPregunta: 3, descripcionPregunta: "¿TypeScript permite el tipado estricto?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
  { idPregunta: 4, descripcionPregunta: "¿useState se usa para manejar efectos secundarios?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: false, puntajePregunta: 1 },
  { idPregunta: 5, descripcionPregunta: "¿El layout principal envuelve toda la aplicación en Next.js?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
];

export const Trivia = () => {
  const router = useRouter();
  const { incrementarPuntaje } = useTrivia();

  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [preguntaActualIndex, setPreguntaActualIndex] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<boolean | null>(null);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    setPreguntas(preguntasSimuladas);
  }, []);

  const handleRespuesta = (respuestaUsuario: boolean) => {
    setRespuestaSeleccionada(respuestaUsuario);
    const preguntaActual = preguntas[preguntaActualIndex];
    if (respuestaUsuario === preguntaActual.respuestaCorrecta) {
      setMensaje('¡Correcto!');
      incrementarPuntaje(preguntaActual.puntajePregunta);
    } else {
      setMensaje('Incorrecto.');
      incrementarPuntaje(0);
    }
  };

  const handleSiguientePregunta = () => {
    setRespuestaSeleccionada(null);
    setMensaje('');
    if (preguntaActualIndex < preguntas.length - 1) {
      setPreguntaActualIndex(preguntaActualIndex + 1);
    } else {
      router.push('/results');
    }
  };

  if (preguntas.length === 0) {
    return <div>Cargando preguntas...</div>;
  }

  const preguntaActual = preguntas[preguntaActualIndex];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Pregunta {preguntaActualIndex + 1}/{preguntas.length}</h3>
      <p style={{ fontSize: '1.2em', margin: '20px 0' }}>{preguntaActual.descripcionPregunta}</p>
      
      <button onClick={() => handleRespuesta(true)} disabled={respuestaSeleccionada !== null}>
        Verdadero
      </button>
      <button onClick={() => handleRespuesta(false)} disabled={respuestaSeleccionada !== null} style={{ marginLeft: '10px' }}>
        Falso
      </button>

      {mensaje && (
        <div style={{ marginTop: '20px' }}>
          <h4>{mensaje}</h4>
          <button onClick={handleSiguientePregunta}>
            {preguntaActualIndex === preguntas.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
          </button>
        </div>
      )}
    </div>
  );
};