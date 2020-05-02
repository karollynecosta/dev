import React, { useRef, useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import api from '../../services/api';

import { Container, Form } from './styles';

function Unform() {
  const formRef = useRef(null);
  const [heroes, setHeroes] = useState([]);
  const [selectHeroes, setSelectHeroes] = useState(null);
  const [player, setPlayer] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(data, { reset }) {
    // const response = await api.post("/players", {
    //   title: "Desafio ReactJS",
    //   url: "http://github.com/",
    //   techs: ["Reactjs"],
    // });
    // const repositories = response.data;
    // setRepository([...repository, repositories]);
    // console.log(repositories);
  }

  useEffect(() => {
    async function loadHeroes() {
      const response = await api.get('/heroes');
      setHeroes(response.data);
    }
    loadHeroes();
  });

  return (
    <>
      <Container>
        <h1>API Dota 2</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <label>Player</label>
          <input
            type="text"
            name="player"
            placeholder="nickname"
            onChange={(e) => setPlayer(e.target.value)}
            value={player}
          />
          <label>Selecione seu Hero</label>
          <select
            type="select"
            id="pickHero"
            name="heroSelect"
            className="heroSelect"
            onChange={(event) => setSelectHeroes(event.target.value)}
            value={selectHeroes}
          >
            <option value="default">Selecione um Herói</option>
            {heroes.map((her, index) => (
              <option key={index} value={her.localized_name}>
                {her.localized_name}
              </option>
            ))}
          </select>

          <Button variant="primary" onClick={handleShow}>
            Go
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirme seu Hero</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Seu nome: <b>{player}</b>, seu Hero:<b>{selectHeroes}</b>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Container>
    </>
  );
}

export default Unform;
