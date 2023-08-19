// Components
import ItemGridView from "./ItemGridView";

function ItemListView({ data }) {
  return (
    <div className="flex flex-row flex-wrap">
      {data.length === 0 ? (
        <p>Cargando</p>
      ) : (
        data.map((item, i) => {
          return (
            <ItemGridView
              key={i}
              imgSrc={item.image}
              imgAlt={item.title}
              name={item.title}
              price={item.price}
              id={item.id}
              // measures={item.measures}
              // path={item.path}
            />
          );
        })
      )}
    </div>
  );
}

export default ItemListView;
