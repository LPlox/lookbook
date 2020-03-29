import React from "react";
import NextHead from "next/head";

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ""}</title>
    <meta name="description" content={description || ""} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css?family=Playfair+Display:500,700&display=swap"
      rel="stylesheet"
    ></link>
  </NextHead>
);

export default Head;
