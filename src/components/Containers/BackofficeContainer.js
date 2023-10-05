// Hooks
import { useEffect, useState, useContext } from "react";

// Context
import { OrdersContext } from "../../api/context/OrdersProvider";

// Components
import BackofficeView from "../views/BackofficeView";


const BackofficeContainer = () => {
  // State
  const [orders, setOrders] = useState([]);
  
  // Context
  const allOrders = useContext(OrdersContext);

  // Effects
  useEffect(() => {
    auxSetOrders();
  }, [allOrders]);

  /**
   * Aux method to fetch all the orders from the firestore db
   */
    const auxSetOrders = () => {
      setOrders(allOrders);
    };

  return (
    <BackofficeView orders={orders} />
  );
};

export default BackofficeContainer;
