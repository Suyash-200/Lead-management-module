const TextInput = ({
  inputName = "",
  inputId = "",
  handleChange = () => {},
  regex = "",
  inputValue = "",
  placeholder = "",
  isLoading,
}) => {
  return (
    <input
      type="text"
      name={inputName}
      id={inputId}
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={isLoading}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
    />
  );
};
export default TextInput;
