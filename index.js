const request = require("request");

class Fortnite {
  constructor(apiKey) {
    if(!apiKey) throw new Error("Please make sure you provide a valid API key.");
    this.key = apiKey;
  }

  makeRequest(url) {
    var requestUrl = "https://api.fortnite.rest" + url;
    return new Promise((resolve, reject) => {
    request.get({ url: requestUrl, headers: {'API-Key':this.key}}, function (e, r, b) {
      var body = JSON.parse(b);
      if(body.error) reject(body.error);
      else resolve(body);
    });
  });
  }

  getStats(platform,user) {
    return this.makeRequest(`/stats/${platform}/${user}`);
  }

  getStore() {
    return this.makeRequest(`/store`);
  }

  getLeaderboard(gameType,platform) {
    return this.makeRequest(`/leaderboard/${platform}/${gameType}`);
  }


}

module.exports = Fortnite;
