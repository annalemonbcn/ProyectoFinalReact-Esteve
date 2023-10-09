// Services
import { fetchOrdersFromFirestore } from "../services/firestoreService";

// firestore
import { db } from "../../db/firebase";
import { collection } from "firebase/firestore";


// Context
import { createContext, useState, useEffect } from "react";
export const OrdersContext = createContext();

// Provider
const OrdersProvider = (props) => {
  // State
  const [orders, setOrders] = useState([]);

  // Effects
  useEffect(() => {
    // fetchOrders();
  }, []);

  /**
   * fetchData *
   * aux method to fetch data from firebase
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

  const contextValue = {
    fetchOrders
  }

  return (
    <OrdersContext.Provider value={contextValue}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
