import React from 'react';
import { Code, Server, Database } from 'lucide-react';

const Skills = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Minhas Habilidades</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <Code size={48} className="text-primary mb-3" />
                <h3 className="card-title h5">Frontend</h3>
                <p className="card-text">React, JavaScript, HTML5, CSS3, Responsive Design</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <Server size={48} className="text-primary mb-3" />
                <h3 className="card-title h5">Backend</h3>
                <p className="card-text">Python, Django, RESTful APIs, Web Services</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <Database size={48} className="text-primary mb-3" />
                <h3 className="card-title h5">Banco de Dados</h3>
                <p className="card-text">PostgreSQL, MySQL, MongoDB, Redis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;