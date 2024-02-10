import React from "react";
import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=1024x1024&w=is&k=20&c=qCiRE8PiUzWknrvqc6Dson937hUWHPUeTWi2MmY0xis=",
    "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          {data &&
            data.map((item, i) => (
              <div className="pListItem" key={i}>
                <img src={images[i]} alt="" className="pListImg" />
                <div className="pListTitles">
                  {item && item.type && <h1>{item.type}</h1>}
                  {item && item.count && item.type && (
                    <h2>
                      {item.count} {item.type}
                    </h2>
                  )}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
