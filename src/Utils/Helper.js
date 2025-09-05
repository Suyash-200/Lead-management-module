export const checkRegex = (regex, value) => {
  if (regex !== "" && value) {
    if (regex.test(value)) {
      return true;
    }
    return false;
  }

  return true;
};
