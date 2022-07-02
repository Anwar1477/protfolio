import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
// import { Routes } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Footer from './Shared/Footer';
import { ToastContainer } from 'react-toastify';
import Skills from './components/Home/Skills';
import MyProject from './components/Home/MyProject';
import Contact from './components/Home/Contact';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/skills" element={<Skills></Skills>} />
        <Route></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
