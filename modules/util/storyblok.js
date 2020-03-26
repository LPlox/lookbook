const StoryblokClient = require("storyblok-js-client");

const PUBLISHED_KEY = "";
const PREVIEW_KEY = "rFRTIx7DOZ1XmonFoQKHjwtt";
const query = {};

const Storyblok = new StoryblokClient({
  accessToken: PREVIEW_KEY,
  cache: {
    clear: "auto",
    type: "memory"
  }
});

export default Storyblok;
