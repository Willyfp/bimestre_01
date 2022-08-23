import logo from "./logo.svg";
import "./App.css";
import Evento from "./components/Evento";
import TipoIngresso from "./components/TipoIngresso";

function App() {
  const infoEvento = {
    nome: "Gustavo Lima",
    horario: "18h30 - 00h00",
    local: "Parque do Povo",
    cidade: "Campina Grande/PR",
    genero: "Arte em forma de Sertanejo",
    data: "2 de agosto de 2019 (Sexta-Feira)",
  };

  const infoIngressos = [
    {
      nome: "Camarote (open bar)",
      preco: 150,
    },
    {
      nome: "Camarote",
      preco: 100,
    },
    {
      nome: "Front-stage",
      preco: 60,
    },
    {
      nome: "pista",
      preco: 30,
    },
  ];

  return (
    <div className="App" style={{ padding: 10 }}>
      <Evento {...infoEvento} />
      <TipoIngresso ingressos={infoIngressos} />
    </div>
  );
}

export default App;
