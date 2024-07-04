"use server";

import { PASSWORD } from "./constants";

export const handleForm = async (prevState: any, formData: FormData) => {
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const password = formData.get("password");
      if (password === PASSWORD) resolve(null);
      else reject();
    }, 2000);
  }).then(() => ({
    status: "success",
    error: ""
  })).catch(() => ({
    status: "error",
    error: "Wrong Password"
  }));
  return response;
};