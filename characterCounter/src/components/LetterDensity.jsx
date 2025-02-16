import React from "react";

const LetterDensity = ({
  letterDensityData,
  displayLetters,
  ShowAllLetters,
  setShowAllLetters,
}) => {
  return (
    <div className="bg-white dark:bg-stone-900 shadow-xl rounded-xl p-8 transition-all duration-300 ease-in-out hover:shadow-2xl border border-stone-100 dark:border-stone-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-stone-800 dark:text-stone-100 tracking-tight">
        Letter Density
      </h2>

      {letterDensityData.length > 0 ? (
        <div className="mt-6 overflow-x-auto">
          {/* Table Header */}
          <div className="flex items-center p-3 font-bold border-b-2 border-stone-200 dark:border-stone-700 mb-4 text-stone-700 dark:text-stone-300">
            <span className="w-16 text-left">Letter</span>
            <span className="flex-1 ml-4">Distribution</span>
            <span className="ml-6 w-20 text-right">Count</span>
            <span className="ml-6 w-24 text-right">Percentage</span>
          </div>

          {/* Letter Density List */}
          <div className="space-y-3">
            {displayLetters.map(({ letter, count, percentage }) => (
              <div
                key={letter}
                className="flex items-center p-3 rounded-lg bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-750 transition-all duration-200 ease-in-out"
              >
                <span className="w-16 text-center font-semibold text-lg text-stone-800 dark:text-stone-200">
                  {letter}
                </span>
                <div className="ml-4 flex-1 bg-purple-100 dark:bg-purple-900/50 rounded-full h-6 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-full h-full transition-all duration-300 ease-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="ml-6 w-20 text-right font-medium text-stone-700 dark:text-stone-300">
                  {count}
                </span>
                <span className="ml-6 w-24 text-right font-medium text-stone-700 dark:text-stone-300">
                  {percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-lg text-center text-stone-500 dark:text-stone-400 italic">
          No characters detected.
        </p>
      )}

      {/* Toggle Button */}
      {letterDensityData.length > 5 && (
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg
            hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 
            focus:ring-opacity-50 transform transition-all duration-200 ease-in-out hover:scale-105 
            active:scale-95 shadow-md hover:shadow-lg"
            onClick={() => setShowAllLetters(!ShowAllLetters)}
          >
            {ShowAllLetters ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default LetterDensity;
