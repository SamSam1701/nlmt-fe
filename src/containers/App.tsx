import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routers from '../routers';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
