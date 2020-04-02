# Designers Lookbook - ecommerce with Next.js + Storyblok

Run the development server:

```bash
npm run dev
```

Doesn't work on mobile yet.

# Challenges

1. My challenges that I set on myself.
2. The frustration of not knowing what I don't know
3. Understanding Storyblok

# Learnings

1. How the connection is made between front and back end.
2. I'm not as scared to work with things/data that I cannot get full feedback on. The scary backend tunnel that I didn't want to enter isn't that scary anymore. (console.log every single step)
3. Learning how to read documentations. Those are made for geniuses. Omgosh! So hard to understand!!

---

## Todo list for myself

- [x] npm install --save @zeit/next-sass node-sass </br>
- [x] npm install swr</br>
- [x] npm install storyblok-node-client</br>
- [x] npm install --save isomorphic-unfetch</br>
- [x] set a storyblok and backend API fetch with next</br>

## Thinking it out in my readme

Specific pages: <br>
Home <br>
All Collections <br>
Everything else is generated from slugs <br>

Api router <br>
api/collection --> either get a specific collection with it's items collection-uuid or /all to get every collection <br>
api/filter --> slug is the specific filter. Example filters: summer, collection, men etc. <br>
api/item --> gets the specific item with it's name slug

---

## Storyblok structure.

Each Collection information is store within a folder. <br>
Each Product is stored in an Items folder but are not nestled or directly linked with a Collection. The connection is made based on relation-tag. <br>
The information is separated and can be clustered with filters, tags, and direct slugs to storyblok.
