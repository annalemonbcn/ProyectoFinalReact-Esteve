import React, { useState } from "react";

// Rsuite
import { Loader } from "rsuite";
import BackofficeModal from "../widgets/BackofficeModal";

// Utils
import { convertTimestamp } from "../../utils/utils";

// Routing
import { NavLink } from "react-router-dom";

const BackofficeView = ({ orders, toggleSeen }) => {
  
  // State
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Table values
  const columns = [
    { title: "Order ID", align: "text-center md:text-left" },
    { title: "Date", align: "hidden md:block text-center md:text-left" },
    { title: "User", align: "text-center md:text-left" },
    { title: "Seen", align: "text-center md:text-left" },
  ];

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
      {orders.length === 0 ? (
        <Loader content="Loading orders..." />
      ) : (
        <>
          <main className="px-5 xl:px-48 mb-16 lg:mb-4 backoffice">
            <h1 className="text-center text-2xl md:text-3xl my-8 px-5">
              Orders
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {columns.map((column, i) => (
                <div key={i} className={`bg-gray-200 p-2 ${column.align}`}>
                  {column.title}
                </div>
              ))}
              {orders.map((order, i) => {
                const cells = [
                  { value: order.id, align: "text-center md:text-left" },
                  {
                    value: convertTimestamp(order.date),
                    align: "hidden md:block text-center md:text-left",
                  },
                  {
                    value: order.user.email,
                    align: "text-center md:text-left",
                  },
                  {
                    value: order.seen ? "✅" : "❌",
                    align: "text-center md:text-left",
                  },
                ];
                return (
                  <React.Fragment key={i}>
                    {cells.map((cell, cellIndex) => (
                      <div
                        key={cellIndex}
                        className={`p-2 cursor-pointer overflow-auto ${cell.align}`}
                        onClick={() => handleOrderClick(order)}
                      >
                        {cell.value}
                      </div>
                    ))}
                  </React.Fragment>
                );
              })}
            </div>
            <div className="mt-16 flex justify-end md:pr-8">
              <NavLink
                to="/"
                className="px-5 py-2.5 bg-black text-white font-bold"
              >
                ← /lemoninfilm
              </NavLink>
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
