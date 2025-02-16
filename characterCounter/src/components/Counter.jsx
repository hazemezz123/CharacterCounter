// With PropTypes for better development experience
import PropTypes from "prop-types";

const Counter = ({ title, value }) => {
  return (
    <div className="px-6 py-6 text-white hover:scale-105 transition-all duration-300">
      <div className="flex flex-col space-y-2 relative">
        {/* Optional loading skeleton */}
        {value === undefined ? (
          <div className="animate-pulse">
            <div className="h-16 w-24 bg-white/20 rounded" />
            <div className="h-6 w-20 bg-white/20 rounded mt-2" />
          </div>
        ) : (
          <>
            <p className="text-6xl font-bold tracking-tight animate-in">
              {value.toLocaleString()}
            </p>
            <p className="text-lg font-medium opacity-90 whitespace-nowrap">
              {title}
            </p>
            <div className="w-16 h-1 bg-white/30 rounded-full" />
          </>
        )}
      </div>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Counter;
