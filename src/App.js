import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './styles/styles.scss';

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>footer</footer>
    </div>
  );
};

export default App;
