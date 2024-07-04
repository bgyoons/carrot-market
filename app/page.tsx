"use client";

import { useFormState } from "react-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Success from "@/components/Success";
import { handleForm } from "./actions";

export default function Home() {
  const [state, dispatch] = useFormState(handleForm, null);

  return (
    <main className="h-full flex flex-col w-80 m-auto justify-center *:font-medium">
      <form className="flex flex-col w-full gap-3" action={dispatch}>
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="username" type="text" placeholder="Username" required />
        <Input name="password" type="password" placeholder="Password" required error={state?.error} />
        <Button text="Log in" />
        {state?.status === "success" && <Success />}
      </form>
    </main>
  );
}
