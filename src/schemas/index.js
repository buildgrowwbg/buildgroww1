import * as Yup from "yup"

export const signupSchema = Yup.object({
    name: Yup.string().min(2).max(20).required("Please Enter FullName"), 
    email: Yup.string().email().required("Please Enter Email"),
    phone: Yup.number().min(1000000000).max(9999999990).required(" Enter a Valid Number"),
    password: Yup.string().min(6).max(10).required("Please Enter Password"),
  
})
