export const isValidEmail = email =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

export const isAlphaNumericPassword = password =>
  /(?=.*?[A-Za-z])(?=.*\d)/.test(password);
