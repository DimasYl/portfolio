import React from 'react';
import './App.css';
import Header from './components/01_header/Header';
import {Main} from "./components/02_main/Main";
import {MyWorks} from './components/04_myWorks/MyWorks';
import {Hiring} from "./components/05_hiring/Hiring"
import {Footer} from "./components/07_footer/Footer"
import {Skills} from './components/03_skills/Skills';




function App() {
  const grh =  <hr color={'gray'} style={{margin:0}} />
  return (
      <div>
        <Header/>
          <Main/>
       {grh}
        <Skills />
        {grh}
        <MyWorks />
        {grh}
        <Hiring />
        {grh}
        <Footer/>
      </div>
  );
}

export default App;
