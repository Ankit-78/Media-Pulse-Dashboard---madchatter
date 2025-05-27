const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="flex justify-between items-center p-6 shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-3xl font-bold tracking-tight">🧠 MediaPulse</h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-lg"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
