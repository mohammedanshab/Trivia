import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate  = useNavigate();
  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <HomeContainer>
      <h1>Trivia Quiz Game</h1>
      <StartButton onClick={startQuiz}>Start Quiz</StartButton>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color:blue;
`;
