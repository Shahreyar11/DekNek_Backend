import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, Link } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Features from './pages/features';
import About from './pages/about';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
      Welcome to <span className="text-emerald-600">DekNek</span>
    </h1 >
    <p className="text-lg text-gray-600 max-w-2xl mb-8">
      The smart way to manage your workspace. Join thousands of users today.
    </p>
    <div className="flex space-x-4">
      <Link to="/signup" className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all">
        Get Started
      </Link>
      <Link to="/about" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all">
        Learn More
      </Link>
    </div>
  </div>
);

const App = () => {
  return (
    
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default App;
