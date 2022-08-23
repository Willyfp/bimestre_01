import React from "react";

const Evento = ({ ...props }) => {
  const { nome, data, horario, local, cidade, genero } = props;

  return (
    <div style={{ textAlign: "start" }}>
      <h1>{nome}</h1>

      <p>
        <strong>Data: </strong>
        {data}
      </p>
      <p>
        <strong>Horário: </strong>
        {horario}
      </p>
      <p>
        <strong>Local: </strong>
        {local}
      </p>
      <p>
        <strong>Cidade: </strong>
        {cidade}
      </p>
      <p>
        <strong>Gênero: </strong>
        {genero}
      </p>
    </div>
  );
};

export default Evento;
