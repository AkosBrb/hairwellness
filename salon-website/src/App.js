import './App.css';
import HeaderBlur from './Background/HeaderBlur';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  return (
    <div className="background">
      <HeaderBlur />
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App;
