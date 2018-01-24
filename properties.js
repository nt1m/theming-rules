/**
 * NOTICE: If you add a property in this file, make sure
 * you have the corresponding permission set in manifest.json
 */

const PROPERTIES = {
  inactive_window: {
    type: "boolean",
    async get(tab) {
      let win = await browser.windows.get(tab.windowId);
      return win.focused;
    }
  },
  privatebrowsing: {
    type: "boolean",
    async get(tab) {
      return tab.incognito;
    }
  },
  container: {
    type: "string",
    async get(tab) {
      let store = await browser.contextualIdentities.get(tab.cookieStoreId);
      return store.name;
    }
  },
  domain: {
    type: "string",
    async get(tab) {
      return new URL(tab.url).host;
    }
  },
  protocol: {
    type: "string",
    async get(tab) {
      return new URL(tab.url).protocol;
    }
  },
  year: {
    type: "integer",
    async get(tab) {
      return (new Date(Date.now())).getFullYear();
    }
  },
  month: {
    type: "integer",
    async get(tab) {
      return (new Date(Date.now())).getMonth() + 1;
    }
  },
  date: {
    type: "integer",
    async get(tab) {
      return (new Date(Date.now())).getDate();
    }
  },
  day: {
    type: "integer",
    async get(tab) {
      return (new Date(Date.now())).getDay();
    }
  },
  hour: {
    type: "integer",
    async get(tab) {
      return (new Date(Date.now())).getHours();
    }
  },
  minutes: {
    type: "integer",
    async get(tab) {
      return (new Date(Date.now())).getMinutes();
    }
  },
  seconds: {
    type: "integer",
    async get(tab) {
      return (new Date(Date.now())).getSeconds();
    }
  },
}