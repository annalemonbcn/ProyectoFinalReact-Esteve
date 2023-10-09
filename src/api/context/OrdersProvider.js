// Services
import { fetchOrdersFromFirestore, updateDocToFirestore } from "../services/firestoreService";

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
   * Method to fetch data from firebase
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
   * * updateSeenOrder *
   * Method to updatethe seen property from orders from firebase
   * @param {*} orderId --> the order that needs to be modified
   * @param {*} newSeenValue --> new value for orderSeen
   */
  const updateSeenOrder = async (orderId, newSeenValue) => {
    const ordersCollection = collection(db, "orders");
    try{
      await updateDocToFirestore(ordersCollection, orderId, "seen", newSeenValue)
    } catch (error) {
      throw error;
    }
  }

  const contextValue = {
    orders,
    setOrders,
    fetchOrders,
    updateSeenOrder
  };

  return (
    <OrdersContext.Provider value={contextValue}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
