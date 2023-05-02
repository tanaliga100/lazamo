export const getToken = () => {
  return localStorage.getItem("currentUser");
};
export const removeToken = () => {
  localStorage.removeItem("currentUser");
};

export const setToken = (val: any) => {
  localStorage.setItem("currentUser", val);
};
