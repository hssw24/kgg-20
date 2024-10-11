import React, { useState, useEffect } from 'react';

function MathApp() {
  // useState Hooks für die Aufgaben und die Benutzerantwort
  const [problem1, setProblem1] = useState({ num1: 0, num2: 0 });
  const [problem2, setProblem2] = useState({ num1: 0, num2: 0 });
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [message, setMessage] = useState("");

  // Funktion zum Generieren einer neuen Rechenaufgabe
  const generateProblem = () => {
    const num1 = Math.floor(Math.random() * 21);
    const num2 = Math.floor(Math.random() * 21);
    return { num1, num2 };
  };

  // Berechnet das Ergebnis einer Aufgabe
  const calculateResult = (problem) => {
    return problem.num1 + problem.num2;
  };

  // Beim Laden der Komponente generiere zwei Aufgaben
  useEffect(() => {
    const newProblem1 = generateProblem();
    const newProblem2 = generateProblem();
    setProblem1(newProblem1);
    setProblem2(newProblem2);
    setResult1(calculateResult(newProblem1));
    setResult2(calculateResult(newProblem2));
  }, []);

  // Funktion zur Überprüfung der Benutzerantwort
  const checkAnswer = (comparison) => {
    let isCorrect = false;

    if (comparison === "smaller" && result1 < result2) isCorrect = true;
    if (comparison === "equal" && result1 === result2) isCorrect = true;
    if (comparison === "greater" && result1 > result2) isCorrect = true;

    setMessage(isCorrect ? "Richtig!" : "Falsch. Versuche es noch einmal.");
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Vergleiche die Ergebnisse</h1>
      <div>
        <p>{problem1.num1} + {problem1.num2} = ?</p>
        <p>{problem2.num1} + {problem2.num2} = ?</p>
      </div>
      <div>
        <button onClick={() => checkAnswer("smaller")}>kleiner</button>
        <button onClick={() => checkAnswer("equal")}>gleich</button>
        <button onClick={() => checkAnswer("greater")}>größer</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default MathApp;
