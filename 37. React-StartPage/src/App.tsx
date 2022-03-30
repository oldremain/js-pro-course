import './App.scss';
import Header from './Component/Header/Header';
import HeaderBody from './Component/HeaderBody/HeaderBody';

function App() {
  return (
    <>
      <header>
        <div className="container">
          <Header />
          <HeaderBody />
        </div>
      </header>
      <section>
        <div className="container"></div>
      </section>
    </>
  );
}

export default App;
