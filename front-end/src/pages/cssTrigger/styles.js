import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #e0e0eb;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 80px auto;

  h1 {
    text-align: center;
    font-size: 20px;
    color: #6b7c93;
    margin: 10px 0 40px 0;
    font-family: sans-serif;
    text-transform: uppercase;
  }

  .lista-perguntas {
    max-width: 400px;
    margin: 0 auto;
  }

  .lista-item {
    background: white;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: 0 2px 6px rgba(50, 50, 90, 0.1);
  }

  .titulo {
    cursor: pointer;
    padding: 10px;
    font-size: 1.4em;
    font-family: monospace;
    color: #8f6ed5;
  }

  .titulo::before {
    content: '';
    display: inline-block;
    height: 12px;
    width: 24px;
    margin-right: 10px;
    background: #beb0f4;
  }

  .titulo::after {
    content: '+';
    float: right;
    transition: transform 0.3s ease;
    color: black;
  }

  .faq-conteudo {
    padding: 10px;
    color: #6b7c93;
    font-family: Helvetica;
    font-size: 0.875em;
    line-height: 1.4em;
    display: none;
  }

  .trigger-input {
    display: none;
  }

  .trigger-input:checked + .trigger-conteudo .faq-conteudo {
    display: block;
  }

  .trigger-input:checked + .trigger-conteudo .titulo::after {
    transform: rotate(45deg) scale(1.08);
    color: red;
  }
`;
