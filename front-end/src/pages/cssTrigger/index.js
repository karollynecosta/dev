import React from 'react';

import api from '../../services/api';

import { Container, Button } from './styles';

function cssTrigger() {
  return (
    <>
      <Container className="lista-perguntas">
        <h1>Perguntas?</h1>

        <div className="lista-item">
          <input type="checkbox" className="trigger-input" id="faq-titulo-1" />
          <div className="trigger-conteudo">
            <label htmlFor="faq-titulo-1">
              <h2 className="titulo">Div?</h2>
            </label>
            <p className="faq-conteudo">SIm, esta usando DIV + input + label</p>
          </div>
        </div>

        <div className="lista-item">
          <input type="checkbox" className="trigger-input" id="faq-titulo-2" />
          <div className="trigger-conteudo">
            <label htmlFor="faq-titulo-2">
              <h2 className="titulo">Aplicar?</h2>
            </label>
            <p className="faq-conteudo">SIm, de certo</p>
          </div>
        </div>

        <div className="lista-item">
          <input type="checkbox" className="trigger-input" id="faq-titulo-3" />
          <div className="trigger-conteudo">
            <label htmlFor="faq-titulo-3">
              <h2 className="titulo">Css trigger?</h2>
            </label>
            <p className="faq-conteudo">
              SIm, vou pesquisar o que significa ainda... usando DIV + input +
              label. Segredo: .trigger-input:checked <b>+</b> .trigger-conteudo
              .faq-conteudo display: block; esse + é condicional para fazer esse
              efeito com duas div
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default cssTrigger;
