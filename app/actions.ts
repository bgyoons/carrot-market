"use server";

import { z } from "zod";

const passwordRegex = new RegExp(/[0-9]/g);

const formSchema = z.object({
  username: z.string().min(5),
  email: z.string().email().includes("@zod.com"),
  password: z.string().min(10).regex(passwordRegex, "password should contain at least one number"),
});

export const handleForm = async (prevState: any, formData: FormData) => {
  const response = await new Promise((resolve, reject) => {
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = formSchema.safeParse(data);

    setTimeout(() => {
      if (!result.success) reject(result);
      else resolve(result);
    }, 2000);
  }).then((result) => result)
    .catch((result) => ({
      ...result,
      error: result.error.flatten()
    }));

  return response;
};