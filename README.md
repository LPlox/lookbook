## Designers Lookbook - ecommerce with Next.js + Storyblok

Run the development server:

```bash
npm run dev
```

## Todo list for myself

[x] npm install --save @zeit/next-sass node-sass </br>
[x] npm install swr</br>
[x] npm install storyblok-node-client</br>
[ ] npm install --save isomorphic-unfetch</br>
[ ] set a storyblok and backend API fetch with next</br>

## Thinking it out in my readme

Make sure to do a npm install when you enter another branch

I need a 1. homepage 2.Collections page as default pages. Here I can get the data as getInitialProperty to the specific pages.
Everything else needs to be called from a slug.
It's probably bad practice to call the storyblok many times or on different pages. It's better to do it at one place and then distribute it in the different pages.

Homepage has a special collection on display.
How should the data be nested so I can pick one easily?

---

Collection - Name of designer - Images of collection - Description of overall collection - Release date - Sold out (boolean) - End date - LINK

-- Product - Name of product - Images - Sizes - Description - Price - Sold out (boolean) - tags (gender, color, season, type of clothing) - LINK

Sort functions: New / Old - All Designers name - Season - Clothing piece

Categories:
