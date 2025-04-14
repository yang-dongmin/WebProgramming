import './answer.css';

function AnswerList({ selectedQuestion, setPage }) {
    if (!selectedQuestion) {
        return <p>질문이 선택되지 않았습니다.</p>;
    }
    return (
        <div className="answer-list-container">
            <div className="question-answer-list">
                <div className="question-answer-title">
                    <h2>{selectedQuestion.title}</h2>
                </div>
                <div className="question-answer-content">
                    <p>{selectedQuestion.content}</p>
                </div>
            </div>

            <div className="answer-lists-area">
                {selectedQuestion.answers && selectedQuestion.answers.length > 0 ? (
                    selectedQuestion.answers.map((answer, index) => (
                        <div key={index} className="answer-item">
                            <p>{answer.text}</p>
                            <span className="answer-date">{answer.date}</span>
                        </div>
                    ))
                ) : (
                    <p>아직 답변이 없습니다.</p>
                )}
            </div>

        </div>
    );
}

export default AnswerList;
