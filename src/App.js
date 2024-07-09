import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

import styled from 'styled-components';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [score, setScore] = useState(0);
  console.log("score",score);
  const [totalQuestions, setTotalQuestions] = useState(0);

  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/quiz" 
            element={<Quiz setScore={setScore} setTotalQuestions={setTotalQuestions} />} 
          />
          <Route 
            path="/result" 
            element={<Result score={score} totalQuestions={totalQuestions} />} 
          />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;
