import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Domain from './components/Domain';
import Faqs from './components/Faqs'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Timeline from './components/Timeline';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className='App'>
      {loading &&<Loader setLoading={setLoading} />}
      <Menu />
      <Hero />
      <About />
      <div id="about-domain"></div>
      <Domain />
      <Prizes />
      <Timeline />
      <Sponsors />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
