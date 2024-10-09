import React from 'react';

const Projects = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projetos em Destaque</h2>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">Nome do Projeto 1</h3>
                <p className="card-text">Uma breve descrição do projeto, destacando as principais tecnologias utilizadas e o impacto alcançado.</p>
                <a href="#" className="btn btn-primary">Ver Projeto</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">Nome do Projeto 2</h3>
                <p className="card-text">Outra descrição de projeto, enfatizando os desafios superados e as soluções implementadas.</p>
                <a href="#" className="btn btn-primary">Ver Projeto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;