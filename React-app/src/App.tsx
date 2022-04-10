import React from 'react';
import Header from './Component/Header/Header';
import Posts from './Component/Posts/Posts';
import Form from './Component/Registration/Registration';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Posts />
      <section className="Form">
        <div className="container">
          <Form />
        </div>
      </section>
    </>
  );
};

export default App;
