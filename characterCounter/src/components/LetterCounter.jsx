import React, { useState } from "react";
import Counter from "./Counter";
import { TfiClip, TfiComment } from "react-icons/tfi";
import { GrBlockQuote } from "react-icons/gr";
import LetterDensity from "./LetterDensity";

const LetterCounter = ({ isDarkMode }) => {
  const [text, setText] = useState("");
  const [ExcludeSpace, setExcludeSpace] = useState(false);
  const [limit, setLimit] = useState(null);
  const [ShowAllLetters, setShowAllLetters] = useState(false);

  const processText = () => {
    let currentText = text || "";
    if (ExcludeSpace) currentText = currentText.replace(/\s/g, "");
    if (typeof limit === "number" && limit > 0) {
      currentText = currentText.slice(0, limit);
    }
    return currentText;
  };

  const CharCount = () => processText().length;

  const wordCount = () => {
    return processText()
      .split(/\s+/)
      .filter((word) => word !== "").length;
  };

  const sentencesCount = () => {
    return processText()
      .split(/[.?!]/)
      .filter((s) => s.trim() !== "").length;
  };

  const letterDensity = () => {
    const Counts = {};
    const processed = processText().toUpperCase();
    for (const char of processed) {
      if (/[A-Z]/.test(char)) {
        Counts[char] = (Counts[char] || 0) + 1;
      }
    }
    const total = Object.values(Counts).reduce((sum, e) => sum + e, 0);
    return Object.entries(Counts).map(([letter, count]) => ({
      letter,
      count,
      percentage: total > 0 ? ((count / total) * 100).toFixed(2) : "0",
    }));
  };

  const processedLetterDensity = letterDensity(); // Call the function here once
  const displayLetters = ShowAllLetters
    ? processedLetterDensity
    : processedLetterDensity.slice(0, 5);

  return (
    <section>
      <h1 className="text-4xl font-bold text-center my-8">
        Analyze Your Text in Real Time
      </h1>
      <textarea
        className={`${
          isDarkMode ? "text-stone-200" : "text-stone-700"
        } w-full h-48 p-2 border-2 rounded-xl resize-none focus:outline-none`}
        placeholder="Analyze your text in Real Time.."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-4 flex items-center justify-between">
        <label className="flex justify-center items-center">
          <span>Exclude Space</span>
          <input
            type="checkbox"
            className="form-checkbox ml-2"
            checked={ExcludeSpace}
            onChange={(e) => setExcludeSpace(e.target.checked)}
          />
        </label>
        <label className="flex justify-center items-center mr-2">
          <span>Character Limit</span>
          <input
            onChange={(e) =>
              setLimit(e.target.value ? parseInt(e.target.value, 10) : null)
            }
            value={limit ?? ""}
            placeholder="limit"
            type="number"
            className={`${
              isDarkMode ? "bg-stone-900" : "bg-transparent"
            } ml-2 border px-2 py-1 rounded-md focus:outline-none w-30`}
          />
        </label>
        <div>Read Time: &lt; 1 minute</div>
      </div>
      <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-stone-900 overflow-hidden">
        <div className="bg-purple-500 rounded shadow-md flex justify-between">
          <Counter title="Total Characters" value={CharCount()} />
          <TfiClip className="h-30 m-4 text-white w-30" />
        </div>
        <div className="bg-purple-500 rounded shadow-md flex justify-between">
          <Counter title="Word Counter" value={wordCount()} />
          <TfiComment className="h-30 m-4 text-white w-30" />
        </div>
        <div className="bg-purple-500 rounded shadow-md flex justify-between">
          <Counter title="Sentence Counter" value={sentencesCount()} />
          <GrBlockQuote className="h-30 m-4 text-white w-30" />
        </div>
      </div>
      <LetterDensity
        letterDensityData={processedLetterDensity} // Pass the already processed array
        displayLetters={displayLetters} // Pass the correct letter slice
        ShowAllLetters={ShowAllLetters}
        setShowAllLetters={setShowAllLetters}
      />
    </section>
  );
};

export default LetterCounter;
