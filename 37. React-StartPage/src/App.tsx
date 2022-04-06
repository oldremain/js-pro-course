import React from 'react';
import Header from './Component/Header/Header';
import Posts from './Component/Posts/Posts';
import Form from './Component/Registration/Form';

import './App.scss';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Posts />
      <Form />
    </>
  );
};

export default App;
