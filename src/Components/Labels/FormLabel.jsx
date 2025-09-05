const FormLabel = ({ label, htmlFor, required = false }) => {
  return (
    <label
      className="block text-sm font-semibold text-gray-700 text-left"
      htmlFor={htmlFor}
    >
      {label} {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default FormLabel;
