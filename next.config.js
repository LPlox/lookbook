const withSass = require("@zeit/next-sass");
module.exports = withSass({
  env: {
    API_URL: "https://elookbook.now.sh"
  }
});
