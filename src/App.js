import { useState } from "react";
import { Casilla } from "./componentes/Casilla";

function App() {
  const casillas = [];
  for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
      casillas.push({ x, y });
    }
  }
  const [posicionFicha, setPosicionFicha] = useState({ x: 1, y: 1 });
  const moverFicha = (casilla) => {
    setPosicionFicha(casilla);
  };
  return (
    <div className="tablero-contenedor">
      <ul className="tablero">
        {casillas.map((casilla) => (
          <Casilla
            key={`${casilla.x}-${casilla.y}`}
            casilla={casilla}
            moverFicha={moverFicha}
            className="hola"
          />
        ))}
      </ul>
      <div
        className="ficha"
        style={{
          top: posicionFicha.x * 100 - 50,
          left: posicionFicha.y * 100 - 50,
        }}
      >
        🍕
      </div>
    </div>
  );
}

export default App;
