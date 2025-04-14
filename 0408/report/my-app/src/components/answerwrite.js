import React, { useState } from 'react';
import './answer.css';

function AnswerWrite({ selectedQuestion, setSelectedQuestion, questions, setQuestions, setPage }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === "") return;

    const newAnswer = {
      text: answer,
      date: new Date().toLocaleString(),
    };

    // 질문 목록에서 선택된 질문을 찾아서 답변 추가
    const updatedQuestions = questions.map(q =>
      q === selectedQuestion
        ? { ...q, answers: [...(q.answers || []), newAnswer] }
        : q
    );

    setQuestions(updatedQuestions);

    // 선택된 질문도 새롭게 업데이트
    const updatedSelected = updatedQuestions.find(q => q === selectedQuestion);
    setSelectedQuestion(updatedSelected);

    setSelectedQuestion(null);
    setPage("main");
    
    setAnswer("");
    alert("답변이 등록되었습니다!");
  };

  if (!selectedQuestion) {
    return <p>질문이 선택되지 않았습니다.</p>;
  }

  return (
    <div className="answer-write-container">
      <div className="question-display">
        <div className="question-display-title">
          <h2>{selectedQuestion.title}</h2>
        </div>
        <div className="question-display-content">
          <p>{selectedQuestion.content}</p>
        </div>
      </div>

      

      {/* 답변 작성 */}
      <form onSubmit={handleSubmit} className="answer-form-container">
        <h3>답변 작성</h3>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="답변을 입력하세요"
          rows="5"
          className="answer-textarea"
        />
        <br />
        <button type="submit" className="submit-button">답변 제출</button>
      </form>
    </div>
  );
}

export default AnswerWrite;
