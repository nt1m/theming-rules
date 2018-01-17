async function setThemeFromRules(tab) {
  let theme = await RuleManager.getCurrent(tab);
  browser.theme.update(tab.windowId, THEMES[theme]);
}

async function init() {
  let wins = await browser.windows.getAll();
  wins.forEach(async win => {
    let [tab] = await browser.tabs.query({ active: true, windowId: win.id });
    setThemeFromRules(tab);
  });
  new TabManager({
    onSelectionChanged: async (tab) => {
      setThemeFromRules(tab);
    },
    onUpdated: async (tab, changeInfo) => {
      if (!changeInfo.url) {
        return;
      }
      setThemeFromRules(tab);
    }
  });
}

window.onload = () => setTimeout(init, 1000);

