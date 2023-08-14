import ItemView from "../Item/ItemView";

function ItemListView({ data }) {
  return (
    <div className="flex flex-row flex-wrap lg:px-20 pt-5 lg:pt-16 mt-[70px]">
      {data.length === 0 ? (
        <p>Cargando</p>
      ) : (
        data.map((item, i) => {
          return (
            <ItemView
              key={i}
              imgSrc={item.image}
              imgAlt={item.location}
              name={item.location}
              measures={item.measures}
              path={item.path}
              price={item.price}
            />
          );
        })
      )}
    </div>
  );
}

export default ItemListView;
