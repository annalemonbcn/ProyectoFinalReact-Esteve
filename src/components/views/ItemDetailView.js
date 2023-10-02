// Proptypes
import PropTypes from "prop-types";

// Hooks
import { useEffect, useState } from "react";

// ImageZoom component
import ImageZoom from "react-image-zooom";

// Loader
import { Loader } from "rsuite";

// Components
import ItemsCount from "../widgets/ItemsCount";

const ItemDetailView = ({ product }) => {
  // State
  const [imgLoaded, setImgLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (product.image) {
      setImgLoaded(true);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [product]);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <>
      {!product ? (
        <Loader content="Loading product..." />
      ) : (
        <div>
          <h2 className="text-xl lg:text-2xl text-gray-600 font-semibold">
            {product.title}
          </h2>
          <div className="flex flex-col lg:flex-nowrap lg:flex-row gap-10 mt-8 lg:mt-6">
            <div className="bg-soft-grey lg:w-3/5 h-[340px] md:h-[450px] lg:h-[500px] p-5 lg:p-8 box-border flex justify-center items-center lg:order-1">
              {windowWidth >= 1024 ? (
                imgLoaded ? (
                  <ImageZoom
                    className={`w-auto ${
                      product.orientation === "landscape"
                        ? "h-auto md:h-[96%]"
                        : product.orientation === "vertical" ||
                          product.orientation === "square"
                        ? "h-[92%] md:h-full"
                        : ""
                    }`}
                    src={product.image}
                    alt={product.title}
                  />
                ) : null
              ) : (
                <img
                  className={`w-auto ${
                    product.orientation === "landscape"
                      ? "h-auto md:h-[96%]"
                      : product.orientation === "vertical" ||
                        product.orientation === "square"
                      ? "h-[92%] md:h-full"
                      : ""
                  }`}
                  src={product.image}
                  alt={product.title}
                />
              )}
            </div>
            <div className="pt-2 lg:p-0 mt-4 lg:mt-0 lg:w-1/5 lg:order-3">
              <p>
                <span className="font-bold">Size:</span> {product.size}
              </p>
              <p>
                <span className="font-bold">Orientation:</span>{" "}
                {product.orientation}
              </p>
              {product.serie ? (
                <p>
                  <span className="font-bold">Serie:</span> {product.serie}
                </p>
              ) : null}
              <div className="text-gray-500 font-bold text-xl mt-4">
                {product.price} €
              </div>
              <ItemsCount
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </div>
            <div className="pt-2 lg:p-0 mt-4 lg:mt-0 lg:w-1/5 lg:order-2">
              <p>{product.description}</p>
              <p className="mt-3">
                <span className="font-bold">Exhibition tip:</span>{" "}
                {product.exhibition_tip}
              </p>
              <p>
                <span className="font-bold">Print size:</span>{" "}
                {product.print_size}
              </p>
              <p>
                <span className="font-bold">Printing paper:</span>{" "}
                {product.printing_paper}
              </p>
              <p className="text-xs mt-4 italic">{product.considerations}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ItemDetailView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ItemDetailView;
