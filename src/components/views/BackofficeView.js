import React, { useEffect, useState } from "react";

// Rsuite
import { Loader } from "rsuite";
import BackofficeModal from "../widgets/BackofficeModal";

// Utils
import { convertTimestamp } from "../../utils/utils";

const BackofficeView = ({ orders }) => {
  // State
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (orders.length > 0) {
      setData(orders);
    }
    console.log("orders", orders)
  }, [orders]);

  
  // Modify order
  const toggleSeen = (orderId) => {
    // Duplicate the orders array
    const auxData = [...data]
    // Find element via id
    const elementFound = auxData.find((order) => order.id === orderId);
    // Modify the seen property
    if(elementFound){
      elementFound.seen = !elementFound.seen;
      // Set state
      setData(auxData);
    }
  }

  // Actions
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    handleOpen();
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setSelectedOrder(null);
    setModalOpen(false);
  };

  return (
    <div>
      {data.length === 0 ? (
        <Loader content="Loading orders..." />
      ) : (
        <>
          <main className="px-5 xl:px-20 mb-16 lg:mb-4 backoffice">
            <h1 className="text-center text-2xl md:text-3xl my-8 px-5">
              Orders
            </h1>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-200 p-2">Order ID</div>
              <div className="bg-gray-200 p-2">Date</div>
              <div className="bg-gray-200 p-2">User</div>
              <div className="bg-gray-200 p-2">Seen</div>
              {data.map((order, i) => {
                return (
                  <React.Fragment key={i}>
                    <div
                      className="p-2 cursor-pointer"
                      onClick={() => handleOrderClick(order)}
                    >
                      {order.id}
                    </div>
                    <div className="p-2 cursor-pointer">
                      {convertTimestamp(order.date)}
                    </div>
                    <div className="p-2 cursor-pointer">{order.user.email}</div>
                    <div className="p-2 cursor-pointer">
                      {order.seen ? "✅" : "❌"}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </main>
          {selectedOrder && (
            <BackofficeModal
              order={selectedOrder}
              open={modalOpen}
              onClose={handleClose}
              toggleSeen={toggleSeen}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BackofficeView;
