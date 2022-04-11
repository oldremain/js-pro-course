import React, { useState } from 'react';
import Header from './Component/Header/Header';
import Posts from './Component/Posts/Posts';
import Form from './Component/Registration/Registration';

import './App.scss';
import PostsContext from './contexts/PostsContext';

const App: React.FC = () => {
  const [postCount, setCount] = useState(0);

  return (
    <PostsContext.Provider value={{ postCount, setCount }}>
      <Header />
      <Posts />
      <section className="Form">
        <div className="container">
          <Form />
        </div>
      </section>
    </PostsContext.Provider>
  );
};

export default App;
