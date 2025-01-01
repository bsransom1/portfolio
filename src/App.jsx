import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProjectPage from './components/projects/ProjectPage';
import Background from './components/Background';

function App() {
  return (
    <Router>
      <Background />
      <div className="relative min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;