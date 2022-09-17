import React from "react";
import { formatearCantidad } from "../helpers";

const ControPresupuesto = ({ presupuesto }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {formatearCantidad(0)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearCantidad(0)}
        </p>
      </div>
    </div>
  );
};

export default ControPresupuesto;
