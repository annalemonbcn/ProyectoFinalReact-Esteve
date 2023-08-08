import ItemView from "../Item/ItemView";

function ItemListView({ data }) {
  return (
    <div className="flex flex-row flex-wrap p-8">
      {data.length === 0 ? (
        <p>Cargando</p>
      ) : (
        data.map((item, i) => {
          return (
            <ItemView
              key={i}
              imgSrc={item.image}
              imgAlt={item.title}
              name={item.title}
              price={item.price}
            />
          );
        })
      )}
    </div>
  );
}

export default ItemListView;
