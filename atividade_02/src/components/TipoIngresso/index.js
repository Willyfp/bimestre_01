import React from "react";

const TipoIngresso = ({ ...props }) => {
  const { ingressos } = props;

  return (
    <div style={{ textAlign: "start" }}>
      <h1>Ingressos</h1>

      <ul>
        {ingressos.map((item) => (
          <li>
            {item.nome}: R${item.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TipoIngresso;
