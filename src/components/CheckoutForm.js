import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const CheckoutForm = () => {
  // Values
  const initialCredentials = {
    name: "",
    email: "",
  };

  return (
    <>
      <h2 className="text-xl font-bold w-full border-b border-slate-900 mt-16">
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
        // *onSubmit event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {/* Obtain props from Formik */}
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          // Return
          <Form className="mt-8 flex flex-col text-sm">
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
                <ErrorMessage name="name" component="div" className="ml-4 text-xs font-bold text-red-500" />
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
                <ErrorMessage name="email" component="div" className="ml-4 text-xs font-bold text-red-600" />
              )}
            </div>

            <button type="submit">Place order</button>
            {isSubmitting ? <p>Validating your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
