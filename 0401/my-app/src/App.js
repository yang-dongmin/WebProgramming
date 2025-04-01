import React from 'react';
import Header from './report/Header';
import Sidebar from './report/Sidebar';
import MainContent from './report/MainContent';
import Footer from './report/Footer';

const App = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <MainContent />
    </div>
    <Footer />
  </div>
);

export default App;
