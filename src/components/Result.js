import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Result = ({ score, totalQuestions }) => {
  const playAgain = () => {
    navigate('/');
  };
  const navigate  = useNavigate();

  return (
    <ResultContainer>
      <h1>Quiz Completed!</h1>
      <p>Total Questions: {totalQuestions}</p>
      <p>Correct Answers: {score}</p>
      <PlayAgainButton onClick={playAgain}>Play Again</PlayAgainButton>
    </ResultContainer>
  );
};

export default Result;

const ResultContainer = styled.div`
  display: block;
  align-items: center;
  height: 100vh;
`;

const PlayAgainButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width:20%;
`;
