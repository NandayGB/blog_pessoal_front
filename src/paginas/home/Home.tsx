import React, { useState, useEffect } from 'react';

function Home() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
        setTarefa(<span style={{ color: 'pink' }}>Parabéns! Você concluiu a tarefa!</span>);
    }
  }, [completed]);
  return (
    <div>
      <h1>Tarefa</h1>
      <h3 className="pink-text">{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
    </div>
  );
}

export default Home;
