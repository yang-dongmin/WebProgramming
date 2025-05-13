import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NameList from './chapter_10/NameList';
import UserList from './chapter_10/UserList';
import AttendanceBook from './chapter_10/AttendanceBook';
import NameForm from './chapter_11/NameForm';
import SimpleForm from './chapter_11/SimpleFrom';
import RequestForm from './chapter_11/RequestForm';
import FruitSelect from './chapter_11/FruitSelect';
import Reservation from './chapter_11/Reservation';
import MultiInputForm from './chapter_11/MultiInputForm';
import AdvancedForm from './chapter_11/AdvancedForm';
import UncontrolledForm from './chapter_11/UncontrolledForm';
import SignUp from './chapter_11/SignUp';
import Parent1 from './chapter_12/Parent1';
import Parent2 from './chapter_12/Parent2';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
