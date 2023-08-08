const ItemView = ({ imgSrc, imgAlt, name, price }) => {
  return (
    <div className=" max-w-sm w-1/4 box-border	">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src={imgSrc}
          alt={imgAlt}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold text-gray-700">
            {name}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-500">
            {price}€
          </span>
          <a
            href="/"
            className="text-gray-500 font-medium"
          >
            view →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
