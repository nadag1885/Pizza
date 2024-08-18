import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

// Backdrop component
const Backdrop = ({ show, onClose }) => {
  return (
    <div
      className={`${styles.Backdrop} ${show ? '' : styles.hide}`}
      onClick={onClose} // Close modal when clicking on backdrop
    ></div>
  );
};

// Overlay component
const Overlay = ({ show, onClose }) => (
  <div className={`${styles.Overlay} ${show ? '' : styles.hide}`}>
    <button className={styles.close} onClick={onClose}>X</button>
    <div className={styles.done}>✔</div>
    <div>Done..!</div>
  </div>
);

// Modal component
const Modal = ({ show, onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop show={show} onClose={onClose} />
          <Overlay show={show} onClose={onClose} />
        </Fragment>,
        document.getElementById('modal') // Ensure this element exists in your HTML
      )}
    </Fragment>
  );
};

export default Modal;
