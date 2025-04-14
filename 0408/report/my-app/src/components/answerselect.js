import './answer.css';

function Answer({ questions, setPage, selectedQuestion, setSelectedQuestion }) {

  const handleQuestionClick = (question) => {
    if (selectedQuestion === question) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(question);
    }
  };

  return (
    <div>
      <div className='question-item-container'>
        {questions.length === 0 ? (
          <p>등록된 질문이 없습니다.</p>
        ) : (
          questions.map((q, index) => (
            <div
              key={index}
              onClick={() => handleQuestionClick(q)}
              className='question-item'
            >
              <div className='question-item-title'>
                <h4>{q.title}</h4>
              </div>
              {selectedQuestion === q && (
                <div className='question-item-content'>
                  <p>{q.content}</p>
                  <button className="answer-inside-button" onClick={(e) => {
                    e.stopPropagation();
                    setSelectedQuestion(q);
                    setPage('answerwrite');
                  }}>
                    답변 작성
                  </button>
                  <button className="answer-list-button" onClick={(e) => {
                    e.stopPropagation();
                    setSelectedQuestion(q);
                    setPage('answerlist');
                  }}>
                    답변 보기
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <button onClick={() => setPage('main')}>← 메인으로</button>
    </div>
  );
}

export default Answer;
