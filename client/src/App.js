import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Add from './pages/Add';
import Header from './components/Header';
import Update from './pages/Update';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
