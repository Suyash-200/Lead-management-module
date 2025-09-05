export const Status = Object.freeze({
  NEW: "NEW",
  CONTACTED: "CONTACTED",
  QUALIFIED: "QUALIFIED",
  LOST: "LOST",
});

export const PHONENOREGEX = /^[0-9]{10}$/;
export const EMAILREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const DIGITSREGEX = /^(0|[1-9]\d*)$/;
