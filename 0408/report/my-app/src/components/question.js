import React, { useState } from 'react';
import './question.css';  // CSS 파일 import

function Question({ setPage, questions, setQuestions }) {
  const [inputTitle, setInputTitle] = useState("");  // 제목 상태
  const [inputContent, setInputContent] = useState("");  // 내용 상태

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTitle.trim() === "" || inputContent.trim() === "") return;  // 제목 또는 내용이 비어있으면 제출하지 않음

    const newQuestion = {
      title: inputTitle,
      content: inputContent,
      answers: []
    };
    

    setQuestions([...questions, newQuestion]); // 제목과 내용이 포함된 질문 추가
    setInputTitle("");  // 제목 초기화
    setInputContent("");  // 내용 초기화
    setPage('main');  // 제출 후 메인 페이지로 돌아감
  };

  return (
    <div className="question-container">
      <h2 className="question-title">질문 작성</h2>
      <form onSubmit={handleSubmit} className="question-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">제목</label>
          <input
            type="text"
            id="title"
            className="form-input"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="질문의 제목을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">내용</label>
          <textarea
            id="content"
            className="form-textarea"
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
            placeholder="질문의 내용을 입력하세요"
          />
        </div>
        <br />
        <button type="submit" className="submit-button">등록</button>
      </form>
    </div>
  );
}

export default Question;
