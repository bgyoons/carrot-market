"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function Home() {
  const [state, dispatch] = useFormState(handleForm, null);

  return (
    <main className="h-full flex flex-col w-80 m-auto justify-center *:font-medium">
        <Input name="email" type="email" placeholder="Email" required errors={[]} />
        <Input name="username" type="text" placeholder="Username" required errors={[]} />
        <Input name="password" type="password" placeholder="Password" required errors={[]} />
      <form className="flex flex-col w-full" action={dispatch}>
        <Button text="Log in" />
      </form>
    </main>
  );
}
