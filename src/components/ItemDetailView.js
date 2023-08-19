// Components
import Cart from "./svg/Cart";

const ItemDetailView = ({ data }) => {
  return (
    <div>
      {data.length === 0 ? (
        <p>Cargando</p>
      ) : (
        <div>
          <h2 className="text-xl lg:text-2xl text-gray-600 font-semibold mt-6 lg:mt-0">{data.title}</h2>
          <div className="flex flex-col lg:flex-nowrap lg:flex-row gap-5 mt-8 lg:mt-6">
            <div className="bg-soft-grey w-full h-[500px] p-5 box-border">
              <img
                className="max-h-full mx-auto relative top-1/2 transform -translate-y-1/2"
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className="bg-soft-grey w-full h-[500px] p-5 box-border">
              <img
                className="max-h-full mx-auto relative top-1/2 transform -translate-y-1/2"
                src={data.image}
                alt={data.title}
              />
            </div>
            <div className="pt-2 lg:p-0" id="productInfo">
              <p className="font-bold">{data.category}</p>
              <p className="italic">{data.description}</p>
              <div className="flex justify-between items-center mt-8">
                <p className="text-gray-500 font-bold text-lg">
                  {data.price} €
                </p>
                <div className="w-[50px] h-[50px] border-slate-500 border-solid border-[1px] flex justify-center relative top-[-5px] left-[-20px] hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailView;
