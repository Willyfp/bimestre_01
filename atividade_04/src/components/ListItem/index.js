import React from "react";

export const ListItem = ({ name, description, html_url }) => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h5 style={{ marginBottom: -10 }}>{name}</h5>
      <p style={{ marginBottom: 5 }}>{description}</p>
      <a style={{ textDecoration: "none" }} target="_blank" href={html_url}>
        Acessar repositório
      </a>
    </div>
  );
};
