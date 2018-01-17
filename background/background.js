async function setThemeFromRules(tab) {
  let theme = await RuleManager.getCurrent(tab);
  browser.theme.update(tab.windowId, THEMES[theme]);
}

async function init() {
  await setAllWindows();
  if (CHECK_ON_TAB_CHANGE) {
    setupTabListeners();
  }
  if (CHECK_PERIODICALLY) {
    setupAlarmListener();
  }
}

async function setAllWindows() {
  let wins = await browser.windows.getAll();

  wins.forEach(async win => {
    let [tab] = await browser.tabs.query({ active: true, windowId: win.id });
    setThemeFromRules(tab);
  });
}

function setupTabListeners() {
  chrome.tabs.onActivated.addListener(async function({ tabId }) {
    let tab = await browser.tabs.get(tabId);
    setThemeFromRules(tab);
  });

  chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
    if (!changeInfo.url) {
      return;
    }
    if (tab.active) {
      setThemeFromRules(tab);
    }
  });
}

function setupAlarmListener() {
  browser.alarms.onAlarm.addListener(setAllWindows);
  browser.alarms.create('checkTime', {periodInMinutes: 5});
}

window.onload = init;

