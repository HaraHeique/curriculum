import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import { useDocumentTitle } from './hooks/useDocumentTitle';

import MainLayout from './pages/@Layouts/MainLayout';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum/Curriculum';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact/Contact';

import Navbar from './components/Navbar';

const App = () => {
  useDocumentTitle();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<MainLayout />}>
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
};

export default App;
