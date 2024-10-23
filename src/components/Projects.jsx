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
                <h3 className="card-title h5">Matematique API</h3>
                <p className="card-text">Uma API REST desenvolvida em Django REST Framework para gerenciar questões matemáticas, facilitando o acesso e organização de problemas matemáticos para estudantes e professores.
				</p>
                <a href="https://github.com/ftrajano/matematique_api" className="btn btn-primary">Ver Projeto</a>
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