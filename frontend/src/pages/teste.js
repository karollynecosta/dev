import React, { useState } from 'react';

// import { Container } from './styles';

import Modal from '../components/Modal';

function Teste() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsModalVisible(true)}>Open</button>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>
          <h2>Modal APP</h2>
          <p>Texto da modal</p>
        </Modal>
      ) : null}
    </div>
  );
}

export default Teste;
