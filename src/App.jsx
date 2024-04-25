import { MyHeader } from './components/MyHeader/MyHeader';
import './App.css';
import { MyFooter } from './components/MyFooter/MyFooter';

function App({ children }) {
  return (
    <div className="App">
      <MyHeader />
      <main className="content">{children}</main>
      <MyFooter />
    </div>
  );
}

export default App;
