// Check the rules every 5 minutes
const CHECK_PERIODICALLY = true;

// Check the rules on every tab update/switch
const CHECK_ON_TAB_CHANGE = true;

// The default theme
const DEFAULT_THEME = "bright";

// The theming rules: priority is given to the bottom-most rule.
const RULES = [
  ["privatebrowsing", "shady"],
  ["(hour > 20) || (hour < 9)", "shady"]
];

const THEMES = {
  bright: {
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
  shady: {
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