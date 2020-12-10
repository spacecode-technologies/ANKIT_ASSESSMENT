import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { useProductModalStyles } from '../style';
import ProductView from '../views/ProductView'

function ProductModal() {
  const navigate = useNavigate();
  const classes = useProductModalStyles();

  return (
    <>
      <Modal
        isOpen
        ariaHideApp={false}
        overlayClassName={classes.overlay}
        onRequestClose={() => navigate('/inventory')}
        style={{
          content: {
            // display: 'flex',
            // alignItems: 'center',
            maxWidth: 1200,
            height:'80vh',
            width: '100%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            margin: 0,
            padding: 0,
            overflow: 'none',
            WebkitOverflowScrolling: 'touch',
          },
        }}>
        <ProductView/>
      </Modal>
      
    </>
  );
}

export default ProductModal;
