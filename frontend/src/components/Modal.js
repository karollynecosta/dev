import React from 'react';

// import { Container } from './styles';

const Modal = ({ id = 'modal', onClose = () => {}, children }) => {
  const renderOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    <div id={id} className="App" onClick={renderOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
