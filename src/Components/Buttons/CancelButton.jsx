const CancelButton = ({ isLoading, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
