import React from 'react';

import { Container } from './styles';

function cssTrigger() {
  return (
    <>
      <Container className="lista-perguntas">
        <h1>Perguntas?</h1>

        <div className="lista-item">
          <input type="checkbox" className="trigger-input" id="faq-titulo-1" />
          <div className="trigger-conteudo">
            <label htmlFor="faq-titulo-1">
              <h2 className="titulo">Css Puro?</h2>
            </label>
            <p className="faq-conteudo">
              Sim, esta página está usando DIV + input + label com operador
              lógico
            </p>
          </div>
        </div>

        <div className="lista-item">
          <input type="checkbox" className="trigger-input" id="faq-titulo-2" />
          <div className="trigger-conteudo">
            <label htmlFor="faq-titulo-2">
              <h2 className="titulo">
                Ainda é vantajoso utilizar o CSS sem frameworks?
              </h2>
            </label>
            <p className="faq-conteudo">
              Sim, de certo. O CSS avançou em larga escala, chegando em um ponto
              que ajuda na verbosidade, como é o caso desta pág.
            </p>
          </div>
        </div>

        <div className="lista-item">
          <input type="checkbox" className="trigger-input" id="faq-titulo-3" />
          <div className="trigger-conteudo">
            <label htmlFor="faq-titulo-3">
              <h2 className="titulo">Css trigger?</h2>
            </label>
            <p className="faq-conteudo">
              SIm, usando DIV + input + label. Segredo: .trigger-input:checked{' '}
              <b>+</b> .trigger-conteudo .faq-conteudo display: block; esse + é
              condicional para fazer esse efeito com duas div
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default cssTrigger;
