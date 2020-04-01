## Designers Lookbook - ecommerce with Next.js + Storyblok

Run the development server:

```bash
npm run dev
```

## Todo list for myself

[x] npm install --save @zeit/next-sass node-sass </br>
[x] npm install swr</br>
[x] npm install storyblok-node-client</br>
[x] npm install --save isomorphic-unfetch</br>
[x] set a storyblok and backend API fetch with next</br>

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

Each Collection information is store within a folder.
Each Product is stored in an Items folder but are not nestled or directly linked with a Collection. The connection is made based on relation-tag.
