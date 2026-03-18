const base = {
  visibilityTime: 4000,
  autoHide: true,
  position: 'bottom',
  topOffset: 0,
  bottomOffset: 30,
};

export const Toast = {
  error: message => ({ ...base, type: 'error', text1: message }),
  success: message => ({
    ...base,
    type: 'success',
    text1: message,
    visibilityTime: 3000,
  }),
};
