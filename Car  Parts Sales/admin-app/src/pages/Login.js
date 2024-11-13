import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

let schema = Yup.object().shape({
  email: Yup.string()
    .email("Email Should Be Valid")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const authState = useSelector((state)=>state);
  const { user,  isError, isSuccess, isLoading, message } = authState.auth;
  
  useEffect(() => {
    if(isSuccess){
      navigate("admin");

    }
    else  {
      navigate("");
    }
  },[user, isError, isSuccess, isLoading,]);
  return (
    <div
      className=" py-1"
      style={{
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 82%)",
        minHeight: "100vh",
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className="bg-white rounded-3 mx-auto p-4"
        style={{ width: "500px" }}
      >
        <h3 className="text-center title" style={{ fontSize: "25px" }}>
          Login
        </h3>
        <p className="text-center">Login to your account to continue </p>
        <div className="error text-center">
          {message.message == "Rejected" ? "You are not an Vendor":""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="email"
            label="Email Address"
            id="email"
            val={formik.values.email}
            onCh={formik.handleChange("email")}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="pass"
            val={formik.values.password}
            onCh={formik.handleChange("password")}
          />
          <div className="error">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          
          <button
            className="border-0 px-3 mt-3 py-2 text-white fw-bold w-100 text-center text-decoration-none"
            style={{
              background: "rgb(2,0,36)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 82%)",
            }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
