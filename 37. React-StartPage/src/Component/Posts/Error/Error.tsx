import React, { useState } from 'react';

import './Error.scss';

type PropsType = {
  name: string;
  message: string;
};

const Error: React.FC<PropsType> = (props) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="Error" style={{ display: visible ? 'flex' : 'none' }}>
        <div className="Error-title">{props.name}</div>
        <div className="Error-text">{props.message}</div>
        <button
          className="Error-btn"
          onClick={() => {
            setVisible((prevState) => !prevState);
          }}
        >
          Ok
        </button>
      </div>
    </>
  );
};

export default Error;
