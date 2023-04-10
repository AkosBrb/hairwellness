import './App.css';
import HeaderBlur from './Background/HeaderBlur';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <>
      <div className="header--background">
        <Header />
      </div>
      <div className="main--background">
        <Main />
      </div>
    </>
  )
}

export default App;
