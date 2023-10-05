// Loader
import { Loader } from "rsuite";

const BackofficeView = ({ orders }) => {
  console.log('orders', orders)
  return (
    <div>
      {orders.length === 0 ? (
        <Loader content="Loading orders..." />
      ) : (
        <>
          <h1>Orders</h1>
          <ul>
            {orders.map((order, i) => {
              return (
                <li key={i}>
                  <p>ID: {order.id}</p>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default BackofficeView;
