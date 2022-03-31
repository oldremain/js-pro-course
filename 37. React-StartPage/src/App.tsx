import './App.scss';
import Header from './Component/Header/Header';
import HeaderBody from './Component/HeaderBody/HeaderBody';
import Posts from './Component/Posts/Posts';

function App() {
  return (
    <>
      <header className="Header">
        <div className="container">
          <Header />
          <HeaderBody />
        </div>
      </header>
      <section className="Posts">
        <div className="container">
          <Posts />
        </div>
      </section>
    </>
  );
}

export default App;
