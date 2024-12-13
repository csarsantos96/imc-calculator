import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = altura / 100; // Converter cm para metros
      const imc = (peso / (alturaEmMetros ** 2)).toFixed(2);

      let classificacao = '';
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else {
        classificacao = 'Obesidade';
      }

      setResultado({ imc, classificacao });
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="formulario">
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
        <button onClick={calcularIMC}>Calcular IMC</button>
      </div>
      {resultado && (
        <div className="resultado">
          <p>Seu IMC: {resultado.imc}</p>
          <p>Classificação: {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
