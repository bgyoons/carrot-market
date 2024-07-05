"use server";

import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(5),
  email: z.string().email().includes("@zod.com"),
  password: z.string().min(10).refine(password => {
    for (const ele of password) {
      if (!isNaN(+ele)) return true;
    } return false;
  }, "password should contain at least one number"),
});

export const handleForm = async (prevState: any, formData: FormData) => {
};