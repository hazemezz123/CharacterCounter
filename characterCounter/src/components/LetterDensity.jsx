import React from "react";

const LetterDensity = ({
  letterDensityData,
  displayLetters,
  ShowAllLetters,
  setShowAllLetters,
  isDarkMode,
}) => {
  return (
    <div
      className={`${
        isDarkMode
          ? "bg-stone-900 border-stone-800"
          : "bg-white border-stone-100"
      } shadow-xl rounded-xl p-8 transition-all duration-300 ease-in-out hover:shadow-2xl border`}
    >
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
        Letter Density
      </h2>

      {letterDensityData.length > 0 ? (
        <div className="mt-6 overflow-x-auto">
          {/* Table Header */}
          <div
            className={`flex items-center p-3 font-bold border-b-2 ${
              isDarkMode
                ? "border-stone-700 text-stone-300"
                : "border-stone-200 text-stone-700"
            } mb-4`}
          >
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
                className={`flex items-center p-3 rounded-lg transition-all duration-200 ease-in-out ${
                  isDarkMode
                    ? "bg-stone-800/50 hover:bg-stone-800 text-stone-200"
                    : "bg-stone-50 hover:bg-stone-100 text-stone-800"
                }`}
              >
                <span className="w-16 text-center font-semibold text-lg">
                  {letter}
                </span>
                <div
                  className={`ml-4 flex-1 rounded-full h-6 overflow-hidden ${
                    isDarkMode ? "bg-purple-900/30" : "bg-purple-100"
                  }`}
                >
                  <div
                    className={`h-full transition-all duration-300 ease-out ${
                      isDarkMode
                        ? "bg-gradient-to-r from-purple-400 to-purple-500"
                        : "bg-gradient-to-r from-purple-500 to-purple-600"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span
                  className={`ml-6 w-20 text-right font-medium ${
                    isDarkMode ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  {count}
                </span>
                <span
                  className={`ml-6 w-24 text-right font-medium ${
                    isDarkMode ? "text-stone-300" : "text-stone-700"
                  }`}
                >
                  {percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p
          className={`text-lg text-center italic ${
            isDarkMode ? "text-stone-400" : "text-stone-500"
          }`}
        >
          No characters detected.
        </p>
      )}

      {/* Toggle Button */}
      {letterDensityData.length > 5 && (
        <div className="flex justify-center mt-6">
          <button
            className={`px-6 py-2.5 text-white font-semibold rounded-lg
            transform transition-all duration-200 ease-in-out hover:scale-105 
            active:scale-95 shadow-md hover:shadow-lg
            ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600"
                : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
            }
            focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50`}
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
