import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
