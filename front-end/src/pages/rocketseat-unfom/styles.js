import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  height: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }

  .hidden {
    display: none;
  }

  input {
    display: block;
  }
`;

export const Form = styled.form`
  h1 {
    border-radius: 5px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  form img {
    height: 80px;
    align-self: center;
    margin-bottom: 30px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    align-self: center;
  }

  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
  }

  input:focus {
    border-color: #111;
  }

  select {
    width: 100%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
  }
  select:focus {
    border-color: #111;
  }

  button {
    display: block;
    background: #111;
    color: #fff;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #009933;
  }
`;
