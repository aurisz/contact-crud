import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// Creates a portal outside the DOM hierarchy
const Portal = ({ children }) => {
  const modalRoot = document.getElementById('modal'); // A div with id=modal in the index.html
  const [element] = useState(document.createElement('div')); // Create a div element which will be mounted within modal-root

  useEffect(() => {
    modalRoot.appendChild(element);

    // cleanup method to remove the appended child
    return function cleanup() {
      modalRoot.removeChild(element);
    };
  }, [modalRoot, element]);

  return createPortal(children, element);
};

// A modal component which will be used by other components / pages
const Modal = ({ children, toggle, open }) => (
  <Portal>
    {open && (
      <div className="modal-wrapper" onClick={toggle}>
        <div className="modal-body" onClick={event => event.stopPropagation()}>
          {children}
        </div>
      </div>
    )}
  </Portal>
);

Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
