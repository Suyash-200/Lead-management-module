import { useState } from "react";
import { useLoading } from "./store/LoadingContext";
import { checkRegex } from "./Utils/Helper";
import { EMAILREGEX, PHONENOREGEX } from "./Utils/Constants";
import FormLabel from "./Components/Labels/FormLabel";
import EmailInput from "./Components/Inputs/EmailInput";
import PhoneInput from "./Components/Inputs/PhoneInput";
import TextInput from "./Components/Inputs/TextInput";
import ResetButton from "./Components/Buttons/ResetButton";
import SaveButton from "./Components/Buttons/SaveButton";
import CancelButton from "./Components/Buttons/CancelButton";
import { toastError, toastSuccess } from "./Components/Toast/ToastService";
import { createLead } from "./services/api";
const CreateLeadModal = ({ isOpen, onClose, onLeadCreated }) => {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const initialFormData = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    if (!formData.firstName) {
      toastError("First Name is required");
      return false;
    }
    if (!formData.lastName) {
      toastError("Last Name is required");
      return false;
    }
    if (!formData.email) {
      toastError("Email is required");
      return false;
    }
    if (!checkRegex(EMAILREGEX, formData.email)) {
      toastError("Invalid Email");
      return false;
    }
    if (!formData.phone) {
      toastError("Phone No is required");
      return false;
    }
    if (!checkRegex(PHONENOREGEX, formData.phone)) {
      toastError("Invalid Phone No (10 digits required)");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!validate()) return;
      startLoading();
      const uniqueId = Date.now().toString() + Math.floor(Math.random() * 1000);
      const leadData = { ...formData, status: "NEW", id: uniqueId };

      await createLead(leadData);

      toastSuccess("Lead created successfully");

      setFormData({ ...initialFormData });
      onClose();

      if (onLeadCreated) {
        onLeadCreated();
      }
    } catch (error) {
      toastError(error.message || "Failed to create lead");
    } finally {
      stopLoading();
    }
  };

  const handleReset = () => {
    setFormData({ ...initialFormData });
  };

  const handleClose = () => {
    if (!isLoading) {
      setFormData({ ...initialFormData });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={handleClose}
    >
      {/* Modal Container */}
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto 
        transform transition-all duration-300 ease-out
        ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-6 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Create New Lead
            </h2>
            <button
              onClick={handleClose}
              disabled={isLoading}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 disabled:opacity-50"
            >
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-6">
          <div className="space-y-6">
            {/* First Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <FormLabel
                label="First Name"
                htmlFor="firstName"
                required="required"
              ></FormLabel>
              <div className="md:col-span-2">
                <TextInput
                  inputName="firstName"
                  inputId="firstName"
                  inputValue={formData.firstName}
                  placeholder="Enter First Name"
                  isLoading={isLoading}
                  handleChange={handleInputChange}
                ></TextInput>
              </div>
            </div>

            {/* Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <FormLabel
                label="Last Name"
                htmlFor="lastName"
                required="required"
              ></FormLabel>
              <div className="md:col-span-2">
                <TextInput
                  inputName="lastName"
                  inputId="lastName"
                  inputValue={formData.lastName}
                  placeholder="Enter Last Name"
                  isLoading={isLoading}
                  handleChange={handleInputChange}
                ></TextInput>
              </div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <FormLabel
                label="Email"
                htmlFor="email"
                required="required"
              ></FormLabel>
              <div className="md:col-span-2">
                <EmailInput
                  inputName="email"
                  inputId="email"
                  inputValue={formData.email}
                  placeholder="Enter Email"
                  isLoading={isLoading}
                  handleChange={handleInputChange}
                ></EmailInput>
              </div>
            </div>

            {/* Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <FormLabel
                label="Phone No"
                htmlFor="phone"
                required="required"
              ></FormLabel>
              <div className="md:col-span-2">
                <PhoneInput
                  inputName="phone"
                  inputId="phone"
                  inputValue={formData.phone}
                  placeholder="Enter Phone No"
                  isLoading={isLoading}
                  handleChange={handleInputChange}
                ></PhoneInput>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-200 mt-6">
            <ResetButton
              isLoading={isLoading}
              handleClick={handleReset}
            ></ResetButton>
            <CancelButton
              isLoading={isLoading}
              handleClick={handleClose}
            ></CancelButton>
            <SaveButton
              isLoading={isLoading}
              handleClick={handleSubmit}
              message="Create Lead"
            >
            </SaveButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLeadModal;
