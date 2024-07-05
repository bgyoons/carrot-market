"use server";

import { z } from "zod";

const passwordRegex = new RegExp(/[0-9]/g);

const formSchema = z.object({
  username: z.string().min(5),
  email: z.string().email().includes("@zod.com"),
  password: z.string().min(10).regex(passwordRegex, "password should contain at least one number"),
});

export const handleForm = async (prevState: any, formData: FormData) => {
};