import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Podcast from './components/Podcast';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Podcast />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
