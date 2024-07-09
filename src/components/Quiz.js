import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import questions from "../data/question.json";

const Quiz = ({ setScore, setTotalQuestions }) => {
  const navigate = useNavigate();
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [trueValue, setTrueValue] = useState("");
  console.log("trueValue",trueValue);
  const [countdown, setCountdown] = useState(10);
  const [currentScore, setCurrentScore] = useState(0);
  const currentQuestion = questions[currentQuestions];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    console.log(selectedAnswer,"Answer");
    if (answer === currentQuestion.correctAnswer) {
      setTrueValue("correct");
      setScore((prev) => {
        const newScore = prev + 1;
        setCurrentScore(newScore);
        return newScore;
      });
    } else {
      setTrueValue("wrong");
      console.log("wrong",trueValue);
    }
  };

  const handleNextQuestion = useCallback(() => {
    setTotalQuestions((prev) => prev + 1);
    setSelectedAnswer("");
    setTrueValue("");
    setCountdown(10);

    if (currentQuestions < questions.length - 1) {
      setCurrentQuestions(currentQuestions + 1);
    } else {
      navigate("/result");
    }
  }, [currentQuestions, navigate, setTotalQuestions]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleNextQuestion();
    }
  }, [countdown]);

  return (
    <QuizContainer>
      <TimerContainer>
      <Score>Current Score: {currentScore}</Score>
        <Timer>Time left: {countdown}s</Timer>
        
      </TimerContainer>

      <QuestionContainer>
        <h2>{currentQuestion.question}</h2>
        {currentQuestion.options.map((option, index) => (
          <OptionButton
            key={index}
            onClick={() => handleAnswerSelect(option)}
            correct={
              trueValue === "correct" &&
              option === currentQuestion.correctAnswer
            }
            wrong={
              trueValue === "wrong" &&
              option === selectedAnswer &&
              option !== currentQuestion.correctAnswer
            }
            disabled={selectedAnswer}
          >
            {option}
          </OptionButton>
        ))}
      </QuestionContainer>
      {selectedAnswer && <button onClick={handleNextQuestion}>Next</button>}
    </QuizContainer>
  );
};

export default Quiz;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const QuestionContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin-bottom: 20px;
`;

const OptionButton = styled.button`
  display: flex;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.correct ? "green" : props.wrong ? "red" : "white"};
  color: ${(props) => (props.correct || props.wrong ? "white" : "black")};
  border: 1px solid #ccc;
  cursor: pointer;
`;
const TimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
const Timer = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;
const Score = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;
