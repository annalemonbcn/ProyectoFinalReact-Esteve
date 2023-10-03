// Toaster
import { toast } from "sonner";

// Formik
import { Formik, Field, Form, ErrorMessage } from "formik";

// Yup validation
import * as Yup from "yup";

// Yup form validation
const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!"),
  password: Yup.string().required("Password is required!"),
});

const LoginForm = () => {
  // Form values
  const initialCredentials = {
    username: "",
    password: "",
  };

  const onLogin = (values) => {
    console.log("login clicked");
    console.log('values', values)
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center login-page">
      <div className="">
        <Formik
          // Initial values that the form will take
          initialValues={initialCredentials}
          // Yup validation schema
          validationSchema={loginSchema}
          onSubmit={(values) => onLogin(values)}
        >
          {/* Obtain props from Formik */}
          {({ values, touched, errors, isSubmitting }) => (
            // Return
            <Form className="flex flex-col border border-slate-200 px-10 py-8 rounded-md">
              {/* <div className="flex items-center mt-4"> */}
              <div className="">
                <label className="w-[100px] font-bold" htmlFor="username">
                  Username
                </label>
                <Field
                  className="border border-slate-400 rounded ml-10 py-1 px-2"
                  id="username"
                  name="username"
                  placeholder="user"
                  type="text"
                />

                {/* Name errors */}
                {errors.username && touched.username && (
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="w-full text-center mt-2 text-xs font-bold text-red-500"
                  />
                )}
              </div>

              <div className="mt-4">
                <label className="w-[100px] font-bold" htmlFor="password">
                  Password
                </label>
                <Field
                  className="border border-slate-400 rounded ml-10 py-1 px-2"
                  id="password"
                  name="password"
                  placeholder="******"
                  type="text"
                />

                {/* Mail errors */}
                {errors.password && touched.password && (
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="w-full text-center mt-2 text-xs font-bold text-red-500"
                  />
                )}
              </div>

              <button
                className="bg-black text-white font-bold w-full px-5 py-2.5 mt-6"
                type="submit"
              >
                Login
              </button>

              {/* {isSubmitting ? (
              <p className="mt-2">Validating your credentials...</p>
            ) : null} */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
