import iconCreator from "../../visuals/images/creator01.png";
const TrendingCreators = () => {
  return (
    <div className="col-lg-4">
      <div className="trending-box">
        <div className="tredning-pic">
          <img src={iconCreator} />
        </div>
        <div className="tredning-txt">
          <h2>Memories Art</h2>
          <p>ETH-250.50</p>
        </div>
        <span>#1</span>
      </div>
    </div>
  );
};
export default TrendingCreators;
