// Components
import ItemsToCart from "./widgets/ItemsToCart";

const ItemDetailView = ({ product }) => {
  

  return (
    <>
      {product.length === 0 ? (
        <p>Cargando</p>
      ) : (
        <div>
          <h2 className="text-xl lg:text-2xl text-gray-600 font-semibold mt-6 lg:mt-0">
            {product.title}
          </h2>
          <div className="flex flex-col lg:flex-nowrap lg:flex-row gap-5 mt-8 lg:mt-6">
            <div className="bg-soft-grey lg:w-2/5 h-[500px] p-5 box-border flex justify-center items-center">
              <img
                className="max-h-full mx-auto"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="bg-soft-grey lg:w-2/5 h-[500px] p-5 box-border flex justify-center items-center">
              <img
                className="max-h-full mx-auto"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="pt-2 lg:p-0 lg:w-1/5" id="productInfo">
              <p className="font-bold">{product.category}</p>
              <p className="italic">{product.description}</p>
              <div className="flex items-center justify-between lg:justify-start lg:gap-8 mt-8">
                <p className="text-gray-500 font-bold text-lg">
                  {product.price} €
                </p>
              </div>
              <ItemsToCart id={product.id} price={product.price} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailView;
