import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const signUpSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please enter your username"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    country: Yup.string().min(2).max(25).required("Please enter your country"),
    password: Yup.string().min(6).required("Please enter your password"),
    cpassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });
  