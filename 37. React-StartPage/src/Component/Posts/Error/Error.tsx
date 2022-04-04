import { useState } from 'react';
import './Error.scss';

const Error = (props: { name: string; message: string }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="Error" style={{ display: visible ? 'flex' : 'none' }}>
        <div className="Error-title">{props.name}</div>
        <div className="Error-text">{props.message}</div>
        <button
          className="Error-btn"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          Ok
        </button>
      </div>
    </>
  );
};

export default Error;
