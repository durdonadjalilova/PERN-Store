export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://thawing-everglades-98303.herokuapp.com";
};
