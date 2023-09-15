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
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const loginSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!"),
});



const CheckoutForm = ({ setToken }) => {

  // Values
  const initialCredentials = {
    name: "",
    email: "",
  };

  // Context: cart info
  const { cartItems, clearCart } = useContext(CartContext);

  // Actions
  const onBuy = (values) => {

    // Ref to Orders collection
    const ordersCollection = collection(db, "orders");
    
    console.log('values', values);

    // Order object
    const order = {
      user: {
        name: values.name,
        email: values.email
      },
      date: serverTimestamp(),
      products: cartItems
    }

    // Push the order into the collection
    const pushOrder = addDoc(ordersCollection, order)
    pushOrder
      .then((res) => {
        console.log(res);

        // Send token from firestore to parent
        setToken(res.id);

        // Toast
        toast.success("Your order has been sent :)", {
          style: {
            background: "aquamarine",
          } 
        });
        
        // Clean cart
        clearCart();
      })
      .catch((err) => {
        toast.error(
          err,
          {
            style: {
              background: "lightpink",
            },
          }
        );
      })
  }
  
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
        {({
          values,
          touched,
          errors,
          isSubmitting
        }) => (
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
            {isSubmitting ? <p className="mt-2">Validating your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
