const withSass = require("@zeit/next-sass");
module.exports = withSass({
  compress: false,
  env: {
    API_URL: "https://elookbook.now.sh"
  }
});

// module.exports = {
//   env: {
//     API_URL: process.env.NODE_ENV === "production" ? "https://elookbook.now.sh" || "localhost:3000"
//   },
// }
