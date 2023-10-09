// Hooks
import { useEffect, useState, useContext } from "react";

// Context
import { OrdersContext } from "../../api/context/OrdersProvider";

// Components
import BackofficeView from "../views/BackofficeView";

// Toaster
import { toast } from "sonner";


const BackofficeContainer = () => {
  // State
  const [orders, setOrders] = useState([]);
  
  // Context
  const { fetchOrders } = useContext(OrdersContext);

  // Effects
  useEffect(() => {
    auxSetOrders();
  }, []);

  /**
   * Aux method to fetch all the orders from the firestore db
   */
    const auxSetOrders = async () => {
      try {
        const allOrders = await fetchOrders();
        setOrders(allOrders);
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

    // View
    if(orders){
      return <BackofficeView orders={orders} />
    } else {
      return (<p>Orders loading</p>)
    }
};

export default BackofficeContainer;
