import "../scss/grid-header.scss";

const GridHeader = () => {
  return (
    <div className="grid-header">
      <div className="grid-display grid-1-1"></div>
      <div className="grid-display grid-1-2"></div>
      <div className="grid-display grid-1-3"></div>
      <div className="grid-display grid-1-4 mobile-deactive"></div>
    </div>
  );
};

export default GridHeader;
