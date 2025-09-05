import React, { useEffect, useState } from "react";
import { useToast } from "../../store/ToastContext";

const Toast = () => {
  const { toast } = useToast();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toast.isVisible) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [toast.isVisible]);

  if (!toast.isVisible) return null;

  const toastStyles = {
    success: {
      bg: "bg-white dark:bg-gray-800",
      text: "text-gray-500 dark:text-gray-400",
      iconBg: "bg-green-100 dark:bg-green-800",
      iconColor: "text-green-500 dark:text-green-200",
      iconPath:
        "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z",
    },
    error: {
      bg: "bg-white dark:bg-gray-800",
      text: "text-gray-500 dark:text-gray-400",
      iconBg: "bg-red-100 dark:bg-red-800",
      iconColor: "text-red-500 dark:text-red-200",
      iconPath:
        "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.536 12.536-1.414 1.414L10 11.414l-2.122 2.122-1.414-1.414L8.586 10 6.464 7.878l1.414-1.414L10 8.586l2.122-2.122 1.414 1.414L11.414 10l2.122 2.122Z",
    },
  };

  const currentStyle = toastStyles[toast.type] || toastStyles.success;

  return (
    <div
      className={`fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow-lg transform transition-all duration-500
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"} ${
        currentStyle.bg
      } ${currentStyle.text}`}
      role="alert"
    >
      <div
        className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg ${currentStyle.iconBg} ${currentStyle.iconColor}`}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d={currentStyle.iconPath} />
        </svg>
        <span className="sr-only">
          {toast.type === "success" ? "Check icon" : "Error icon"}
        </span>
      </div>

      <div className="ms-3 text-sm font-normal">{toast.message}</div>

      <button
        type="button"
        onClick={() => setShow(false)}
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
