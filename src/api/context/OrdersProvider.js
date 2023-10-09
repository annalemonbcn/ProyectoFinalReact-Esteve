// Services
import { fetchOrdersFromFirestore } from "../services/firestoreService";

// firestore
import { db } from "../../db/firebase";
import { collection } from "firebase/firestore";

// Context
import { createContext, useState } from "react";
export const OrdersContext = createContext();

// Provider
const OrdersProvider = (props) => {
  // State
  const [orders, setOrders] = useState([]);

  /**
   * * fetchOrders *
   * aux method to fetch data from firebase
   * @returns data --> all orders from firestore collection "orders"
   */
  const fetchOrders = async () => {
    const ordersCollection = collection(db, "orders");
    try {
      const data = await fetchOrdersFromFirestore(ordersCollection);
      setOrders(data);
      return data;
    } catch (error) {
      throw error;
    }
  };

  /**
   *
   * @param {*} ordersArr
   * @param {*} orderId
   * @returns
   */
  const toggleSeen = (ordersArr, orderId) => {
    // Duplicate the orders array
    const auxOrdersArr = [...ordersArr];

    // Find element via id
    const elementFound = auxOrdersArr.find((order) => order.id === orderId);

    // Modify the seen property
    if (elementFound) {
      elementFound.seen = !elementFound.seen;
      // Set state
      return auxOrdersArr;
    }
  };

  const contextValue = {
    orders,
    setOrders,
    fetchOrders,
  };

  return (
    <OrdersContext.Provider value={contextValue}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
