const ResetButton = ({ isLoading, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="px-6 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Reset
    </button>
  );
};

export default ResetButton;
