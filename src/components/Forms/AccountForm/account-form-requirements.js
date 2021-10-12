import * as Yup from "yup";

const accountRequirements = Yup.object().shape({
  clientName: Yup.string()
    .min(0, "I can´t wait to meet you. Insert your name here.")
    .max(50, "My bit memory stops at 50.")
    .required("Required"),
  clientEmail: Yup.string()
    .email(
      "Invalid email. I will keep your goodies until you insert a valid email.")
    .required("We need a valid email address"),
});

export default accountRequirements;
