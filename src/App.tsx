import AppRouter from './router';
import { HelmetProvider } from 'react-helmet-async'; // For SEO
import './App.css';

function App() {
  return (
    <HelmetProvider>
       <AppRouter />
    </HelmetProvider>
  );
}

export default App;