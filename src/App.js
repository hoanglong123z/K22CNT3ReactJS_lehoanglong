import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lớp: <code>Tài Xỉu 1 Ăn 10</code>Hãy Đến Đây với tôi.
        </p>
        <a
          className="App-link"
          href="https://15.235.202.240"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ấn Vào Đây Để Giàu
        </a>
      </header>
    </div>
  );
}

export default App;
