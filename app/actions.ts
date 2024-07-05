"use server";

import { z } from "zod";

const passwordRegex = new RegExp(/[0-9]/g);

const formSchema = z.object({
  username: z.string().min(5),
  email: z.string().email().includes("@zod.com"),
  password: z.string().min(10).regex(passwordRegex, "password should contain at least one number"),
});

export const handleForm = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      ...result,
      error: result.error.flatten()
    };
  } else return result;
};