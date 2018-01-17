const RuleManager = {
  async init() {
    this.rules = new Map(RULES);
  },
  async getCurrent(tab) {
    try {
      for (let [rule, theme] of [...this.rules].slice().reverse()) {
        let ruleApplies = await (new Rule(rule)).applies(tab);
        if (ruleApplies) {
          return theme;
        } 
      }
      return DEFAULT_THEME;
    } catch(e) {
      return DEFAULT_THEME;
    }
  }
};
RuleManager.init();
