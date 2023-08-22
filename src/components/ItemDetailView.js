// Components
import Cart from "./svg/Cart";

const ItemDetailView = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <p>Cargando</p>
      ) : (
        <div>
          <h2 className="text-xl lg:text-2xl text-gray-600 font-semibold mt-6 lg:mt-0">
            {data.title}
          </h2>
          <div className="flex flex-col lg:flex-nowrap lg:flex-row gap-5 mt-8 lg:mt-6">
            <div className="bg-soft-grey lg:w-2/5 h-[500px] p-5 box-border flex justify-center items-center">
              <img
                className="max-h-full mx-auto"
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className="bg-soft-grey lg:w-2/5 h-[500px] p-5 box-border flex justify-center items-center">
              <img
                className="max-h-full mx-auto"
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className="pt-2 lg:p-0 lg:w-1/5" id="productInfo">
              <p className="font-bold">{data.category}</p>
              <p className="italic">{data.description}</p>
              <div className="flex items-center justify-between lg:justify-start lg:gap-8 mt-8">
                <p className="text-gray-500 font-bold text-lg">
                  {data.price} €
                </p>
                <div className="w-[50px] h-[50px] border-slate-500 border-solid border-[1px] flex justify-center items-center relative left-[-20px] lg:left-0 hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetailView;
