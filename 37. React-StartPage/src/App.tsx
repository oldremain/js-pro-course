import React from 'react';
import Header from './Component/Header/Header';
import HeaderBody from './Component/HeaderBody/HeaderBody';
import Posts from './Component/Posts/Posts';
import Form from './Component/Form/Form';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <header className="Header">
        <div className="container">
          <Header />
          <HeaderBody />
        </div>
      </header>
      <section className="Posts">
        <Posts />
      </section>
      <section className="Form">
        <div className="container">
          <Form />
        </div>
      </section>
    </>
  );
};

export default App;
