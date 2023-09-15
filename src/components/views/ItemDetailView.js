// Hooks
import { useEffect, useState } from 'react';

// ImageZoom component
import ImageZoom from "react-image-zooom";

// Components
import ItemsCount from "../widgets/ItemsCount";


const ItemDetailView = ({ product }) => {
  
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
            <div className="bg-soft-grey lg:w-3/5 h-[340px] md:h-[450px] lg:h-[500px] p-5 lg:p-8 box-border flex justify-center items-center lg:order-1">
              {imgLoaded ? (
                 <ImageZoom 
                   className={`w-auto ${
                    product.orientation === 'landscape' ? 'h-auto md:h-full' : (product.orientation === 'vertical' || product.orientation === 'square') ? 'h-full' : ''
                  } `}
                   src={product.image}
                   alt={product.title}
                 />
              ) : null}
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
                  <span className="font-bold">Serie:</span>{" "}
                  {product.serie}
                </p>
              ) : null}
              <div className="text-gray-500 font-bold text-xl mt-4">
                {product.price} €
              </div>
              <ItemsCount id={product.id} />
            </div>
            <div className="pt-2 lg:p-0 mt-4 lg:mt-0 lg:w-1/5 lg:order-2">
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