import { z } from "zod";

export const SignInSchema = z.object({
  // For sign in
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Invalid password!",
  }),
});

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Invalid password!",
  }),

  // for sign up
  firstname: z.string().min(1).max(15),
  lastname: z.string().min(1).max(20),
  phone: z.string().max(10),
  group: z.string(),
});
