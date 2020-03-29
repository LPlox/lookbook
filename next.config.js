const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
});

const nextConfig = {
  env: {
    API_URL:
      process.env.NODE_ENV === "production"
        ? "https://elookbook.now.sh"
        : "https://localhost:3000"
  }
};
