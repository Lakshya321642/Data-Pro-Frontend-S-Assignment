import React from 'react';
import './Mycard.css';

const Mycard = (props) => {
  return (
    <div className="my-card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      Mycard No. {props.cardno}
    </div>
  );
};

export default Mycard;
