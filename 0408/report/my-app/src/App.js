import { useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import Question from './components/question';
import Answer from './components/answerselect';
import AnswerWrite from './components/answerwrite';
import AnswerList from './components/answerlist';
import Footer from './components/footer';
import './App.css';

function App() {
  const [page, setPage] = useState('main');
  const [questions, setQuestions] = useState([]); // 질문 목록
  const [selectedQuestion, setSelectedQuestion] = useState(null); // 선택된 질문

  return (
    <div className="App">
      <Header setPage={setPage} />
      {page === 'main' && <Main setPage={setPage} />}
      {page === 'question' && (
        <Question setPage={setPage} questions={questions} setQuestions={setQuestions} />
      )}
      {page === 'answer' && (
        <Answer
          setPage={setPage}
          questions={questions}
          selectedQuestion={selectedQuestion} // 부모에서 선택된 질문 전달
          setSelectedQuestion={setSelectedQuestion}
        />
      )}
      {page === 'answerwrite' && (
        <AnswerWrite
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
          questions={questions}
          setQuestions={setQuestions}
          setPage={setPage}
        />

      )}
      {page === 'answerlist' && (
        <AnswerList
          selectedQuestion={selectedQuestion}
          setPage={setPage}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
