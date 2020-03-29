import { useState, useEffect } from "react";
import "../scss/landing.scss";

const Landing = ({ title, img, date, designer, height, width }) => {
  // const [imgSize, setImgSize] = useState(null);
  // const [imgLink, setImgLink] = useState(null);

  // useEffect(() => setImgSize(getImgSize(height, width)), [height]);
  // useEffect(() => {
  //   setImgLink(getImgUrl(img[0].filename, imgSize));
  // }, [imgSize]);

  const newDate = date.toString().slice(0, 10);

  return (
    <main className="position-a z--5">
      <div className="promo-styling">
        <h1 className="font-big position-a">{title}</h1>
        <div className="description">
          <p className="paragraf-font">{newDate}</p>
          <p className="paragraf-font">{designer}</p>
        </div>
        <img src={img[0].filename} alt="promo image" />
      </div>
    </main>
  );
};

export default Landing;

// const getImgSize = (height, width) => {
//   let imgHeight = 0;
//   let imgWidth = 0;

//   if (height < width) {
//     imgHeight = height * 0.8;
//   }

//   if (height > width) {
//     imgWidth = width * 0.9;
//   }

//   return "/" + imgWidth + "x" + imgHeight;
// };

// const getImgUrl = (link, dimentions) => {
//   const urlEnding = link.slice(16, link.length);
//   const urlStart = "https://img2.storyblok.com";
//   console.log(urlStart + dimentions + urlEnding);
//   return urlStart + dimentions + urlEnding;
// };

//https://img2.storyblok.com/0x760m/f/79473/5122x3415/75b55deb8e/force-majeure-00tlc0clfrs-unsplash.jpg
