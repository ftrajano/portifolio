import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Form from './components/Form';
import Separator from './components/Separator';
import './styles/global.css';


const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <About />
		{/* <Separator/> */}
        <Skills />
		{/* <Separator /> */}
        <Projects />
        <Contact />
		<Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;
