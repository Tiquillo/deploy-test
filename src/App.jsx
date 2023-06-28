import { useState } from "react";

function App() {
  const [mostrarPorton, setMostrarPorton] = useState(false);

  const handleClick = () => {
    setMostrarPorton(!mostrarPorton);
  };
  /*
  const ewelink = require("ewelink-api");

  const connection = new ewelink({
    email: "lujimenez2000@gmail.com",
    password: "",
    region: "us",
  });

  const devices = connection.getDevices();
  console.log(devices);
  */
  const activarPorton = () => {};

  return (
    <div
      style={{
        backgroundColor: "darkslategray",
        height: "100vh",
        width: "100wh",
        color: "whitesmoke",
        padding: "2rem",
        marginLeft: "-1rem",
        marginTop: "-1rem",
      }}
    >
      <h1>Casa</h1>
      <hr />
      <div>
        <h2>Portón</h2>
        <button onClick={handleClick}>
          {mostrarPorton ? "Ocultar" : "Mostrar"}
        </button>

        <br />
        <br />
        {mostrarPorton && (
            <img src="https://59f6-201-192-183-31.ngrok-free.app/mjpeg/1" />
          ) && <button onClick={activarPorton}>Activar</button>}
      </div>
    </div>
  );
}

export default App;
