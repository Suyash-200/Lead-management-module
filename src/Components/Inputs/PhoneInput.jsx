import { DIGITSREGEX } from "../../Utils/Constants";
import { checkRegex } from "../../Utils/Helper";

const PhoneInput = ({
  inputId = "",
  handleChange = () => {},
  inputValue = "",
  placeholder = "",
  isLoading,
  inputName,
}) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    const isValidValue = checkRegex(DIGITSREGEX, value);
    if (isValidValue) {
      handleChange(e);
    }
  };

  return (
    <input
      type="tel"
      name={inputName}
      id={inputId}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      disabled={isLoading}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
      maxLength={10}
    />
  );
};
export default PhoneInput;
