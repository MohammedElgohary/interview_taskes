import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().max(500).optional(),
  thumbnail: yup.string().url().optional(),
  duration: yup.number().required(),
});
