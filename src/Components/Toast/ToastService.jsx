import { useToast } from "../../store/ToastContext";

let showToastFn;

export const useToastService = () => {
  const { showToast } = useToast();

  showToastFn = showToast;
};

export const toastSuccess = (message) => {
  if (showToastFn) showToastFn(message, "success");
};

export const toastError = (message) => {
  if (showToastFn) showToastFn(message, "error");
};
