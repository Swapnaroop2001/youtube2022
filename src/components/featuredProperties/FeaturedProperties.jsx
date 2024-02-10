import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
const FeaturedProperties = () => {

  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? ("Loading") :
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src="https://media.istockphoto.com/id/1299098384/photo/modern-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=fQJhCOOb7olzQ_nlh7xZ84txr6YxaWldbhGhTyq_Y2M="
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.Name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>5</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      }

    </div>
  );
};

export default FeaturedProperties;
