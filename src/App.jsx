import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import TechnologyDirectory from './components/TechnologyDirectory';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadTechnologies() {
      try {
        setIsLoading(true);
        const response = await fetch('/data/technologies.json', { signal: controller.signal });
        if (!response.ok) throw new Error('Technology data could not be loaded.');

        const data = await response.json();
        setTechnologies(data);
        setError('');
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError('We could not load the technology catalog. Please refresh and try again.');
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    loadTechnologies();
    return () => controller.abort();
  }, []);

  const handleAdd = (technology) => {
    if (selectedTechnologies.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (technologyId) => {
    const technology = selectedTechnologies.find((item) => item.id === technologyId);
    setSelectedTechnologies((current) => current.filter((item) => item.id !== technologyId));
    if (technology) toast.info(`${technology.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <TechnologyDirectory
          technologies={technologies}
          isLoading={isLoading}
          error={error}
          selectedTechnologies={selectedTechnologies}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2600}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
        toastClassName="devstack-toast"
      />
    </>
  );
}

export default App;
