import React, { useState } from "react";
import styled from "styled-components";
import data from "../data/data";
import Card from "./Card";
import Question from "./Question";
import Answer from "./Answer";
import Submit from "./SubmitButton";

const AnswerDiv = styled.div`
  margin-left: 10%;
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const onChangeValue = (e) => {
    setSelectedAnswers([...selectedAnswers, e.target.value]);
  };

  return (
    <div>
      {data.map((q, i) => {
        const { question, answers } = q;

        return (
          <Card key={i}>
            <Question>{question}</Question>
            <Form>
              {answers.map((a, i) => {
                const { answer, value } = a;
                return (
                  <AnswerDiv key={i} onChange={onChangeValue}>
                    <label htmlFor="answer"></label>

                    <input
                      type="radio"
                      className="radio"
                      name="answer"
                      id="answer"
                      value={value}
                    />
                    <Answer className="answer">{answer}</Answer>
                  </AnswerDiv>
                );
              })}
              <Submit selectedAnswer={selectedAnswers} />
            </Form>
          </Card>
        );
      })}
    </div>
  );
};

export default Quiz;
