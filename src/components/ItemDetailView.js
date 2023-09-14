// Hooks
import { useEffect, useState } from 'react';

// ImageZoom component
import ImageZoom from "react-image-zooom";

// Components
import ItemsToCart from "./widgets/ItemsToCart";

const ItemDetailView = ({ product }) => {
  
  console.log('product', product)

  // State
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if(product.image){
      setImgLoaded(true);
    }
  }, [product])
  
  
  return (
    <>
      {product.length === 0 ? (
        <p>Cargando</p>
      ) : (
        <div>
          <h2 className="text-xl lg:text-2xl text-gray-600 font-semibold">
            {product.title}
          </h2>
          <div className="flex flex-col lg:flex-nowrap lg:flex-row gap-10 mt-8 lg:mt-6">
            <div className="bg-soft-grey lg:w-3/5 h-[500px] p-5 box-border flex justify-center items-center lg:order-1">
              {imgLoaded ? (
                 <ImageZoom 
                 // <img 
                   className="w-auto h-full"
                   src={product.image}
                   // src="https://picsum.photos/seed/000/1920/1080"
                   alt={product.title}
                 />
              ) : null}
            </div>
            <div className="pt-2 lg:p-0 lg:w-1/5 lg:order-3">
              <p>
                <span className="font-bold">Size:</span> {product.size}
              </p>
              <p>
                <span className="font-bold">Orientation:</span>{" "}
                {product.orientation}
              </p>
              {product.serie ? (
                <p>
                  <span className="font-bold">Serie:</span>{" "}
                  {product.serie}
                </p>
              ) : null}
              <div className="text-gray-500 font-bold text-xl mt-4">
                {product.price} €
              </div>
              <ItemsToCart id={product.id} />
            </div>
            <div className="pt-2 lg:p-0 lg:w-1/5 lg:order-2">
              <p>{product.description}</p>
              <p className='mt-3'><span className='font-bold'>Exhibition tip:</span> {product.exhibition_tip}</p>
              <p><span className='font-bold'>Print size:</span> {product.print_size}</p>
              <p><span className='font-bold'>Printing paper:</span> {product.printing_paper}</p>
              <p className='text-xs mt-4 italic'>{product.considerations}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailView;
