import React, { useState } from "react";
import { TbAB } from "react-icons/tb";
import { CiDark, CiLight } from "react-icons/ci";
import LetterCounter from "./components/LetterCounter";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 ease-in-out
        ${
          isDarkMode
            ? "bg-gradient-to-b from-stone-900 to-stone-800 text-stone-100"
            : "bg-gradient-to-b from-stone-100 to-stone-200 text-stone-800"
        }`}
    >
      <div className="h-screen overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <nav className="flex items-center justify-between py-6 mb-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <TbAB className="text-4xl text-purple-500 hover:text-purple-400 transition-colors duration-200" />
              <span className="text-xl font-bold tracking-tight">TextAnalyzer</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-full transition-all duration-300 ease-in-out
                ${
                  isDarkMode
                    ? "bg-stone-700 hover:bg-stone-600"
                    : "bg-stone-300 hover:bg-stone-400"
                }
                transform hover:scale-110 active:scale-95 focus:outline-none
                focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <CiDark className="text-2xl text-yellow-400" />
              ) : (
                <CiLight className="text-2xl text-orange-500" />
              )}
            </button>
          </nav>

          {/* Main Content */}
          <div className="pb-12">
            <LetterCounter isDarkMode={isDarkMode} />
          </div>

          {/* Footer */}
          <footer className="py-6 text-center text-sm text-stone-500 dark:text-stone-400">
            <p>© 2024 TextAnalyzer. All rights reserved.</p>
          </footer>
        </main>
      </div>

      {/* Optional: Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 opacity-20
          ${isDarkMode ? "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]" : ""}
          from-purple-500/20 via-transparent to-transparent`}>
        </div>
      </div>
    </div>
  );
};

export default App;
