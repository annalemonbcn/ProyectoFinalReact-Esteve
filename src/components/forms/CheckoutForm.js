// Hooks
import { useContext } from "react";

// Context
import { CartContext } from "../../api/context/CartProvider";

// Toaster
import { toast } from "sonner";

// Formik
import { Formik, Field, Form, ErrorMessage } from "formik";

// Yup validation
import * as Yup from "yup";

// Db firestore
import { db } from "../../db/firebase";
import { collection, serverTimestamp } from "firebase/firestore";

// Services
import { addDocToFirebase } from "../../api/services/firebaseService";

// Yup form validation
const loginSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!"),
});

const CheckoutForm = ({ setToken }) => {
  // Form values
  const initialCredentials = {
    name: "",
    email: "",
  };

  // Context: cart info
  const { cartItems, clearCart } = useContext(CartContext);

  /**
   * onSubmit function --> send values to firestore
   * @param {*} values --> name, email, serverTimestamp, products
   */
  const onBuy = async (values) => {
    // Ref to Orders collection
    const ordersCollection = collection(db, "orders");

    // Order object
    const order = {
      user: {
        name: values.name,
        email: values.email,
      },
      date: serverTimestamp(),
      products: cartItems,
    };

    // Push the order into the collection
    try {
      const tokenId = await addDocToFirebase(ordersCollection, order);
      // Set token form firebase response
      setToken(tokenId);
      // Toast
      toast.success("Your order has been sent :)", {
        style: {
          background: "aquamarine",
        },
      });
      // Clean cart
      clearCart();
    } catch (error) {
      toast.error("Error when placing the order. Try again.", {
        style: {
          background: "lightpink",
        },
      });
      console.error("Error placing order:", error);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold border-b border-slate-900">
        Last step
      </h2>
      <p className="mt-4">
        Write your email and we will keep you informed about the status of your
        order.
      </p>
      <Formik
        // Initial values that the form will take
        initialValues={initialCredentials}
        // Yup validation schema
        validationSchema={loginSchema}
        onSubmit={(values) => onBuy(values)}
      >
        {/* Obtain props from Formik */}
        {({ values, touched, errors, isSubmitting }) => (
          // Return
          <Form className="mt-6 flex flex-col text-sm">
            <div className="flex items-center">
              <label className="w-[60px] font-bold" htmlFor="name">
                Name
              </label>
              <Field
                className="border border-black rounded py-1 px-2"
                id="name"
                name="name"
                placeholder="John Doe"
                type="text"
              />

              {/* Name errors */}
              {errors.name && touched.name && (
                <ErrorMessage
                  name="name"
                  component="div"
                  className="ml-4 text-xs font-bold text-red-500"
                />
              )}
            </div>

            <div className="flex items-center mt-4">
              <label className="w-[60px] font-bold" htmlFor="email">
                Email
              </label>
              <Field
                className="border border-black rounded py-1 px-2"
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
              />

              {/* Mail errors */}
              {errors.email && touched.email && (
                <ErrorMessage
                  name="email"
                  component="div"
                  className="ml-4 text-xs font-bold text-red-600"
                />
              )}
            </div>

            <button
              className="bg-black text-white font-bold w-full uppercase px-5 py-2.5 mt-6"
              type="submit"
            >
              Place order
            </button>
            {isSubmitting ? (
              <p className="mt-2">Validating your credentials...</p>
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
