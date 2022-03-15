import About from '../components/About';
import Hero from '../components/Hero';
import Interested from '../components/Interested';

const Home = () => {
  return (
    <div className="container">
      <main className="home">
        <Hero />
        <About />
        <Interested />
      </main>
    </div>
  );
};

export default Home;
