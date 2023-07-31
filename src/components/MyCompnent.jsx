import React, { useState } from 'react';

const MyComponent = () => {
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/hello'); // La URL relativa al servidor
      const data = await response.json(); // Parseamos la respuesta JSON
      setResponseData(data.message); // Usamos el campo "message" del objeto JSON
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Obtener Saludo</button>
      {responseData && (
        <div>
          <h2>Respuesta del servidor:</h2>
          <p>{responseData}</p>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
