import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-5 w-100">
      <div className="container">
        <h1 className="display-4">Felipe Trajano</h1>
        <p className="lead">Desenvolvedor Python / Django / React</p>
        <div className="mt-4">
          <a href="https://github.com/ftrajano" className="text-white me-3">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ftrajano/" className="text-white me-3">
            <Linkedin size={24} />
          </a>
          <a href="mailto:ftrajano@gmail.com" className="text-white">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;