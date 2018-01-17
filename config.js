const RULES = [
  ["privatebrowsing", "dark"],
  ["(hour > 20) || (hour < 9)", "dark"],
  ["protocol == 'http:'", "light"],
  ["protocol == 'https:'", "dark"],
];

const DEFAULT_THEME = "light";

const THEMES = {
  light: {
    images: {
      headerURL: ""
    },
    colors: {
      accentcolor: "#dedede",
      textcolor: "#000",
      toolbar_text: "#000",
      toolbar: "#f8f8f8",
    }
  },
  dark: {
    images: {
      headerURL: ""
    },
    colors: {
      accentcolor: "#000",
      textcolor: "#ddd",
      toolbar_text: "#ccc",
      toolbar: "#3a3a3a"
    }
  }
};