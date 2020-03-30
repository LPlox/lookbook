const withSass = require("@zeit/next-sass");
module.exports = withSass({
  // compress: false,
  // env: {
  //   API_URL: "https://elookbook.now.sh"
  // }
  env: {
    API_URL:
      process.env.NODE_ENV === "production"
        ? "https://elookbook.now.sh"
        : "http://localhost:3000"
  }
});
