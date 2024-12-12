import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

/**
 * Root application component
 * Wraps the app with necessary providers and renders the main layout
 */
function App() {
  document.title = "Hartha's portfolio"
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;