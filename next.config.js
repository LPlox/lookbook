const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
});

module.exports = {
  env: {
    API_URL: process.env.NODE_ENV === 'production' ? 'https://elookbook.now.sh' || 'localhost:3000',
  },
}
