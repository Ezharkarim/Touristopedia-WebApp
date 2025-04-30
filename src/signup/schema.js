import * as Yup from "yup";

export const signUpSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  country: Yup.string().min(2).max(25).required("Please enter your country"),
  password: Yup.string().min(6).required("Please enter your password"),
  cpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match")
});
