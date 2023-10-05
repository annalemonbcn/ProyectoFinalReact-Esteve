// Hooks
import { useContext, useEffect, useState } from "react";

// Routing
import { useNavigate } from "react-router-dom";

// Toaster
import { toast } from "sonner";

// Formik
import { Formik, Field, Form, ErrorMessage } from "formik";

// Context
import { AuthContext } from "../../api/context/AuthProvider";

// Yup validation
import * as Yup from "yup";

// Yup form validation
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const LoginForm = () => {
  // State
  const [error, setError] = useState(false);
  const [desktopRes, setDesktopRes] = useState(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setDesktopRes(window.innerWidth);
    }
  }, [desktopRes]);

  // Context
  const { user, signIn } = useContext(AuthContext);

  // Form values
  const initialCredentials = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const onLogin = async (values) => {
    // Values
    const email = values.email;
    const password = values.password;

    try {
      //Call signIn method
      await signIn(email, password);

      if (user) {
        // Toast
        toast.success("Login ok :) Redirecting to backoffice...", {
          style: {
            background: "aquamarine",
          },
        });
        // Redirect to backoffice after 2 seconds
        setTimeout(() => {
          navigate("/backoffice");
        }, 2000);
        setError(false); // --> clean any old error
      }
    } catch (error) {
      setError(true);
      // Toast
      toast.error("Oops! Error while sign in :(", {
        style: {
          background: "lightpink",
        },
      });
      console.error("Error while sign in process:", error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center login-page">
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
          <Form
            className={`flex flex-col border border-slate-200 px-10 py-8 rounded-md
              ${error ? "border border-red-300" : null}
              ${desktopRes >= 1280 ? "w-1/3 px-10 py-14" : desktopRes >= 1024 ? "w-1/2 px-10 py-14" : ""}
            `}
          >
            {/* <div className="flex items-center mt-4"> */}
            <div className="flex items-center">
              <label className="w-[100px] font-bold" htmlFor="email">
                Email
              </label>
              <Field
                className={`border border-slate-400 rounded py-1 px-2 w-3/4 ${
                  error ? "border border-red-600 text-red-600 bg-red-50" : null
                }`}
                id="email"
                name="email"
                placeholder="example@example.com"
                type="text"
              />

              {/* Name errors */}
              {errors.email && touched.email && (
                <ErrorMessage
                  name="email"
                  component="div"
                  className="w-full text-center mt-2 text-xs font-bold text-red-500"
                />
              )}
            </div>

            <div className="mt-4 flex items-center">
              <label className="w-[100px] font-bold" htmlFor="password">
                Password
              </label>
              <Field
                className={`border border-slate-400 rounded py-1 px-2 w-3/4 ${
                  error ? "border border-red-600 text-red-600 bg-red-50" : null
                }`}
                id="password"
                name="password"
                placeholder="******"
                type="password"
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
              className={`w-full px-5 py-2.5 mt-6 bg-black text-white font-bold ${desktopRes ? "w-1/3 mx-auto" : ""}`}
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
  );
};

export default LoginForm;
