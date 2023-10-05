// Services
import { fetchOrdersFromFirestore } from "../services/firestoreService";

// firestore
import { db } from "../../db/firebase";
import { collection } from "firebase/firestore";

// Toaster
import { toast } from "sonner";

// Context
import { createContext, useState, useEffect } from "react";
export const OrdersContext = createContext();

// Provider
const OrdersProvider = (props) => {
  // State
  const [orders, setOrders] = useState([]);

  // Effects
  useEffect(() => {
    fetchOrders();
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
      toast.success("Orders loaded :)", {
        style: {
          background: "aquamarine",
        },
      });
    } catch (error) {
      toast.error("There was an error loading the orders", {
        style: {
          background: "lightpink",
        },
      });
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <OrdersContext.Provider value={orders}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
