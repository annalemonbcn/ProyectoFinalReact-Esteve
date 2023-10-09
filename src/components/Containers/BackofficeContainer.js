// Hooks
import { useEffect, useState, useContext } from "react";

// Context
import { OrdersContext } from "../../api/context/OrdersProvider";
import { AuthContext } from "../../api/context/AuthProvider";

// Components
import BackofficeView from "../views/BackofficeView";


const BackofficeContainer = () => {
  // State
  const [orders, setOrders] = useState([]);
  
  // Context
  const allOrders = useContext(OrdersContext);
  const { user } = useContext(AuthContext);

  // Effects
  useEffect(() => {
    auxSetOrders();
    console.log('user from BackofficeContainer', user)
  }, [allOrders, user]);

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
