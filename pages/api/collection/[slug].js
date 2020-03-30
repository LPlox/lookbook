const StoryblokClient = require("storyblok-js-client");

const PUBLISHED_KEY = "";
const PREVIEW_KEY = "rFRTIx7DOZ1XmonFoQKHjwtt";
const query = {};

let Storyblok = new StoryblokClient({
  accessToken: PREVIEW_KEY,
  cache: {
    clear: "auto",
    type: "memory"
  }
});

/*
req: an instance of http.IncomingMessage. Request => det man sänder in. 
res: an instance of http.ServerRresponse. Respond => det den skickar tillbaka

https://nodejs.org/api/http.html#http_class_http_incomingmessage
https://nodejs.org/api/http.html#http_class_http_serverresponse

response.setHeader(name, value) => name=string value=any. Sets an HTTP header value for the HTTP header if there is none. 
response.statusCode => "this property controls the status code that will be sent to the client when the headers get flushed."
response.end => "This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response."
*/

export default (req, res) => {
  const slug = req.query.slug; //Saving the slug that is sent in to this function with the query

  Storyblok.get(`cdn/stories/coll/${slug}`, {})
    .then(response => {
      const {
        data: {
          story: { content }
        }
      } = response;
      const data = { content };
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      console.log(data.content);
      console.log(data.content.body[0].promo_img);
      res.end(JSON.stringify(data));
    })
    .catch(error => {
      console.log(error);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 500;
      res.end(JSON.stringify(`${error.name}: ${error.message}`));
    });
};
