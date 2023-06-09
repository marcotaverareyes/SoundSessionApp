import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data,loading,error} = useFetch("/api/artists/featured");
  
  return (
    <div className="featured">
      {loading ? (
        "Loading..."
      ) : (
        <><div className="featuredItem" onClick={() => window.open('https://buy.stripe.com/test_5kA3ez1Io33b3GEeUU', '_blank')}>
        <img
          src={data[0].image}
          alt=""
          className="featuredImg"
          
        />
        <div className="featuredTitles">
          <h1>{data[0].name}</h1>
          <h2>{data[0].type}</h2>
        </div>
      </div>
      
      <div className="featuredItem" onClick={() => window.open('https://buy.stripe.com/test_5kA3ez1Io33b3GEeUU', '_blank')}>
        <img
          src={data[1].image}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{data[1].name}</h1>
          <h2>{data[1].type}</h2>
        </div>
      </div>
      <div className="featuredItem" onClick={() => window.open('https://buy.stripe.com/test_5kA3ez1Io33b3GEeUU', '_blank')}>
        <img
          src={data[2].image}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{data[2].name}</h1>
          <h2>{data[2].type}</h2>
        </div>
      </div></>
      )
      
      }
    </div>
  );
};

export default Featured;
