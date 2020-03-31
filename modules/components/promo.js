import Link from "next/link";

import "../scss/promo.scss";

const Promo = ({ title, designer, imgHorizontal, imgVertical, release }) => {
  return (
    <div className="promo">
      <h1 className="title font-big">{title}</h1>
      <img src={imgHorizontal} className="img-desktop"></img>
      <img src={imgVertical} className="img-mobile"></img>
      <div className="info">
        <p className="designer description-font-large">{designer}</p>
        <p className="date description-font-large">{release.slice(0, 10)}</p>
      </div>
      <p></p>
    </div>
  );
};

export default Promo;
